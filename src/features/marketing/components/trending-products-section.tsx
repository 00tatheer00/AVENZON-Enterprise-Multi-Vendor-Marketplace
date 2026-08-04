'use client';

import * as React from 'react';
import { TrendingUp } from 'lucide-react';
import { SectionHeader } from '@/components/shared/section-header';
import { ProductCarousel, CarouselItem } from '@/components/shared/product-carousel';
import { ProductCard, type ProductSummary } from '@/components/shared/product-card';

const trendingProducts: ProductSummary[] = [
  {
    id: 'tr-1', title: 'MacBook Pro M4 Max 16"', slug: 'macbook-pro-m4', price: 2499, originalPrice: 2799,
    imageSrc: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=85',
    vendorName: 'TechVault', rating: 4.9, reviewCount: 3420, badge: 'Trending', stock: 24, freeDelivery: true, deliveryDate: 'Mon, Aug 10',
  },
  {
    id: 'tr-2', title: 'AirPods Pro 3rd Generation', slug: 'airpods-pro-3', price: 229, originalPrice: 279,
    imageSrc: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=85',
    vendorName: 'AudioPrime', rating: 4.8, reviewCount: 5620, stock: 45, freeDelivery: true,
  },
  {
    id: 'tr-3', title: 'Nike Air Max 2026 Limited', slug: 'nike-air-max-2026', price: 189, originalPrice: 220,
    imageSrc: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=85',
    vendorName: 'SneakerVault', rating: 4.7, reviewCount: 890, stock: 8, freeDelivery: true, deliveryDate: 'Tue, Aug 11',
  },
  {
    id: 'tr-4', title: 'Canon EOS R6 Mark III', slug: 'canon-eos-r6-iii', price: 1899, originalPrice: 2299,
    imageSrc: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=85',
    vendorName: 'CameraWorld', rating: 4.9, reviewCount: 456, stock: 12, freeDelivery: true,
  },
  {
    id: 'tr-5', title: 'Dyson V15 Detect Absolute', slug: 'dyson-v15-detect', price: 599, originalPrice: 749,
    imageSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=600&q=85',
    vendorName: 'HomeElite', rating: 4.8, reviewCount: 2340, stock: 18, freeDelivery: true, deliveryDate: 'Wed, Aug 12',
  },
  {
    id: 'tr-6', title: 'PlayStation 6 Digital Edition', slug: 'ps6-digital', price: 449, originalPrice: 499,
    imageSrc: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=85',
    vendorName: 'GameZone', rating: 4.9, reviewCount: 7800, stock: 5, freeDelivery: true, deliveryDate: 'Mon, Aug 10',
  },
];

export function TrendingProductsSection() {
  const [activeTab, setActiveTab] = React.useState('All');

  return (
    <section className="w-full bg-background">
      <div className="marketplace-container section-gap">
        <SectionHeader
          title="Trending Now"
          subtitle="Most popular products this week"
          icon={<TrendingUp className="h-5 w-5" />}
          viewAllHref="/catalog?sort=trending"
          tabs={['All', 'Tech', 'Fashion', 'Home', 'Sports']}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <ProductCarousel>
          {trendingProducts.map((p) => (
            <CarouselItem key={p.id} className="!w-[200px] sm:!w-[230px]">
              <ProductCard product={p} onQuickView={() => {}} onAddToCart={() => {}} />
            </CarouselItem>
          ))}
        </ProductCarousel>
      </div>
    </section>
  );
}
