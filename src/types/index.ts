export type Language = 'french' | 'spanish';

export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';

export type CourseLevel = 'A1' | 'A2' | 'B1';

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

export interface PlacementQuestion {
  id: string;
  language: Language;
  /**
   * High-level question type used for the on-screen badge.
   * Kept narrow on purpose so the QuestionCard label map stays simple.
   */
  type: 'grammar' | 'vocabulary' | 'reading' | 'listening';
  /**
   * Fine-grained category used for the results breakdown.
   * Distinct from `type`: a "grammar" question can sit in the
   * `verb-tense` or `pronouns` category, etc.
   */
  category: PlacementCategory;
  difficulty: 1 | 2 | 3 | 4 | 5;
  prompt: string;
  context?: string;
  options: string[];
  correctIndex: number;
}

export interface PlacementAnswer {
  questionId: string;
  selectedIndex: number;
  correct: boolean;
  type: PlacementQuestion['type'];
  category: PlacementCategory;
  difficulty: number;
}

export interface CategoryBreakdown {
  category: PlacementCategory;
  label: string;
  correct: number;
  total: number;
  ratio: number;
}

export interface PlacementResult {
  level: CEFRLevel;
  confidence: number;
  /** Percentage 0-100 of weighted points earned. */
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
  score: number;
  totalQuestions: number;
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
