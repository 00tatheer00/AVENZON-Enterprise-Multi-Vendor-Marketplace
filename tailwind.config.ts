import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          container: 'var(--primary-container)',
          onContainer: 'var(--on-primary-container)',
        },
        surface: {
          DEFAULT: '#f5f5f7',
          container: {
            low: '#f0f0f5',
            DEFAULT: '#eaeaf0',
            high: '#e2e2ec',
            lowest: '#ffffff',
          },
        },
        outline: {
          DEFAULT: '#6e7184',
          variant: '#c3c6d7',
        },
        'on-surface-variant': '#44475a',
        error: '#d63031',
        deal: 'var(--deal)',
        fresh: 'var(--fresh)',
        gold: 'var(--gold)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'marketplace': '1400px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'slide-up': 'slide-up 0.3s ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'countdown': 'countdown-tick 1s ease-in-out infinite',
        'badge-pop': 'badge-pop 0.3s ease-out',
      },
    },
  },
  plugins: [],
};

export default config;
