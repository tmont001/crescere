import { Mail } from 'lucide-react';
import { Section, ButtonLink } from '@/components/ui';

const CONTACT_EMAIL = 'montanarowl@gmail.com';

export function ContactPage() {
  return (
    <>
      <Section size="sm" variant="default">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-px w-6 bg-accent" aria-hidden />
            <span className="eyebrow text-accent">Contact</span>
          </div>
          <h1 className="display-1 text-ink mb-8">
            Get in touch.
            <br />
            <span className="italic font-normal text-accent">We'd love to hear from you.</span>
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed">
            Whether you have questions about our courses, need help choosing the right level, or are ready to express interest in enrollment — we are here to help. Reach out by email and we will respond personally.
          </p>
        </div>
      </Section>

      <Section size="sm" variant="sunken">
        <div className="max-w-2xl">
          <div className="flex items-start gap-6 p-8 bg-paper border border-line rounded-md">
            <div className="h-12 w-12 rounded-full bg-accent-soft flex items-center justify-center shrink-0">
              <Mail size={20} strokeWidth={1.5} className="text-accent" />
            </div>
            <div>
              <p className="font-display text-2xl text-ink mb-2">Email us</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-xl text-accent hover:underline break-all"
              >
                {CONTACT_EMAIL}
              </a>
              <p className="mt-3 text-[0.9375rem] text-ink-muted leading-relaxed">
                We typically respond within one business day.
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-6">
            <h2 className="font-display text-2xl text-ink">What you can ask us about</h2>
            <ul className="space-y-4">
              <ContactTopic
                title="Course selection"
                body="Not sure whether French or Spanish, A1 or A2? We can help you figure out which level and language is the right starting point."
              />
              <ContactTopic
                title="Placement questions"
                body="If you took the placement test and want a second opinion on your result, or if you have questions about what the levels mean in practice, just ask."
              />
              <ContactTopic
                title="Scheduling and cohort dates"
                body="We are currently forming cohorts for French and Spanish at A1, A2, and B1. Contact us to get on the interest list and be among the first to know when dates are confirmed."
              />
              <ContactTopic
                title="Enrollment interest"
                body="Ready to move forward? Email us the course and level you are interested in, along with your name and preferred schedule, and we will follow up with next steps — including payment details — before anything is confirmed."
              />
              <ContactTopic
                title="Advanced or private instruction"
                body="If your placement result was B2 or C1, our group cohorts may not be the right fit. Email us to discuss private instruction or advanced options."
              />
              <ContactTopic
                title="Parents of high school students"
                body="If you are a parent exploring language support or academic reinforcement for a high school or AP student, we welcome your questions about course fit, level placement, and what the program involves."
              />
            </ul>
          </div>
        </div>
      </Section>

      <Section size="md" variant="default">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="display-3 text-ink mb-4">Not sure where to start?</h2>
          <p className="text-ink-muted leading-relaxed mb-8">
            Take the five-minute placement test to get a clear level recommendation before reaching out.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <ButtonLink to="/placement" size="lg">
              Take Placement Test
            </ButtonLink>
            <ButtonLink to="/courses" size="lg" variant="secondary">
              View Courses
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}

function ContactTopic({ title, body }: { title: string; body: string }) {
  return (
    <li className="flex gap-4 p-5 bg-paper-raised border border-line rounded-md">
      <div className="h-2 w-2 rounded-full bg-accent shrink-0 mt-2" aria-hidden />
      <div>
        <p className="font-medium text-ink mb-1">{title}</p>
        <p className="text-[0.9375rem] text-ink-muted leading-relaxed">{body}</p>
      </div>
    </li>
  );
}
