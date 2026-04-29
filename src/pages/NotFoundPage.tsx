import { Section, ButtonLink } from '@/components/ui';
import { ArrowRight } from 'lucide-react';

export function NotFoundPage() {
  return (
    <Section size="lg" variant="default">
      <div className="max-w-xl mx-auto text-center">
        <p className="font-mono text-2xs uppercase tracking-widest text-ink-subtle mb-6">Error · 404</p>
        <h1 className="display-1 text-ink">
          Page not
          <br />
          <span className="italic font-normal text-accent">found.</span>
        </h1>
        <p className="mt-8 text-lg text-ink-muted leading-relaxed">
          The page you're looking for doesn't exist, or has moved. Try the home page or our course catalog.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <ButtonLink to="/" size="lg" icon={<ArrowRight size={16} strokeWidth={1.5} />}>
            Go Home
          </ButtonLink>
          <ButtonLink to="/courses" size="lg" variant="secondary">
            View Courses
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
