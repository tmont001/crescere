import { ArrowRight, Video, Users } from 'lucide-react';
import { ButtonLink, Reveal, LanguageFlagTile } from '@/components/ui';

const MILESTONES = [
  { week: '1', label: 'Greetings, sounds, and first real conversations' },
  { week: '4', label: 'Ordering, navigating, everyday situations' },
  { week: '8', label: 'Past and future — talking about your life' },
  { week: '12', label: 'Speaking with real independence and confidence' },
] as const;

export function HeroSection() {
  return (
    <section className="relative pt-12 md:pt-20 pb-20 md:pb-32 overflow-hidden">
      {/* Atmospheric layer */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 88% 10%, rgb(var(--color-accent) / 0.13) 0%, transparent 60%), radial-gradient(ellipse 55% 50% at 4% 90%, rgb(var(--color-highlight) / 0.07) 0%, transparent 55%)',
        }}
      />

      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7 xl:col-span-6">
            <Reveal once={true} delay={0.05} duration={0.4}>
              <div className="inline-flex items-center gap-2 mb-8">
                <span className="h-px w-6 bg-accent" aria-hidden />
                <span className="eyebrow text-accent">Cohort-based language program</span>
              </div>
            </Reveal>

            <Reveal once={true} delay={0.1} duration={0.5}>
              <h1 className="display-1 text-ink max-w-3xl">
                Learn French or Spanish with{' '}
                <span className="italic font-normal text-accent">confidence</span> in 12 weeks
              </h1>
            </Reveal>

            <Reveal once={true} delay={0.18} duration={0.5}>
              <p className="mt-8 text-lg md:text-xl text-ink-muted leading-relaxed max-w-xl">
                Cohort-based courses designed for busy schedules. Small groups, live sessions, and real
                conversation — every week.
              </p>
            </Reveal>

            <Reveal once={true} delay={0.25} duration={0.45}>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <ButtonLink to="/placement" size="lg" icon={<ArrowRight size={18} strokeWidth={1.5} />}>
                  Take Placement Test
                </ButtonLink>
                <ButtonLink to="/courses" size="lg" variant="secondary">
                  View Courses
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal once={true} delay={0.32} duration={0.45}>
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
            <Reveal variant="blur" delay={0.2} duration={0.75} once={true}>
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
      {/* Ambient bloom */}
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

      {/* Decorative back card — depth layer */}
      <div
        aria-hidden
        className="absolute inset-3 rounded-md bg-accent-soft border border-accent/15"
        style={{ transform: 'rotate(-1.5deg) translateY(8px)', zIndex: 1 }}
      />

      {/* Main card */}
      <div
        className="relative rounded-md border border-line bg-paper-raised overflow-hidden"
        style={{
          zIndex: 10,
          boxShadow:
            '0 0 48px -8px rgb(var(--color-accent) / 0.14), 0 20px 40px -12px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.07)',
        }}
      >
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

        <div className="relative px-7 pt-7 pb-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <img
                src="/brand/logo-mark.png"
                alt=""
                aria-hidden
                className="block"
                style={{ height: 26, width: 'auto' }}
              />
              <span className="font-display text-lg font-normal tracking-tight text-ink">
                Crescere
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 border border-line bg-paper/60 rounded">
              <span className="h-1.5 w-1.5 rounded-full bg-accent/70" aria-hidden />
              <span className="text-[0.5625rem] uppercase tracking-wider text-ink-subtle">
                12-Week Program
              </span>
            </div>
          </div>

          {/* Language course cards — flag tile + pathway */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="rounded border border-accent/25 bg-accent-soft/70 p-4">
              <div className="flex items-center gap-2 mb-2.5">
                <LanguageFlagTile language="french" size="md" />
                <span className="font-display text-lg text-ink">French</span>
              </div>
              <p className="text-[0.5625rem] font-semibold uppercase tracking-wider text-accent">
                Beginner A1
              </p>
              <p className="text-[0.5625rem] text-ink-muted mt-1 tracking-wide">
                A1 → A2 → B1 pathway
              </p>
            </div>
            <div className="rounded border border-line bg-paper p-4">
              <div className="flex items-center gap-2 mb-2.5">
                <LanguageFlagTile language="spanish" size="md" />
                <span className="font-display text-lg text-ink">Spanish</span>
              </div>
              <p className="text-[0.5625rem] font-semibold uppercase tracking-wider text-ink-muted">
                Beginner A1
              </p>
              <p className="text-[0.5625rem] text-ink-muted mt-1 tracking-wide">
                A1 → A2 → B1 pathway
              </p>
            </div>
          </div>

          {/* Live session visual — replaces stats grid */}
          <div className="rounded border border-line bg-paper p-4 mb-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-md bg-accent-soft flex items-center justify-center shrink-0">
                  <Video size={14} strokeWidth={1.5} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-ink leading-tight">Live session</p>
                  <p className="text-[0.625rem] text-ink-muted mt-0.5">
                    Google Meet · instructor-led
                  </p>
                </div>
              </div>

              {/* Abstract cohort member circles */}
              <div className="flex -space-x-1.5" aria-hidden>
                <span className="h-6 w-6 rounded-full bg-accent-soft border-2 border-paper shrink-0" />
                <span
                  className="h-6 w-6 rounded-full border-2 border-paper shrink-0"
                  style={{ background: 'rgb(var(--color-highlight) / 0.2)' }}
                />
                <span
                  className="h-6 w-6 rounded-full border-2 border-paper shrink-0"
                  style={{ background: 'rgb(var(--color-accent) / 0.25)' }}
                />
                <span className="h-6 w-6 rounded-full bg-line border-2 border-paper shrink-0 flex items-center justify-center">
                  <Users size={9} strokeWidth={2} className="text-ink-subtle" />
                </span>
              </div>
            </div>

            {/* Week preview */}
            <div className="flex items-center gap-2 pt-2.5 border-t border-line/50">
              <span className="h-5 w-8 rounded-sm bg-accent-soft flex items-center justify-center shrink-0">
                <span className="font-mono font-medium text-accent" style={{ fontSize: '0.45rem' }}>
                  Wk 1
                </span>
              </span>
              <p className="text-[0.6125rem] text-ink-muted leading-snug">
                Greetings, sounds, and first real conversations
              </p>
            </div>
          </div>

          {/* 12-week path */}
          <div>
            <p className="eyebrow mb-3" style={{ fontSize: '0.5625rem' }}>Your 12-week path</p>
            <div className="space-y-2.5">
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

      {/* Live format info strip */}
      <div
        className="relative mx-3 mt-3 flex items-center gap-3 rounded-md border border-line bg-paper px-4 py-3.5 shadow-card-sm"
        style={{ zIndex: 15 }}
      >
        <div className="h-7 w-7 rounded bg-accent-soft flex items-center justify-center shrink-0">
          <Video size={13} strokeWidth={1.5} className="text-accent" />
        </div>
        <div>
          <p className="text-xs font-medium text-ink">Live on Google Meet · two sessions per week</p>
          <p className="text-[0.6875rem] text-ink-muted mt-0.5">
            Fixed start date · instructor-led · 5–12 students
          </p>
        </div>
      </div>
    </div>
  );
}
