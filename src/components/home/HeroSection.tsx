import { ArrowRight } from 'lucide-react';
import { ButtonLink } from '@/components/ui';

export function HeroSection() {
  return (
    <section className="relative pt-12 md:pt-20 pb-20 md:pb-32 overflow-hidden">
      {/* Section atmospheric layer */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 85% 15%, rgb(var(--color-accent) / 0.06) 0%, transparent 65%)',
        }}
      />

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

          {/* Right: brand panel */}
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

function BrandPanel() {
  return (
    <div className="relative max-w-lg mx-auto">
      {/* Luminous bloom — behind the card, primary dark-mode depth fix */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: '-20%',
          background:
            'radial-gradient(ellipse at 50% 45%, rgb(var(--color-accent) / 0.16) 0%, transparent 60%)',
          filter: 'blur(24px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Card */}
      <div
        className="relative rounded-md border border-line bg-paper-raised overflow-hidden"
        style={{
          zIndex: 10,
          boxShadow:
            '0 0 48px -8px rgb(var(--color-accent) / 0.12), 0 20px 40px -12px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.07)',
        }}
      >
        {/* Aurora wash */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: `
              radial-gradient(ellipse 70% 55% at 18% 18%, rgb(var(--color-accent) / 0.12), transparent 65%),
              radial-gradient(ellipse 55% 50% at 85% 88%, rgb(var(--color-highlight) / 0.09), transparent 60%)
            `,
          }}
        />

        {/* Top-edge accent line */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: 0,
            left: '15%',
            right: '15%',
            height: '1px',
            background:
              'linear-gradient(to right, transparent, rgb(var(--color-accent) / 0.35), transparent)',
          }}
        />

        <div className="relative px-10 py-16 md:px-14 md:py-20 flex flex-col items-center">
          {/* 1. Context label */}
          <p className="eyebrow text-ink-subtle" style={{ fontSize: '0.625rem' }}>
            Live lessons · French &amp; Spanish
          </p>

          {/* 2. Brand block */}
          <div className="mt-14 flex flex-col items-center gap-5">
            {/* Mark + wordmark */}
            <div className="flex items-center gap-3">
              <img
                src="/brand/logo-mark.png"
                alt=""
                aria-hidden
                className="block"
                style={{ height: 56, width: 'auto' }}
              />
              <span
                className="font-display font-normal tracking-tight text-ink"
                style={{ fontSize: '2.5rem', lineHeight: 1 }}
              >
                Crescere
              </span>
            </div>

            {/* Tagline */}
            <p className="eyebrow text-ink-muted" style={{ fontSize: '0.6875rem' }}>
              Where Fluency Grows
            </p>

            {/* Pronunciation */}
            <p className="font-display italic text-ink-muted" style={{ fontSize: '1.0625rem' }}>
              (kresh-eh-reh)
            </p>
          </div>

          {/* 3. Supporting descriptors */}
          <p
            className="mt-14 text-center text-ink-subtle"
            style={{ fontSize: '0.6875rem', lineHeight: 1.6, letterSpacing: '0.03em' }}
          >
            Conversation-first · Small cohorts · Speaking with confidence
          </p>
        </div>
      </div>
    </div>
  );
}
