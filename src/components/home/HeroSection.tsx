import { ArrowRight } from 'lucide-react';
import { ButtonLink, Reveal } from '@/components/ui';

const MILESTONES = [
  { week: '1', label: 'Greetings, sounds, and first real conversations' },
  { week: '4', label: 'Ordering, navigating, everyday situations' },
  { week: '8', label: 'Past and future — talking about your life' },
  { week: '12', label: 'Speaking with real independence and confidence' },
] as const;

export function HeroSection() {
  return (
    <section className="relative pt-12 md:pt-20 pb-20 md:pb-32 overflow-hidden">
      {/* Section atmospheric layer — blue top-right, coral bottom-left */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 88% 10%, rgb(var(--color-accent) / 0.12) 0%, transparent 60%), radial-gradient(ellipse 55% 50% at 4% 90%, rgb(var(--color-highlight) / 0.07) 0%, transparent 55%)',
        }}
      />

      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7 xl:col-span-6">
            <Reveal delay={0.05} duration={0.4}>
              <div className="inline-flex items-center gap-2 mb-8">
                <span className="h-px w-6 bg-accent" aria-hidden />
                <span className="eyebrow text-accent">Cohort-based language program</span>
              </div>
            </Reveal>

            <Reveal delay={0.1} duration={0.5}>
              <h1 className="display-1 text-ink max-w-3xl">
                Learn French or Spanish with{' '}
                <span className="italic font-normal text-accent">confidence</span> in 12 weeks
              </h1>
            </Reveal>

            <Reveal delay={0.18} duration={0.5}>
              <p className="mt-8 text-lg md:text-xl text-ink-muted leading-relaxed max-w-xl">
                Cohort-based courses designed for busy schedules. Small groups, live sessions, and real
                conversation — every week.
              </p>
            </Reveal>

            <Reveal delay={0.25} duration={0.45}>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <ButtonLink to="/placement" size="lg" icon={<ArrowRight size={18} strokeWidth={1.5} />}>
                  Take Placement Test
                </ButtonLink>
                <ButtonLink to="/courses" size="lg" variant="secondary">
                  View Courses
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={0.32} duration={0.45}>
              <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 pt-8 border-t border-line">
                <Stat label="Weeks" value="12" />
                <Divider />
                <Stat label="Live sessions" value="24" />
                <Divider />
                <Stat label="Students / cohort" value="5–12" />
              </div>
            </Reveal>
          </div>

          {/* Right: course preview panel */}
          <div className="lg:col-span-5 xl:col-span-6 relative">
            <Reveal variant="blur" delay={0.2} duration={0.65}>
              <BrandPanel />
            </Reveal>
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
      {/* Luminous bloom behind the card */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: '-20%',
          background:
            'radial-gradient(ellipse at 50% 45%, rgb(var(--color-accent) / 0.18) 0%, transparent 60%)',
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
            '0 0 48px -8px rgb(var(--color-accent) / 0.14), 0 20px 40px -12px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.07)',
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
              radial-gradient(ellipse 70% 55% at 18% 18%, rgb(var(--color-accent) / 0.14), transparent 65%),
              radial-gradient(ellipse 55% 50% at 85% 88%, rgb(var(--color-highlight) / 0.10), transparent 60%)
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
              'linear-gradient(to right, transparent, rgb(var(--color-accent) / 0.45), transparent)',
          }}
        />

        <div className="relative px-8 pt-8 pb-8">
          {/* Header row */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <img
                src="/brand/logo-mark.png"
                alt=""
                aria-hidden
                className="block"
                style={{ height: 28, width: 'auto' }}
              />
              <span className="font-display text-xl font-normal tracking-tight text-ink">
                Crescere
              </span>
            </div>
            <span className="eyebrow text-ink-subtle" style={{ fontSize: '0.5625rem' }}>
              12-Week Program
            </span>
          </div>

          {/* Language pills */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-1.5 pl-2.5 pr-3 py-1.5 bg-accent-soft border border-accent/25 rounded">
              <span className="h-3 w-0.5 rounded-full bg-accent shrink-0" aria-hidden />
              <span className="text-accent font-medium text-xs">French</span>
            </div>
            <div className="flex items-center gap-1.5 pl-2.5 pr-3 py-1.5 bg-paper border border-line rounded">
              <span className="h-3 w-0.5 rounded-full bg-ink/30 shrink-0" aria-hidden />
              <span className="text-ink-muted font-medium text-xs">Spanish</span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 border border-line rounded-sm mb-6 overflow-hidden">
            <div className="py-4 text-center">
              <p className="font-display text-2xl text-ink leading-none mb-1">12</p>
              <p className="eyebrow" style={{ fontSize: '0.5625rem' }}>Weeks</p>
            </div>
            <div className="py-4 text-center border-x border-line">
              <p className="font-display text-2xl text-ink leading-none mb-1">24</p>
              <p className="eyebrow" style={{ fontSize: '0.5625rem' }}>Sessions</p>
            </div>
            <div className="py-4 text-center">
              <p className="font-display text-2xl text-ink leading-none mb-1">5–12</p>
              <p className="eyebrow" style={{ fontSize: '0.5625rem' }}>Students</p>
            </div>
          </div>

          {/* 12-week path preview */}
          <div>
            <p className="eyebrow mb-4" style={{ fontSize: '0.5625rem' }}>Your 12-week path</p>
            <div className="space-y-3">
              {MILESTONES.map((m, i) => (
                <div key={m.week} className="flex items-start gap-3">
                  <div className="shrink-0 flex flex-col items-center gap-1">
                    <span className="h-5 w-8 rounded-sm bg-accent-soft flex items-center justify-center">
                      <span className="font-mono font-medium text-accent" style={{ fontSize: '0.5rem' }}>
                        Wk {m.week}
                      </span>
                    </span>
                    {i < MILESTONES.length - 1 && (
                      <span aria-hidden className="w-px h-3 bg-line block" />
                    )}
                  </div>
                  <p className="text-xs text-ink-muted leading-snug pt-0.5">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
