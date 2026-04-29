import { ArrowRight, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section, SectionHeader, ButtonLink, Badge } from '@/components/ui';
import { getUpcomingCohorts } from '@/data/cohorts';
import { getCourseById } from '@/data/courses';
import { formatCohortDate, daysUntil } from '@/lib/dates';
import { cn } from '@/lib/cn';

export function CohortUrgencySection() {
  const cohorts = getUpcomingCohorts().slice(0, 5);

  return (
    <Section variant="sunken" size="md">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <SectionHeader
          eyebrow="Upcoming cohorts"
          title={
            <>
              Small groups.
              <br />
              <span className="italic font-normal text-accent">Fixed start dates.</span>
            </>
          }
        />
        <p className="text-ink-muted max-w-sm leading-relaxed text-[0.9375rem]">
          Every cohort is capped at 12 students. When a spot is gone, it's gone until the next one opens.
        </p>
      </div>

      <div className="border border-line rounded-md bg-paper-raised overflow-hidden">
        {cohorts.map((cohort, idx) => {
          const course = getCourseById(cohort.courseId);
          if (!course) return null;
          const days = daysUntil(cohort.startDate);
          const urgency = cohort.spotsRemaining <= 3;
          return (
            <div
              key={cohort.id}
              className={cn(
                'group grid grid-cols-12 items-center gap-4 p-5 md:p-6 transition-colors hover:bg-paper',
                idx !== cohorts.length - 1 && 'border-b border-line',
              )}
            >
              {/* Flag */}
              <div className="col-span-12 md:col-span-1 flex items-center gap-3">
                <span
                  className={cn(
                    'h-8 w-8 rounded flex items-center justify-center text-base',
                    cohort.language === 'french' ? 'bg-accent-soft text-accent' : 'bg-highlight-soft text-highlight',
                  )}
                  aria-hidden
                >
                  {cohort.language === 'french' ? '🇫🇷' : '🇪🇸'}
                </span>
                <Badge variant="outline" size="sm" className="md:hidden">
                  {cohort.level}
                </Badge>
              </div>

              {/* Course */}
              <div className="col-span-7 md:col-span-4">
                <p className="hidden md:block text-2xs uppercase tracking-wider text-ink-subtle mb-1">
                  {cohort.language === 'french' ? 'French' : 'Spanish'} · {cohort.level}
                </p>
                <p className="font-display text-lg md:text-xl text-ink leading-tight">
                  {course.outcome}
                </p>
              </div>

              {/* Date */}
              <div className="col-span-5 md:col-span-3 flex items-center gap-2 text-ink">
                <CalendarDays size={14} strokeWidth={1.5} className="text-ink-muted hidden md:block" />
                <div>
                  <p className="text-[0.9375rem] font-medium">{formatCohortDate(cohort.startDate)}</p>
                  <p className="text-2xs uppercase tracking-wider text-ink-subtle">{cohort.schedule}</p>
                </div>
              </div>

              {/* Spots */}
              <div className="col-span-7 md:col-span-2">
                <div className="flex items-baseline gap-1.5">
                  <span
                    className={cn(
                      'font-display text-2xl tabular',
                      urgency ? 'text-highlight' : 'text-ink',
                    )}
                  >
                    {cohort.spotsRemaining}
                  </span>
                  <span className="text-sm text-ink-muted">
                    / {cohort.spotsTotal} spots
                  </span>
                </div>
                <p className="text-2xs uppercase tracking-wider text-ink-subtle">
                  Starts in {days} days
                </p>
              </div>

              {/* CTA */}
              <div className="col-span-5 md:col-span-2 flex md:justify-end">
                <Link
                  to="/enroll"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-ink group-hover:text-accent transition-colors"
                >
                  Save Spot
                  <ArrowRight size={14} strokeWidth={1.5} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <ButtonLink to="/courses" variant="ghost" size="md" icon={<ArrowRight size={16} strokeWidth={1.5} />}>
          View all cohorts
        </ButtonLink>
      </div>
    </Section>
  );
}
