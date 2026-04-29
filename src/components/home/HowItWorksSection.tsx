import { ClipboardCheck, Users, Video, MessageSquareText } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui';

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
      <SectionHeader
        eyebrow="How it works"
        title="A clear path from interested to fluent."
        description="No ladders of lessons. No app streaks. Just four steps, built for accountability."
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
        {STEPS.map((step, idx) => (
          <StepItem key={step.n} step={step} isLast={idx === STEPS.length - 1} />
        ))}
      </div>
    </Section>
  );
}

function StepItem({ step, isLast }: { step: Step; isLast: boolean }) {
  const Icon = step.icon;
  return (
    <div className="relative md:px-6 md:border-r md:border-line md:last:border-r-0 md:first:pl-0">
      {/* Connector arrow (desktop only) */}
      {!isLast && (
        <div className="hidden md:block absolute top-6 right-[-7px] z-10">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-ink-subtle">
            <path d="M5 3 L9 7 L5 11" stroke="currentColor" strokeWidth="1.25" fill="none" />
          </svg>
        </div>
      )}

      <div className="flex items-start gap-4 md:flex-col md:gap-0">
        <div className="shrink-0 md:mb-8">
          <div className="h-12 w-12 rounded-full border border-line bg-paper-raised flex items-center justify-center">
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
