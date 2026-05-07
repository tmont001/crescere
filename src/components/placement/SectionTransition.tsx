import { ArrowRight } from 'lucide-react';
import { Button, Badge } from '@/components/ui';
import type { PlacementSection } from '@/types';

interface SectionTransitionProps {
  /** The section the learner is about to begin (1–5). */
  nextSection: PlacementSection;
  title: string;
  description: string;
  onContinue: () => void;
}

/** Visual pip row showing overall test progress across 5 parts. */
function SectionPips({ active }: { active: PlacementSection }) {
  return (
    <div className="flex items-center gap-2 justify-center mb-8">
      {([1, 2, 3, 4, 5] as PlacementSection[]).map((s) => (
        <div
          key={s}
          className={[
            'h-1.5 rounded-full transition-all duration-300',
            s < active ? 'w-6 bg-accent' : s === active ? 'w-8 bg-accent' : 'w-4 bg-paper-sunken',
          ].join(' ')}
        />
      ))}
    </div>
  );
}

export function SectionTransition({
  nextSection,
  title,
  description,
  onContinue,
}: SectionTransitionProps) {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <SectionPips active={nextSection} />

      <Badge variant="accent" size="md" className="mb-6">
        Part {nextSection} of 5
      </Badge>

      <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight mb-4">
        {title}
      </h2>

      <p className="text-lg text-ink-muted leading-relaxed max-w-lg mx-auto mb-10">
        {description}
      </p>

      <Button
        onClick={onContinue}
        size="lg"
        icon={<ArrowRight size={16} strokeWidth={1.5} />}
      >
        Continue
      </Button>
    </div>
  );
}
