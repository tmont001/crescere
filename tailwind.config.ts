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
      boxShadow: {
        // Elevation using warm navy-tinted shadows (ink: 26 40 71, accent: 61 110 232)
        'card-sm':    '0 1px 4px -1px rgb(26 40 71 / 0.08), 0 1px 2px rgb(26 40 71 / 0.04)',
        'card-md':    '0 4px 16px -4px rgb(26 40 71 / 0.12), 0 2px 6px -2px rgb(26 40 71 / 0.06)',
        'card-lift':  '0 8px 28px -6px rgb(26 40 71 / 0.16), 0 4px 10px -3px rgb(26 40 71 / 0.08)',
        'card-accent': '0 8px 32px -8px rgb(61 110 232 / 0.22), 0 4px 12px -4px rgb(61 110 232 / 0.10)',
        'btn-primary': '0 2px 8px -2px rgb(61 110 232 / 0.32), 0 1px 3px -1px rgb(61 110 232 / 0.18)',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
