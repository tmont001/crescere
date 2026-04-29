import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Surfaces — warm, approachable, not stark white
        paper: {
          DEFAULT: 'rgb(var(--color-paper) / <alpha-value>)',
          raised: 'rgb(var(--color-paper-raised) / <alpha-value>)',
          sunken: 'rgb(var(--color-paper-sunken) / <alpha-value>)',
        },
        // Text — warm ink, not pure black
        ink: {
          DEFAULT: 'rgb(var(--color-ink) / <alpha-value>)',
          muted: 'rgb(var(--color-ink-muted) / <alpha-value>)',
          subtle: 'rgb(var(--color-ink-subtle) / <alpha-value>)',
        },
        // Accent — deep forest (structured, confident, not generic blue)
        accent: {
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          hover: 'rgb(var(--color-accent-hover) / <alpha-value>)',
          soft: 'rgb(var(--color-accent-soft) / <alpha-value>)',
        },
        // Highlight — warm amber for energy (limited use)
        highlight: {
          DEFAULT: 'rgb(var(--color-highlight) / <alpha-value>)',
          soft: 'rgb(var(--color-highlight-soft) / <alpha-value>)',
        },
        line: 'rgb(var(--color-line) / <alpha-value>)',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Editorial scale
        '2xs': ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.06em' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      borderRadius: {
        xs: '3px',
        sm: '4px',
        DEFAULT: '6px',
        md: '8px',
        lg: '12px',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
