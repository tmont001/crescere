import { Link } from 'react-router-dom';
import { cn } from '@/lib/cn';

interface LogoProps {
  className?: string;
  asLink?: boolean;
  /** Render only the mark (no wordmark). Useful for compact surfaces. */
  markOnly?: boolean;
  /** Pixel height of the mark. Defaults to 44 (nav size). */
  size?: number;
}

/**
 * Crescere logo mark — uses the approved asset file as-is.
 *
 * The mark image is loaded from /brand/logo-mark.png, which is the final
 * approved artwork. Do not redraw, reinterpret, or recolor this asset in
 * code. If the mark needs to change, replace the file in /public/brand/.
 */
export function LogoMark({ size = 44, className }: { size?: number; className?: string }) {
  return (
    <img
      src="/brand/logo-mark.png"
      alt=""
      aria-hidden="true"
      className={cn('block', className)}
      style={{ height: size, width: 'auto' }}
    />
  );
}

export function Logo({
  className,
  asLink = true,
  markOnly = false,
  size = 44,
}: LogoProps) {
  const content = (
    <div className={cn('inline-flex items-center gap-3.5', className)}>
      <LogoMark size={size} />
      {!markOnly && (
        <span
          className="font-display font-normal tracking-tight text-ink leading-none"
          style={{ fontSize: size * 0.82 }}
        >
          Crescere
        </span>
      )}
    </div>
  );

  if (!asLink) return content;

  return (
    <Link to="/" className="inline-flex" aria-label="Crescere home">
      {content}
    </Link>
  );
}
