import { Section } from '@/components/ui';
import { usePlacementEngine } from '@/hooks/usePlacementEngine';
import { EntryScreen } from '@/components/placement/EntryScreen';
import { QuestionCard } from '@/components/placement/QuestionCard';
import { FillInCard } from '@/components/placement/FillInCard';
import { ReadingCard } from '@/components/placement/ReadingCard';
import { WritingCard } from '@/components/placement/WritingCard';
import { VoiceCard } from '@/components/placement/VoiceCard';
import { SectionTransition } from '@/components/placement/SectionTransition';
import { ResultsScreen } from '@/components/placement/ResultsScreen';
import type { PlacementSection } from '@/types';

const SECTION_META: Record<PlacementSection, { title: string; description: string }> = {
  1: {
    title: 'Multiple Choice',
    description: 'Select the best answer for each question.',
  },
  2: {
    title: 'Fill-in-the-Blank',
    description: 'Complete each sentence by typing the missing word or phrase.',
  },
  3: {
    title: 'Reading Comprehension',
    description: 'Read each passage carefully, then answer the questions that follow.',
  },
  4: {
    title: 'Writing Prompt',
    description:
      'Write a short response in your target language. Aim for 3–5 sentences. You can skip this section.',
  },
  5: {
    title: 'Voice Note',
    description:
      'Record a short voice note in your target language. This section is optional and reviewed by a teacher — never auto-scored.',
  },
};

export function PlacementPage() {
  const engine = usePlacementEngine();

  return (
    <Section size="sm" variant="sunken">
      {/* ── Entry ── */}
      {engine.phase === 'entry' && <EntryScreen onStart={engine.startTest} />}

      {/* ── Questions (all five sections) ── */}
      {engine.phase === 'questions' && (
        <>
          {/* Section transition interstitial — shown between parts */}
          {engine.showingTransition && (
            <SectionTransition
              nextSection={engine.currentSection}
              title={SECTION_META[engine.currentSection].title}
              description={SECTION_META[engine.currentSection].description}
              onContinue={engine.advanceSection}
            />
          )}

          {/* Part 1 — adaptive multiple choice (unchanged) */}
          {!engine.showingTransition &&
            engine.currentSection === 1 &&
            engine.currentQuestion && (
              <QuestionCard
                question={engine.currentQuestion}
                currentIndex={engine.currentIndex}
                totalQuestions={engine.totalQuestions}
                onAnswer={engine.answerQuestion}
              />
            )}

          {/* Part 2 — fill-in-the-blank */}
          {!engine.showingTransition &&
            engine.currentSection === 2 &&
            engine.currentFillInQuestion && (
              <FillInCard
                question={engine.currentFillInQuestion}
                currentIndex={engine.fillInIndex}
                total={engine.totalFillIn}
                onAnswer={engine.answerFillIn}
              />
            )}

          {/* Part 3 — reading comprehension */}
          {!engine.showingTransition &&
            engine.currentSection === 3 &&
            engine.currentPassage && (
              <ReadingCard
                passage={engine.currentPassage}
                currentQuestionIndex={engine.passageQuestionIndex}
                isLastPassage={engine.isLastPassage}
                onAnswer={engine.answerReadingQuestion}
              />
            )}

          {/* Part 4 — writing prompt */}
          {!engine.showingTransition && engine.currentSection === 4 && (
            <WritingCard
              prompt={engine.writingPrompt}
              onSubmit={engine.submitWriting}
              onSkip={() => engine.submitWriting('')}
            />
          )}

          {/* Part 5 — voice note */}
          {!engine.showingTransition && engine.currentSection === 5 && (
            <VoiceCard onSubmit={engine.submitVoice} />
          )}
        </>
      )}

      {/* ── Results ── */}
      {engine.phase === 'results' && engine.result && (
        <ResultsScreen result={engine.result} onReset={engine.reset} />
      )}
    </Section>
  );
}
