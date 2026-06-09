import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CalendarDays, Check, Clock, GraduationCap, Users } from 'lucide-react';
import { Section, Card, Badge, ButtonLink } from '@/components/ui';
import { getCourseById } from '@/data/courses';
import { getNextCohortForCourse, COHORTS } from '@/data/cohorts';
import { formatCohortDate, daysUntil } from '@/lib/dates';
import { cn } from '@/lib/cn';

export function CourseDetailPage() {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courseId ? getCourseById(courseId) : undefined;

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const nextCohort = getNextCohortForCourse(course.id);
  const allCohorts = COHORTS.filter((c) => c.courseId === course.id);

  return (
    <>
      <Section size="sm" variant="default">
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors mb-8"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          All courses
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl" aria-hidden>
                {course.language === 'french' ? '🇫🇷' : '🇪🇸'}
              </span>
              <Badge variant="accent" size="md">
                Level {course.level}
              </Badge>
              <span className="text-2xs uppercase tracking-wider text-ink-subtle">
                {course.language === 'french' ? 'French' : 'Spanish'}
              </span>
            </div>

            <h1 className="display-1 text-ink mb-8">{course.outcome}</h1>
            <p className="text-lg text-ink-muted leading-relaxed max-w-2xl">{course.longDescription}</p>

            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 pt-8 border-t border-line">
              <Stat icon={<Clock size={14} strokeWidth={1.5} />} label="Weeks" value={String(course.weeks)} />
              <Stat
                icon={<CalendarDays size={14} strokeWidth={1.5} />}
                label="Live sessions"
                value={String(course.weeks * course.sessionsPerWeek)}
              />
              <Stat icon={<Users size={14} strokeWidth={1.5} />} label="Cohort size" value="5–12" />
            </div>
          </div>

          <div className="lg:col-span-5">
            <Card variant="raised" className="p-7 sticky top-24">
              <p className="eyebrow mb-2">Next cohort</p>
              {nextCohort ? (
                <>
                  <p className="font-display text-3xl text-ink mb-1">{formatCohortDate(nextCohort.startDate)}</p>
                  <p className="text-sm text-ink-muted mb-6">{nextCohort.schedule}</p>

                  <div className="flex items-baseline justify-between pb-4 mb-4 border-b border-line">
                    <span className="text-sm text-ink-muted">Spots remaining</span>
                    <span
                      className={cn(
                        'font-display text-xl tabular',
                        nextCohort.spotsRemaining <= 3 ? 'text-highlight' : 'text-ink',
                      )}
                    >
                      {nextCohort.spotsRemaining} / {nextCohort.spotsTotal}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between pb-4 mb-6 border-b border-line">
                    <span className="text-sm text-ink-muted">Starts in</span>
                    <span className="font-display text-xl tabular text-ink">
                      {daysUntil(nextCohort.startDate)} days
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between pb-6 mb-6 border-b border-line">
                    <span className="text-sm text-ink-muted">Price</span>
                    <span className="font-display text-xl tabular text-ink">$1,200</span>
                  </div>

                  <ButtonLink to={`/enroll?course=${course.id}`} fullWidth size="lg" icon={<ArrowRight size={16} strokeWidth={1.5} />}>
                    Express Interest
                  </ButtonLink>
                  <ButtonLink to="/placement" fullWidth size="md" variant="ghost" className="mt-2">
                    Not sure? Take the test
                  </ButtonLink>
                </>
              ) : (
                <>
                  <p className="text-ink-muted mb-6">
                    No cohort dates have been published yet for this course. Express interest and we will notify you when scheduling opens.
                  </p>
                  <ButtonLink to={`/enroll?course=${course.id}`} fullWidth size="lg" icon={<ArrowRight size={16} strokeWidth={1.5} />}>
                    Join the Interest List
                  </ButtonLink>
                  <ButtonLink to="/placement" fullWidth size="md" variant="ghost" className="mt-2">
                    Not sure? Take the test
                  </ButtonLink>
                </>
              )}
            </Card>
          </div>
        </div>
      </Section>

      <Section size="sm" variant="sunken">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">Topics covered</p>
            <h2 className="display-3 text-ink mb-4">
              What you'll <span className="italic font-normal text-accent">actually</span> learn
            </h2>
            <p className="text-ink-muted leading-relaxed">
              A structured curriculum, built around speaking and real-world use. No vocabulary drills for drills' sake.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {course.topics.map((topic) => (
                <li
                  key={topic}
                  className="flex items-start gap-3 p-4 bg-paper rounded border border-line"
                >
                  <span className="mt-1 h-4 w-4 shrink-0 rounded-full bg-accent-soft flex items-center justify-center">
                    <Check size={10} strokeWidth={2.5} className="text-accent" />
                  </span>
                  <span className="text-[0.9375rem] text-ink">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {allCohorts.length > 1 && (
        <Section size="sm" variant="default">
          <h2 className="display-3 text-ink mb-8">All upcoming cohorts</h2>
          <div className="border border-line rounded-md bg-paper-raised overflow-hidden">
            {allCohorts.map((cohort, idx) => (
              <div
                key={cohort.id}
                className={cn(
                  'grid grid-cols-12 items-center gap-4 p-5',
                  idx !== allCohorts.length - 1 && 'border-b border-line',
                )}
              >
                <div className="col-span-6 md:col-span-5">
                  <p className="font-display text-lg text-ink">{formatCohortDate(cohort.startDate)}</p>
                  <p className="text-sm text-ink-muted">{cohort.schedule}</p>
                </div>
                <div className="col-span-3 md:col-span-4 text-sm">
                  <span
                    className={cn(
                      'tabular font-medium',
                      cohort.spotsRemaining <= 3 ? 'text-highlight' : 'text-ink',
                    )}
                  >
                    {cohort.spotsRemaining}
                  </span>
                  <span className="text-ink-muted"> / {cohort.spotsTotal} spots</span>
                </div>
                <div className="col-span-3 flex md:justify-end">
                  <ButtonLink to={`/enroll?course=${course.id}`} size="sm" variant="ghost">
                    Express Interest
                  </ButtonLink>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section size="sm" variant="sunken">
        <InstructorCard />
      </Section>
    </>
  );
}

function InstructorCard() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-6 p-7 bg-paper border border-line rounded-md">
      <div className="h-14 w-14 rounded-full bg-accent-soft flex items-center justify-center shrink-0">
        <GraduationCap size={24} strokeWidth={1.5} className="text-accent" />
      </div>
      <div className="flex-1">
        <p className="eyebrow mb-1">Your Instructor</p>
        <p className="font-display text-xl text-ink leading-tight mb-0.5">Thomas Montanaro, M.S.T.</p>
        <p className="text-[0.9375rem] text-ink-muted">
          New York State-certified French and Spanish educator · More than 15 years of teaching
          experience
        </p>
      </div>
      <ButtonLink to="/about" size="sm" variant="secondary" icon={<ArrowRight size={14} strokeWidth={1.5} />}>
        About Your Instructor
      </ButtonLink>
    </div>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-ink-muted mb-1">
        {icon}
        <span className="eyebrow">{label}</span>
      </div>
      <p className="font-display text-2xl text-ink tabular">{value}</p>
    </div>
  );
}
