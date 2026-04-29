import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Section, Card, Badge, Input, Button, ButtonLink } from '@/components/ui';
import { getUpcomingCohorts } from '@/data/cohorts';
import { getCourseById } from '@/data/courses';
import { formatCohortDate } from '@/lib/dates';
import { cn } from '@/lib/cn';

export function EnrollPage() {
  const cohorts = getUpcomingCohorts();
  const [selectedCohortId, setSelectedCohortId] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [referral, setReferral] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const selectedCohort = cohorts.find((c) => c.id === selectedCohortId);
  const selectedCourse = selectedCohort ? getCourseById(selectedCohort.courseId) : undefined;
  const hasDiscount = referral.trim().length > 0;
  const price = hasDiscount ? 1125 : 1200;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedCohortId || !email || !name) return;
    setSubmitted(true);
  }

  if (submitted && selectedCohort && selectedCourse) {
    return (
      <Section size="md" variant="default">
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-accent text-paper mb-8">
            <Check size={24} strokeWidth={1.5} />
          </div>
          <h1 className="display-2 text-ink mb-6">You're enrolled.</h1>
          <p className="text-lg text-ink-muted leading-relaxed mb-10">
            A confirmation email is on its way to <span className="text-ink">{email}</span>. Your Learning Dashboard will unlock one week before your cohort begins.
          </p>
          <Card variant="raised" className="p-6 text-left mb-10">
            <p className="eyebrow mb-2">Your cohort</p>
            <p className="font-display text-2xl text-ink mb-1">{selectedCourse.title}</p>
            <p className="text-ink-muted">Starts {formatCohortDate(selectedCohort.startDate)} · {selectedCohort.schedule}</p>
          </Card>
          <ButtonLink to="/dashboard" size="lg" icon={<ArrowRight size={16} strokeWidth={1.5} />}>
            View Dashboard
          </ButtonLink>
        </div>
      </Section>
    );
  }

  if (cohorts.length === 0) {
    return <Navigate to="/courses" replace />;
  }

  return (
    <Section size="sm" variant="default">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-4">Enroll</p>
          <h1 className="display-1 text-ink mb-6">
            Reserve your <span className="italic font-normal text-accent">cohort.</span>
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed">
            Pick a cohort, confirm your details, and you're set. A seat is held for you the moment you enroll.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <p className="eyebrow mb-4">Step 1 — Choose a cohort</p>
              <div className="space-y-2">
                {cohorts.map((cohort) => {
                  const course = getCourseById(cohort.courseId);
                  if (!course) return null;
                  const selected = selectedCohortId === cohort.id;
                  return (
                    <button
                      key={cohort.id}
                      type="button"
                      onClick={() => setSelectedCohortId(cohort.id)}
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
                <Input
                  label="Referral code (optional)"
                  name="referral"
                  value={referral}
                  onChange={(e) => setReferral(e.target.value)}
                  placeholder="Get $75 off with a friend's code"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Card variant="raised" className="p-7 sticky top-24">
              <p className="eyebrow mb-6">Order summary</p>

              {selectedCohort && selectedCourse ? (
                <div className="pb-5 mb-5 border-b border-line">
                  <p className="font-display text-xl text-ink leading-tight mb-1">
                    {selectedCourse.title}
                  </p>
                  <p className="text-sm text-ink-muted">Starts {formatCohortDate(selectedCohort.startDate)}</p>
                </div>
              ) : (
                <div className="pb-5 mb-5 border-b border-line">
                  <p className="text-sm text-ink-muted italic">Select a cohort to continue</p>
                </div>
              )}

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-ink-muted">10-Week Program</span>
                  <span className="text-ink tabular">$1,200</span>
                </div>
                {hasDiscount && (
                  <div className="flex justify-between">
                    <span className="text-accent">Referral discount</span>
                    <span className="text-accent tabular">−$75</span>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-baseline pt-5 mt-5 border-t border-line">
                <span className="text-ink">Total</span>
                <span className="font-display text-3xl text-ink tabular">${price.toLocaleString()}</span>
              </div>

              <Button
                type="submit"
                fullWidth
                size="lg"
                className="mt-6"
                disabled={!selectedCohortId || !email || !name}
                icon={<ArrowRight size={16} strokeWidth={1.5} />}
              >
                Complete Enrollment
              </Button>
              <p className="mt-4 text-2xs uppercase tracking-wider text-ink-subtle text-center">
                Refundable within first two sessions
              </p>
            </Card>
          </div>
        </form>
      </div>
    </Section>
  );
}
