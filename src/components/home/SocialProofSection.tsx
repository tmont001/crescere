import { Quote } from 'lucide-react';
import { Section, SectionHeader, Card } from '@/components/ui';
import { TESTIMONIALS } from '@/data/testimonials';
import type { Testimonial } from '@/types';
import { cn } from '@/lib/cn';

export function SocialProofSection() {
  const [short1, featured1, short2, featured2, short3] = TESTIMONIALS;

  return (
    <Section variant="sunken" size="md">
      <SectionHeader
        eyebrow="Social proof"
        title={
          <>
            Real progress.
            <br />
            <span className="italic font-normal text-accent">Real results.</span>
          </>
        }
        description="No hype. Professionals, travelers, and students describing what actually happened."
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-5">
        <TestimonialCardView t={short1} className="md:col-span-4" />
        <TestimonialCardView t={featured1} className="md:col-span-5 md:row-span-2" featured />
        <TestimonialCardView t={short2} className="md:col-span-3 md:translate-y-4" />
        <TestimonialCardView t={short3} className="md:col-span-4" />
        <TestimonialCardView t={featured2} className="md:col-span-3 md:translate-y-4" featured />
      </div>
    </Section>
  );
}

function TestimonialCardView({
  t,
  className,
  featured,
}: {
  t: Testimonial;
  className?: string;
  featured?: boolean;
}) {
  return (
    <Card
      variant={featured ? 'raised' : 'default'}
      className={cn('p-6 md:p-8 flex flex-col justify-between h-full', className)}
    >
      <div>
        {featured && <Quote size={24} strokeWidth={1} className="text-accent mb-4" />}
        <p
          className={cn(
            'text-ink leading-relaxed',
            featured ? 'font-display text-xl md:text-2xl font-normal' : 'text-[0.9375rem]',
          )}
        >
          {featured ? t.quote : `"${t.quote}"`}
        </p>
      </div>
      <div className="mt-6 pt-4 border-t border-line flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-accent-soft flex items-center justify-center">
          <span className="font-display text-sm text-accent">{t.name.charAt(0)}</span>
        </div>
        <div>
          <p className="text-sm font-medium text-ink">{t.name}</p>
          <p className="text-2xs uppercase tracking-wider text-ink-subtle">{t.role}</p>
        </div>
      </div>
    </Card>
  );
}
