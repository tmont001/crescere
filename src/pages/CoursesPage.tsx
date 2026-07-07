import { Link } from 'react-router-dom';
import { ArrowUpRight, CalendarDays } from 'lucide-react';
import { Section, SectionHeader, Card, Badge, ButtonLink } from '@/components/ui';
import { COURSES } from '@/data/courses';
import { getNextCohortForCourse } from '@/data/cohorts';
import { formatCohortDate } from '@/lib/dates';
import { cn } from '@/lib/cn';

export function CoursesPage() {
  const french = COURSES.filter((c) => c.language === 'french');
  const spanish = COURSES.filter((c) => c.language === 'spanish');

  return (
    <>
      <Section size="sm" variant="default">
        <SectionHeader
          eyebrow="All courses"
          title={
            <>
              Two languages,
              <br />
              <span className="italic font-normal text-accent">three levels each.</span>
            </>
          }
          description="Every course is twelve weeks, 24 live 1-hour sessions, small groups (5–12 students), and structured curriculum. Available in French and Spanish. Pick your language, pick your level."
        />
      </Section>

      <Section size="sm" variant="sunken">
        <div className="mb-8 flex items-center gap-4">
          <span className="h-8 w-1 rounded-full bg-accent shrink-0" aria-hidden />
          <h2 className="display-3 text-ink">French</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {french.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Section>

      <Section size="sm" variant="default">
        <div className="mb-8 flex items-center gap-4">
          <span className="h-8 w-1 rounded-full bg-ink/25 shrink-0" aria-hidden />
          <h2 className="display-3 text-ink">Spanish</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {spanish.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Section>

      <Section size="md" variant="sunken">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="display-3 text-ink">Still deciding where to start?</h3>
          <p className="mt-4 text-ink-muted leading-relaxed">
            Our placement test takes five minutes and gives you a clear level recommendation based on your current skills.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <ButtonLink to="/placement" size="lg">
              Take Placement Test
            </ButtonLink>
            <ButtonLink to="/pricing" size="lg" variant="secondary">
              View Pricing
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}

function CourseCard({ course }: { course: typeof COURSES[number] }) {
  const nextCohort = getNextCohortForCourse(course.id);
  return (
    <Link to={`/courses/${course.id}`} className="block group">
      <Card
        variant="default"
        className={cn(
          'p-8 h-full flex flex-col transition-all duration-300',
          'hover:-translate-y-0.5 hover:border-ink/30',
        )}
      >
        <div className="flex items-start justify-between mb-6">
          <Badge variant="accent" size="md">
            Level {course.level}
          </Badge>
          <ArrowUpRight
            size={18}
            strokeWidth={1.5}
            className="text-ink-subtle group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
          />
        </div>

        <h3 className="font-display text-2xl text-ink leading-tight mb-3">{course.outcome}</h3>
        <p className="text-[0.9375rem] text-ink-muted leading-relaxed mb-6 flex-1">
          {course.description}
        </p>

        <div className="pt-5 border-t border-line">
          {nextCohort ? (
            <>
              <div className="flex items-center gap-2 text-2xs uppercase tracking-wider text-ink-subtle mb-1.5">
                <CalendarDays size={12} strokeWidth={1.5} />
                <span>Next cohort</span>
              </div>
              <p className="text-sm text-ink">{formatCohortDate(nextCohort.startDate)}</p>
              <p className="text-sm text-ink-muted mt-0.5">
                <span className="tabular">{nextCohort.spotsRemaining}</span> of{' '}
                <span className="tabular">{nextCohort.spotsTotal}</span> spots remaining
              </p>
            </>
          ) : (
            <p className="text-sm text-accent font-medium">
              Express interest → dates being confirmed
            </p>
          )}
        </div>
      </Card>
    </Link>
  );
}
