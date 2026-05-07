import { useState } from 'react';
import { CourseSwitcher } from '@/components/dashboard/CourseSwitcher';
import { CourseOverview } from '@/components/dashboard/CourseOverview';
import { ThisWeekSection } from '@/components/dashboard/ThisWeekSection';
import { AssignmentsSection } from '@/components/dashboard/AssignmentsSection';
import { ProgressSection } from '@/components/dashboard/ProgressSection';
import { DASHBOARD_COURSES } from '@/data/dashboardMock';
import { useUser } from '@/context/UserContext';

export function DashboardHomePage() {
  const [activeId, setActiveId] = useState(DASHBOARD_COURSES[0].id);
  const active = DASHBOARD_COURSES.find((c) => c.id === activeId) ?? DASHBOARD_COURSES[0];
  const { name } = useUser();
  const firstName = name.split(' ')[0];

  return (
    <div className="p-6 md:p-10 max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="eyebrow mb-2">Welcome back</p>
          <h1 className="font-display text-3xl text-ink">{firstName}</h1>
        </div>
      </div>

      {DASHBOARD_COURSES.length > 1 && (
        <div className="mb-8">
          <CourseSwitcher courses={DASHBOARD_COURSES} activeId={activeId} onSelect={setActiveId} />
        </div>
      )}

      <CourseOverview course={active} />
      <ThisWeekSection course={active} />
      <AssignmentsSection courseId={active.id} />
      <ProgressSection course={active} />
    </div>
  );
}
