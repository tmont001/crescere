import { Section, SectionHeader, ButtonLink } from '@/components/ui';
import { ArrowRight } from 'lucide-react';

export function AboutPage() {
  return (
    <>
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
            Crescere exists because most language learning products optimize for retention metrics — not fluency. We built the opposite: a program designed around the one thing that actually works, which is showing up, speaking, and being accountable to real people.
          </p>
        </div>
      </Section>

      <Section size="sm" variant="sunken">
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
              body="Ten weeks. Twenty sessions. One clear syllabus. No endless library, no 'Pro' upsell, no AI tutor gimmicks. Everything in the program is there because it's necessary — or it's not in the program."
            />
          </div>
        </div>
      </Section>

      <Section size="sm" variant="default">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <SectionHeader eyebrow="Who it's for" title="Three kinds of learners." />
          </div>
          <div className="md:col-span-8 grid grid-cols-1 gap-5">
            <AudienceCard
              tag="Primary"
              title="Busy professionals"
              body="You want to go from survival-level to conversational fluency without adding another app to your phone. Two evenings a week, ten weeks, real progress."
            />
            <AudienceCard
              tag="Secondary"
              title="Travelers"
              body="You visit a country often — for work, family, or pleasure — and you're tired of leaning on translation apps. You want to operate independently when you land."
            />
            <AudienceCard
              tag="Tertiary"
              title="Students"
              body="You're filling a gap between classes, preparing for study abroad, or making sure your classroom French or Spanish actually translates to real life."
            />
          </div>
        </div>
      </Section>

      <Section size="md" variant="sunken">
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
    <div className="p-7 bg-paper-raised border border-line rounded-md flex gap-8 items-start">
      <span className="eyebrow text-accent shrink-0 w-24 mt-1">{tag}</span>
      <div>
        <h3 className="font-display text-xl md:text-2xl text-ink mb-2">{title}</h3>
        <p className="text-[0.9375rem] text-ink-muted leading-relaxed">{body}</p>
      </div>
    </div>
  );
}
