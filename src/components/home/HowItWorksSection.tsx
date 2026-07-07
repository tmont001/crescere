import { ClipboardCheck, Users, Video, MessageSquareText } from 'lucide-react';
import { Section, SectionHeader, Reveal, StaggerContainer, StaggerItem } from '@/components/ui';

interface Step {
  n: string;
  title: string;
  description: string;
  icon: typeof ClipboardCheck;
}

const STEPS: Step[] = [
  {
    n: '01',
    title: 'Take a quick placement test',
    description: 'Five minutes, four areas of skill, one clear recommendation.',
    icon: ClipboardCheck,
  },
  {
    n: '02',
    title: 'Join a small cohort',
    description: 'Fixed start date. 5–12 learners at your level. No solo grind.',
    icon: Users,
  },
  {
    n: '03',
    title: 'Attend live sessions',
    description: 'Two hours per week with an instructor. Structured, speaking-first.',
    icon: Video,
  },
  {
    n: '04',
    title: 'Start speaking confidently',
    description: 'Leave the program holding real conversations — not just phrases.',
    icon: MessageSquareText,
  },
];

export function HowItWorksSection() {
  return (
    <Section size="md">
      <Reveal>
        <SectionHeader
          eyebrow="How it works"
          title="A clear path from interested to fluent."
          description="No ladders of lessons. No app streaks. Just four steps, built for accountability."
        />
      </Reveal>

      <StaggerContainer
        className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0"
        staggerDelay={0.12}
      >
        {STEPS.map((step, idx) => (
          <StaggerItem key={step.n}>
            <StepItem step={step} isLast={idx === STEPS.length - 1} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

function StepItem({ step, isLast }: { step: Step; isLast: boolean }) {
  const Icon = step.icon;
  return (
    <div className="relative md:px-6 md:border-r md:border-line md:last:border-r-0 md:first:pl-0 overflow-hidden">
      {/* Ghost step number — decorative, desktop only */}
      <div
        aria-hidden
        className="hidden md:block absolute top-0 right-2 select-none pointer-events-none z-0"
      >
        <span className="font-display font-light text-[5.5rem] leading-none text-ink/[0.06]">
          {step.n}
        </span>
      </div>

      {/* Connector arrow (desktop only) */}
      {!isLast && (
        <div className="hidden md:block absolute top-6 right-[-9px] z-10">
          <div className="h-4 w-4 rounded-full bg-paper-raised border border-accent/30 flex items-center justify-center">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="text-accent">
              <path d="M2 1L6 4L2 7" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      )}

      <div className="relative z-10 flex items-start gap-4 md:flex-col md:gap-0">
        <div className="shrink-0 md:mb-8">
          {/* Filled icon container — no border, accent-soft background */}
          <div className="h-12 w-12 rounded-full bg-accent-soft flex items-center justify-center">
            <Icon size={20} strokeWidth={1.25} className="text-accent" />
          </div>
        </div>
        <div className="md:mt-0">
          <p className="font-mono text-2xs uppercase tracking-widest text-ink-subtle tabular mb-3">
            Step {step.n}
          </p>
          <h3 className="font-display text-xl md:text-2xl text-ink leading-tight mb-2">{step.title}</h3>
          <p className="text-[0.9375rem] text-ink-muted leading-relaxed">{step.description}</p>
        </div>
      </div>
    </div>
  );
}
