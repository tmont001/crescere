import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';

interface PublicLayoutProps {
  children: ReactNode;
}

export function PublicLayout({ children }: PublicLayoutProps) {
  const { pathname } = useLocation();
  const prefersReduced = useReducedMotion();

  return (
    <div className="flex flex-col min-h-screen bg-paper">
      <Nav />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={pathname}
          className="flex-1"
          initial={{
            opacity: 0,
            y: prefersReduced ? 0 : 14,
            filter: prefersReduced ? 'blur(0px)' : 'blur(3px)',
          }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: prefersReduced ? 0 : -8 }}
          transition={{ duration: prefersReduced ? 0 : 0.24, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
