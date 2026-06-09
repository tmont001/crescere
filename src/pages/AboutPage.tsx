import { ArrowRight, Check } from 'lucide-react';
import { Section, SectionHeader, ButtonLink } from '@/components/ui';

export function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section size="sm" variant="default">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-px w-6 bg-accent" aria-hidden />
            <span className="eyebrow text-accent">About Crescere</span>
          </div>
          <h1 className="display-1 text-ink">
            Built for the people apps
            <br />
            <span className="italic font-normal text-accent">keep failing.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-ink-muted leading-relaxed">
            Crescere exists because most language learning products optimize for retention
            metrics — not fluency. We built the opposite: a program designed around the one
            thing that actually works, which is showing up, speaking, and being accountable
            to real people.
          </p>
        </div>
      </Section>

      {/* Founder and Instructor */}
      <Section size="sm" variant="sunken">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <img
                src="/images/thomas-montanaro-headshot.jpg"
                alt="Thomas Montanaro, founder and instructor of Crescere"
                className="w-full rounded-md object-cover object-top mb-6"
                style={{ maxWidth: '320px', aspectRatio: '4/5' }}
              />
              <p className="font-display text-xl text-ink leading-tight">Thomas Montanaro</p>
              <p className="text-[0.9375rem] text-ink-muted mt-1">Founder & Instructor</p>
              <p className="eyebrow text-ink-subtle mt-1">M.S.T.</p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="h-px w-6 bg-accent" aria-hidden />
              <span className="eyebrow text-accent">Founder & Instructor</span>
            </div>

            <h2 className="display-2 text-ink mb-8">
              Fifteen years in the classroom.
              <br />
              <span className="italic font-normal text-accent">Now available online.</span>
            </h2>

            <div className="space-y-6 text-ink-muted leading-relaxed">
              <p>
                After more than fifteen years teaching languages in secondary schools and higher
                education, Thomas Montanaro founded Crescere to make serious language learning
                more personal, structured, and accessible outside of a traditional classroom.
              </p>
              <p>
                Throughout his career, Thomas has seen the difference between studying a language
                and actually learning to use it with confidence. Students make meaningful progress
                when they have expert guidance, consistent opportunities to speak, thoughtful
                feedback, and a community that keeps them engaged.
              </p>
              <p>
                Crescere brings that experience into a live online format: small cohorts,
                purposeful instruction, real conversation, and a clear path forward for learners
                who want more than an app or an unstructured tutoring session. The goal is simple:
                help students grow into confident, capable communicators in French or Spanish.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-line">
              <p className="eyebrow mb-6">Qualifications & background</p>
              <ul className="space-y-3">
                {CREDENTIALS.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 shrink-0 rounded-full bg-accent-soft flex items-center justify-center">
                      <Check size={10} strokeWidth={2.5} className="text-accent" />
                    </span>
                    <span className="text-[0.9375rem] text-ink">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Teaching philosophy */}
      <Section size="sm" variant="default">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <SectionHeader eyebrow="Philosophy" title="Structure over hype." />
          </div>
          <div className="md:col-span-8 space-y-8">
            <Pillar
              title="Structure is the feature."
              body="Fixed start dates, fixed schedules, fixed groups. The structure does the work your willpower can't be asked to. This is why cohorts work where apps fail."
            />
            <Pillar
              title="Speaking first, always."
              body="You cannot learn to speak a language without speaking it. Every live session is built around actual conversation — with a real instructor and real peers — not drills, gamified streaks, or passive content consumption."
            />
            <Pillar
              title="Small groups or it doesn't count."
              body="Every cohort is capped at twelve students. Most run between five and ten. You speak in every session. You're known by name. That's the only way this format earns its price."
            />
            <Pillar
              title="No noise in the curriculum."
              body="Twelve weeks. Twenty-four sessions. One clear syllabus. No endless library, no 'Pro' upsell, no AI tutor gimmicks. Everything in the program is there because it's necessary — or it's not in the program."
            />
          </div>
        </div>
      </Section>

      {/* Who it's for */}
      <Section size="sm" variant="sunken">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <SectionHeader eyebrow="Who it's for" title="Three kinds of learners." />
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 gap-5">
              <AudienceCard
                tag="Adults & Professionals"
                title="Adults and professionals"
                body="For learners studying French or Spanish for travel, work, personal growth, or cultural connection — and who want more structure, accountability, and progress than self-paced learning provides."
              />
              <AudienceCard
                tag="College Students"
                title="College students"
                body="For students seeking stronger speaking skills, guided practice, and support alongside formal language study. Whether you are preparing for study abroad or want real conversational confidence, the cohort format provides consistent practice with peers at a similar level."
              />
              <AudienceCard
                tag="High School & AP"
                title="High school and AP students"
                body="For motivated high school learners seeking academic reinforcement, AP-level support, stronger speaking confidence, or a more solid foundation for future study. Parents of high school students are welcome to reach out about course fit and academic support options."
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Bottom CTA */}
      <Section size="md" variant="default">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="display-2 text-ink">
            Still have questions?
            <br />
            <span className="italic font-normal text-accent">Start with the test.</span>
          </h2>
          <p className="mt-6 text-lg text-ink-muted leading-relaxed">
            Five minutes, no login, a clear recommendation based on your current level.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <ButtonLink to="/placement" size="lg" icon={<ArrowRight size={18} strokeWidth={1.5} />}>
              Take Placement Test
            </ButtonLink>
            <ButtonLink to="/faq" size="lg" variant="secondary">
              Read the FAQ
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}

const CREDENTIALS = [
  'New York State certified to teach French and Spanish, grades 7–12',
  'Master of Science for Teachers in Adolescence Education',
  'More than fifteen years of teaching experience across secondary and higher education',
  'AP-level and college-level teaching experience',
  'International teaching and study experience in China, France, Montréal, and Spain',
  'Has taught French, Spanish, English, and Mandarin',
];

function Pillar({ title, body }: { title: string; body: string }) {
  return (
    <div className="pb-8 border-b border-line last:border-b-0 last:pb-0">
      <h3 className="font-display text-2xl md:text-[1.75rem] text-ink leading-tight mb-3">{title}</h3>
      <p className="text-ink-muted leading-relaxed">{body}</p>
    </div>
  );
}

function AudienceCard({ tag, title, body }: { tag: string; title: string; body: string }) {
  return (
    <div className="p-7 bg-paper border border-line rounded-md flex gap-8 items-start">
      <span className="eyebrow text-accent shrink-0 w-28 mt-1">{tag}</span>
      <div>
        <h3 className="font-display text-xl md:text-2xl text-ink mb-2">{title}</h3>
        <p className="text-[0.9375rem] text-ink-muted leading-relaxed">{body}</p>
      </div>
    </div>
  );
}
