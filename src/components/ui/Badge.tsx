import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'highlight' | 'outline';
  size?: 'sm' | 'md';
  children: ReactNode;
}

const variantStyles = {
  default: 'bg-paper-sunken text-ink',
  accent: 'bg-accent-soft text-accent',
  highlight: 'bg-highlight-soft text-ink',
  outline: 'bg-transparent border border-line text-ink-muted',
};

const sizeStyles = {
  sm: 'px-2 py-0.5 text-2xs',
  md: 'px-2.5 py-1 text-xs',
};

export function Badge({ variant = 'default', size = 'sm', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded font-medium tracking-wider uppercase tabular',
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
