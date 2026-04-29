import { ArrowRight } from 'lucide-react';
import { ButtonLink } from '@/components/ui';

export function HeroSection() {
  return (
    <section className="relative pt-12 md:pt-20 pb-20 md:pb-32 overflow-hidden">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7 xl:col-span-6">
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="h-px w-6 bg-accent" aria-hidden />
              <span className="eyebrow text-accent">Cohort-based language program</span>
            </div>

            <h1 className="display-1 text-ink max-w-3xl">
              Learn French or Spanish with{' '}
              <span className="italic font-normal text-accent">confidence</span> in 10 weeks
            </h1>

            <p className="mt-8 text-lg md:text-xl text-ink-muted leading-relaxed max-w-xl">
              Cohort-based courses designed for busy schedules. Small groups, live sessions, and real
              conversation — every week.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <ButtonLink to="/placement" size="lg" icon={<ArrowRight size={18} strokeWidth={1.5} />}>
                Take Placement Test
              </ButtonLink>
              <ButtonLink to="/courses" size="lg" variant="secondary">
                View Courses
              </ButtonLink>
            </div>

            {/* Tiny stat strip */}
            <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 pt-8 border-t border-line">
              <Stat label="Weeks" value="10" />
              <Divider />
              <Stat label="Live sessions" value="20" />
              <Divider />
              <Stat label="Students / cohort" value="5–12" />
            </div>
          </div>

          {/* Right: brand-led panel — approved lockup + pronunciation */}
          <div className="lg:col-span-5 xl:col-span-6 relative">
            <BrandPanel />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="eyebrow mb-0.5">{label}</p>
      <p className="font-display text-2xl text-ink tabular">{value}</p>
    </div>
  );
}

function Divider() {
  return <span className="hidden sm:inline-block h-8 w-px bg-line" aria-hidden />;
}

/**
 * Brand-led hero panel.
 *
 * Centers the approved Crescere horizontal lockup (mark + wordmark + tagline)
 * inside an elevated cream panel, with the pronunciation set in Fraunces italic
 * below. The lockup PNG is the approved asset — used as-is, no recoloring or
 * reinterpretation.
 */
function BrandPanel() {
  return (
    <div className="relative max-w-lg mx-auto">
      <div className="relative rounded-md border border-line bg-paper-raised overflow-hidden">
        {/* Subtle Aurora wash — kept faint so the lockup is the clear focal point */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 30% 30%, rgb(var(--color-accent) / 0.06), transparent 60%), radial-gradient(ellipse 50% 50% at 75% 80%, rgb(var(--color-highlight) / 0.06), transparent 60%)',
          }}
        />

        {/* Content */}
        <div className="relative px-10 py-16 md:px-14 md:py-20 flex flex-col items-center">
          <img
            src="/brand/logo.png"
            alt="Crescere — Where Fluency Grows"
            className="block w-full max-w-sm h-auto"
          />

          <p className="mt-10 font-display italic text-ink-muted text-lg md:text-xl tracking-wide">
            Crescere <span className="text-ink-subtle">(kresh-eh-reh)</span>
          </p>
        </div>
      </div>
    </div>
  );
}
