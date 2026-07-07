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
      <Reveal variant="blur">
        <SectionHeader
          eyebrow="How it works"
          title="A clear path from interested to fluent."
          description="No ladders of lessons. No app streaks. Just four steps, built for accountability."
        />
      </Reveal>

      <StaggerContainer
        className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-4"
        staggerDelay={0.1}
      >
        {STEPS.map((step) => (
          <StaggerItem key={step.n}>
            <StepCard step={step} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

function StepCard({ step }: { step: Step }) {
  const Icon = step.icon;
  return (
    <div className="flex flex-col gap-5 p-7 bg-paper-raised border border-line rounded-md h-full shadow-card-sm">
      {/* Top row: icon left, step number right */}
      <div className="flex items-start justify-between">
        <div className="h-11 w-11 rounded-md bg-accent-soft flex items-center justify-center shrink-0">
          <Icon size={20} strokeWidth={1.25} className="text-accent" />
        </div>
        <span className="font-mono text-xs font-semibold text-ink-subtle">{step.n}</span>
      </div>

      {/* Content */}
      <div>
        <h3 className="font-display text-xl md:text-[1.25rem] text-ink leading-tight mb-2">
          {step.title}
        </h3>
        <p className="text-[0.9375rem] text-ink-muted leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
}
