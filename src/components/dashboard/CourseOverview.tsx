import { ArrowRight, CalendarClock, Video } from 'lucide-react';
import { Card, Badge } from '@/components/ui';
import { formatSessionDateTime } from '@/lib/dates';
import type { DashboardCourse } from '@/types';

export function CourseOverview({ course }: { course: DashboardCourse }) {
  return (
    <Card variant="raised" className="p-8 mb-6">
      <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl" aria-hidden>
              {course.language === 'french' ? '🇫🇷' : '🇪🇸'}
            </span>
            <Badge variant="accent" size="md">
              {course.level}
            </Badge>
            <span className="text-2xs uppercase tracking-wider text-ink-subtle">
              {course.cohortName}
            </span>
          </div>
          <h1 className="display-2 text-ink mb-2">{course.name}</h1>
          <p className="text-ink-muted">
            Week <span className="tabular text-ink font-medium">{course.currentWeek}</span> of <span className="tabular">{course.totalWeeks}</span>
          </p>
        </div>

        <div className="w-full md:w-auto md:min-w-[320px]">
          <div className="p-5 bg-ink text-paper rounded-md">
            <div className="flex items-center gap-2 eyebrow mb-3 text-paper/60">
              <CalendarClock size={12} strokeWidth={1.5} />
              <span>Next session</span>
            </div>
            <p className="font-display text-2xl leading-tight mb-1">
              {formatSessionDateTime(course.nextSessionDate)}
            </p>
            <p className="text-sm text-paper/70 mb-5 tabular">{course.nextSessionTime}</p>
            <a
              href={course.joinUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-2 w-full h-11 px-5 bg-paper-raised text-ink border border-paper-raised rounded font-medium text-[15px] hover:bg-paper transition-all"
            >
              <Video size={14} strokeWidth={1.5} />
              <span>Join Live Session</span>
              <ArrowRight size={14} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}
