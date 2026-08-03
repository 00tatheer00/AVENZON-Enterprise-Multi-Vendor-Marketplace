export const designTokens = {
  colors: {
    primary: {
      default: '#004ac6',
      container: '#2563eb',
      onContainer: '#eeefff',
      tint: '#0053db',
    },
    surface: {
      default: '#faf8ff',
      container: '#ededf9',
      low: '#f3f3fe',
      high: '#e7e7f3',
      lowest: '#ffffff',
    },
    outline: {
      default: '#737686',
      variant: '#c3c6d7',
    },
    text: {
      primary: '#191b23',
      variant: '#434655',
    },
    accent: {
      amber: '#fea619',
      amberDark: '#684000',
      error: '#ba1a1a',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    displayLg: { fontSize: '60px', lineHeight: '72px', letterSpacing: '-0.02em', fontWeight: '700' },
    headlineXl: { fontSize: '36px', lineHeight: '44px', letterSpacing: '-0.02em', fontWeight: '600' },
    headlineLg: { fontSize: '30px', lineHeight: '38px', letterSpacing: '-0.01em', fontWeight: '600' },
    headlineMd: { fontSize: '24px', lineHeight: '32px', fontWeight: '600' },
    bodyLg: { fontSize: '18px', lineHeight: '28px', fontWeight: '400' },
    bodyMd: { fontSize: '16px', lineHeight: '24px', fontWeight: '400' },
    bodySm: { fontSize: '14px', lineHeight: '20px', fontWeight: '400' },
    labelMd: { fontSize: '14px', lineHeight: '20px', letterSpacing: '0.05em', fontWeight: '600' },
    labelSm: { fontSize: '12px', lineHeight: '16px', fontWeight: '500' },
  },
  spacing: {
    base: '4px',
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '48px',
    xl: '80px',
    containerMax: '1280px',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1.5rem',
    full: '9999px',
  },
} as const;
