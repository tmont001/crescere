import { ArrowRight, Check } from 'lucide-react';
import { Section, ButtonLink } from '@/components/ui';

const CREDENTIAL_HIGHLIGHTS = [
  'New York State certified in French and Spanish, grades 7–12',
  'More than 15 years of teaching experience',
  'Master\'s degree in education (M.S.T.)',
  'AP-level and college-level teaching experience',
];

export function InstructorSection() {
  return (
    <Section variant="default" size="md">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-4">
          <div className="relative max-w-xs mx-auto lg:mx-0">
            <img
              src="/images/thomas-montanaro-headshot.jpg"
              alt="Thomas Montanaro, founder and instructor of Crescere"
              className="w-full rounded-md object-cover object-top"
              style={{ aspectRatio: '4/5', maxHeight: '480px' }}
            />
          </div>
        </div>

        <div className="lg:col-span-8">
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
        </div>
      </div>
    </Section>
  );
}
