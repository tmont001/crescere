import { ArrowRight, Lock } from 'lucide-react';
import { Section, ButtonLink } from '@/components/ui';

export function DashboardComingSoonPage() {
  return (
    <Section size="lg" variant="default">
      <div className="max-w-xl mx-auto text-center">
        <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-paper-raised border border-line mb-8">
          <Lock size={20} strokeWidth={1.5} className="text-ink-muted" />
        </div>
        <p className="font-mono text-2xs uppercase tracking-widest text-ink-subtle mb-4">
          Student Portal
        </p>
        <h1 className="display-2 text-ink mb-6">
          Coming soon.
        </h1>
        <p className="text-lg text-ink-muted leading-relaxed mb-10">
          The student portal is not yet available. Once you are enrolled in a cohort, you will receive access instructions directly from us.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
