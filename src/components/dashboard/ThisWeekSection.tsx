import { FileText, BookMarked, PenLine, Headphones } from 'lucide-react';
import { Card } from '@/components/ui';
import type { DashboardCourse } from '@/types';

interface ThisWeekItem {
  icon: typeof FileText;
  title: string;
  description: string;
  meta: string;
}

function getWeekItems(course: DashboardCourse): ThisWeekItem[] {
  return [
    {
      icon: FileText,
      title: `Week ${course.currentWeek} slide deck`,
      description: 'Complete lesson slides from both live sessions.',
      meta: 'PDF · 42 slides',
    },
    {
      icon: BookMarked,
      title: `Vocabulary — Week ${course.currentWeek}`,
      description: '85 terms, organized by topic with example sentences.',
      meta: 'Interactive · 85 terms',
    },
    {
      icon: PenLine,
      title: 'Weekly assignment',
      description: 'Write a 150-word response using this week\'s grammar focus.',
      meta: 'Due Friday',
    },
    {
      icon: Headphones,
      title: 'Practice audio',
      description: 'Three native-speed dialogues with transcripts and questions.',
      meta: '18 min · Audio',
    },
  ];
}

export function ThisWeekSection({ course }: { course: DashboardCourse }) {
  const items = getWeekItems(course);

  return (
    <section className="mb-6">
      <div className="flex items-baseline justify-between mb-5">
        <div className="flex items-center gap-3">
          <p className="eyebrow text-accent">This week</p>
          <span className="font-mono text-2xs uppercase tracking-widest text-ink-subtle tabular">
            · Week {String(course.currentWeek).padStart(2, '0')}
          </span>
        </div>
        <span className="text-sm text-ink-subtle select-none">
          View all weeks →
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Card
              key={item.title}
              variant="default"
              interactive
              className="p-5 flex gap-4 items-start group"
            >
              <div className="h-10 w-10 shrink-0 rounded border border-line bg-paper-raised flex items-center justify-center group-hover:border-accent transition-colors">
                <Icon size={16} strokeWidth={1.5} className="text-accent" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-ink mb-1">{item.title}</p>
                <p className="text-sm text-ink-muted leading-relaxed mb-2">{item.description}</p>
                <p className="text-2xs uppercase tracking-wider text-ink-subtle">{item.meta}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
