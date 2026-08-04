'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock } from 'lucide-react';
import { SectionHeader } from '@/components/shared/section-header';
import { ProductCarousel, CarouselItem } from '@/components/shared/product-carousel';
import { formatCurrency } from '@/core/utils/formatters';

const recentlyViewed = [
  { id: 'rv-1', title: 'MacBook Pro M4', price: 2499, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=85', slug: 'macbook-pro-m4' },
  { id: 'rv-2', title: 'AirPods Pro 3', price: 229, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&q=85', slug: 'airpods-pro-3' },
  { id: 'rv-3', title: 'Nike Air Max 2026', price: 189, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=85', slug: 'nike-air-max-2026' },
  { id: 'rv-4', title: 'Canon EOS R6 III', price: 1899, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=85', slug: 'canon-eos-r6-iii' },
  { id: 'rv-5', title: 'Dyson V15 Detect', price: 599, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=400&q=85', slug: 'dyson-v15-detect' },
  { id: 'rv-6', title: 'PS6 Digital', price: 449, image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=400&q=85', slug: 'ps6-digital' },
  { id: 'rv-7', title: 'Sonos Era 300', price: 449, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=400&q=85', slug: 'sonos-era-300' },
  { id: 'rv-8', title: 'Aeron Chair', price: 1395, image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=400&q=85', slug: 'aeron-chair' },
];

export function RecentlyViewedSection() {
  return (
    <section className="w-full bg-surface-container-low/40">
      <div className="marketplace-container section-gap">
        <SectionHeader
          title="Recently Viewed"
          subtitle="Pick up where you left off"
          icon={<Clock className="h-5 w-5" />}
          viewAllHref="/account/history"
        />
        <ProductCarousel>
          {recentlyViewed.map((p) => (
            <CarouselItem key={p.id} className="!w-[140px] sm:!w-[160px]">
              <Link href={`/products/${p.slug}`} className="group flex flex-col rounded-lg border border-outline-variant/15 bg-surface-container-lowest overflow-hidden hover:shadow-md transition-all dark:bg-surface-container-low/50">
                <div className="relative aspect-square overflow-hidden bg-surface-container-low">
                  <Image src={p.image} alt={p.title} fill sizes="160px" className="object-cover product-img-zoom" />
                </div>
                <div className="p-2">
                  <h4 className="text-[11px] font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">{p.title}</h4>
                  <span className="text-xs font-bold text-foreground mt-0.5 block">{formatCurrency(p.price)}</span>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </ProductCarousel>
      </div>
    </section>
  );
}
