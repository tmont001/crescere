import { ArrowRight } from 'lucide-react';
import { Section, ButtonLink, Reveal } from '@/components/ui';

export function FinalCTASection() {
  return (
    <Section size="lg" variant="default" className="paper-texture">
      {/* Atmospheric radial wash — centered spotlight, noticeably stronger */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 80% at 50% 50%, rgb(var(--color-accent) / 0.12) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 18% 18%, rgb(var(--color-accent) / 0.05) 0%, transparent 55%)',
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative">
        <Reveal>
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
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-8 text-lg md:text-xl text-ink-muted leading-relaxed max-w-xl mx-auto">
            Take the placement test and get a clear recommendation based on your current level. Five minutes, no login required.
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
            <ButtonLink to="/placement" size="lg" icon={<ArrowRight size={18} strokeWidth={1.5} />}>
              Start Placement Test
            </ButtonLink>
            <ButtonLink to="/courses" size="lg" variant="secondary">
              View Courses
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
