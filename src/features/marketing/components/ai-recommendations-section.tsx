'use client';

import * as React from 'react';
import { Sparkles } from 'lucide-react';
import { SectionHeader } from '@/components/shared/section-header';
import { ProductCarousel, CarouselItem } from '@/components/shared/product-carousel';
import { ProductCard, type ProductSummary } from '@/components/shared/product-card';

const aiPicks: ProductSummary[] = [
  {
    id: 'ai-1', title: 'Sonos Era 300 Speaker', slug: 'sonos-era-300', price: 449,
    imageSrc: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=85',
    vendorName: 'SoundElite', rating: 4.9, reviewCount: 1890, badge: 'AI Pick', stock: 20, freeDelivery: true,
  },
  {
    id: 'ai-2', title: 'Aesop Reverence Hand Wash', slug: 'aesop-hand-wash', price: 39,
    imageSrc: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=85',
    vendorName: 'BeautyBar', rating: 4.7, reviewCount: 4530, badge: 'AI Pick', stock: 90, freeDelivery: true,
  },
  {
    id: 'ai-3', title: 'Herman Miller Aeron Chair', slug: 'aeron-chair', price: 1395, originalPrice: 1595,
    imageSrc: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=600&q=85',
    vendorName: 'OfficeElite', rating: 4.9, reviewCount: 2670, badge: 'AI Pick', stock: 6, freeDelivery: true,
  },
  {
    id: 'ai-4', title: 'Le Creuset Dutch Oven 5.5qt', slug: 'le-creuset-dutch', price: 349, originalPrice: 420,
    imageSrc: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=85',
    vendorName: 'KitchenPro', rating: 4.8, reviewCount: 5600, badge: 'AI Pick', stock: 18, freeDelivery: true,
  },
  {
    id: 'ai-5', title: 'Bellroy Tech Kit Compact', slug: 'bellroy-tech-kit', price: 59,
    imageSrc: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=85',
    vendorName: 'BagWorks', rating: 4.6, reviewCount: 890, badge: 'AI Pick', stock: 35, freeDelivery: true,
  },
  {
    id: 'ai-6', title: 'Oura Ring Gen 4', slug: 'oura-ring-gen4', price: 299,
    imageSrc: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=600&q=85',
    vendorName: 'FitGear', rating: 4.7, reviewCount: 3200, badge: 'AI Pick', stock: 12, freeDelivery: true,
  },
];

export function AIRecommendationsSection() {
  return (
    <section className="w-full bg-gradient-to-b from-accent/3 to-background">
      <div className="marketplace-container section-gap">
        <SectionHeader
          title="Recommended For You"
          subtitle="AI-powered picks based on your browsing history"
          icon={<Sparkles className="h-5 w-5" />}
          viewAllHref="/catalog?sort=recommended"
        />
        {/* Personalization Chips */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-4 -mt-2">
          {['Because you viewed Smart Home', 'Based on Audio purchases', 'Popular in your area', 'Trending in Tech'].map((chip) => (
            <span key={chip} className="whitespace-nowrap rounded-full bg-accent/8 border border-accent/15 px-3 py-1 text-[11px] font-medium text-accent">
              {chip}
            </span>
          ))}
        </div>
        <ProductCarousel>
          {aiPicks.map((p) => (
            <CarouselItem key={p.id} className="!w-[200px] sm:!w-[230px]">
              <ProductCard product={p} onQuickView={() => {}} onAddToCart={() => {}} />
            </CarouselItem>
          ))}
        </ProductCarousel>
      </div>
    </section>
  );
}
