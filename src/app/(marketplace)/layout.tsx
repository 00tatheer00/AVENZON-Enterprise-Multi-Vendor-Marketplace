import * as React from 'react';
import { AnnouncementBar } from '@/components/layouts/announcement-bar';
import { Header } from '@/components/layouts/header';
import { Footer } from '@/components/layouts/footer';
import { FloatingCart } from '@/components/shared/floating-cart';
import { BackToTop } from '@/components/shared/back-to-top';

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <AnnouncementBar />
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
      <FloatingCart />
      <BackToTop />
    </div>
  );
}
