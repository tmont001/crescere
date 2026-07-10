import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: prefersReduced ? 1 : 0,
          y: prefersReduced ? 0 : 20,
          filter: prefersReduced ? 'blur(0px)' : 'blur(8px)',
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: {
            duration: prefersReduced ? 0 : 0.5,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
