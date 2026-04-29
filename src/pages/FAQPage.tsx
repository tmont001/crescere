import { useState } from 'react';
import { Section, SectionHeader, ButtonLink } from '@/components/ui';
import { Accordion } from '@/components/ui/Accordion';
import { FAQ_ITEMS } from '@/data/faq';
import { cn } from '@/lib/cn';

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'program', label: 'Program' },
  { id: 'logistics', label: 'Logistics' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'technical', label: 'Technical' },
] as const;

type CategoryId = typeof CATEGORIES[number]['id'];

export function FAQPage() {
  const [active, setActive] = useState<CategoryId>('all');
  const items = active === 'all' ? FAQ_ITEMS : FAQ_ITEMS.filter((f) => f.category === active);

  return (
    <>
      <Section size="sm" variant="default">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-px w-6 bg-accent" aria-hidden />
            <span className="eyebrow text-accent">Frequently asked</span>
          </div>
          <h1 className="display-1 text-ink">
            Questions,
            <br />
            <span className="italic font-normal text-accent">answered directly.</span>
          </h1>
          <p className="mt-8 text-lg text-ink-muted leading-relaxed">
            If something's still unclear after reading these, reach out at{' '}
            <a href="mailto:hello@crescere.com" className="text-ink hover:text-accent border-b border-line hover:border-accent transition-colors">
              hello@crescere.com
            </a>
            .
          </p>
        </div>
      </Section>

      <Section size="sm" variant="sunken">
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActive(cat.id)}
              className={cn(
                'px-4 py-2 rounded text-sm font-medium transition-all border',
                active === cat.id
                  ? 'bg-ink text-paper border-ink'
                  : 'bg-paper-raised text-ink-muted border-line hover:text-ink hover:border-ink/30',
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="max-w-3xl">
          <Accordion items={items} defaultOpenId={items[0]?.id} />
        </div>
      </Section>

      <Section size="md" variant="default">
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeader eyebrow="Still deciding?" title="Take the test. It takes five minutes." align="center" />
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
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
