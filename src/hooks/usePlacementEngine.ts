import { useCallback, useMemo, useState } from 'react';
import type {
  CategoryBreakdown,
  CEFRLevel,
  CourseLevel,
  FillInAnswer,
  FillInQuestion,
  Language,
  MCAnswer,
  MCQuestion,
  PlacementCategory,
  PlacementResult,
  PlacementSection,
  ReadingAnswer,
  ReadingPassage,
  SectionScore,
  VoiceAnswer,
  WritingAnswer,
} from '@/types';
import {
  getFillInQuestions,
  getPlacementQuestions,
  getReadingPassages,
  getWritingPrompt,
} from '@/data/placementQuestions';
import { COURSES } from '@/data/courses';

/**
 * Five-part placement assessment engine.
 *
 * Part 1 (MC, section 1)       — 14 adaptive multiple-choice questions.
 * Part 2 (fill-in, section 2)  — 8 typed short-answer questions, auto-scored.
 * Part 3 (reading, section 3)  — Passage + grouped MC questions, auto-scored.
 * Part 4 (writing, section 4)  — Free-text prompt, binary attempted + review flag.
 * Part 5 (voice, section 5)    — Optional recording, binary attempted + review flag.
 *
 * Composite score:
 *   (p1 × 0.40) + (p2 × 0.25) + (p3 × 0.20)
 *   + (writingAttempted ? 7.5 : 0) + (voiceAttempted ? 7.5 : 0)
 *
 * CEFR bands (applied to composite):
 *   0–30 → A1 | 31–55 → A2 | 56–75 → B1 | 76–90 → B2 | 91–100 → C1
 *
 * Weaknesses are never fabricated: a category is only flagged when the learner
 * actually missed at least one question in that category (ratio < 0.6 AND
 * correct < total). A perfect run on any category is never listed as a weakness.
 */

const TEST_LENGTH = 14;

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------

interface PlacementState {
  language: Language | null;
  phase: 'entry' | 'questions' | 'results';
  currentSection: PlacementSection;
  /**
   * When true, the SectionTransition card renders instead of the active
   * section card. Cleared by advanceSection().
   */
  showingTransition: boolean;

  // Part 1 — adaptive MC
  mcAnswers: MCAnswer[];
  mcCurrentIndex: number;

  // Part 2 — fill-in-the-blank
  fillInQuestions: FillInQuestion[];
  fillInCurrentIndex: number;
  fillInAnswers: FillInAnswer[];

  // Part 3 — reading passages
  passages: ReadingPassage[];
  passageCurrentIndex: number;
  passageQuestionIndex: number;
  readingAnswers: ReadingAnswer[];

  // Part 4 — writing
  writingPrompt: string;
  writingAnswer: WritingAnswer | null;

  // Part 5 — voice
  voiceAnswer: VoiceAnswer | null;
}

const initialState: PlacementState = {
  language: null,
  phase: 'entry',
  currentSection: 1,
  showingTransition: false,
  mcAnswers: [],
  mcCurrentIndex: 0,
  fillInQuestions: [],
  fillInCurrentIndex: 0,
  fillInAnswers: [],
  passages: [],
  passageCurrentIndex: 0,
  passageQuestionIndex: 0,
  readingAnswers: [],
  writingPrompt: '',
  writingAnswer: null,
  voiceAnswer: null,
};

// ---------------------------------------------------------------------------
// Part 1 — adaptive difficulty helpers
// ---------------------------------------------------------------------------

const CATEGORY_LABELS: Record<PlacementCategory, string> = {
  grammar: 'Grammar',
  vocabulary: 'Vocabulary',
  reading: 'Reading comprehension',
  'verb-tense': 'Verb tenses',
  pronouns: 'Pronouns',
  prepositions: 'Prepositions',
  'sentence-structure': 'Sentence structure',
  'real-world-usage': 'Real-world usage',
};

/**
 * Picks the next MC question by proximity to targetDifficulty.
 * Avoids already-answered questions. Randomises ties so retakes vary.
 */
function pickNextQuestion(
  pool: MCQuestion[],
  answered: MCAnswer[],
  targetDifficulty: number,
): MCQuestion | null {
  const answeredIds = new Set(answered.map((a) => a.questionId));
  const remaining = pool.filter((q) => !answeredIds.has(q.id));
  if (remaining.length === 0) return null;

  return [...remaining].sort((a, b) => {
    const da = Math.abs(a.difficulty - targetDifficulty);
    const db = Math.abs(b.difficulty - targetDifficulty);
    return da !== db ? da - db : Math.random() - 0.5;
  })[0];
}

/**
 * Adaptive difficulty target:
 *   - First question: difficulty 1 (ensures absolute beginners see an A1 question first).
 *   - Two correct in a row → +1.
 *   - Two wrong in a row → −1.
 *   - Single correct → +0.5 (rounds up).
 *   - Single wrong → −0.5.
 *   Clamped to [1, 5].
 */
function calculateDifficultyTarget(answers: MCAnswer[]): number {
  if (answers.length === 0) return 1;
  const last = answers[answers.length - 1];
  const prev = answers[answers.length - 2];

  let target = last.difficulty;
  if (prev && last.correct && prev.correct) target = Math.min(5, target + 1);
  else if (prev && !last.correct && !prev.correct) target = Math.max(1, target - 1);
  else if (last.correct) target = Math.min(5, target + 0.5);
  else target = Math.max(1, target - 0.5);

  return Math.round(target);
}

// ---------------------------------------------------------------------------
// Part 2 — fill-in scoring
// ---------------------------------------------------------------------------

/** Standard dynamic-programming Levenshtein distance. */
function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)),
  );
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

/**
 * Grades a fill-in answer:
 *   1. Exact match against correctAnswer (after normalising input).
 *   2. Exact match against any acceptedAlternatives.
 *   3. Levenshtein distance ≤ 1, but only when correctAnswer.length ≥ 5
 *      (short conjugations like "a", "es" must be exact to prevent false positives).
 */
function gradeFillIn(rawInput: string, question: FillInQuestion): boolean {
  const normalized = rawInput.trim().toLowerCase();
  if (normalized === question.correctAnswer) return true;
  if (question.acceptedAlternatives?.includes(normalized)) return true;
  if (
    question.correctAnswer.length >= 5 &&
    levenshtein(normalized, question.correctAnswer) <= 1
  ) {
    return true;
  }
  return false;
}

// ---------------------------------------------------------------------------
// Shared scoring helpers
// ---------------------------------------------------------------------------

/**
 * Weighted score: each correct answer earns its difficulty value (1–5).
 * Returns a 0–100 percentage. Returns 0 for an empty array.
 */
function scoreWeighted(answers: Array<{ correct: boolean; difficulty: number }>): number {
  if (answers.length === 0) return 0;
  const maxPossible = answers.reduce((sum, a) => sum + a.difficulty, 0);
  const earned = answers.reduce((sum, a) => sum + (a.correct ? a.difficulty : 0), 0);
  return Math.round((earned / maxPossible) * 100);
}

/**
 * Maps a composite percentage to a CEFR level plus a confidence score.
 *
 * Bands:  0–30 A1 | 31–55 A2 | 56–75 B1 | 76–90 B2 | 91–100 C1
 *
 * Confidence (60–95) reflects how decisively the learner is placed:
 * a score near a band edge → lower confidence; deep inside a band → higher.
 * A near-perfect score (≥ 95%) is clamped to 95 regardless of edge proximity.
 */
function percentToCEFR(pct: number): { level: CEFRLevel; confidence: number } {
  let level: CEFRLevel;
  if (pct >= 91) level = 'C1';
  else if (pct >= 76) level = 'B2';
  else if (pct >= 56) level = 'B1';
  else if (pct >= 31) level = 'A2';
  else level = 'A1';

  let confidence: number;
  if (pct >= 95) {
    confidence = 95;
  } else {
    const bandEdges = [0, 31, 56, 76, 91];
    let nearestEdgeDist = 100;
    for (const edge of bandEdges) {
      const d = Math.abs(pct - edge);
      if (d < nearestEdgeDist) nearestEdgeDist = d;
    }
    // Map distance 0..15 → confidence 60..95
    confidence = Math.min(95, Math.max(60, Math.round(60 + (nearestEdgeDist / 15) * 35)));
  }

  return { level, confidence };
}

/**
 * Combines the five section scores into one composite percentage.
 *
 *   Part 1 MC         40%
 *   Part 2 Fill-in    25%
 *   Part 3 Reading    20%
 *   Part 4 Writing     7.5 pts flat (binary)
 *   Part 5 Voice       7.5 pts flat (binary)
 */
function computeCompositeScore(
  p1: number,
  p2: number,
  p3: number,
  writingAttempted: boolean,
  voiceAttempted: boolean,
): number {
  return Math.round(
    p1 * 0.4 +
    p2 * 0.25 +
    p3 * 0.2 +
    (writingAttempted ? 7.5 : 0) +
    (voiceAttempted ? 7.5 : 0),
  );
}

// ---------------------------------------------------------------------------
// Category analysis
// ---------------------------------------------------------------------------

/**
 * Builds per-category breakdown plus strengths and weaknesses lists.
 *
 * Accepts all three auto-scored answer types (MC, fill-in, reading).
 *
 * Strength  = ratio ≥ 0.8 AND at least one question seen.
 * Weakness  = ratio < 0.6 AND at least one question seen AND at least one
 *             missed (so a perfect run on a category is NEVER flagged).
 *
 * Neither list is fabricated: if the learner got everything correct,
 * weaknesses is [] and strengths reflects only tested categories.
 */
function analyzeCategories(
  answers: Array<MCAnswer | FillInAnswer | ReadingAnswer>,
): {
  strengths: string[];
  weaknesses: string[];
  categoryBreakdown: CategoryBreakdown[];
} {
  const byCategory = new Map<PlacementCategory, { correct: number; total: number }>();

  for (const a of answers) {
    const current = byCategory.get(a.category) ?? { correct: 0, total: 0 };
    current.total += 1;
    if (a.correct) current.correct += 1;
    byCategory.set(a.category, current);
  }

  const categoryBreakdown: CategoryBreakdown[] = [];
  const strengths: string[] = [];
  const weaknesses: string[] = [];

  byCategory.forEach((stats, category) => {
    if (stats.total === 0) return;
    const ratio = stats.correct / stats.total;
    const label = CATEGORY_LABELS[category];

    categoryBreakdown.push({ category, label, correct: stats.correct, total: stats.total, ratio });

    if (ratio >= 0.8) {
      strengths.push(label);
    } else if (ratio < 0.6 && stats.correct < stats.total) {
      // Never flags a category where every answer was correct.
      weaknesses.push(label);
    }
  });

  // Strongest areas read first in the results breakdown.
  categoryBreakdown.sort((a, b) => b.ratio - a.ratio);

  return { strengths, weaknesses, categoryBreakdown };
}

// ---------------------------------------------------------------------------
// Course recommendation
// ---------------------------------------------------------------------------

/** Maps A1–B1 to a group-cohort course id. Returns null for B2/C1. */
function recommendCourse(level: CEFRLevel, language: Language): string | null {
  const courseLevel: CourseLevel | null =
    level === 'A1' || level === 'A2' || level === 'B1' ? level : null;
  if (!courseLevel) return null;
  const match = COURSES.find((c) => c.language === language && c.level === courseLevel);
  return match?.id ?? null;
}

// ---------------------------------------------------------------------------
// Section transition helper
// ---------------------------------------------------------------------------

/**
 * Returns the next section after `current`, or null if all sections are done.
 * Guards against empty question banks: if a section has no content loaded,
 * it is skipped rather than stalling on an empty UI.
 */
function nextSection(
  current: PlacementSection,
  state: PlacementState,
): PlacementSection | null {
  if (current === 1) return state.fillInQuestions.length > 0 ? 2 : state.passages.length > 0 ? 3 : 4;
  if (current === 2) return state.passages.length > 0 ? 3 : 4;
  if (current === 3) return 4;
  if (current === 4) return 5;
  return null;
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function usePlacementEngine() {
  const [state, setState] = useState<PlacementState>(initialState);

  const questionPool = useMemo(
    () => (state.language ? getPlacementQuestions(state.language) : []),
    [state.language],
  );

  // Derived current-item values — only non-null when the relevant section is active.
  const currentQuestion = useMemo<MCQuestion | null>(() => {
    if (state.phase !== 'questions' || state.currentSection !== 1 || state.showingTransition) return null;
    return pickNextQuestion(questionPool, state.mcAnswers, calculateDifficultyTarget(state.mcAnswers));
  }, [state.phase, state.currentSection, state.showingTransition, state.mcAnswers, questionPool]);

  const currentFillInQuestion = useMemo<FillInQuestion | null>(() => {
    if (state.phase !== 'questions' || state.currentSection !== 2 || state.showingTransition) return null;
    return state.fillInQuestions[state.fillInCurrentIndex] ?? null;
  }, [state.phase, state.currentSection, state.showingTransition, state.fillInQuestions, state.fillInCurrentIndex]);

  const currentPassage = useMemo<ReadingPassage | null>(() => {
    if (state.phase !== 'questions' || state.currentSection !== 3 || state.showingTransition) return null;
    return state.passages[state.passageCurrentIndex] ?? null;
  }, [state.phase, state.currentSection, state.showingTransition, state.passages, state.passageCurrentIndex]);

  const isLastPassage = useMemo(
    () => state.passages.length > 0 && state.passageCurrentIndex >= state.passages.length - 1,
    [state.passages, state.passageCurrentIndex],
  );

  // -------------------------------------------------------------------------
  // Actions
  // -------------------------------------------------------------------------

  const startTest = useCallback((language: Language) => {
    setState({
      language,
      phase: 'questions',
      currentSection: 1,
      showingTransition: false,
      mcAnswers: [],
      mcCurrentIndex: 0,
      fillInQuestions: getFillInQuestions(language),
      fillInCurrentIndex: 0,
      fillInAnswers: [],
      passages: getReadingPassages(language),
      passageCurrentIndex: 0,
      passageQuestionIndex: 0,
      readingAnswers: [],
      writingPrompt: getWritingPrompt(language),
      writingAnswer: null,
      voiceAnswer: null,
    });
  }, []);

  /** Dismiss the current section transition and begin the next section. */
  const advanceSection = useCallback(() => {
    setState((prev) => ({ ...prev, showingTransition: false }));
  }, []);

  /** Part 1 — submit an MC answer. Triggers section transition when Part 1 ends. */
  const answerQuestion = useCallback(
    (selectedIndex: number) => {
      if (!currentQuestion) return;

      const answer: MCAnswer = {
        sectionType: 'mc',
        questionId: currentQuestion.id,
        selectedIndex,
        correct: currentQuestion.correctIndices
          ? currentQuestion.correctIndices.includes(selectedIndex)
          : selectedIndex === currentQuestion.correctIndex,
        type: currentQuestion.type,
        category: currentQuestion.category,
        difficulty: currentQuestion.difficulty,
      };

      setState((prev) => {
        const nextAnswers = [...prev.mcAnswers, answer];
        const nextIndex = prev.mcCurrentIndex + 1;

        if (nextIndex < TEST_LENGTH) {
          return { ...prev, mcAnswers: nextAnswers, mcCurrentIndex: nextIndex };
        }

        // Part 1 complete — determine where to go next.
        const next = nextSection(1, prev);
        if (next === null) {
          return { ...prev, mcAnswers: nextAnswers, mcCurrentIndex: nextIndex, phase: 'results' };
        }
        return {
          ...prev,
          mcAnswers: nextAnswers,
          mcCurrentIndex: nextIndex,
          currentSection: next,
          showingTransition: true,
        };
      });
    },
    [currentQuestion],
  );

  /** Part 2 — submit a fill-in answer. */
  const answerFillIn = useCallback(
    (rawInput: string) => {
      if (!currentFillInQuestion) return;

      const answer: FillInAnswer = {
        sectionType: 'fill-in',
        questionId: currentFillInQuestion.id,
        rawInput,
        normalizedInput: rawInput.trim().toLowerCase(),
        correct: gradeFillIn(rawInput, currentFillInQuestion),
        category: currentFillInQuestion.category,
        difficulty: currentFillInQuestion.difficulty,
      };

      setState((prev) => {
        const nextAnswers = [...prev.fillInAnswers, answer];
        const nextIndex = prev.fillInCurrentIndex + 1;

        if (nextIndex < prev.fillInQuestions.length) {
          return { ...prev, fillInAnswers: nextAnswers, fillInCurrentIndex: nextIndex };
        }

        const next = nextSection(2, prev);
        if (next === null) {
          return { ...prev, fillInAnswers: nextAnswers, fillInCurrentIndex: nextIndex, phase: 'results' };
        }
        return {
          ...prev,
          fillInAnswers: nextAnswers,
          fillInCurrentIndex: nextIndex,
          currentSection: next,
          showingTransition: true,
        };
      });
    },
    [currentFillInQuestion],
  );

  /** Part 3 — submit an answer to a reading passage question. */
  const answerReadingQuestion = useCallback(
    (selectedIndex: number) => {
      if (!currentPassage) return;

      setState((prev) => {
        const passage = prev.passages[prev.passageCurrentIndex];
        if (!passage) return prev;
        const question = passage.questions[prev.passageQuestionIndex];
        if (!question) return prev;

        const answer: ReadingAnswer = {
          sectionType: 'reading-group',
          passageId: passage.id,
          questionId: question.id,
          selectedIndex,
          correct: selectedIndex === question.correctIndex,
          category: question.category,
          difficulty: question.difficulty,
        };

        const nextReadingAnswers = [...prev.readingAnswers, answer];
        const nextQIdx = prev.passageQuestionIndex + 1;

        // More questions remain in this passage.
        if (nextQIdx < passage.questions.length) {
          return { ...prev, readingAnswers: nextReadingAnswers, passageQuestionIndex: nextQIdx };
        }

        const nextPIdx = prev.passageCurrentIndex + 1;

        // Move to the next passage.
        if (nextPIdx < prev.passages.length) {
          return {
            ...prev,
            readingAnswers: nextReadingAnswers,
            passageCurrentIndex: nextPIdx,
            passageQuestionIndex: 0,
          };
        }

        // All passages done — transition to Part 4.
        const next = nextSection(3, prev);
        if (next === null) {
          return {
            ...prev,
            readingAnswers: nextReadingAnswers,
            passageCurrentIndex: nextPIdx,
            passageQuestionIndex: 0,
            phase: 'results',
          };
        }
        return {
          ...prev,
          readingAnswers: nextReadingAnswers,
          passageCurrentIndex: nextPIdx,
          passageQuestionIndex: 0,
          currentSection: next,
          showingTransition: true,
        };
      });
    },
    [currentPassage],
  );

  /**
   * Part 4 — submit the writing response.
   * An empty string means the learner skipped (attempted = false, needsReview = false).
   */
  const submitWriting = useCallback((responseText: string) => {
    const attempted = responseText.trim().length > 0;
    const answer: WritingAnswer = {
      sectionType: 'writing',
      responseText,
      attempted,
      needsReview: attempted,
    };
    setState((prev) => ({
      ...prev,
      writingAnswer: answer,
      currentSection: 5,
      showingTransition: true,
    }));
  }, []);

  /**
   * Part 5 — submit the voice recording.
   * Passing null means the learner skipped (attempted = false, needsReview = false).
   */
  const submitVoice = useCallback((blob: Blob | null) => {
    const attempted = blob !== null;
    const answer: VoiceAnswer = {
      sectionType: 'voice',
      attempted,
      needsReview: attempted,
      audioBlob: blob ?? undefined,
    };
    setState((prev) => ({
      ...prev,
      voiceAnswer: answer,
      phase: 'results',
      showingTransition: false,
    }));
  }, []);

  const reset = useCallback(() => setState(initialState), []);

  // -------------------------------------------------------------------------
  // Result
  // -------------------------------------------------------------------------

  const result = useMemo<PlacementResult | null>(() => {
    if (state.phase !== 'results' || !state.language) return null;

    // Section scores
    const p1 = scoreWeighted(state.mcAnswers);
    const p2 = scoreWeighted(state.fillInAnswers);
    const p3 = scoreWeighted(state.readingAnswers);
    const writingAttempted = state.writingAnswer?.attempted ?? false;
    const voiceAttempted = state.voiceAnswer?.attempted ?? false;
    const writingNeedsReview = state.writingAnswer?.needsReview ?? false;
    const voiceNeedsReview = state.voiceAnswer?.needsReview ?? false;

    const compositePercent = computeCompositeScore(p1, p2, p3, writingAttempted, voiceAttempted);
    const { level, confidence } = percentToCEFR(compositePercent);

    // Category analysis — auto-scored sections only (Parts 1–3).
    const allAutoAnswers = [...state.mcAnswers, ...state.fillInAnswers, ...state.readingAnswers];
    const { strengths, weaknesses, categoryBreakdown } = analyzeCategories(allAutoAnswers);

    const recommendedCourseId = recommendCourse(level, state.language);
    const score = allAutoAnswers.filter((a) => a.correct).length;
    const totalQuestions = allAutoAnswers.length;
    const aboveOfferedLevels = level === 'B2' || level === 'C1';

    const sectionScores: SectionScore[] = [
      {
        section: 1,
        label: 'Multiple Choice',
        scorePercent: p1,
        attempted: state.mcAnswers.length > 0,
        weight: 0.4,
        needsReview: false,
      },
      {
        section: 2,
        label: 'Fill-in-the-Blank',
        scorePercent: p2,
        attempted: state.fillInAnswers.length > 0,
        weight: 0.25,
        needsReview: false,
      },
      {
        section: 3,
        label: 'Reading',
        scorePercent: p3,
        attempted: state.readingAnswers.length > 0,
        weight: 0.2,
        needsReview: false,
      },
      {
        section: 4,
        label: 'Writing',
        scorePercent: null,
        attempted: writingAttempted,
        weight: 0.075,
        needsReview: writingNeedsReview,
      },
      {
        section: 5,
        label: 'Voice Note',
        scorePercent: null,
        attempted: voiceAttempted,
        weight: 0.075,
        needsReview: voiceNeedsReview,
      },
    ];

    const reviewSections = sectionScores
      .filter((s) => s.needsReview)
      .map((s) => s.label);

    return {
      level,
      confidence,
      scorePercent: compositePercent,
      strengths,
      weaknesses,
      categoryBreakdown,
      recommendedCourseId,
      aboveOfferedLevels,
      score,
      totalQuestions,
      sectionScores,
      writingResponse: state.writingAnswer?.responseText ?? null,
      voiceAttempted,
      reviewNeeded: reviewSections.length > 0,
      reviewSections,
    };
  }, [
    state.phase,
    state.language,
    state.mcAnswers,
    state.fillInAnswers,
    state.readingAnswers,
    state.writingAnswer,
    state.voiceAnswer,
  ]);

  // -------------------------------------------------------------------------
  // Public API
  // -------------------------------------------------------------------------

  return {
    // Routing
    phase: state.phase,
    language: state.language,
    currentSection: state.currentSection,
    showingTransition: state.showingTransition,

    // Part 1
    currentQuestion,
    currentIndex: state.mcCurrentIndex,
    totalQuestions: TEST_LENGTH,
    answerQuestion,

    // Part 2
    currentFillInQuestion,
    fillInIndex: state.fillInCurrentIndex,
    totalFillIn: state.fillInQuestions.length,
    answerFillIn,

    // Part 3
    currentPassage,
    isLastPassage,
    passageQuestionIndex: state.passageQuestionIndex,
    answerReadingQuestion,

    // Part 4
    writingPrompt: state.writingPrompt,
    submitWriting,

    // Part 5
    submitVoice,

    // Shared
    advanceSection,
    startTest,
    reset,
    result,
  };
}
