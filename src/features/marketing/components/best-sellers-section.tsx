'use client';

import * as React from 'react';
import { Award } from 'lucide-react';
import { SectionHeader } from '@/components/shared/section-header';
import { ProductCarousel, CarouselItem } from '@/components/shared/product-carousel';
import { ProductCard, type ProductSummary } from '@/components/shared/product-card';

const bestSellers: ProductSummary[] = [
  {
    id: 'bs-1', title: 'Apple iPhone 16 Pro Max 256GB', slug: 'iphone-16-pro-max', price: 1099, originalPrice: 1199,
    imageSrc: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=600&q=85',
    vendorName: 'MobileHub', rating: 4.9, reviewCount: 12450, stock: 34, freeDelivery: true, deliveryDate: 'Mon, Aug 10',
  },
  {
    id: 'bs-2', title: 'Samsung 65" QLED 4K Smart TV', slug: 'samsung-65-qled', price: 899, originalPrice: 1299,
    imageSrc: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=85',
    vendorName: 'ElectroMart', rating: 4.8, reviewCount: 3210, stock: 15, freeDelivery: true,
  },
  {
    id: 'bs-3', title: 'Levi\'s 501 Original Fit Jeans', slug: 'levis-501-original', price: 59, originalPrice: 79,
    imageSrc: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=85',
    vendorName: 'DenimHouse', rating: 4.6, reviewCount: 8900, stock: 120, freeDelivery: true,
  },
  {
    id: 'bs-4', title: 'Instant Pot Duo 7-in-1 Cooker', slug: 'instant-pot-duo', price: 79, originalPrice: 99,
    imageSrc: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=85',
    vendorName: 'KitchenPro', rating: 4.7, reviewCount: 15600, stock: 67, freeDelivery: true, deliveryDate: 'Tue, Aug 11',
  },
  {
    id: 'bs-5', title: 'Nike Air Jordan 1 Retro High', slug: 'jordan-1-retro', price: 170,
    imageSrc: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?auto=format&fit=crop&w=600&q=85',
    vendorName: 'SneakerVault', rating: 4.9, reviewCount: 4560, stock: 9, freeDelivery: true,
  },
  {
    id: 'bs-6', title: 'Kindle Paperwhite 2026', slug: 'kindle-paperwhite-2026', price: 139, originalPrice: 159,
    imageSrc: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=85',
    vendorName: 'BookWorld', rating: 4.8, reviewCount: 9870, stock: 45, freeDelivery: true,
  },
];

export function BestSellersSection() {
  const [activeTab, setActiveTab] = React.useState('Overall');

  return (
    <section className="w-full bg-surface-container-low/40">
      <div className="marketplace-container section-gap">
        <SectionHeader
          title="Best Sellers"
          subtitle="Top-selling products loved by millions"
          icon={<Award className="h-5 w-5" />}
          badge="TOP"
          viewAllHref="/catalog?sort=best-sellers"
          tabs={['Overall', 'Electronics', 'Fashion', 'Home', 'Beauty']}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <ProductCarousel>
          {bestSellers.map((p, idx) => (
            <CarouselItem key={p.id} className="!w-[200px] sm:!w-[230px]">
              <ProductCard product={p} rank={idx + 1} onQuickView={() => {}} onAddToCart={() => {}} />
            </CarouselItem>
          ))}
        </ProductCarousel>
      </div>
    </section>
  );
}
