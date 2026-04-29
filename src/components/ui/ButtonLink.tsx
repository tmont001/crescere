import { forwardRef, type ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { cn } from '@/lib/cn';
import type { ButtonSize, ButtonVariant } from './Button';

interface ButtonLinkProps extends Omit<LinkProps, 'className'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-paper hover:bg-accent-hover border border-accent hover:border-accent-hover',
  secondary:
    'bg-transparent text-ink border border-ink hover:bg-ink hover:text-paper',
  ghost: 'bg-transparent text-ink border border-transparent hover:bg-paper-sunken',
  highlight: 'bg-highlight text-paper hover:opacity-90 border border-highlight',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-[0.9375rem] gap-2',
  lg: 'px-8 py-4 text-base gap-2.5',
};

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(function ButtonLink(
  { variant = 'primary', size = 'md', icon, iconPosition = 'right', fullWidth, className, children, ...props },
  ref,
) {
  return (
    <Link
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center font-medium tracking-tight rounded',
        'transition-all duration-200 ease-editorial',
        'active:translate-y-px',
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </Link>
  );
});
