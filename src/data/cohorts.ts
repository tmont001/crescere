import type { Cohort } from '@/types';

export const COHORTS: Cohort[] = [
  {
    id: 'cohort-fr-a1-may',
    courseId: 'fr-a1',
    language: 'french',
    level: 'A1',
    startDate: '2026-05-11',
    spotsTotal: 12,
    spotsRemaining: 4,
    schedule: 'Mon & Thu · 7:00 PM ET',
  },
  {
    id: 'cohort-fr-a2-may',
    courseId: 'fr-a2',
    language: 'french',
    level: 'A2',
    startDate: '2026-05-18',
    spotsTotal: 12,
    spotsRemaining: 7,
    schedule: 'Tue & Fri · 8:00 AM ET',
  },
  {
    id: 'cohort-fr-b1-jun',
    courseId: 'fr-b1',
    language: 'french',
    level: 'B1',
    startDate: '2026-06-01',
    spotsTotal: 10,
    spotsRemaining: 9,
    schedule: 'Wed & Sat · 7:30 PM ET',
  },
  {
    id: 'cohort-es-a1-may',
    courseId: 'es-a1',
    language: 'spanish',
    level: 'A1',
    startDate: '2026-05-12',
    spotsTotal: 12,
    spotsRemaining: 2,
    schedule: 'Tue & Thu · 6:30 PM ET',
  },
  {
    id: 'cohort-es-a2-may',
    courseId: 'es-a2',
    language: 'spanish',
    level: 'A2',
    startDate: '2026-05-19',
    spotsTotal: 12,
    spotsRemaining: 6,
    schedule: 'Mon & Wed · 7:00 PM ET',
  },
  {
    id: 'cohort-es-b1-jun',
    courseId: 'es-b1',
    language: 'spanish',
    level: 'B1',
    startDate: '2026-06-02',
    spotsTotal: 10,
    spotsRemaining: 8,
    schedule: 'Tue & Thu · 8:00 AM ET',
  },
];

export function getNextCohortForCourse(courseId: string): Cohort | undefined {
  const now = Date.now();
  return COHORTS
    .filter((c) => c.courseId === courseId && new Date(c.startDate).getTime() > now)
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())[0];
}

export function getUpcomingCohorts(): Cohort[] {
  const now = Date.now();
  return COHORTS
    .filter((c) => new Date(c.startDate).getTime() > now)
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
}
