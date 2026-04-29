import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: 'default' | 'sunken' | 'raised';
  size?: 'sm' | 'md' | 'lg';
  containerClassName?: string;
}

const variantStyles = {
  default: 'bg-paper',
  sunken: 'bg-paper-sunken',
  raised: 'bg-paper-raised',
};

const sizeStyles = {
  sm: 'py-16 md:py-20',
  md: 'py-20 md:py-28',
  lg: 'py-24 md:py-36',
};

export function Section({
  variant = 'default',
  size = 'md',
  containerClassName,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn('relative', variantStyles[variant], sizeStyles[size], className)} {...props}>
      <div className={cn('container-editorial', containerClassName)}>{children}</div>
    </section>
  );
}
