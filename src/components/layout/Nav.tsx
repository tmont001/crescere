import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { ButtonLink, ThemeToggle } from '@/components/ui';
import { cn } from '@/lib/cn';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Courses', href: '/courses' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Placement Test', href: '/placement' },
  { label: 'About', href: '/about' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 ease-editorial',
        scrolled
          ? 'bg-paper/85 backdrop-blur-md border-b border-line'
          : 'bg-transparent border-b border-transparent',
      )}
    >
      <div className="container-editorial">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'text-sm font-medium tracking-tight transition-colors',
                    isActive ? 'text-ink' : 'text-ink-muted hover:text-ink',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle className="hidden sm:inline-flex" />
            <ButtonLink to="/enroll" size="sm" className="hidden md:inline-flex">
              Enroll
            </ButtonLink>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded border border-line text-ink"
            >
              {mobileOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-line bg-paper">
          <nav className="container-editorial py-6 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'text-base font-medium py-1',
                    isActive ? 'text-ink' : 'text-ink-muted',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="flex items-center gap-3 pt-4">
              <ButtonLink to="/enroll" size="md" fullWidth>
                Enroll
              </ButtonLink>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
