import { cn } from '@/lib/cn';

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md';
}

export function ProgressBar({ value, max = 100, className, showLabel, size = 'md' }: ProgressBarProps) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className={cn('w-full', className)}>
      {showLabel && (
        <div className="flex items-center justify-between mb-1.5 text-2xs uppercase tracking-wider text-ink-muted">
          <span>Progress</span>
          <span className="tabular">{Math.round(pct)}%</span>
        </div>
      )}
      <div
        className={cn('w-full overflow-hidden rounded-full bg-paper-sunken', size === 'sm' ? 'h-1' : 'h-1.5')}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <div
          className="h-full bg-accent transition-all duration-500 ease-editorial"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
