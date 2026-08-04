import type { Metadata } from 'next';
import { HomepageHero } from '@/features/marketing/components/homepage-hero';
import { TrustFeaturesBar } from '@/features/marketing/components/trust-features-bar';
import { CategoryHighlightsSection } from '@/features/marketing/components/category-highlights-section';
import { FlashDealsSection } from '@/features/marketing/components/flash-deals-section';
import { PromotionalBanners, PromotionalBanners2 } from '@/features/marketing/components/promotional-banners';
import { TrendingProductsSection } from '@/features/marketing/components/trending-products-section';
import { CategoryBentoGrid } from '@/features/catalog/components/category-bento-grid';
import { BestSellersSection } from '@/features/marketing/components/best-sellers-section';
import { DealsOfDaySection } from '@/features/marketing/components/deals-of-day-section';
import { NewArrivalsSection } from '@/features/marketing/components/new-arrivals-section';
import { AIRecommendationsSection } from '@/features/marketing/components/ai-recommendations-section';
import { ShopByBrandSection } from '@/features/marketing/components/shop-by-brand-section';
import { VendorSpotlightSection } from '@/features/marketing/components/vendor-spotlight-section';
import { CollectionsSection } from '@/features/marketing/components/collections-section';
import { CuratedProductGrid } from '@/features/catalog/components/curated-product-grid';
import { RecentlyViewedSection } from '@/features/marketing/components/recently-viewed-section';
import { TestimonialsSection } from '@/features/marketing/components/testimonials-section';
import { NewsletterSection } from '@/features/marketing/components/newsletter-section';

export const metadata: Metadata = {
  title: 'AVENZON - Enterprise Multi-Vendor Marketplace | Shop 500+ Verified Stores',
  description: 'Discover millions of products from 500+ verified global vendors. Electronics, fashion, home, watches & more. Free shipping, secure payments, 30-day returns.',
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero — Banner Slider + Promo Cards + Trust Icons */}
      <HomepageHero />

      {/* 2. Trust Features Bar */}
      <TrustFeaturesBar />

      {/* 3. Top Categories — Circular Icon Grid */}
      <CategoryHighlightsSection />

      {/* 4. Flash Deals — Countdown + Featured + Carousel */}
      <FlashDealsSection />

      {/* 5. Promotional Banners — Dual Gradient */}
      <PromotionalBanners />

      {/* 6. Trending Now — Product Carousel */}
      <TrendingProductsSection />

      {/* 7. Featured Collections — Bento Grid */}
      <CategoryBentoGrid />

      {/* 8. Best Sellers — Ranked Carousel */}
      <BestSellersSection />

      {/* 9. Deals of the Day — Countdown Grid */}
      <DealsOfDaySection />

      {/* 10. Promotional Banners 2 — Dual Gradient */}
      <PromotionalBanners2 />

      {/* 11. New Arrivals — Product Grid */}
      <NewArrivalsSection />

      {/* 12. AI Recommendations — Personalized Carousel */}
      <AIRecommendationsSection />

      {/* 13. Shop by Brand — Logo Carousel */}
      <ShopByBrandSection />

      {/* 14. Featured Stores — Vendor Cards */}
      <VendorSpotlightSection />

      {/* 15. Curated Collections — Lifestyle Cards */}
      <CollectionsSection />

      {/* 16. Recommended Products — Full Grid */}
      <CuratedProductGrid />

      {/* 17. Recently Viewed — Compact Carousel */}
      <RecentlyViewedSection />

      {/* 18. Customer Reviews — Testimonial Carousel */}
      <TestimonialsSection />

      {/* 19. Newsletter — Full Width CTA */}
      <NewsletterSection />
    </div>
  );
}
