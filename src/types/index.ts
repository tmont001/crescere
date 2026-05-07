export type Language = 'french' | 'spanish';

export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';

export type CourseLevel = 'A1' | 'A2' | 'B1';

export type PlacementSection = 1 | 2 | 3 | 4 | 5;

export type PlacementCategory =
  | 'grammar'
  | 'vocabulary'
  | 'reading'
  | 'verb-tense'
  | 'pronouns'
  | 'prepositions'
  | 'sentence-structure'
  | 'real-world-usage';

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  featured?: boolean;
}

export interface Course {
  id: string;
  level: CourseLevel;
  language: Language;
  title: string;
  outcome: string;
  description: string;
  longDescription: string;
  weeks: number;
  sessionsPerWeek: number;
  topics: string[];
}

export interface Cohort {
  id: string;
  courseId: string;
  language: Language;
  level: CourseLevel;
  startDate: string;
  spotsTotal: number;
  spotsRemaining: number;
  schedule: string;
}

/** Part 1 (adaptive MC) and Part 3 (reading passage questions). */
export interface MCQuestion {
  id: string;
  language: Language;
  section: 1 | 3;
  /** Display badge on QuestionCard / ReadingCard. */
  type: 'grammar' | 'vocabulary' | 'reading' | 'listening';
  /** Fine-grained category for the results breakdown. */
  category: PlacementCategory;
  difficulty: 1 | 2 | 3 | 4 | 5;
  prompt: string;
  context?: string;
  options: string[];
  correctIndex: number;
}

/** Part 2: typed short-answer questions. */
export interface FillInQuestion {
  id: string;
  language: Language;
  section: 2;
  type: 'grammar' | 'vocabulary';
  category: PlacementCategory;
  difficulty: 1 | 2 | 3 | 4 | 5;
  /** Sentence containing ___ for the gap. */
  prompt: string;
  context?: string;
  /** Already lowercased and trimmed. */
  correctAnswer: string;
  /** Exact-match alternatives that bypass Levenshtein (e.g. spelling variants). */
  acceptedAlternatives?: string[];
}

/** Part 3: a prose passage with grouped MC questions. */
export interface ReadingPassage {
  id: string;
  language: Language;
  section: 3;
  /** Overall difficulty of the passage, used for weighted scoring. */
  difficulty: 1 | 2 | 3 | 4 | 5;
  passageText: string;
  questions: MCQuestion[];
}

/** Alias so existing imports of PlacementQuestion continue to work. */
export type PlacementQuestion = MCQuestion;

// ---------------------------------------------------------------------------
// Answer types — discriminated union so the engine can handle all five parts.
// ---------------------------------------------------------------------------

export interface MCAnswer {
  sectionType: 'mc';
  questionId: string;
  selectedIndex: number;
  correct: boolean;
  type: MCQuestion['type'];
  category: PlacementCategory;
  difficulty: number;
}

export interface FillInAnswer {
  sectionType: 'fill-in';
  questionId: string;
  rawInput: string;
  normalizedInput: string;
  correct: boolean;
  category: PlacementCategory;
  difficulty: number;
}

export interface ReadingAnswer {
  sectionType: 'reading-group';
  passageId: string;
  questionId: string;
  selectedIndex: number;
  correct: boolean;
  category: PlacementCategory;
  difficulty: number;
}

export interface WritingAnswer {
  sectionType: 'writing';
  responseText: string;
  attempted: boolean;
  /** True when a non-empty response was submitted and requires manual scoring. */
  needsReview: boolean;
}

export interface VoiceAnswer {
  sectionType: 'voice';
  attempted: boolean;
  /** True when a recording was captured and requires manual review. */
  needsReview: boolean;
  audioBlob?: Blob;
}

/** Alias so existing imports of PlacementAnswer continue to work. */
export type PlacementAnswer = MCAnswer;

export interface CategoryBreakdown {
  category: PlacementCategory;
  label: string;
  correct: number;
  total: number;
  ratio: number;
}

export interface SectionScore {
  section: PlacementSection;
  label: string;
  /** Weighted 0–100 for auto-scored parts; null for Parts 4–5 (binary only). */
  scorePercent: number | null;
  attempted: boolean;
  weight: number;
  /** True for Parts 4–5 when the learner submitted content that needs manual review. */
  needsReview: boolean;
}

export interface PlacementResult {
  level: CEFRLevel;
  confidence: number;
  /** Composite weighted percentage 0–100 across all five parts. */
  scorePercent: number;
  strengths: string[];
  /** Categories where the learner missed at least one question and performed below threshold. */
  weaknesses: string[];
  /** Always reflects the category breakdown — empty list means a clean run. */
  categoryBreakdown: CategoryBreakdown[];
  /**
   * Course id to recommend. May be null when the learner placed above
   * the available group-cohort levels (B2 / C1).
   */
  recommendedCourseId: string | null;
  /** True when level is B2 or C1 and we don't have a matching cohort course. */
  aboveOfferedLevels: boolean;
  /** Correct answers across Parts 1–3 (auto-scored only). */
  score: number;
  /** Total questions across Parts 1–3 (auto-scored only). */
  totalQuestions: number;
  /** Per-section score breakdown for results display. */
  sectionScores: SectionScore[];
  /** Raw writing response captured for future manual review; null if skipped. */
  writingResponse: string | null;
  voiceAttempted: boolean;
  /**
   * True when at least one open-ended section (writing or voice) has content
   * that requires human scoring. The composite CEFR level is still shown
   * immediately — this flag signals that it may be refined later.
   */
  reviewNeeded: boolean;
  /** Labels of the sections that need review, e.g. ["Writing", "Voice Note"]. */
  reviewSections: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'program' | 'logistics' | 'pricing' | 'technical';
}

export interface DashboardCourse {
  id: string;
  name: string;
  language: Language;
  level: CourseLevel;
  cohortName: string;
  nextSessionDate: string;
  nextSessionTime: string;
  joinUrl: string;
  currentWeek: number;
  sessionsAttended: number;
  sessionsTotal: number;
  assignmentsCompleted: number;
  assignmentsTotal: number;
}

export interface Assignment {
  id: string;
  courseId: string;
  week: number;
  title: string;
  description: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded';
  type: 'writing' | 'speaking' | 'reading';
}

export interface CommunityPost {
  id: string;
  author: string;
  authorRole: string;
  prompt: string;
  content: string;
  timestamp: string;
  replies: number;
  language: Language;
}

export interface Resource {
  id: string;
  title: string;
  type: 'pdf' | 'audio' | 'video' | 'link';
  category: string;
  description: string;
}
