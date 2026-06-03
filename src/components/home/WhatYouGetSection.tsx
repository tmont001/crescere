import {
  Video,
  Users,
  BookOpen,
  Mic,
  MessageCircle,
  Monitor,
  type LucideIcon,
} from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: Video,
    title: '24 live sessions',
    description: 'Two 1-hour sessions every week for twelve weeks. Recordings available if you miss one.',
  },
  {
    icon: Users,
    title: 'Small group learning',
    description: 'Cohorts capped at 12 students, minimum 5. Most run between five and ten.',
  },
  {
    icon: BookOpen,
    title: 'Guided curriculum',
    description: 'A structured syllabus with weekly goals, vocabulary, and practice materials.',
  },
  {
    icon: Mic,
    title: 'Speaking-first approach',
    description: 'You speak in every session. Grammar supports the talking — not the other way around.',
  },
  {
    icon: MessageCircle,
    title: 'Ongoing support',
    description: 'Weekly practice assignments and direct access to your instructor between sessions.',
  },
  {
    icon: Monitor,
    title: 'Live on Google Meet',
    description: 'Sessions run on Google Meet. No special software — just a webcam, mic, and internet connection.',
  },
];

export function WhatYouGetSection() {
  return (
    <Section variant="sunken" size="md">
      <SectionHeader
        eyebrow="What you get"
        title={
          <>
            Everything the program includes,
            <br />
            <span className="italic font-normal text-accent">nothing you don't need.</span>
          </>
        }
      />

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-md overflow-hidden">
        {FEATURES.map((f) => (
          <FeatureTile key={f.title} {...f} />
        ))}
      </div>
    </Section>
  );
}

function FeatureTile({ icon: Icon, title, description }: Feature) {
  return (
    <div className="bg-paper p-8 flex flex-col gap-4 hover:bg-paper-raised transition-colors duration-300">
      <div className="h-11 w-11 rounded border border-line bg-paper-raised flex items-center justify-center">
        <Icon size={18} strokeWidth={1.5} className="text-accent" />
      </div>
      <div>
        <h3 className="font-display text-xl text-ink leading-snug mb-2">{title}</h3>
        <p className="text-[0.9375rem] text-ink-muted leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
