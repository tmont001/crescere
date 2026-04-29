import { Section } from '@/components/ui';
import { usePlacementEngine } from '@/hooks/usePlacementEngine';
import { EntryScreen } from '@/components/placement/EntryScreen';
import { QuestionCard } from '@/components/placement/QuestionCard';
import { ResultsScreen } from '@/components/placement/ResultsScreen';

export function PlacementPage() {
  const engine = usePlacementEngine();

  return (
    <Section size="sm" variant="sunken">
      {engine.phase === 'entry' && <EntryScreen onStart={engine.startTest} />}

      {engine.phase === 'questions' && engine.currentQuestion && (
        <QuestionCard
          question={engine.currentQuestion}
          currentIndex={engine.currentIndex}
          totalQuestions={engine.totalQuestions}
          onAnswer={engine.answerQuestion}
        />
      )}

      {engine.phase === 'results' && engine.result && (
        <ResultsScreen result={engine.result} onReset={engine.reset} />
      )}
    </Section>
  );
}
