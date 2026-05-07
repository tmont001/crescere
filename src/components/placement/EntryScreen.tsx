import { useState } from 'react';
import { ArrowRight, Clock, Users, Zap } from 'lucide-react';
import { Button, Badge } from '@/components/ui';
import { cn } from '@/lib/cn';
import type { Language } from '@/types';

interface EntryScreenProps {
  onStart: (language: Language) => void;
}

export function EntryScreen({ onStart }: EntryScreenProps) {
  const [language, setLanguage] = useState<Language | null>(null);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <Badge variant="accent" size="md" className="mb-6">
          Placement Test
        </Badge>
        <h1 className="display-1 text-ink mb-6">
          Find your exact
          <br />
          <span className="italic font-normal text-accent">starting point.</span>
        </h1>
        <p className="text-lg text-ink-muted leading-relaxed max-w-xl mx-auto">
          Five parts across grammar, vocabulary, reading, writing, and speaking. You'll get a CEFR level (A1–C1), a per-category breakdown, and a recommended next step.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-10">
        <InfoCell icon={<Clock size={16} strokeWidth={1.5} />} label="Duration" value="~25 min" />
        <InfoCell icon={<Zap size={16} strokeWidth={1.5} />} label="Format" value="5 parts" />
        <InfoCell icon={<Users size={16} strokeWidth={1.5} />} label="Login" value="Not required" />
      </div>

      <div className="bg-paper-raised border border-line rounded-md p-8">
        <p className="eyebrow mb-5 text-center">Choose your language</p>
        <div className="grid grid-cols-2 gap-3 mb-8">
          <LanguageButton
            selected={language === 'french'}
            onClick={() => setLanguage('french')}
            flag="🇫🇷"
            label="French"
          />
          <LanguageButton
            selected={language === 'spanish'}
            onClick={() => setLanguage('spanish')}
            flag="🇪🇸"
            label="Spanish"
          />
        </div>

        <Button
          onClick={() => language && onStart(language)}
          disabled={!language}
          fullWidth
          size="lg"
          icon={<ArrowRight size={16} strokeWidth={1.5} />}
        >
          Begin Placement Test
        </Button>

        <p className="mt-5 text-center text-2xs uppercase tracking-wider text-ink-subtle">
          No login, no email — not unless you want your results saved
        </p>
      </div>
    </div>
  );
}

function InfoCell({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="text-center p-5 bg-paper-raised border border-line rounded-md">
      <div className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-accent-soft text-accent mb-3">
        {icon}
      </div>
      <p className="text-2xs uppercase tracking-wider text-ink-subtle mb-1">{label}</p>
      <p className="font-display text-lg text-ink">{value}</p>
    </div>
  );
}

function LanguageButton({
  selected,
  onClick,
  flag,
  label,
}: {
  selected: boolean;
  onClick: () => void;
  flag: string;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'py-6 rounded border text-center transition-all',
        selected
          ? 'border-accent bg-accent-soft'
          : 'border-line bg-paper hover:border-ink/40',
      )}
    >
      <div className="text-3xl mb-2" aria-hidden>
        {flag}
      </div>
      <p className="font-display text-lg text-ink">{label}</p>
    </button>
  );
}
