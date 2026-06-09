import { GraduationCap, Mic, BookOpen, Users } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui';
import { cn } from '@/lib/cn';
import type { LucideIcon } from 'lucide-react';

interface CredibilityPoint {
  icon: LucideIcon;
  title: string;
  body: string;
}

const CREDIBILITY_POINTS: CredibilityPoint[] = [
  {
    icon: GraduationCap,
    title: 'Certified expertise',
    body: 'Instruction led by a New York State-certified French and Spanish educator with a master\'s degree in education.',
  },
  {
    icon: Mic,
    title: 'Live speaking practice',
    body: 'Students practice communicating in live sessions with real-time guidance and instructor feedback.',
  },
  {
    icon: BookOpen,
    title: 'A structured path forward',
    body: 'Each twelve-week course follows a purposeful progression rather than leaving students to decide what to study next.',
  },
  {
    icon: Users,
    title: 'Small-group accountability',
    body: 'Cohorts of 5 to 12 students provide consistent opportunities to participate, speak, and stay engaged.',
  },
];

export function SocialProofSection() {
  return (
    <Section variant="sunken" size="md">
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

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {CREDIBILITY_POINTS.map((point) => (
          <CredibilityCard key={point.title} {...point} />
        ))}
      </div>
    </Section>
  );
}

function CredibilityCard({ icon: Icon, title, body }: CredibilityPoint) {
  return (
    <div className={cn('p-8 bg-paper border border-line rounded-md flex flex-col gap-4')}>
      <div className="h-11 w-11 rounded border border-line bg-paper-raised flex items-center justify-center">
        <Icon size={18} strokeWidth={1.5} className="text-accent" />
      </div>
      <div>
        <h3 className="font-display text-xl text-ink leading-snug mb-2">{title}</h3>
        <p className="text-[0.9375rem] text-ink-muted leading-relaxed">{body}</p>
      </div>
    </div>
  );
}
