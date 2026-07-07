import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section, SectionHeader, Card, Badge, Reveal, StaggerContainer, StaggerItem } from '@/components/ui';
import { COURSES } from '@/data/courses';

export function CourseLevelsSection() {
  const levels = ['A1', 'A2', 'B1'] as const;
  const displayCourses = levels.map((level) => COURSES.find((c) => c.level === level && c.language === 'french')!);

  return (
    <Section size="md" variant="default">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <Reveal>
          <SectionHeader
            eyebrow="Course levels"
            title={
              <>
                Three levels,
                <br />
                <span className="italic font-normal text-accent">one clear path.</span>
              </>
            }
          />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-ink-muted max-w-md leading-relaxed">
            Each level is a complete 12-week program, available in both French and Spanish. Take them in sequence, or start where the placement test says you should.
          </p>
        </Reveal>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.1}>
        {displayCourses.map((course) => (
          <StaggerItem key={course.id}>
            <Card
              variant="default"
              interactive
              className="relative overflow-hidden flex flex-col h-full group"
            >
              {/* Top-edge accent line */}
              <div
                aria-hidden
                className="absolute top-0 inset-x-0 h-px pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to right, transparent, rgb(var(--color-accent) / 0.40), transparent)',
                }}
              />
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-8">
                  <Badge variant="accent" size="md">
                    Level {course.level}
                  </Badge>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                    className="text-ink-subtle group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  />
                </div>

                <h3 className="font-display text-2xl md:text-[1.75rem] text-ink leading-tight mb-4">
                  {course.outcome}
                </h3>

                <p className="text-[0.9375rem] text-ink-muted leading-relaxed mb-8 flex-1">
                  {course.description}
                </p>

                <Link
                  to={`/courses/${course.id}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink group-hover:text-accent transition-colors pt-6 border-t border-line"
                >
                  View Course
                  <ArrowRight size={14} strokeWidth={1.5} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <div className="mt-10 text-center">
        <Link
          to="/placement"
          className="inline-flex items-center gap-2 text-[0.9375rem] text-ink-muted hover:text-accent transition-colors border-b border-dashed border-line hover:border-accent pb-0.5"
        >
          Not sure where to start? Take the placement test
          <ArrowRight size={14} strokeWidth={1.5} />
        </Link>
      </div>
    </Section>
  );
}
