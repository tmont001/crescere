import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button, ProgressBar, Badge } from '@/components/ui';
import { RadioOption } from '@/components/ui/RadioOption';
import type { ReadingPassage } from '@/types';

interface ReadingCardProps {
  passage: ReadingPassage;
  /** Index of the question currently being answered within this passage. */
  currentQuestionIndex: number;
  /** True when this is the last passage in the full reading section. */
  isLastPassage: boolean;
  onAnswer: (selectedIndex: number) => void;
}

export function ReadingCard({ passage, currentQuestionIndex, isLastPassage, onAnswer }: ReadingCardProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const question = passage.questions[currentQuestionIndex];
  const totalInPassage = passage.questions.length;

  // Clear selection when the question changes.
  useEffect(() => {
    setSelected(null);
  }, [question?.id]);

  if (!question) return null;

  function handleSubmit() {
    if (selected === null) return;
    onAnswer(selected);
  }

  const isLastInPassage = currentQuestionIndex + 1 >= totalInPassage;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress header */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-2xs uppercase tracking-widest text-ink-subtle tabular">
          Question {String(currentQuestionIndex + 1).padStart(2, '0')} / {totalInPassage}
        </span>
        <Badge variant="outline" size="sm">
          Reading
        </Badge>
      </div>

      <ProgressBar value={currentQuestionIndex} max={totalInPassage} />

      {/* Passage — always visible, not animated. */}
      <div className="mt-8 mb-8 p-5 bg-paper-sunken border-l-2 border-accent rounded-r">
        <p className="font-display italic text-lg text-ink-muted leading-relaxed whitespace-pre-line">
          {passage.passageText}
        </p>
      </div>

      {/* Question + options — animated between questions. */}
      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-2xl md:text-3xl text-ink leading-snug mb-8">
            {question.prompt}
          </h2>

          <div className="space-y-2.5">
            {question.options.map((option, idx) => (
              <RadioOption
                key={idx}
                label={option}
                checked={selected === idx}
                onSelect={() => setSelected(idx)}
                index={idx}
              />
            ))}
          </div>

          <div className="mt-10 flex justify-end">
            <Button
              onClick={handleSubmit}
              disabled={selected === null}
              size="lg"
              icon={<ArrowRight size={16} strokeWidth={1.5} />}
            >
              {!isLastInPassage
                ? 'Next Question'
                : isLastPassage
                  ? 'Next Section'
                  : 'Next Passage'}
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
