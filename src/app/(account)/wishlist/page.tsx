import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layouts/breadcrumb';
import { ProductCard, type ProductSummary } from '@/components/shared/product-card';

export const metadata: Metadata = {
  title: 'My Wishlist',
  description: 'Saved favorite items on AVENZON.',
};

const savedWishlist: ProductSummary[] = [
  {
    id: 'wish-1',
    title: 'Aero Chronograph Masterpiece',
    slug: 'aero-chronograph',
    price: 1250.0,
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXYyVKNJ2BKwV4vXJcryd0okqQlAEDG6zL1qgQuOi400blw4rrJEm1n33xAVB2M8s4rKLxQ1X7sGzwI6gtkR60dH5cZhmum7ik4wtIzIaYPn-ba2diVBz1NLu0jOtg3vVPj-Xef-vKmo91RYyxOUYMgP_4EbGM0_1gI0b8YBBpJcQcMODiJVUo_ypU2TDjf8fvGqfZvDQCALrF0QLdCwJ323fkOElTpKDXJJndJMOGDxg7JWz0TC8Xhw',
    vendorName: 'Horology Haus',
    vendorRating: 4.9,
    rating: 4.9,
    reviewCount: 128,
  },
];

export default function WishlistPage() {
  return (
    <div className="w-full">
      <Breadcrumb items={[{ label: 'Saved Wishlist' }]} />
      <h1 className="text-3xl font-bold text-foreground mt-4 mb-6">Saved Wishlist ({savedWishlist.length})</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {savedWishlist.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
