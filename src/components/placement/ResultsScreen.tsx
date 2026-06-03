import { ArrowRight, Check, Clock, RotateCcw } from 'lucide-react';
import { Card, Badge, ButtonLink } from '@/components/ui';
import { getCourseById } from '@/data/courses';
import { getNextCohortForCourse } from '@/data/cohorts';
import { formatCohortDate } from '@/lib/dates';
import type { CategoryBreakdown, PlacementResult } from '@/types';
import { cn } from '@/lib/cn';

interface ResultsScreenProps {
  result: PlacementResult;
  onReset: () => void;
}

function buildSummaryCopy(result: PlacementResult): {
  headline: string;
  subhead: string;
} {
  const perfect = result.score === result.totalQuestions;
  const noMisses = result.weaknesses.length === 0;

  if (perfect) {
    return {
      headline: 'Excellent performance.',
      subhead:
        'You answered every question correctly, so no major gaps were detected in this placement check.',
    };
  }

  if (result.level === 'C1') {
    return {
      headline: 'Advanced level.',
      subhead:
        "You handled high-difficulty grammar, idiomatic vocabulary, and nuanced reading well. You're operating at an advanced level.",
    };
  }

  if (result.level === 'B2') {
    return {
      headline: 'Upper-intermediate level.',
      subhead:
        'You navigate complex tenses, subordinate clauses, and unfamiliar contexts with confidence.',
    };
  }

  if (result.level === 'B1') {
    return {
      headline: 'Solid intermediate level.',
      subhead:
        'You can hold extended conversations and read longer passages — this is where most learners start to feel real fluency take hold.',
    };
  }

  if (result.level === 'A2') {
    return {
      headline: 'Working foundation.',
      subhead:
        'You have the basics in place and can handle everyday situations — the next step is rounding out tenses and broader vocabulary.',
    };
  }

  // A1
  return {
    headline: 'Beginner level — and that is a great place to start.',
    subhead:
      noMisses
        ? 'A1 covers everything you need to start using the language with confidence.'
        : "Don't read too much into specific misses at this stage — A1 is built to fill these in carefully.",
  };
}

const CONTACT_EMAIL = 'montanarowl@gmail.com';

export function ResultsScreen({ result, onReset }: ResultsScreenProps) {
  const course = result.recommendedCourseId
    ? getCourseById(result.recommendedCourseId)
    : null;
  const cohort = course ? getNextCohortForCourse(course.id) : undefined;

  const { headline, subhead } = buildSummaryCopy(result);
  const perfect = result.score === result.totalQuestions;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <Badge variant="accent" size="md" className="mb-6">
          Your Results
        </Badge>
        <h1 className="display-1 text-ink mb-4">
          Your level:{' '}
          <span className="italic font-normal text-accent">{result.level}</span>
        </h1>
        <p className="text-lg text-ink-muted max-w-2xl mx-auto">
          <span className="text-ink font-medium">{headline}</span> {subhead}
        </p>
      </div>

      {/* Score summary */}
      <Card variant="raised" className="p-8 mb-6">
        <div className="grid grid-cols-3 gap-6 pb-8 border-b border-line">
          <Metric label="CEFR Level" value={result.level} highlight />
          <Metric label="Score" value={`${result.scorePercent}%`} />
          <Metric label="Correct" value={`${result.score} / ${result.totalQuestions}`} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          <div>
            <p className="eyebrow text-accent mb-4">Strongest areas</p>
            {result.strengths.length > 0 ? (
              <ul className="space-y-2">
                {result.strengths.map((s) => (
                  <li key={s} className="flex items-start gap-2.5">
                    <span className="mt-1 h-4 w-4 rounded-full bg-accent-soft flex items-center justify-center shrink-0">
                      <Check size={10} strokeWidth={2.5} className="text-accent" />
                    </span>
                    <span className="text-ink">{s}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-ink-muted leading-relaxed">
                No single category stood out as a clear strength on this run — your
                cohort will help you build that foundation evenly.
              </p>
            )}
          </div>
          <div>
            <p className="eyebrow text-highlight mb-4">Areas to improve</p>
            {result.weaknesses.length > 0 ? (
              <ul className="space-y-2">
                {result.weaknesses.map((w) => (
                  <li key={w} className="flex items-start gap-2.5">
                    <span className="mt-1 h-4 w-4 rounded-full bg-highlight-soft flex items-center justify-center shrink-0 text-highlight text-xs font-bold">
                      →
                    </span>
                    <span className="text-ink">{w}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-ink-muted leading-relaxed">
                {perfect
                  ? 'No gaps surfaced on this placement — every category came back clean.'
                  : 'Nothing flagged as a clear weakness. Your misses were spread evenly rather than concentrated in one category.'}
              </p>
            )}
          </div>
        </div>

        {/* Category breakdown */}
        {result.categoryBreakdown.length > 0 && (
          <div className="pt-8 mt-8 border-t border-line">
            <p className="eyebrow mb-4">Category breakdown</p>
            <div className="space-y-2.5">
              {result.categoryBreakdown.map((cat) => (
                <CategoryRow key={cat.category} cat={cat} />
              ))}
            </div>
          </div>
        )}
      </Card>

      {/* Review-pending notice */}
      {result.reviewNeeded && (
        <Card variant="default" className="p-6 mb-6 border border-accent/30">
          <div className="flex items-start gap-3">
            <div className="shrink-0 h-8 w-8 rounded-full bg-accent-soft flex items-center justify-center">
              <Clock size={14} strokeWidth={1.5} className="text-accent" />
            </div>
            <div>
              <p className="font-display text-base text-ink mb-1">Open-ended sections noted</p>
              <p className="text-sm text-ink-muted leading-relaxed">
                Your{' '}
                {result.reviewSections.join(' and ')}{' '}
                {result.reviewSections.length === 1 ? 'response has' : 'responses have'} been
                recorded locally. The CEFR level above reflects your auto-scored results.
                Mention your open-ended responses when you contact us so we can provide additional feedback.
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* Recommendation — A1/A2/B1: matching course; B2/C1: above offered levels */}
      {course ? (
        <Card variant="default" className="p-8 mb-6 border-2 border-ink">
          <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
            <div className="flex-1">
              <p className="eyebrow text-accent mb-3">Recommended for you</p>
              <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight mb-3">
                {course.outcome}
              </h2>
              <p className="text-ink-muted leading-relaxed mb-5 max-w-xl">
                {course.description}
              </p>
              {cohort ? (
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm pt-4 border-t border-line">
                  <span className="text-ink-muted">
                    Next cohort:{' '}
                    <span className="text-ink font-medium">
                      {formatCohortDate(cohort.startDate)}
                    </span>
                  </span>
                  <span
                    className={cn(
                      'text-ink-muted',
                      cohort.spotsRemaining <= 3 && 'text-highlight font-medium',
                    )}
                  >
                    <span className="tabular">{cohort.spotsRemaining}</span> spots left
                  </span>
                </div>
              ) : (
                <p className="text-sm text-ink-muted pt-4 border-t border-line">
                  No cohort dates are published yet — express interest and we will notify you when scheduling opens.
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2 w-full md:w-auto shrink-0">
              <ButtonLink
                to={`/enroll?course=${course.id}`}
                size="lg"
                icon={<ArrowRight size={16} strokeWidth={1.5} />}
              >
                Express Interest
              </ButtonLink>
              <ButtonLink to={`/courses/${course.id}`} size="lg" variant="secondary">
                View Course
              </ButtonLink>
            </div>
          </div>
        </Card>
      ) : (
        // B2 / C1 — above the offered group cohorts
        <Card variant="default" className="p-8 mb-6 border-2 border-ink">
          <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
            <div className="flex-1">
              <p className="eyebrow text-accent mb-3">
                {result.level === 'C1' ? 'Advanced level' : 'Above group cohort level'}
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight mb-3">
                You may be above our current group cohort levels.
              </h2>
              <p className="text-ink-muted leading-relaxed mb-3 max-w-xl">
                Our group cohorts currently focus on A1 through B1. Based on your{' '}
                <span className="text-ink font-medium">{result.level}</span>{' '}
                placement, a beginner-to-intermediate group course is unlikely to be the right fit.
              </p>
              <p className="text-ink-muted leading-relaxed max-w-xl">
                Contact us to discuss advanced options — including private instruction,
                conversation practice, or a plan tailored to where you already are.
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-auto shrink-0">
              <ButtonLink
                to="/contact"
                size="lg"
                icon={<ArrowRight size={16} strokeWidth={1.5} />}
              >
                Contact Us
              </ButtonLink>
              <ButtonLink to="/courses" size="lg" variant="secondary">
                See all courses
              </ButtonLink>
            </div>
          </div>
        </Card>
      )}

      {/* Save results prompt — honest, no fake email send */}
      <Card variant="default" className="p-8 mb-8">
        <div className="flex items-start gap-4">
          <div className="shrink-0 h-9 w-9 rounded-full bg-accent-soft flex items-center justify-center">
            <ArrowRight size={16} strokeWidth={1.5} className="text-accent" />
          </div>
          <div>
            <p className="font-display text-xl text-ink mb-1">Want to keep your results?</p>
            <p className="text-sm text-ink-muted mb-4">
              Screenshot this page or note your level ({result.level}) and recommended course before leaving. You can also contact us and mention your placement level — we will keep it on file for your enrollment.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`My Placement Result — ${result.level}`)}&body=${encodeURIComponent(`Hi,\n\nI completed the placement test and my result was ${result.level}.\n\nI would like to learn more about ${course ? course.title : 'your available courses'}.\n\nThank you.`)}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
            >
              Email us your result
              <ArrowRight size={14} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </Card>

      {/* Retake */}
      <div className="text-center">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors"
        >
          <RotateCcw size={14} strokeWidth={1.5} />
          Retake the placement test
        </button>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="text-center">
      <p className="eyebrow mb-2">{label}</p>
      <p
        className={cn(
          'font-display tabular tracking-tightest',
          highlight ? 'text-5xl text-accent' : 'text-4xl text-ink',
        )}
      >
        {value}
      </p>
    </div>
  );
}

function CategoryRow({ cat }: { cat: CategoryBreakdown }) {
  const pct = Math.round(cat.ratio * 100);
  const tone =
    cat.ratio >= 0.8 ? 'bg-accent' : cat.ratio >= 0.6 ? 'bg-ink/60' : 'bg-highlight';
  return (
    <div className="flex items-center gap-4 text-sm">
      <span className="w-44 shrink-0 text-ink">{cat.label}</span>
      <div className="flex-1 h-1.5 bg-paper-sunken rounded-full overflow-hidden">
        <div
          className={cn('h-full rounded-full transition-all', tone)}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="tabular text-ink-muted w-16 text-right shrink-0">
        {cat.correct}/{cat.total}
      </span>
    </div>
  );
}
