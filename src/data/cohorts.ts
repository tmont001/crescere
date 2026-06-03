import type { Cohort } from '@/types';

/**
 * ADMIN COHORT MANAGEMENT
 * ─────────────────────────────────────────────────────────────────────────────
 * To publish a new cohort, add an entry to COHORTS following the shape below.
 * All public-facing pages derive availability from this single file.
 *
 * Required fields per cohort:
 *   id            – unique slug, e.g. 'cohort-fr-a1-sep-2026'
 *   courseId      – must match an id in courses.ts (e.g. 'fr-a1', 'es-b1')
 *   language      – 'french' | 'spanish'
 *   level         – 'A1' | 'A2' | 'B1'
 *   startDate     – ISO date string, e.g. '2026-09-08'
 *   spotsTotal    – maximum enrollment (5–12 per business rules)
 *   spotsRemaining – current open seats (update as students register)
 *   schedule      – human-readable schedule, e.g. 'Mon & Thu · 7:00 PM ET'
 *
 * Business rules enforced here:
 *   - Minimum cohort size: 5 students (note in description when near minimum)
 *   - Maximum cohort size: 12 students
 *   - Course duration: 12 weeks, 2 sessions/week, 1 hour/session (24 sessions total)
 *   - Platform: Google Meet (join links sent separately after enrollment confirmed)
 *
 * WORKFLOW:
 *   1. Add the cohort entry below with an upcoming startDate.
 *   2. Only cohorts with a startDate in the future appear publicly.
 *   3. When a cohort fills up, set spotsRemaining to 0.
 *   4. When a cohort completes, remove it from this list (or leave it — expired
 *      entries are filtered automatically by the helper functions below).
 *
 * RECOMMENDED SCHEDULE PATTERNS (not published until approved):
 *   Adults / professionals:  Mon & Thu · 7:00 PM ET  |  Tue & Fri · 8:00 PM ET
 *   Morning learners:        Mon & Wed · 9:00 AM ET  |  Tue & Thu · 8:00 AM ET
 *   High school / students:  Tue & Thu · 4:00 PM ET  |  Sat & Sun · 10:00 AM ET
 *
 * No cohorts are currently published. Add entries below when ready.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const COHORTS: Cohort[] = [
  // No cohorts published yet.
  // Add entries here following the shape described above.
  // Example (do not uncomment until a real date is confirmed):
  //
  // {
  //   id: 'cohort-fr-a1-sep-2026',
  //   courseId: 'fr-a1',
  //   language: 'french',
  //   level: 'A1',
  //   startDate: '2026-09-08',
  //   spotsTotal: 12,
  //   spotsRemaining: 12,
  //   schedule: 'Mon & Thu · 7:00 PM ET',
  // },
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
