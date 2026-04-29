import { ArrowRight } from 'lucide-react';
import { Section, ButtonLink } from '@/components/ui';

export function FinalCTASection() {
  return (
    <Section size="lg" variant="default">
      <div className="max-w-3xl mx-auto text-center relative">
        {/* Decorative marks */}
        <div className="mb-10 flex justify-center items-center gap-3" aria-hidden>
          <span className="h-px w-12 bg-line" />
          <span className="font-display italic text-ink-subtle text-xl">§</span>
          <span className="h-px w-12 bg-line" />
        </div>

        <h2 className="display-1 text-ink">
          Not sure where
          <br />
          to <span className="italic font-normal text-accent">start?</span>
        </h2>

        <p className="mt-8 text-lg md:text-xl text-ink-muted leading-relaxed max-w-xl mx-auto">
          Take the placement test and get a clear recommendation based on your current level. Five minutes, no login required.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
          <ButtonLink to="/placement" size="lg" icon={<ArrowRight size={18} strokeWidth={1.5} />}>
            Start Placement Test
          </ButtonLink>
          <ButtonLink to="/courses" size="lg" variant="secondary">
            View Courses
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
