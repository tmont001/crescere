import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button, ProgressBar, Badge, Input } from '@/components/ui';
import type { FillInQuestion } from '@/types';

interface FillInCardProps {
  question: FillInQuestion;
  currentIndex: number;
  total: number;
  onAnswer: (rawInput: string) => void;
}

const TYPE_LABELS: Record<FillInQuestion['type'], string> = {
  grammar: 'Grammar',
  vocabulary: 'Vocabulary',
};

export function FillInCard({ question, currentIndex, total, onAnswer }: FillInCardProps) {
  const [value, setValue] = useState('');

  // Clear input whenever the question changes.
  useEffect(() => {
    setValue('');
  }, [question.id]);

  function handleSubmit() {
    if (value.trim() === '') return;
    onAnswer(value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleSubmit();
  }

  const isLast = currentIndex + 1 >= total;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress header */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-2xs uppercase tracking-widest text-ink-subtle tabular">
          Question {String(currentIndex + 1).padStart(2, '0')} / {total}
        </span>
        <Badge variant="outline" size="sm">
          {TYPE_LABELS[question.type]}
        </Badge>
      </div>

      <ProgressBar value={currentIndex} max={total} />

      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          {question.context && (
            <div className="mb-6 p-5 bg-paper-sunken border-l-2 border-accent rounded-r">
              <p className="font-display italic text-lg text-ink-muted leading-relaxed">
                {question.context}
              </p>
            </div>
          )}

          <h2 className="font-display text-2xl md:text-3xl text-ink leading-snug mb-8">
            {question.prompt}
          </h2>

          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your answer…"
            autoFocus
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="none"
            spellCheck={false}
          />

          <div className="mt-10 flex justify-end">
            <Button
              onClick={handleSubmit}
              disabled={value.trim() === ''}
              size="lg"
              icon={<ArrowRight size={16} strokeWidth={1.5} />}
            >
              {isLast ? 'Next Section' : 'Next Question'}
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
