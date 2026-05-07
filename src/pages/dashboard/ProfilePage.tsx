import { useState } from 'react';
import { Bell, Moon, Globe, Check } from 'lucide-react';
import { Card, Input, Button, Badge } from '@/components/ui';
import { useTheme } from '@/context/ThemeContext';
import { DASHBOARD_COURSES } from '@/data/dashboardMock';
import { cn } from '@/lib/cn';

export function ProfilePage() {
  const { theme, toggle } = useTheme();
  const [name, setName] = useState('Jordan Doe');
  const [email, setEmail] = useState('jordan@example.com');
  const [timezone, setTimezone] = useState('America/New_York');
  const [emailReminders, setEmailReminders] = useState(true);
  const [sessionReminders, setSessionReminders] = useState(true);
  const [communityDigest, setCommunityDigest] = useState(false);
  const [saved, setSaved] = useState(false);

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2400);
  }

  return (
    <div className="p-6 md:p-10 max-w-3xl">
      <div className="mb-8">
        <p className="eyebrow mb-2">Profile</p>
        <h1 className="font-display text-3xl text-ink">Account and preferences</h1>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Account details */}
        <Card variant="raised" className="p-7">
          <div className="flex items-center gap-4 pb-6 mb-6 border-b border-line">
            <div className="h-14 w-14 rounded-full bg-accent flex items-center justify-center shrink-0">
              <span className="font-display text-xl text-paper">
                {name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
              </span>
            </div>
            <div className="min-w-0">
              <p className="font-display text-xl text-ink">{name}</p>
              <p className="text-sm text-ink-muted">{email}</p>
            </div>
          </div>

          <p className="eyebrow mb-5">Account details</p>
          <div className="space-y-4">
            <Input
              name="name"
              label="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              name="email"
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div>
              <label className="block mb-1.5 text-2xs uppercase tracking-wider text-ink-muted">
                Timezone
              </label>
              <div className="relative">
                <Globe
                  size={14}
                  strokeWidth={1.5}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-subtle pointer-events-none"
                />
                <select
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="w-full h-12 pl-11 pr-4 bg-paper-raised border border-line rounded text-ink text-[15px] focus:border-ink focus:outline-none transition-colors"
                >
                  <option value="America/New_York">Eastern Time (ET)</option>
                  <option value="America/Chicago">Central Time (CT)</option>
                  <option value="America/Denver">Mountain Time (MT)</option>
                  <option value="America/Los_Angeles">Pacific Time (PT)</option>
                  <option value="Europe/London">London (GMT)</option>
                  <option value="Europe/Paris">Paris (CET)</option>
                  <option value="Europe/Madrid">Madrid (CET)</option>
                </select>
              </div>
            </div>
          </div>
        </Card>

        {/* Enrolled courses */}
        <Card variant="raised" className="p-7">
          <p className="eyebrow mb-5">Enrolled courses</p>
          <div className="space-y-3">
            {DASHBOARD_COURSES.map((course) => (
              <div
                key={course.id}
                className="flex items-center justify-between p-4 bg-paper rounded border border-line"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-xl shrink-0" aria-hidden>
                    {course.language === 'french' ? '🇫🇷' : '🇪🇸'}
                  </span>
                  <div className="min-w-0">
                    <p className="font-medium text-ink truncate">{course.name}</p>
                    <p className="text-2xs uppercase tracking-wider text-ink-subtle">
                      {course.cohortName} · Week {course.currentWeek}/{course.totalWeeks}
                    </p>
                  </div>
                </div>
                <Badge variant="accent" size="sm">Active</Badge>
              </div>
            ))}
          </div>
        </Card>

        {/* Notifications */}
        <Card variant="raised" className="p-7">
          <div className="flex items-center gap-2 mb-5">
            <Bell size={14} strokeWidth={1.5} className="text-ink-muted" />
            <p className="eyebrow">Notifications</p>
          </div>
          <div className="space-y-1 -mx-2">
            <Toggle
              label="Assignment reminders"
              description="Email me the day before an assignment is due."
              checked={emailReminders}
              onChange={setEmailReminders}
            />
            <Toggle
              label="Live session reminders"
              description="Email me 30 minutes before each live session."
              checked={sessionReminders}
              onChange={setSessionReminders}
            />
            <Toggle
              label="Weekly community digest"
              description="A summary of top posts from your cohort, every Monday."
              checked={communityDigest}
              onChange={setCommunityDigest}
            />
          </div>
        </Card>

        {/* Appearance */}
        <Card variant="raised" className="p-7">
          <div className="flex items-center gap-2 mb-5">
            <Moon size={14} strokeWidth={1.5} className="text-ink-muted" />
            <p className="eyebrow">Appearance</p>
          </div>
          <div className="flex items-center justify-between p-4 bg-paper rounded border border-line">
            <div>
              <p className="font-medium text-ink mb-0.5">Theme</p>
              <p className="text-sm text-ink-muted capitalize">Currently {theme} mode</p>
            </div>
            <button
              type="button"
              onClick={toggle}
              className="px-4 h-9 bg-paper-raised border border-line rounded text-sm font-medium text-ink hover:border-ink/30 transition-colors"
            >
              Switch to {theme === 'light' ? 'dark' : 'light'}
            </button>
          </div>
        </Card>

        <div className="flex items-center gap-4">
          <Button type="submit" size="lg">
            Save Changes
          </Button>
          {saved && (
            <span className="inline-flex items-center gap-2 text-sm text-accent">
              <Check size={14} strokeWidth={2} />
              Saved
            </span>
          )}
        </div>
      </form>
    </div>
  );
}

function Toggle({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="w-full flex items-start justify-between gap-4 px-2 py-4 text-left rounded hover:bg-paper transition-colors"
    >
      <div className="min-w-0 flex-1">
        <p className="font-medium text-ink mb-0.5">{label}</p>
        <p className="text-sm text-ink-muted leading-relaxed">{description}</p>
      </div>
      <span
        className={cn(
          'shrink-0 h-6 w-10 rounded-full p-0.5 transition-colors',
          checked ? 'bg-accent' : 'bg-line',
        )}
        aria-hidden
      >
        <span
          className={cn(
            'block h-5 w-5 rounded-full bg-paper-raised transition-transform',
            checked ? 'translate-x-4' : 'translate-x-0',
          )}
        />
      </span>
    </button>
  );
}
