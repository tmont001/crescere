import { PricingSection } from '@/components/home/PricingSection';
import { Section, SectionHeader } from '@/components/ui';
import { Accordion } from '@/components/ui/Accordion';
import { FAQ_ITEMS } from '@/data/faq';

export function PricingPage() {
  const pricingFAQ = FAQ_ITEMS.filter((f) => f.category === 'pricing');

  return (
    <>
      <Section size="sm" variant="default">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-px w-6 bg-accent" aria-hidden />
            <span className="eyebrow text-accent">Pricing</span>
            <span className="h-px w-6 bg-accent" aria-hidden />
          </div>
          <h1 className="display-1 text-ink mb-6">
            One flat price.
            <br />
            <span className="italic font-normal text-accent">No hidden tiers.</span>
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed">
            A single program, priced for the value it delivers. No upsells, no subscription lock-in, no mystery fees at checkout.
          </p>
        </div>
      </Section>

      <PricingSection />

      <Section size="sm" variant="sunken">
        <div className="max-w-3xl mx-auto">
          <SectionHeader eyebrow="Pricing questions" title="What to know before you enroll." align="center" />
          <div className="mt-12">
            <Accordion items={pricingFAQ} />
          </div>
        </div>
      </Section>
    </>
  );
}
