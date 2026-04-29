import { forwardRef, type TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, error, className, id, ...props },
  ref,
) {
  const textareaId = id || props.name;
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={textareaId} className="block mb-1.5 text-2xs uppercase tracking-wider text-ink-muted">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={textareaId}
        className={cn(
          'w-full px-4 py-3 bg-paper-raised border border-line rounded',
          'text-ink placeholder:text-ink-subtle resize-none',
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
