import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({ eyebrow, title, description, align = 'left', className }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start',
        className,
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-2">
          <span className="h-px w-6 bg-ink/40" aria-hidden />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      )}
      <h2 className="display-2 max-w-3xl">{title}</h2>
      {description && (
        <p
          className={cn(
            'text-lg text-ink-muted leading-relaxed',
            align === 'center' ? 'max-w-2xl' : 'max-w-xl',
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
