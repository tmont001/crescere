import { useCallback, useMemo, useState } from 'react';
import type {
  CategoryBreakdown,
  CEFRLevel,
  CourseLevel,
  Language,
  PlacementAnswer,
  PlacementCategory,
  PlacementQuestion,
  PlacementResult,
} from '@/types';
import { getPlacementQuestions } from '@/data/placementQuestions';
import { COURSES } from '@/data/courses';

/**
 * The placement test runs 14 questions, drawn adaptively from a 24-question
 * bank that spans difficulty 1 (A1) through difficulty 5 (C1). The engine:
 *
 *   1. Picks the next question by stepping difficulty up/down based on the
 *      learner's recent performance, while also reaching for harder
 *      questions when the learner is on a streak.
 *   2. Scores answers as a weighted percentage where each correct answer is
 *      worth its difficulty.
 *   3. Maps that percentage to A1-C1 using the bands specified by the spec.
 *   4. Computes a per-category breakdown and lists strengths / weaknesses
 *      based on actual performance — never fabricated.
 */
const TEST_LENGTH = 14;

interface PlacementState {
  language: Language | null;
  answers: PlacementAnswer[];
  currentIndex: number;
  phase: 'entry' | 'questions' | 'results';
}

const initialState: PlacementState = {
  language: null,
  answers: [],
  currentIndex: 0,
  phase: 'entry',
};

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
 * Picks the next question. Prefers questions at the target difficulty;
 * falls back to the closest available difficulty. Avoids repeats.
 * Mild randomization within the same distance to keep retakes fresh.
 */
function pickNextQuestion(
  pool: PlacementQuestion[],
  answered: PlacementAnswer[],
  targetDifficulty: number,
): PlacementQuestion | null {
  const answeredIds = new Set(answered.map((a) => a.questionId));
  const remaining = pool.filter((q) => !answeredIds.has(q.id));
  if (remaining.length === 0) return null;

  const sorted = [...remaining].sort((a, b) => {
    const da = Math.abs(a.difficulty - targetDifficulty);
    const db = Math.abs(b.difficulty - targetDifficulty);
    if (da !== db) return da - db;
    return Math.random() - 0.5;
  });
  return sorted[0];
}

/**
 * Adaptive difficulty:
 *   - First question is difficulty 2 (eases learners in without floor-effect).
 *   - Two correct in a row → +1
 *   - Two wrong in a row   → -1
 *   - Single correct       → +0.5
 *   - Single wrong         → -0.5
 *
 * Returns a target difficulty in [1, 5].
 */
function calculateDifficultyTarget(answers: PlacementAnswer[]): number {
  if (answers.length === 0) return 2;
  const last = answers[answers.length - 1];
  const prev = answers[answers.length - 2];

  let target = last.difficulty;
  if (prev && last.correct && prev.correct) target = Math.min(5, target + 1);
  else if (prev && !last.correct && !prev.correct) target = Math.max(1, target - 1);
  else if (last.correct) target = Math.min(5, target + 0.5);
  else target = Math.max(1, target - 0.5);

  return Math.round(target);
}

/**
 * Score the test as a weighted percentage. Each correct answer is worth its
 * difficulty value (so harder questions count more), divided by the maximum
 * achievable. Then the percentage maps to a CEFR level using the bands:
 *
 *    0–30%  A1
 *   31–55%  A2
 *   56–75%  B1
 *   76–90%  B2
 *   91–100% C1
 *
 * Confidence reflects how decisive the placement is — a score sitting near
 * the middle of a band is more confident than one right at the edge.
 */
function scoreToCEFR(answers: PlacementAnswer[]): {
  level: CEFRLevel;
  scorePercent: number;
  confidence: number;
} {
  if (answers.length === 0) {
    return { level: 'A1', scorePercent: 0, confidence: 0 };
  }

  const maxPossible = answers.reduce((sum, a) => sum + a.difficulty, 0);
  const earned = answers.reduce((sum, a) => sum + (a.correct ? a.difficulty : 0), 0);
  const scorePercent = Math.round((earned / maxPossible) * 100);

  let level: CEFRLevel;
  if (scorePercent >= 91) level = 'C1';
  else if (scorePercent >= 76) level = 'B2';
  else if (scorePercent >= 56) level = 'B1';
  else if (scorePercent >= 31) level = 'A2';
  else level = 'A1';

  // Confidence: distance from the nearest band edge, scaled.
  // A score of 95% (deep into C1) → high confidence.
  // A score of 31% (right on the A2 edge) → lower confidence.
  // Special case: a perfect score (or near-perfect) is unambiguous, so we
  // clamp confidence high regardless of how close 100 sits to band edges.
  let confidence: number;
  if (scorePercent >= 95) {
    confidence = 95;
  } else {
    const bandEdges = [0, 31, 56, 76, 91];
    let nearestEdgeDistance = 100;
    for (const edge of bandEdges) {
      const d = Math.abs(scorePercent - edge);
      if (d < nearestEdgeDistance) nearestEdgeDistance = d;
    }
    // Map 0..15 → 60..95 confidence
    confidence = Math.min(
      95,
      Math.max(60, Math.round(60 + (nearestEdgeDistance / 15) * 35)),
    );
  }

  return { level, scorePercent, confidence };
}

/**
 * Build the per-category breakdown plus strengths and weaknesses lists.
 *
 *   - Strength  = ratio ≥ 0.8 AND at least one question seen
 *   - Weakness  = ratio < 0.6 AND at least one question seen AND at least
 *                 one missed (so a perfect run is never flagged)
 *
 * Critically: if the learner got everything correct, weaknesses is [] and
 * strengths reflects the categories actually tested. We do not invent
 * filler weaknesses or filler strengths.
 */
function analyzeCategories(answers: PlacementAnswer[]): {
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

    categoryBreakdown.push({
      category,
      label,
      correct: stats.correct,
      total: stats.total,
      ratio,
    });

    if (ratio >= 0.8) {
      strengths.push(label);
    } else if (ratio < 0.6 && stats.correct < stats.total) {
      weaknesses.push(label);
    }
  });

  // Sort breakdown by ratio descending so the strongest areas read first.
  categoryBreakdown.sort((a, b) => b.ratio - a.ratio);

  return { strengths, weaknesses, categoryBreakdown };
}

/**
 * Map a placement level to a course id. Returns null when the learner has
 * placed above the available group-cohort levels (the site offers A1-B1
 * group cohorts; B2 and C1 results are routed to a consultation flow on
 * the results screen rather than being silently downgraded).
 */
function recommendCourse(level: CEFRLevel, language: Language): string | null {
  const courseLevel: CourseLevel | null =
    level === 'A1' || level === 'A2' || level === 'B1' ? level : null;

  if (!courseLevel) return null;

  const match = COURSES.find((c) => c.language === language && c.level === courseLevel);
  return match?.id ?? null;
}

export function usePlacementEngine() {
  const [state, setState] = useState<PlacementState>(initialState);

  const questionPool = useMemo(
    () => (state.language ? getPlacementQuestions(state.language) : []),
    [state.language],
  );

  const currentQuestion = useMemo<PlacementQuestion | null>(() => {
    if (state.phase !== 'questions') return null;
    const target = calculateDifficultyTarget(state.answers);
    return pickNextQuestion(questionPool, state.answers, target);
  }, [state.phase, state.answers, questionPool]);

  const startTest = useCallback((language: Language) => {
    setState({
      language,
      answers: [],
      currentIndex: 0,
      phase: 'questions',
    });
  }, []);

  const answerQuestion = useCallback(
    (selectedIndex: number) => {
      if (!currentQuestion) return;
      const answer: PlacementAnswer = {
        questionId: currentQuestion.id,
        selectedIndex,
        correct: selectedIndex === currentQuestion.correctIndex,
        type: currentQuestion.type,
        category: currentQuestion.category,
        difficulty: currentQuestion.difficulty,
      };

      setState((prev) => {
        const nextAnswers = [...prev.answers, answer];
        const nextIndex = prev.currentIndex + 1;
        const phase = nextIndex >= TEST_LENGTH ? 'results' : 'questions';
        return {
          ...prev,
          answers: nextAnswers,
          currentIndex: nextIndex,
          phase,
        };
      });
    },
    [currentQuestion],
  );

  const reset = useCallback(() => setState(initialState), []);

  const result = useMemo<PlacementResult | null>(() => {
    if (state.phase !== 'results' || !state.language) return null;
    const { level, scorePercent, confidence } = scoreToCEFR(state.answers);
    const { strengths, weaknesses, categoryBreakdown } = analyzeCategories(state.answers);
    const recommendedCourseId = recommendCourse(level, state.language);
    const score = state.answers.filter((a) => a.correct).length;
    const aboveOfferedLevels = level === 'B2' || level === 'C1';

    return {
      level,
      confidence,
      scorePercent,
      strengths,
      weaknesses,
      categoryBreakdown,
      recommendedCourseId,
      aboveOfferedLevels,
      score,
      totalQuestions: state.answers.length,
    };
  }, [state.phase, state.language, state.answers]);

  return {
    phase: state.phase,
    language: state.language,
    currentQuestion,
    currentIndex: state.currentIndex,
    totalQuestions: TEST_LENGTH,
    startTest,
    answerQuestion,
    reset,
    result,
  };
}
