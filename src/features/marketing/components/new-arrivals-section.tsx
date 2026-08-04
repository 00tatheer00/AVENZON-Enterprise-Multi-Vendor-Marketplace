'use client';

import * as React from 'react';
import { Package } from 'lucide-react';
import { SectionHeader } from '@/components/shared/section-header';
import { ProductCard, type ProductSummary } from '@/components/shared/product-card';

const newArrivals: ProductSummary[] = [
  {
    id: 'na-1', title: 'Google Pixel 9 Pro', slug: 'pixel-9-pro', price: 899,
    imageSrc: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=85',
    vendorName: 'TechVault', rating: 4.8, reviewCount: 320, badge: 'NEW', stock: 50, freeDelivery: true, deliveryDate: 'Mon, Aug 10',
  },
  {
    id: 'na-2', title: 'Adidas Ultraboost Light 2026', slug: 'adidas-ultraboost-2026', price: 190,
    imageSrc: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=85',
    vendorName: 'SneakerVault', rating: 4.7, reviewCount: 145, badge: 'NEW', stock: 35, freeDelivery: true,
  },
  {
    id: 'na-3', title: 'JBL Tour Pro 3 Earbuds', slug: 'jbl-tour-pro-3', price: 249, originalPrice: 299,
    imageSrc: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=85',
    vendorName: 'AudioPrime', rating: 4.6, reviewCount: 89, badge: 'NEW', stock: 22, freeDelivery: true,
  },
  {
    id: 'na-4', title: 'Apple Vision Pro 2', slug: 'apple-vision-pro-2', price: 2999,
    imageSrc: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=600&q=85',
    vendorName: 'TechVault', rating: 4.9, reviewCount: 56, badge: 'NEW', stock: 8, freeDelivery: true, deliveryDate: 'Wed, Aug 12',
  },
  {
    id: 'na-5', title: 'Ember Smart Mug 3', slug: 'ember-mug-3', price: 129,
    imageSrc: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=600&q=85',
    vendorName: 'HomeElite', rating: 4.5, reviewCount: 210, badge: 'NEW', stock: 42, freeDelivery: true,
  },
  {
    id: 'na-6', title: 'Razer DeathAdder V3 Pro', slug: 'razer-deathadder-v3', price: 89,
    imageSrc: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=600&q=85',
    vendorName: 'GameZone', rating: 4.8, reviewCount: 780, badge: 'NEW', stock: 60, freeDelivery: true, deliveryDate: 'Mon, Aug 10',
  },
  {
    id: 'na-7', title: 'Samsung Galaxy Watch 7', slug: 'galaxy-watch-7', price: 329, originalPrice: 399,
    imageSrc: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=600&q=85',
    vendorName: 'WristTech', rating: 4.7, reviewCount: 430, badge: 'NEW', stock: 18, freeDelivery: true,
  },
  {
    id: 'na-8', title: 'Theragun PRO Plus', slug: 'theragun-pro-plus', price: 449,
    imageSrc: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=600&q=85',
    vendorName: 'FitGear', rating: 4.8, reviewCount: 190, badge: 'NEW', stock: 25, freeDelivery: true,
  },
  {
    id: 'na-9', title: 'Sony LinkBuds Open Earbuds', slug: 'sony-linkbuds-open', price: 179,
    imageSrc: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=85',
    vendorName: 'SoundElite', rating: 4.6, reviewCount: 340, badge: 'NEW', stock: 38, freeDelivery: true,
  },
  {
    id: 'na-10', title: 'GoPro Hero 13 Black', slug: 'gopro-hero-13', price: 349, originalPrice: 449,
    imageSrc: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=85',
    vendorName: 'CameraWorld', rating: 4.7, reviewCount: 560, badge: 'NEW', stock: 14, freeDelivery: true, deliveryDate: 'Tue, Aug 11',
  },
];

export function NewArrivalsSection() {
  return (
    <section className="w-full bg-background">
      <div className="marketplace-container section-gap">
        <SectionHeader
          title="New Arrivals"
          subtitle="Fresh drops — just landed this week"
          icon={<Package className="h-5 w-5" />}
          badge="NEW"
          viewAllHref="/catalog?sort=newest"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {newArrivals.map((p) => (
            <ProductCard key={p.id} product={p} compact onQuickView={() => {}} onAddToCart={() => {}} />
          ))}
        </div>
      </div>
    </section>
  );
}
