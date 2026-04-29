/**
 * Lightweight classnames utility.
 * Accepts strings, arrays, or conditional object maps.
 */
type ClassValue = string | number | boolean | null | undefined | ClassValue[] | Record<string, boolean>;

export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = [];

  const walk = (value: ClassValue) => {
    if (!value) return;
    if (typeof value === 'string' || typeof value === 'number') {
      classes.push(String(value));
      return;
    }
    if (Array.isArray(value)) {
      value.forEach(walk);
      return;
    }
    if (typeof value === 'object') {
      for (const [key, val] of Object.entries(value)) {
        if (val) classes.push(key);
      }
    }
  };

  inputs.forEach(walk);
  return classes.join(' ');
}
