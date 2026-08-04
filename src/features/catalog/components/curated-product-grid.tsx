'use client';

import * as React from 'react';
import { ShoppingBag } from 'lucide-react';
import { SectionHeader } from '@/components/shared/section-header';
import { ProductCard, type ProductSummary } from '@/components/shared/product-card';

const recommended: ProductSummary[] = [
  {
    id: 'rec-1', title: 'OmniHub Pro Smart Controller', slug: 'omnihub-pro', price: 249, originalPrice: 329,
    imageSrc: 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=600&q=85',
    vendorName: 'NexusTech', rating: 4.8, reviewCount: 1280, stock: 32, freeDelivery: true, deliveryDate: 'Mon, Aug 10',
  },
  {
    id: 'rec-2', title: 'Aether Sonics ANC Pro', slug: 'aether-sonics-pro', price: 339, originalPrice: 399,
    imageSrc: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=85',
    vendorName: 'Aether Audio', rating: 5.0, reviewCount: 4520, stock: 19, freeDelivery: true,
  },
  {
    id: 'rec-3', title: 'EcoStat Touch Thermostat', slug: 'ecostat-touch', price: 199,
    imageSrc: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=85',
    vendorName: 'Lumina', rating: 4.6, reviewCount: 890, stock: 45, freeDelivery: true, deliveryDate: 'Tue, Aug 11',
  },
  {
    id: 'rec-4', title: 'Nexus Studio Pro Wireless', slug: 'nexus-studio-pro', price: 349,
    imageSrc: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=85',
    vendorName: 'Auraudio', rating: 4.9, reviewCount: 3120, badge: 'Top Rated', stock: 11, freeDelivery: true,
  },
  {
    id: 'rec-5', title: 'Structure Leather Weekender', slug: 'leather-weekender', price: 590, originalPrice: 690,
    imageSrc: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=85',
    vendorName: 'LuxeCraft', rating: 4.8, reviewCount: 670, stock: 7, freeDelivery: true,
  },
  {
    id: 'rec-6', title: 'Aero Chronograph Masterpiece', slug: 'chronograph-masterpiece', price: 1250,
    imageSrc: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=85',
    vendorName: 'Horology Haus', rating: 4.9, reviewCount: 1420, stock: 4, freeDelivery: true,
  },
  {
    id: 'rec-7', title: 'Bamboo Wireless Charger', slug: 'bamboo-charger', price: 39, originalPrice: 59,
    imageSrc: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=85',
    vendorName: 'EcoTech', rating: 4.5, reviewCount: 2300, stock: 78, freeDelivery: true,
  },
  {
    id: 'rec-8', title: 'Smart LED Desk Lamp', slug: 'smart-led-lamp', price: 89,
    imageSrc: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?auto=format&fit=crop&w=600&q=85',
    vendorName: 'LightHouse', rating: 4.7, reviewCount: 1560, stock: 28, freeDelivery: true, deliveryDate: 'Wed, Aug 12',
  },
];

export function CuratedProductGrid() {
  const [activeTab, setActiveTab] = React.useState('All Products');

  return (
    <section className="w-full bg-background">
      <div className="marketplace-container section-gap">
        <SectionHeader
          title="Recommended Products"
          subtitle="Verified for quality, authenticity, and express worldwide delivery"
          icon={<ShoppingBag className="h-5 w-5" />}
          viewAllHref="/catalog"
          viewAllText="Explore Full Catalog"
          tabs={['All Products', 'Smart Tech', 'Audiophile', 'Lifestyle', 'Accessories']}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {recommended.map((p) => (
            <ProductCard key={p.id} product={p} onQuickView={() => {}} onAddToCart={() => {}} />
          ))}
        </div>
      </div>
    </section>
  );
}
