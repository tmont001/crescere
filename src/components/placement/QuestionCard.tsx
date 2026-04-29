import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button, ProgressBar, Badge } from '@/components/ui';
import { RadioOption } from '@/components/ui/RadioOption';
import type { PlacementQuestion } from '@/types';

interface QuestionCardProps {
  question: PlacementQuestion;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (selectedIndex: number) => void;
}

const TYPE_LABELS: Record<PlacementQuestion['type'], string> = {
  grammar: 'Grammar',
  vocabulary: 'Vocabulary',
  reading: 'Reading',
  listening: 'Listening',
};

export function QuestionCard({ question, currentIndex, totalQuestions, onAnswer }: QuestionCardProps) {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    setSelected(null);
  }, [question.id]);

  function handleSubmit() {
    if (selected === null) return;
    onAnswer(selected);
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress header */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-2xs uppercase tracking-widest text-ink-subtle tabular">
          Question {String(currentIndex + 1).padStart(2, '0')} / {totalQuestions}
        </span>
        <Badge variant="outline" size="sm">
          {TYPE_LABELS[question.type]}
        </Badge>
      </div>

      <ProgressBar value={currentIndex} max={totalQuestions} />

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
              {currentIndex + 1 >= totalQuestions ? 'See Results' : 'Next Question'}
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
