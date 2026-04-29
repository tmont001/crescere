import { cn } from '@/lib/cn';

interface RadioOptionProps {
  label: string;
  checked: boolean;
  onSelect: () => void;
  index: number;
  disabled?: boolean;
}

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

export function RadioOption({ label, checked, onSelect, index, disabled }: RadioOptionProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      disabled={disabled}
      className={cn(
        'group w-full flex items-center gap-4 px-5 py-4 text-left',
        'rounded border transition-all duration-200 ease-editorial',
        checked
          ? 'border-accent bg-accent-soft text-ink'
          : 'border-line bg-paper-raised hover:border-ink/40 hover:bg-paper',
        disabled && 'opacity-50 cursor-not-allowed',
      )}
    >
      <span
        className={cn(
          'flex items-center justify-center h-8 w-8 rounded border font-mono text-sm shrink-0 transition-colors',
          checked
            ? 'border-accent bg-accent text-paper'
            : 'border-line bg-paper text-ink-muted group-hover:border-ink/40 group-hover:text-ink',
        )}
      >
        {LETTERS[index]}
      </span>
      <span className="text-[0.9375rem] leading-snug">{label}</span>
    </button>
  );
}
