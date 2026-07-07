import { GraduationCap, Mic, BookOpen, Users } from 'lucide-react';
import { Section, SectionHeader, Reveal, StaggerContainer, StaggerItem } from '@/components/ui';
import type { LucideIcon } from 'lucide-react';

type IconVariant = 'accent' | 'highlight';

interface CredibilityPoint {
  icon: LucideIcon;
  title: string;
  body: string;
  iconVariant: IconVariant;
}

const CREDIBILITY_POINTS: CredibilityPoint[] = [
  {
    icon: GraduationCap,
    title: 'Certified expertise',
    body: 'Instruction led by a New York State-certified French and Spanish educator with a master\'s degree in education.',
    iconVariant: 'accent',
  },
  {
    icon: Mic,
    title: 'Live speaking practice',
    body: 'Students practice communicating in live sessions with real-time guidance and instructor feedback.',
    iconVariant: 'highlight',
  },
  {
    icon: BookOpen,
    title: 'A structured path forward',
    body: 'Each twelve-week course follows a purposeful progression rather than leaving students to decide what to study next.',
    iconVariant: 'accent',
  },
  {
    icon: Users,
    title: 'Small-group accountability',
    body: 'Cohorts of 5 to 12 students provide consistent opportunities to participate, speak, and stay engaged.',
    iconVariant: 'highlight',
  },
];

const iconContainerClass: Record<IconVariant, string> = {
  accent: 'bg-accent-soft text-accent',
  highlight: 'bg-highlight-soft text-ink',
};

export function SocialProofSection() {
  return (
    <Section variant="sunken" size="md">
      {/* Atmospheric radial wash — more visible than Phase 1 */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 75% 60% at 6% 38%, rgb(var(--color-accent) / 0.10) 0%, transparent 65%), radial-gradient(ellipse 60% 50% at 94% 78%, rgb(var(--color-highlight) / 0.08) 0%, transparent 60%)',
        }}
      />

      <Reveal variant="blur">
        <SectionHeader
          eyebrow="Why Crescere"
          title={
            <>
              Built on real
              <br />
              <span className="italic font-normal text-accent">teaching experience.</span>
            </>
          }
          description="Crescere is not an automated course library or a collection of generic video lessons. Every course is shaped by more than fifteen years of language teaching experience across secondary and higher education classrooms."
        />
      </Reveal>

      <StaggerContainer className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-5" staggerDelay={0.1}>
        {CREDIBILITY_POINTS.map((point) => (
          <StaggerItem key={point.title}>
            <CredibilityCard {...point} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

function CredibilityCard({ icon: Icon, title, body, iconVariant }: CredibilityPoint) {
  return (
    <div className="p-8 bg-paper border border-line rounded-md flex flex-col gap-4 shadow-card-sm h-full">
      <div
        className={`h-11 w-11 rounded-md flex items-center justify-center shrink-0 ${iconContainerClass[iconVariant]}`}
      >
        <Icon size={18} strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="font-display text-xl text-ink leading-snug mb-2">{title}</h3>
        <p className="text-[0.9375rem] text-ink-muted leading-relaxed">{body}</p>
      </div>
    </div>
  );
}
