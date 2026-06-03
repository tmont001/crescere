import { Section } from '@/components/ui';

export function TermsPage() {
  return (
    <Section size="sm" variant="default">
      <div className="max-w-2xl mx-auto">
        <p className="eyebrow mb-4">Legal</p>
        <h1 className="display-2 text-ink mb-4">Terms of service</h1>
        <p className="text-ink-muted mb-12">Last updated: June 2, 2026</p>

        <div className="prose prose-lg space-y-10">
          <TermsSection number="1" title="Enrollment and interest requests">
            <p>
              Submitting an enrollment interest request on this website does not create a binding enrollment, reserve a paid seat, or commit you to any payment. Enrollment is confirmed only when you receive written confirmation from Crescere that a cohort seat has been reserved in your name and payment terms have been agreed upon. All confirmation will be sent to the email address you provide.
            </p>
          </TermsSection>

          <TermsSection number="2" title="Payment">
            <p>
              The program fee is $1,200 USD per 12-week course. Payment details will be communicated to you in writing before any charges are collected. No payment is processed automatically through this website. Crescere will confirm the cohort, schedule, and payment method with you directly before any amount is due.
            </p>
          </TermsSection>

          <TermsSection number="3" title="Refunds and cancellations">
            <p>
              You may request a full refund after attending the first two live sessions, no questions asked, provided the request is submitted in writing before your third session. After your third session, you may request a pro-rated credit toward a future cohort, valid for twelve months from the date of your original enrollment.
            </p>
            <p className="mt-4">
              If a cohort does not reach the minimum enrollment of 5 students, it will not run. Students in that cohort will be notified in advance and offered a transfer to the next available cohort or a full refund of any amount paid.
            </p>
          </TermsSection>

          <TermsSection number="4" title="Attendance and access">
            <p>
              While live attendance is strongly recommended, all sessions are recorded and made available to enrolled students. Access to all course materials is guaranteed for the full cohort duration and an additional thirty days afterward.
            </p>
          </TermsSection>

          <TermsSection number="5" title="Conduct">
            <p>
              All participants are expected to maintain a respectful, constructive environment in live sessions and any shared spaces. We reserve the right to remove any participant whose conduct materially disrupts the learning experience of others. Removals under this clause are not eligible for refund.
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
                href="mailto:montanarowl@gmail.com"
                className="text-ink border-b border-line hover:border-accent hover:text-accent transition-colors"
              >
                montanarowl@gmail.com
              </a>
              . We respond within one business day.
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
