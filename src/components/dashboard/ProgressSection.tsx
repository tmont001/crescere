import { Card, ProgressBar } from '@/components/ui';
import type { DashboardCourse } from '@/types';

export function ProgressSection({ course }: { course: DashboardCourse }) {
  return (
    <section className="mb-6">
      <p className="eyebrow text-accent mb-5">Your progress</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <ProgressCard
          label="Sessions attended"
          current={course.sessionsAttended}
          total={course.sessionsTotal}
          footnote={`${course.sessionsTotal - course.sessionsAttended} remaining this cohort`}
        />
        <ProgressCard
          label="Assignments completed"
          current={course.assignmentsCompleted}
          total={course.assignmentsTotal}
          footnote={`${course.assignmentsTotal - course.assignmentsCompleted} pending`}
        />
      </div>
    </section>
  );
}

function ProgressCard({
  label,
  current,
  total,
  footnote,
}: {
  label: string;
  current: number;
  total: number;
  footnote: string;
}) {
  const pct = total > 0 ? (current / total) * 100 : 0;
  return (
    <Card variant="default" className="p-6">
      <p className="eyebrow mb-3">{label}</p>
      <div className="flex items-baseline gap-2 mb-4">
        <span className="font-display text-5xl text-ink tabular tracking-tightest">{current}</span>
        <span className="font-display text-2xl text-ink-muted tabular">/ {total}</span>
      </div>
      <ProgressBar value={pct} size="md" />
      <p className="mt-3 text-2xs uppercase tracking-wider text-ink-subtle">{footnote}</p>
    </Card>
  );
}
