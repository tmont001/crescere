import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'raised' | 'sunken' | 'outlined';
  interactive?: boolean;
}

const variantStyles = {
  default: 'bg-paper border border-line',
  raised: 'bg-paper-raised border border-line',
  sunken: 'bg-paper-sunken border border-line/60',
  outlined: 'bg-transparent border border-line',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { variant = 'default', interactive, className, children, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        'rounded-md transition-all duration-300 ease-editorial',
        variantStyles[variant],
        interactive && 'hover:-translate-y-0.5 hover:border-ink/30 cursor-pointer',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});
