/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'rgb(var(--color-bg-primary) / <alpha-value>)',
          soft: 'rgb(var(--color-bg-soft) / <alpha-value>)',
          light: 'rgb(var(--color-bg-light) / <alpha-value>)',
          cream: 'rgb(var(--color-bg-cream) / <alpha-value>)',
          subtle: 'rgb(var(--color-bg-subtle) / <alpha-value>)',
        },
        orange: {
          DEFAULT: 'rgb(var(--color-orange) / <alpha-value>)',
          hover: 'rgb(var(--color-orange-hover) / <alpha-value>)',
          light: 'rgb(var(--color-orange-light) / <alpha-value>)',
        },
        ink: {
          DEFAULT: 'rgb(var(--color-ink) / <alpha-value>)',
          muted: 'rgb(var(--color-ink-muted) / <alpha-value>)',
          light: 'rgb(var(--color-ink-light) / <alpha-value>)',
        },
        white: {
          DEFAULT: 'rgb(var(--color-white) / <alpha-value>)',
          muted: 'rgb(var(--color-white-muted) / <alpha-value>)',
          subtle: 'rgb(var(--color-white-subtle) / <alpha-value>)',
        },
        edge: {
          dark: 'rgb(var(--color-edge-dark) / <alpha-value>)',
          light: 'rgb(var(--color-edge-light) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        cursive: ['Caveat', 'cursive'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
        'card-hover': '0 25px 50px -12px rgb(0 0 0 / 0.15)',
        'card-dark-hover': '0 0 0 1px rgb(var(--color-orange) / 0.4)',
        'glow-orange': '0 0 30px rgb(var(--color-orange) / 0.25)',
      },
      borderRadius: {
        'sm': '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.5rem',
        '2xl': '2rem',
      },
    },
  },
  plugins: [],
};
