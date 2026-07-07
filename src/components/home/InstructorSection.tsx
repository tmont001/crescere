import { ArrowRight, Check } from 'lucide-react';
import { Section, ButtonLink, Reveal } from '@/components/ui';

const CREDENTIAL_HIGHLIGHTS = [
  'New York State certified in French and Spanish, grades 7–12',
  'More than 15 years of teaching experience',
  'Master\'s degree in education (M.S.T.)',
  'AP-level and college-level teaching experience',
];

export function InstructorSection() {
  return (
    <Section variant="default" size="md" className="paper-texture">
      {/* Atmospheric wash */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 70% at 18% 50%, rgb(var(--color-accent) / 0.08) 0%, transparent 65%), radial-gradient(ellipse 50% 60% at 82% 18%, rgb(var(--color-highlight) / 0.05) 0%, transparent 60%)',
        }}
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Photo column */}
        <Reveal variant="blur" className="lg:col-span-4">
          <div className="relative max-w-xs mx-auto lg:mx-0">
            {/* Offset accent frame behind the photo */}
            <div
              aria-hidden
              className="absolute rounded-md bg-accent-soft"
              style={{ inset: 0, transform: 'translate(10px, 10px)' }}
            />

            {/* Photo */}
            <img
              src="/images/thomas-montanaro-headshot.jpg"
              alt="Thomas Montanaro, founder and instructor of Crescere"
              className="relative w-full rounded-md object-cover object-top"
              style={{
                aspectRatio: '4/5',
                maxHeight: '480px',
                boxShadow:
                  '0 8px 28px -6px rgb(26 40 71 / 0.20), 0 4px 10px -3px rgb(26 40 71 / 0.12)',
              }}
            />

            {/* Credential badge overlay */}
            <div className="absolute bottom-0 left-0 right-0 mx-3 mb-3 bg-paper/92 backdrop-blur-sm border border-line/60 rounded px-4 py-3">
              <p className="eyebrow text-ink-subtle mb-0.5" style={{ fontSize: '0.5rem' }}>
                Certified Instructor · M.S.T.
              </p>
              <p className="font-display text-sm text-ink leading-tight">
                NYS French &amp; Spanish · 15+ years experience
              </p>
            </div>
          </div>
        </Reveal>

        {/* Copy column */}
        <div className="lg:col-span-8">
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="h-px w-6 bg-accent" aria-hidden />
              <span className="eyebrow text-accent">Your Instructor</span>
            </div>

            <h2 className="display-2 text-ink mb-6">
              Learn with an experienced,
              <br />
              <span className="italic font-normal text-accent">certified language educator.</span>
            </h2>

            <p className="text-lg text-ink-muted leading-relaxed mb-8">
              Crescere is founded and taught by Thomas Montanaro, M.S.T., a New York State-certified
              French and Spanish teacher with more than fifteen years of experience teaching languages
              across secondary and higher education settings. His background includes AP-level
              coursework, college instruction, and international teaching and study experience.
            </p>

            <p className="text-[0.9375rem] text-ink-muted leading-relaxed mb-10">
              At Crescere, he brings the structure of a strong classroom into a small, live online
              setting — so learners receive expert guidance, consistent speaking practice, and the
              support to make meaningful progress.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="space-y-3 mb-10">
              {CREDENTIAL_HIGHLIGHTS.map((credential) => (
                <li key={credential} className="flex items-start gap-3">
                  <span className="mt-1 h-4 w-4 shrink-0 rounded-full bg-accent-soft flex items-center justify-center">
                    <Check size={10} strokeWidth={2.5} className="text-accent" />
                  </span>
                  <span className="text-[0.9375rem] text-ink">{credential}</span>
                </li>
              ))}
            </ul>

            <ButtonLink
              to="/about"
              size="lg"
              icon={<ArrowRight size={16} strokeWidth={1.5} />}
            >
              Meet Your Instructor
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
