import type { Course } from '@/types';

export const COURSES: Course[] = [
  // French
  {
    id: 'fr-a1',
    level: 'A1',
    language: 'french',
    title: 'French A1 — Beginner',
    outcome: 'Hold your first real conversation in French',
    description:
      'Build a working foundation in French. Learn to introduce yourself, order, navigate, and hold simple conversations.',
    longDescription:
      'French A1 is designed for absolute beginners or learners returning after a long break. Over 12 weeks — two 1-hour sessions per week — you will build a confident foundation in pronunciation, core grammar, and the vocabulary you need for everyday situations: introductions, directions, shopping, eating out, and small talk. By the end, you will hold your first real conversations in French.',
    weeks: 12,
    sessionsPerWeek: 2,
    topics: [
      'Greetings and introductions',
      'Present tense (être, avoir, regular verbs)',
      'Numbers, time, and dates',
      'Ordering food and drinks',
      'Getting around a French city',
      'Describing people and places',
      'Making plans',
      'Talking about work and studies',
    ],
  },
  {
    id: 'fr-a2',
    level: 'A2',
    language: 'french',
    title: 'French A2 — Elementary',
    outcome: 'Speak comfortably about your life, work, and plans',
    description:
      'Move beyond survival phrases. Talk about your past, make plans, express opinions, and handle real-world situations with ease.',
    longDescription:
      'French A2 takes you from basic phrases to real fluency on everyday topics. Over 12 weeks — two 1-hour sessions per week — you will master past and future tenses, expand your vocabulary to 1,500+ words, and practice navigating work, travel, and social situations. You will leave able to speak comfortably about your life, plans, and opinions.',
    weeks: 12,
    sessionsPerWeek: 2,
    topics: [
      'Passé composé and imparfait',
      'Futur proche and futur simple',
      'Expressing opinions and preferences',
      'Workplace French',
      'Travel and accommodation',
      'Health and the body',
      'Media and current events',
      'Storytelling and anecdotes',
    ],
  },
  {
    id: 'fr-b1',
    level: 'B1',
    language: 'french',
    title: 'French B1 — Intermediate',
    outcome: 'Navigate professional and complex conversations',
    description:
      'Handle the full range of daily French. Discuss abstract ideas, defend positions, and operate confidently in professional settings.',
    longDescription:
      'French B1 is for intermediate learners ready to cross into true conversational independence. Over 12 weeks — two 1-hour sessions per week — you will master the subjunctive, conditional, and advanced connectors, and build fluency on abstract topics: politics, culture, career, relationships. Weekly discussions and role-plays simulate real professional and social French.',
    weeks: 12,
    sessionsPerWeek: 2,
    topics: [
      'Subjunctive mood',
      'Conditional and hypothetical situations',
      'Debate and argumentation',
      'Business and negotiation French',
      'Cultural topics and current affairs',
      'Reading authentic media',
      'Formal and informal registers',
      'Idioms and colloquial expression',
    ],
  },
  // Spanish
  {
    id: 'es-a1',
    level: 'A1',
    language: 'spanish',
    title: 'Spanish A1 — Beginner',
    outcome: 'Hold your first real conversation in Spanish',
    description:
      'Build a working foundation in Spanish. Learn to introduce yourself, order, navigate, and hold simple conversations.',
    longDescription:
      'Spanish A1 is designed for absolute beginners or learners returning after a long break. Over 12 weeks — two 1-hour sessions per week — you will build a confident foundation in pronunciation, core grammar, and the vocabulary you need for everyday situations: introductions, directions, shopping, eating out, and small talk.',
    weeks: 12,
    sessionsPerWeek: 2,
    topics: [
      'Greetings and introductions',
      'Present tense (ser, estar, regular verbs)',
      'Numbers, time, and dates',
      'Ordering food and drinks',
      'Getting around a Spanish-speaking city',
      'Describing people and places',
      'Making plans',
      'Talking about work and studies',
    ],
  },
  {
    id: 'es-a2',
    level: 'A2',
    language: 'spanish',
    title: 'Spanish A2 — Elementary',
    outcome: 'Speak comfortably about your life, work, and plans',
    description:
      'Move beyond survival phrases. Talk about your past, make plans, express opinions, and handle real-world situations with ease.',
    longDescription:
      'Spanish A2 takes you from basic phrases to real fluency on everyday topics. Over 12 weeks — two 1-hour sessions per week — you will master past tenses, expand your vocabulary significantly, and practice navigating work, travel, and social situations across the Spanish-speaking world.',
    weeks: 12,
    sessionsPerWeek: 2,
    topics: [
      'Pretérito and imperfecto',
      'Future and near-future tenses',
      'Expressing opinions and preferences',
      'Workplace Spanish',
      'Travel and accommodation',
      'Health and the body',
      'Regional differences (Spain vs Latin America)',
      'Storytelling and anecdotes',
    ],
  },
  {
    id: 'es-b1',
    level: 'B1',
    language: 'spanish',
    title: 'Spanish B1 — Intermediate',
    outcome: 'Navigate professional and complex conversations',
    description:
      'Handle the full range of daily Spanish. Discuss abstract ideas, defend positions, and operate confidently in professional settings.',
    longDescription:
      'Spanish B1 is for intermediate learners ready to cross into true conversational independence. Over 12 weeks — two 1-hour sessions per week — you will master the subjunctive, conditional, and advanced connectors, and build fluency on abstract topics: politics, culture, career, relationships.',
    weeks: 12,
    sessionsPerWeek: 2,
    topics: [
      'Subjunctive mood',
      'Conditional and hypothetical situations',
      'Debate and argumentation',
      'Business and negotiation Spanish',
      'Cultural topics and current affairs',
      'Reading authentic media',
      'Formal and informal registers',
      'Idioms and colloquial expression',
    ],
  },
];

export function getCourseById(id: string): Course | undefined {
  return COURSES.find((c) => c.id === id);
}

export function getCoursesByLanguage(language: 'french' | 'spanish'): Course[] {
  return COURSES.filter((c) => c.language === language);
}
