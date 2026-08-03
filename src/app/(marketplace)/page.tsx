import type { Metadata } from 'next';
import { HomepageHero } from '@/features/marketing/components/homepage-hero';
import { TrustFeaturesBar } from '@/features/marketing/components/trust-features-bar';
import { CategoryBentoGrid } from '@/features/catalog/components/category-bento-grid';
import { CuratedProductGrid } from '@/features/catalog/components/curated-product-grid';

export const metadata: Metadata = {
  title: 'AVENZON - The New Standard of Global Commerce',
  description: 'Discover a curated multi-vendor marketplace connecting 500+ verified global suppliers with discerning buyers.',
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <HomepageHero />

      {/* Vendor Trust Badges */}
      <TrustFeaturesBar />

      {/* Featured Collections Bento Grid */}
      <CategoryBentoGrid />

      {/* Curated Product Showcase */}
      <CuratedProductGrid />
    </div>
  );
}
