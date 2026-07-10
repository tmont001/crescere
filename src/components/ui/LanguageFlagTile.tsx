interface LanguageFlagTileProps {
  language: 'french' | 'spanish';
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: { width: 18, height: 13 },
  md: { width: 22, height: 15 },
  lg: { width: 30, height: 20 },
};

export function LanguageFlagTile({ language, size = 'md' }: LanguageFlagTileProps) {
  const { width, height } = sizes[size];

  if (language === 'french') {
    return (
      <span
        className="inline-flex overflow-hidden rounded-[2px] shrink-0 border border-black/10"
        style={{ width, height }}
        aria-hidden
      >
        <span style={{ flex: 1, background: '#002395' }} />
        <span style={{ flex: 1, background: '#FFFFFF' }} />
        <span style={{ flex: 1, background: '#ED2939' }} />
      </span>
    );
  }

  return (
    <span
      className="inline-flex flex-col overflow-hidden rounded-[2px] shrink-0 border border-black/10"
      style={{ width, height }}
      aria-hidden
    >
      <span style={{ flex: 1, background: '#AA151B' }} />
      <span style={{ flex: 2, background: '#F1BF00' }} />
      <span style={{ flex: 1, background: '#AA151B' }} />
    </span>
  );
}
