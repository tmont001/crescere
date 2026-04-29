import type { Assignment, CommunityPost, DashboardCourse, Resource } from '@/types';

export const DASHBOARD_COURSES: DashboardCourse[] = [
  {
    id: 'dc-1',
    name: 'Spanish A2 — Elementary',
    language: 'spanish',
    level: 'A2',
    cohortName: 'Cohort 14',
    nextSessionDate: '2026-04-23',
    nextSessionTime: '7:00 PM ET',
    joinUrl: 'https://meet.google.com/abc-defg-hij',
    currentWeek: 4,
    sessionsAttended: 6,
    sessionsTotal: 20,
    assignmentsCompleted: 3,
    assignmentsTotal: 10,
  },
  {
    id: 'dc-2',
    name: 'French A1 — Beginner',
    language: 'french',
    level: 'A1',
    cohortName: 'Cohort 09',
    nextSessionDate: '2026-04-24',
    nextSessionTime: '8:00 AM ET',
    joinUrl: 'https://meet.google.com/xyz-uvwx-yza',
    currentWeek: 2,
    sessionsAttended: 3,
    sessionsTotal: 20,
    assignmentsCompleted: 1,
    assignmentsTotal: 10,
  },
];

export const ASSIGNMENTS: Assignment[] = [
  {
    id: 'a1',
    courseId: 'dc-1',
    week: 3,
    title: 'Short biography in past tense',
    description: 'Write a 150-word biography of someone you admire, using pretérito and imperfecto appropriately.',
    dueDate: '2026-04-18',
    status: 'submitted',
    type: 'writing',
  },
  {
    id: 'a2',
    courseId: 'dc-1',
    week: 4,
    title: 'Recorded self-introduction',
    description: 'Record a 90-second introduction covering your background, current work, and weekend plans.',
    dueDate: '2026-04-25',
    status: 'pending',
    type: 'speaking',
  },
  {
    id: 'a3',
    courseId: 'dc-1',
    week: 2,
    title: 'Restaurant dialogue practice',
    description: 'Complete the dialogue worksheet covering ordering, asking about ingredients, and paying.',
    dueDate: '2026-04-11',
    status: 'graded',
    type: 'writing',
  },
  {
    id: 'a4',
    courseId: 'dc-2',
    week: 2,
    title: 'Numbers and dates exercise',
    description: 'Complete the worksheet practicing numbers 1–100 and date formats.',
    dueDate: '2026-04-26',
    status: 'pending',
    type: 'writing',
  },
];

export const COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: 'p1',
    author: 'Sofia Martel',
    authorRole: 'Spanish A2 · Cohort 14',
    prompt: 'Share a situation this week where you used Spanish outside of class.',
    content:
      'Ordered entirely in Spanish at the taqueria near my apartment. The server switched to English twice out of habit but I pushed through. Small win but it felt huge.',
    timestamp: '2026-04-20T14:30:00Z',
    replies: 7,
    language: 'spanish',
  },
  {
    id: 'p2',
    author: 'James Okafor',
    authorRole: 'French A1 · Cohort 09',
    prompt: 'What is one thing from this week\'s lesson you want to practice more?',
    content:
      'The difference between "tu" and "vous" still trips me up. Would love to hear how others decide in borderline cases.',
    timestamp: '2026-04-20T09:15:00Z',
    replies: 12,
    language: 'french',
  },
  {
    id: 'p3',
    author: 'Helena Park',
    authorRole: 'Spanish A2 · Cohort 14',
    prompt: 'Share a situation this week where you used Spanish outside of class.',
    content:
      'Called my abuela in Argentina and we had a full 20-minute conversation without switching to English. First time ever. She cried, I cried.',
    timestamp: '2026-04-19T22:45:00Z',
    replies: 23,
    language: 'spanish',
  },
  {
    id: 'p4',
    author: 'Rafael Torres',
    authorRole: 'French B1 · Cohort 07',
    prompt: 'What podcast or show are you using for listening practice?',
    content:
      'Started "Transfert" on Slate.fr. Slow enough to follow, interesting enough that I actually want to keep going. Highly recommend for B1 and above.',
    timestamp: '2026-04-19T16:20:00Z',
    replies: 5,
    language: 'french',
  },
];

export const RESOURCES: Resource[] = [
  {
    id: 'r1',
    title: 'Week 4 Slide Deck',
    type: 'pdf',
    category: 'Lessons',
    description: 'Pretérito vs. imperfecto — complete slides from the Tuesday session.',
  },
  {
    id: 'r2',
    title: 'Vocabulary List — Week 4',
    type: 'pdf',
    category: 'Lessons',
    description: '85 terms related to routines, daily life, and childhood memories.',
  },
  {
    id: 'r3',
    title: 'Listening exercise — market dialogue',
    type: 'audio',
    category: 'Practice',
    description: 'Native-speed dialogue at a Madrid market with transcript and questions.',
  },
  {
    id: 'r4',
    title: 'Pronunciation guide — rolled R',
    type: 'video',
    category: 'Practice',
    description: '7-minute walkthrough with exercises. Watch between sessions.',
  },
  {
    id: 'r5',
    title: 'Recommended podcast list',
    type: 'link',
    category: 'Outside practice',
    description: 'Curated podcasts by level. Updated monthly by instructors.',
  },
  {
    id: 'r6',
    title: 'Session recording — Week 3 Thursday',
    type: 'video',
    category: 'Recordings',
    description: 'Full 60-minute session recording with chapter markers.',
  },
];
