import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, className, id, ...props },
  ref,
) {
  const inputId = id || props.name;
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block mb-1.5 text-2xs uppercase tracking-wider text-ink-muted">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        className={cn(
          'w-full px-4 py-3 bg-paper-raised border border-line rounded',
          'text-ink placeholder:text-ink-subtle',
          'transition-colors duration-200',
          'focus:border-ink focus:outline-none focus:ring-0',
          error && 'border-highlight focus:border-highlight',
          className,
        )}
        {...props}
      />
      {error && <p className="mt-1.5 text-sm text-highlight">{error}</p>}
    </div>
  );
});
