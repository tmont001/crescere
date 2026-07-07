import {
  Video,
  Users,
  BookOpen,
  Mic,
  MessageCircle,
  Monitor,
  type LucideIcon,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Section, SectionHeader, Reveal } from '@/components/ui';

type IconVariant = 'accent' | 'highlight';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  iconVariant: IconVariant;
}

const FEATURES: Feature[] = [
  {
    icon: Video,
    title: '24 live sessions',
    description: 'Two 1-hour sessions every week for twelve weeks. Recordings available if you miss one.',
    iconVariant: 'accent',
  },
  {
    icon: Users,
    title: 'Small group learning',
    description: 'Cohorts capped at 12 students, minimum 5. Most run between five and ten.',
    iconVariant: 'accent',
  },
  {
    icon: BookOpen,
    title: 'Guided curriculum',
    description: 'A structured syllabus with weekly goals, vocabulary, and practice materials.',
    iconVariant: 'accent',
  },
  {
    icon: Mic,
    title: 'Speaking-first approach',
    description: 'You speak in every session. Grammar supports the talking — not the other way around.',
    iconVariant: 'highlight',
  },
  {
    icon: MessageCircle,
    title: 'Ongoing support',
    description: 'Weekly practice assignments and direct access to your instructor between sessions.',
    iconVariant: 'highlight',
  },
  {
    icon: Monitor,
    title: 'Live on Google Meet',
    description: 'Sessions run on Google Meet. No special software — just a webcam, mic, and internet connection.',
    iconVariant: 'accent',
  },
];

const iconContainerClass: Record<IconVariant, string> = {
  accent: 'bg-accent-soft text-accent',
  highlight: 'bg-highlight-soft text-ink',
};

export function WhatYouGetSection() {
  return (
    <Section variant="sunken" size="md">
      <Reveal variant="blur">
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
      </Reveal>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-md overflow-hidden">
        {FEATURES.map((f, index) => (
          <FeatureTile key={f.title} {...f} index={index} />
        ))}
      </div>
    </Section>
  );
}

function FeatureTile({
  icon: Icon,
  title,
  description,
  iconVariant,
  index,
}: Feature & { index: number }) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className="bg-paper p-8 flex flex-col gap-4 hover:bg-paper-raised transition-colors duration-300"
      initial={{ opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 16, filter: prefersReduced ? 'blur(0px)' : 'blur(5px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: prefersReduced ? 0 : 0.5,
        delay: prefersReduced ? 0 : index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className={`h-11 w-11 rounded-md flex items-center justify-center shrink-0 ${iconContainerClass[iconVariant]}`}>
        <Icon size={18} strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="font-display text-xl text-ink leading-snug mb-2">{title}</h3>
        <p className="text-[0.9375rem] text-ink-muted leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
