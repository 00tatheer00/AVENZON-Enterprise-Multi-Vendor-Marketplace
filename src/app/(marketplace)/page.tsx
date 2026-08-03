import type { Metadata } from 'next';
import { HomepageHero } from '@/features/marketing/components/homepage-hero';
import { FlashDealsSection } from '@/features/marketing/components/flash-deals-section';
import { TrustFeaturesBar } from '@/features/marketing/components/trust-features-bar';
import { CategoryBentoGrid } from '@/features/catalog/components/category-bento-grid';
import { VendorSpotlightSection } from '@/features/marketing/components/vendor-spotlight-section';
import { CuratedProductGrid } from '@/features/catalog/components/curated-product-grid';
import { TestimonialsSection } from '@/features/marketing/components/testimonials-section';
import { NewsletterSection } from '@/features/marketing/components/newsletter-section';

export const metadata: Metadata = {
  title: 'AVENZON - Enterprise Multi-Vendor Marketplace',
  description: 'Discover a curated multi-vendor marketplace connecting 500+ verified global suppliers with discerning buyers.',
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section with Interactive Particle Canvas & Floating Cards */}
      <HomepageHero />

      {/* 2. Exclusive Flash Drops with Ticking Countdown */}
      <FlashDealsSection />

      {/* 3. Vendor Trust & Guarantee Bar */}
      <TrustFeaturesBar />

      {/* 4. Featured Collections Bento Grid */}
      <CategoryBentoGrid />

      {/* 5. Verified Merchant Spotlight Network */}
      <VendorSpotlightSection />

      {/* 6. Curated Product Showcase with Category Tabs */}
      <CuratedProductGrid />

      {/* 7. Verified Buyer Reviews & Social Proof */}
      <TestimonialsSection />

      {/* 8. VIP Access Newsletter & $50 Voucher Callout */}
      <NewsletterSection />
    </div>
  );
}
