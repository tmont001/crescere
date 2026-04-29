import type { DashboardCourse } from '@/types';
import { cn } from '@/lib/cn';

interface CourseSwitcherProps {
  courses: DashboardCourse[];
  activeId: string;
  onSelect: (id: string) => void;
}

export function CourseSwitcher({ courses, activeId, onSelect }: CourseSwitcherProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 p-1 bg-paper-sunken border border-line rounded-md">
      {courses.map((course) => (
        <button
          key={course.id}
          type="button"
          onClick={() => onSelect(course.id)}
          className={cn(
            'px-4 py-2 rounded text-sm font-medium transition-all flex items-center gap-2',
            activeId === course.id ? 'bg-paper-raised text-ink shadow-sm' : 'text-ink-muted hover:text-ink',
          )}
        >
          <span aria-hidden>{course.language === 'french' ? '🇫🇷' : '🇪🇸'}</span>
          <span>{course.name}</span>
        </button>
      ))}
    </div>
  );
}
