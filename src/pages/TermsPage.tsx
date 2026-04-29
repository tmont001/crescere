import { Section } from '@/components/ui';

export function TermsPage() {
  return (
    <Section size="sm" variant="default">
      <div className="max-w-2xl mx-auto">
        <p className="eyebrow mb-4">Legal</p>
        <h1 className="display-2 text-ink mb-4">Terms of service</h1>
        <p className="text-ink-muted mb-12">Last updated: April 22, 2026</p>

        <div className="prose prose-lg space-y-10">
          <TermsSection number="1" title="Enrollment">
            <p>
              Enrolling in a cohort creates a binding agreement for the full 10-week program. Enrollment is confirmed when payment is received and a cohort seat is reserved in your name. Seats are limited and allocated on a first-come, first-served basis.
            </p>
          </TermsSection>

          <TermsSection number="2" title="Payment">
            <p>
              The program fee is $1,200 USD. Payment is due in full at the time of enrollment. Referral discounts are applied automatically at checkout when a valid referral code is entered. All payments are processed via third-party payment providers subject to their own terms.
            </p>
          </TermsSection>

          <TermsSection number="3" title="Refunds and cancellations">
            <p>
              You may request a full refund after attending the first two live sessions, no questions asked, provided the request is submitted in writing before your third session. After your third session, you may request a pro-rated credit toward a future cohort, valid for twelve months from the date of your original enrollment.
            </p>
          </TermsSection>

          <TermsSection number="4" title="Attendance and access">
            <p>
              While live attendance is strongly recommended, all sessions are recorded and made available in your Learning Dashboard within twenty-four hours. Access to all course materials is guaranteed for the full cohort duration and an additional thirty days afterward.
            </p>
          </TermsSection>

          <TermsSection number="5" title="Conduct">
            <p>
              All participants are expected to maintain a respectful, constructive environment in live sessions and community spaces. We reserve the right to remove any participant whose conduct materially disrupts the learning experience of others. Removals under this clause are not eligible for refund.
            </p>
          </TermsSection>

          <TermsSection number="6" title="Intellectual property">
            <p>
              All curriculum materials, recordings, and resources are the intellectual property of Crescere and are licensed to enrolled participants for personal, non-commercial use. Redistribution, resale, or public posting of any course material is prohibited.
            </p>
          </TermsSection>

          <TermsSection number="7" title="Changes">
            <p>
              We reserve the right to make reasonable changes to cohort scheduling, curriculum, or instruction personnel when necessary. Material changes will be communicated to affected learners in advance. If such changes materially alter the program, affected learners will be offered a refund or transfer at their option.
            </p>
          </TermsSection>

          <TermsSection number="8" title="Contact">
            <p>
              For any questions about these terms, reach out at{' '}
              <a
                href="mailto:hello@crescere.com"
                className="text-ink border-b border-line hover:border-accent hover:text-accent transition-colors"
              >
                hello@crescere.com
              </a>
              . We respond within twenty-four hours.
            </p>
          </TermsSection>
        </div>
      </div>
    </Section>
  );
}

function TermsSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pb-10 border-b border-line last:border-b-0">
      <div className="flex items-baseline gap-4 mb-4">
        <span className="font-mono text-2xs uppercase tracking-widest text-ink-subtle tabular">§ {number}</span>
        <h2 className="font-display text-2xl text-ink">{title}</h2>
      </div>
      <div className="text-ink-muted leading-relaxed">{children}</div>
    </div>
  );
}
