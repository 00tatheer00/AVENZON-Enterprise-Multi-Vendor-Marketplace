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
          DEFAULT: '#004ac6',
          container: '#2563eb',
          onContainer: '#eeefff',
        },
        surface: {
          DEFAULT: '#faf8ff',
          container: {
            low: '#f3f3fe',
            DEFAULT: '#ededf9',
            high: '#e7e7f3',
            lowest: '#ffffff',
          },
        },
        outline: {
          DEFAULT: '#737686',
          variant: '#c3c6d7',
        },
        'on-surface-variant': '#434655',
        error: '#ba1a1a',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
