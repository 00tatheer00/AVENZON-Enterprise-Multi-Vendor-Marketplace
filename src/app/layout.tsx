import type { Metadata } from 'next';
import { fontInter } from '@/core/fonts';
import { MasterProvider } from '@/core/providers';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'AVENZON - Global Multi-Vendor Marketplace',
    template: '%s | AVENZON Marketplace',
  },
  description: 'Enterprise multi-vendor marketplace connecting global buyers with verified luxury & tech suppliers.',
  keywords: ['marketplace', 'multi-vendor', 'luxury watches', 'smart home', 'audio', 'electronics'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontInter.variable} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col font-sans antialiased" suppressHydrationWarning>
        <MasterProvider>
          {/* Accessibility Skip Link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-primary focus:text-white"
          >
            Skip to main content
          </a>

          <main id="main-content" className="flex-1 flex flex-col">
            {children}
          </main>
        </MasterProvider>
      </body>
    </html>
  );
}
