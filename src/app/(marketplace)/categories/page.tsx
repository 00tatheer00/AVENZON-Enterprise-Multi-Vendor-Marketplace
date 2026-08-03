import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layouts/breadcrumb';
import { CategoryBentoGrid } from '@/features/catalog/components/category-bento-grid';

export const metadata: Metadata = {
  title: 'Explore Categories Directory',
  description: 'Browse 42+ curated marketplace categories from high-tech to luxury horology.',
};

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-8">
      <Breadcrumb items={[{ label: 'Categories Directory' }]} />
      <div className="mt-4 mb-8">
        <h1 className="text-4xl font-extrabold text-foreground">Explore All Categories</h1>
        <p className="mt-2 text-sm text-on-surface-variant max-w-xl">
          Discover a world of premium products carefully curated for modern living, tech precision, and timeless craftsmanship.
        </p>
      </div>
      <CategoryBentoGrid />
    </div>
  );
}
