import type { Metadata } from 'next';
import { SearchHeader } from '@/components/layouts/search-header';
import { FilterSidebar } from '@/features/catalog/components/filter-sidebar';
import { ProductCard, type ProductSummary } from '@/components/shared/product-card';

export const metadata: Metadata = {
  title: 'Search Results',
  description: 'Search results for premium tech, luxury timepieces, and curated marketplace goods.',
};

const searchProducts: ProductSummary[] = [
  {
    id: 'search-1',
    title: 'Nexus Studio Pro Wireless Headphones',
    slug: 'nexus-studio-pro',
    price: 349.0,
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgEmKaMk9URI_9sX7BwB3yFhrXUCfek0Z6c-_hQZtKeagz7BIcvyeK8W6F9H_7hWJSUgcdwHsTonqyFo69b5CVHORAAZq29_r2x3U2lIG6UokSqW4GINs1MevOpj7Qh3CnDJJkvWMlmNAWIOxfMmS9j8gEN75QHBYgTn_LDn3BVOAjngaFShks4M7KmXPzJ7iKPEhWwhqN8yRyHLkPzUlFdXPXAD9soqw_AV-CTuc78fN2GkXVOO-iFA',
    vendorName: 'Auraudio',
    vendorRating: 4.9,
    rating: 4.9,
    reviewCount: 312,
    badge: 'Top Rated',
  },
  {
    id: 'search-2',
    title: 'Eclipse ANC Series 2 Wireless',
    slug: 'eclipse-anc-series-2',
    price: 299.0,
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-xu9gctd9IisvFD_OQr05n4B6zM8PjSnFauRqFxUHEmOE3DFNRInCNsrLaCLag_Rz6TsZGnwQ1wZMyxaFQlk-gfeCnwzgw2yZiK9g8wDhhkSLRKIoEAO9sKzTu2iAfaWzI6kybvXXABY-fKYeaysAWRdCs-ln_qnXHg2FarP3Mpf6n25BD2DLslW4fsd9PxHN2cfeLDcv4g7W8ngaBXWr6-e5sKyvc67Oz_Y9ZL_gBIPxvGBOfq7wzw',
    vendorName: 'Sonara',
    vendorRating: 4.7,
    rating: 4.7,
    reviewCount: 198,
    badge: 'New Arrival',
  },
];

export default function SearchPage() {
  return (
    <div className="flex flex-col w-full">
      <SearchHeader query="Wireless Headphones" totalResults={248} />

      <div className="mx-auto max-w-[1280px] w-full px-6 py-8 flex flex-col lg:flex-row gap-8">
        <FilterSidebar className="w-full lg:w-64 shrink-0 hidden lg:block" />

        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
            {searchProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
