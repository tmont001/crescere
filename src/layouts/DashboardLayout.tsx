import { useState, useEffect, type ReactNode } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { BookOpenCheck, Users, FolderOpen, User, Menu, X, LogOut } from 'lucide-react';
import { Logo } from '@/components/layout/Logo';
import { ThemeToggle } from '@/components/ui';
import { useUser } from '@/context/UserContext';
import { cn } from '@/lib/cn';

interface DashboardLayoutProps {
  children: ReactNode;
}

const NAV_ITEMS = [
  { label: 'My Courses', href: '/dashboard', icon: BookOpenCheck, end: true },
  { label: 'Community', href: '/dashboard/community', icon: Users, end: false },
  { label: 'Resources', href: '/dashboard/resources', icon: FolderOpen, end: false },
  { label: 'Profile', href: '/dashboard/profile', icon: User, end: false },
];

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { name, email, initials } = useUser();

  // Close the mobile drawer whenever the route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-paper">
      {/* Mobile top bar */}
      <header className="lg:hidden sticky top-0 z-40 flex items-center justify-between h-16 px-5 border-b border-line bg-paper">
        <Logo />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="h-9 w-9 inline-flex items-center justify-center rounded border border-line"
          >
            {mobileOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      <div className="flex flex-1 relative">
        {/* Sidebar */}
        <aside
          className={cn(
            'fixed lg:sticky top-16 lg:top-0 left-0 z-30 w-72 shrink-0',
            'h-[calc(100vh-4rem)] lg:h-screen',
            'bg-paper-raised border-r border-line flex flex-col',
            'transition-transform duration-300 ease-editorial',
            mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
          )}
        >
          <div className="hidden lg:flex items-center justify-between h-20 px-7 border-b border-line">
            <Logo />
            <ThemeToggle />
          </div>

          <nav className="flex-1 px-4 py-6 overflow-y-auto">
            <p className="eyebrow px-3 mb-3">Workspace</p>
            <ul className="space-y-1">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <NavLink
                      to={item.href}
                      end={item.end}
                      className={({ isActive }) =>
                        cn(
                          'flex items-center gap-3 px-3 py-2.5 rounded text-sm transition-colors',
                          isActive
                            ? 'bg-accent-soft text-accent font-medium'
                            : 'text-ink-muted hover:text-ink hover:bg-paper',
                        )
                      }
                    >
                      <Icon size={16} strokeWidth={1.5} />
                      <span>{item.label}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 pt-6 border-t border-line">
              <p className="eyebrow px-3 mb-3">Account</p>
              <Link
                to="/"
                className="flex items-center gap-3 px-3 py-2.5 rounded text-sm text-ink-muted hover:text-ink hover:bg-paper transition-colors"
              >
                <LogOut size={16} strokeWidth={1.5} />
                <span>Sign out</span>
              </Link>
            </div>
          </nav>

          <div className="p-6 border-t border-line">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-accent flex items-center justify-center shrink-0">
                <span className="font-display text-sm text-paper">{initials}</span>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-ink truncate">{name}</p>
                <p className="text-2xs uppercase tracking-wider text-ink-subtle truncate">
                  {email}
                </p>
              </div>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {mobileOpen && (
          <div
            className="fixed inset-0 z-20 bg-ink/30 lg:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden
          />
        )}

        {/* Main */}
        <main key={location.pathname} className="flex-1 min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}
