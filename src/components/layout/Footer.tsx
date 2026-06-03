import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-editorial py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-6 text-ink-muted max-w-sm leading-relaxed">
              Cohort-based French and Spanish courses, built for busy schedules and real conversational progress.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-5">Program</p>
            <ul className="space-y-3">
              <FooterLink to="/courses">Courses</FooterLink>
              <FooterLink to="/pricing">Pricing</FooterLink>
              <FooterLink to="/placement">Placement Test</FooterLink>
              <FooterLink to="/about">About</FooterLink>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-5">Support</p>
            <ul className="space-y-3">
              <FooterLink to="/faq">FAQ</FooterLink>
              <FooterLink to="/terms">Terms</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-5">Contact</p>
            <ul className="space-y-3 text-sm text-ink-muted">
              <li>
                <a href="mailto:montanarowl@gmail.com" className="hover:text-ink transition-colors">
                  montanarowl@gmail.com
                </a>
              </li>
              <li>We respond within one business day</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-line flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-2xs uppercase tracking-wider text-ink-subtle">
          <p>© {new Date().getFullYear()} Crescere. All rights reserved.</p>
          <p>Crafted for language learners, not for the algorithm.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ to, children }: { to: string; children: string }) {
  return (
    <li>
      <Link to={to} className="text-sm text-ink-muted hover:text-ink transition-colors">
        {children}
      </Link>
    </li>
  );
}
