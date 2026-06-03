import { Check, ArrowRight } from 'lucide-react';
import { Section, ButtonLink, Badge } from '@/components/ui';

const INCLUDED = [
  '24 live sessions over 12 weeks',
  'Small group (5–12 students)',
  'Complete curriculum and materials',
  'Weekly assignments with feedback',
  'Session recordings and replays',
  'Live on Google Meet — no extra software',
];

export function PricingSection() {
  return (
    <Section size="md" variant="default">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="h-px w-6 bg-accent" aria-hidden />
            <span className="eyebrow text-accent">Pricing</span>
            <span className="h-px w-6 bg-accent" aria-hidden />
          </div>
          <h2 className="display-2 text-ink">
            One program.
            <br />
            <span className="italic font-normal text-accent">One flat price.</span>
          </h2>
        </div>

        <div className="relative border border-ink rounded-md overflow-hidden bg-paper-raised">
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-soft -translate-y-1/2 translate-x-1/2 rounded-full opacity-60" />

          <div className="relative p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 pb-10 border-b border-line">
              <div>
                <Badge variant="outline" size="md" className="mb-4">
                  12-Week Program
                </Badge>
                <h3 className="font-display text-3xl md:text-4xl text-ink leading-tight mb-3">
                  French or Spanish, end&#8209;to&#8209;end.
                </h3>
                <p className="text-ink-muted max-w-md leading-relaxed">
                  24 live sessions · Small group · Structured from week one to week twelve.
                </p>
              </div>

              <div className="md:text-right shrink-0">
                <p className="eyebrow mb-1">Total</p>
                <p className="font-display text-5xl md:text-6xl text-ink tabular tracking-tightest">
                  $1,200
                </p>
                <p className="text-sm text-ink-muted mt-1">One-time · No subscription</p>
              </div>
            </div>

            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-4 w-4 shrink-0 rounded-full bg-accent-soft flex items-center justify-center">
                    <Check size={10} strokeWidth={2.5} className="text-accent" />
                  </span>
                  <span className="text-[0.9375rem] text-ink">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-line flex flex-col md:flex-row gap-3">
              <ButtonLink to="/enroll" size="lg" icon={<ArrowRight size={18} strokeWidth={1.5} />}>
                Express Interest
              </ButtonLink>
              <ButtonLink to="/placement" size="lg" variant="secondary">
                Take Placement Test
              </ButtonLink>
            </div>

            <div className="mt-8 pt-6 border-t border-dashed border-line flex items-start gap-3">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-line text-ink-subtle font-display text-sm shrink-0">
                i
              </span>
              <p className="text-[0.9375rem] text-ink-muted leading-relaxed">
                Payment details are confirmed with you before any charges occur. Expressing interest does not commit you to payment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
