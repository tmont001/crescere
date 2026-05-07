import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button, Badge } from '@/components/ui';
import { Textarea } from '@/components/ui/Textarea';

interface WritingCardProps {
  prompt: string;
  onSubmit: (responseText: string) => void;
  onSkip: () => void;
}

export function WritingCard({ prompt, onSubmit, onSkip }: WritingCardProps) {
  const [text, setText] = useState('');

  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const canSubmit = text.trim().length > 0;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-2xs uppercase tracking-widest text-ink-subtle">
          Part 4 of 5
        </span>
        <Badge variant="outline" size="sm">
          Writing
        </Badge>
      </div>

      {/* Thin divider standing in for a progress bar — writing has no per-question progress. */}
      <div className="w-full h-1.5 bg-paper-sunken rounded-full overflow-hidden mb-10">
        <div className="h-full w-full bg-accent rounded-full" />
      </div>

      <h2 className="font-display text-2xl md:text-3xl text-ink leading-snug mb-3">
        Writing prompt
      </h2>
      <p className="text-ink-muted leading-relaxed mb-8">
        {prompt}
      </p>

      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your response here…"
        rows={10}
        autoFocus
      />

      {/* Word count */}
      <p className="mt-2 text-right text-sm text-ink-subtle tabular">
        {wordCount} {wordCount === 1 ? 'word' : 'words'}
      </p>

      <div className="mt-8 flex flex-col items-end gap-4">
        <Button
          onClick={() => onSubmit(text)}
          disabled={!canSubmit}
          size="lg"
          icon={<ArrowRight size={16} strokeWidth={1.5} />}
        >
          Submit Response
        </Button>

        <button
          type="button"
          onClick={onSkip}
          className="text-sm text-ink-muted hover:text-ink transition-colors"
        >
          Skip this section →
        </button>
      </div>
    </div>
  );
}
