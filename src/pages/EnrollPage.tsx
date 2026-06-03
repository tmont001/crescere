import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import { Section, Card, Badge, Input, Button, ButtonLink } from '@/components/ui';
import { getUpcomingCohorts } from '@/data/cohorts';
import { COURSES, getCourseById } from '@/data/courses';
import { formatCohortDate } from '@/lib/dates';
import { cn } from '@/lib/cn';

const CONTACT_EMAIL = 'montanarowl@gmail.com';

function buildMailtoHref(name: string, email: string, courseLabel: string, schedule: string): string {
  const subject = encodeURIComponent(`Enrollment Interest — ${courseLabel}`);
  const body = encodeURIComponent(
    `Hi,\n\nI am interested in enrolling in the following course:\n\nCourse: ${courseLabel}\n${schedule ? `Schedule preference: ${schedule}\n` : ''}Name: ${name}\nEmail: ${email}\n\nPlease let me know about next steps, available dates, and payment details.\n\nThank you.`
  );
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

export function EnrollPage() {
  const cohorts = getUpcomingCohorts();
  const [searchParams] = useSearchParams();
  const paramCourseId = searchParams.get('course');

  function getInitialSelectedId(): string | null {
    if (!paramCourseId) return null;
    if (cohorts.length > 0) {
      const matchingCohort = cohorts.find((c) => c.courseId === paramCourseId);
      return matchingCohort?.id ?? null;
    }
    const validCourse = COURSES.find((c) => c.id === paramCourseId);
    return validCourse?.id ?? null;
  }

  const [selectedId, setSelectedId] = useState<string | null>(getInitialSelectedId);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const hasCohorts = cohorts.length > 0;

  const selectedLabel = (() => {
    if (selectedId) {
      const cohort = cohorts.find((c) => c.id === selectedId);
      if (cohort) {
        const course = getCourseById(cohort.courseId);
        return course ? `${course.title} — starting ${formatCohortDate(cohort.startDate)}` : '';
      }
      const course = COURSES.find((c) => c.id === selectedId);
      return course ? course.title : '';
    }
    return '';
  })();

  const selectedSchedule = (() => {
    if (selectedId) {
      const cohort = cohorts.find((c) => c.id === selectedId);
      return cohort?.schedule ?? '';
    }
    return '';
  })();

  const mailtoHref = buildMailtoHref(name, email, selectedLabel, selectedSchedule);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedId || !name || !email) return;
    setShowConfirmation(true);
  }

  if (showConfirmation) {
    return (
      <Section size="md" variant="default">
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-accent-soft mb-8">
            <Mail size={24} strokeWidth={1.5} className="text-accent" />
          </div>
          <h1 className="display-2 text-ink mb-4">Ready to send your request.</h1>
          <p className="text-lg text-ink-muted leading-relaxed mb-4">
            Click the button below to open an email addressed to us with your details pre-filled. Once we receive it, we will reach out with cohort dates, payment details, and next steps.
          </p>
          <p className="text-sm text-ink-subtle mb-10">
            No seat has been reserved and no payment has been collected yet.
          </p>

          <Card variant="raised" className="p-6 text-left mb-8">
            <p className="eyebrow mb-2">Your request summary</p>
            <p className="font-display text-xl text-ink mb-1">{selectedLabel || 'Course to be confirmed'}</p>
            <p className="text-sm text-ink-muted mt-1">From: {name} · {email}</p>
          </Card>

          <a
            href={mailtoHref}
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-ink text-paper text-base font-medium hover:bg-ink/90 transition-colors mb-4"
          >
            <Mail size={16} strokeWidth={1.5} />
            Open Email to Send Request
          </a>

          <p className="text-sm text-ink-muted mb-8">
            Or email us directly at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-ink border-b border-line hover:border-accent hover:text-accent transition-colors">
              {CONTACT_EMAIL}
            </a>
          </p>

          <ButtonLink to="/courses" size="md" variant="secondary">
            Back to Courses
          </ButtonLink>
        </div>
      </Section>
    );
  }

  return (
    <Section size="sm" variant="default">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-4">Enrollment Interest</p>
          <h1 className="display-1 text-ink mb-6">
            Request your <span className="italic font-normal text-accent">spot.</span>
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed">
            Select a course and fill in your details. We will follow up with cohort availability, scheduling options, and payment details before anything is confirmed or charged.
          </p>
        </div>

        <div className="mb-8 p-5 bg-paper-raised border border-line rounded-md flex items-start gap-3">
          <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-line text-ink-subtle font-display text-sm shrink-0 mt-0.5">i</span>
          <p className="text-[0.9375rem] text-ink-muted leading-relaxed">
            This form generates an enrollment interest email. Submitting does not reserve a paid seat or process any payment. We will confirm all details with you first.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-8">

            {hasCohorts ? (
              <div>
                <p className="eyebrow mb-4">Step 1 — Choose a cohort</p>
                <div className="space-y-2">
                  {cohorts.map((cohort) => {
                    const course = getCourseById(cohort.courseId);
                    if (!course) return null;
                    const selected = selectedId === cohort.id;
                    return (
                      <button
                        key={cohort.id}
                        type="button"
                        onClick={() => setSelectedId(cohort.id)}
                        className={cn(
                          'w-full grid grid-cols-12 gap-3 items-center p-5 text-left rounded border transition-all',
                          selected
                            ? 'border-accent bg-accent-soft'
                            : 'border-line bg-paper-raised hover:border-ink/30',
                        )}
                      >
                        <span className="col-span-1 text-xl" aria-hidden>
                          {cohort.language === 'french' ? '🇫🇷' : '🇪🇸'}
                        </span>
                        <div className="col-span-7">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant={selected ? 'accent' : 'outline'} size="sm">
                              {cohort.level}
                            </Badge>
                            <span className="text-2xs uppercase tracking-wider text-ink-subtle">
                              {cohort.language === 'french' ? 'French' : 'Spanish'}
                            </span>
                          </div>
                          <p className="font-display text-lg text-ink leading-tight">{course.outcome}</p>
                        </div>
                        <div className="col-span-4 md:text-right">
                          <p className="text-sm text-ink">{formatCohortDate(cohort.startDate)}</p>
                          <p className="text-2xs uppercase tracking-wider text-ink-subtle">{cohort.schedule}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div>
                <p className="eyebrow mb-4">Step 1 — Choose a course</p>
                <p className="text-sm text-ink-muted mb-4">
                  No cohort dates are published yet. Select the course you are interested in and we will contact you when scheduling opens.
                </p>
                <div className="space-y-2">
                  {COURSES.map((course) => {
                    const selected = selectedId === course.id;
                    return (
                      <button
                        key={course.id}
                        type="button"
                        onClick={() => setSelectedId(course.id)}
                        className={cn(
                          'w-full grid grid-cols-12 gap-3 items-center p-5 text-left rounded border transition-all',
                          selected
                            ? 'border-accent bg-accent-soft'
                            : 'border-line bg-paper-raised hover:border-ink/30',
                        )}
                      >
                        <span className="col-span-1 text-xl" aria-hidden>
                          {course.language === 'french' ? '🇫🇷' : '🇪🇸'}
                        </span>
                        <div className="col-span-11">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant={selected ? 'accent' : 'outline'} size="sm">
                              {course.level}
                            </Badge>
                            <span className="text-2xs uppercase tracking-wider text-ink-subtle">
                              {course.language === 'french' ? 'French' : 'Spanish'}
                            </span>
                          </div>
                          <p className="font-display text-lg text-ink leading-tight">{course.outcome}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div>
              <p className="eyebrow mb-4">Step 2 — Your details</p>
              <div className="space-y-4">
                <Input
                  label="Full name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  required
                />
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@example.com"
                  required
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Card variant="raised" className="p-7 sticky top-24">
              <p className="eyebrow mb-6">Summary</p>

              {selectedId ? (
                <div className="pb-5 mb-5 border-b border-line">
                  <p className="font-display text-xl text-ink leading-tight mb-1">
                    {selectedLabel}
                  </p>
                </div>
              ) : (
                <div className="pb-5 mb-5 border-b border-line">
                  <p className="text-sm text-ink-muted italic">Select a course to continue</p>
                </div>
              )}

              <div className="space-y-2 text-sm mb-5">
                <div className="flex justify-between">
                  <span className="text-ink-muted">12-Week Program</span>
                  <span className="text-ink tabular">$1,200</span>
                </div>
              </div>

              <p className="text-2xs uppercase tracking-wider text-ink-subtle mb-6">
                Payment confirmed before any charges occur
              </p>

              <Button
                type="submit"
                fullWidth
                size="lg"
                disabled={!selectedId || !name || !email}
                icon={<ArrowRight size={16} strokeWidth={1.5} />}
              >
                Prepare Enrollment Request
              </Button>
              <p className="mt-4 text-2xs text-ink-subtle text-center leading-relaxed">
                This opens an email to send us your interest. No payment or reservation occurs until we confirm details with you.
              </p>
            </Card>
          </div>
        </form>
      </div>
    </Section>
  );
}
