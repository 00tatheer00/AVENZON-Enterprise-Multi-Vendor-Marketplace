'use client';

import * as React from 'react';
import Link from 'next/link';
import { Star, ArrowRight, Store, Award, ShieldCheck, MapPin } from 'lucide-react';
import { SectionHeader } from '@/components/shared/section-header';
import { ProductCarousel, CarouselItem } from '@/components/shared/product-carousel';

const vendors = [
  {
    name: 'TechVault', category: 'Electronics & Gadgets', location: 'San Francisco, USA',
    rating: 4.9, reviews: 12450, badge: 'Platinum', avatar: 'TV', productsCount: 3420, color: 'bg-blue-600',
  },
  {
    name: 'AudioPrime', category: 'Audio & Headphones', location: 'Tokyo, Japan',
    rating: 4.8, reviews: 6780, badge: 'Gold', avatar: 'AP', productsCount: 890, color: 'bg-indigo-600',
  },
  {
    name: 'SneakerVault', category: 'Footwear & Streetwear', location: 'London, UK',
    rating: 4.9, reviews: 8900, badge: 'Platinum', avatar: 'SV', productsCount: 2100, color: 'bg-orange-600',
  },
  {
    name: 'HomeElite', category: 'Home & Kitchen', location: 'Berlin, Germany',
    rating: 4.7, reviews: 4560, badge: 'Gold', avatar: 'HE', productsCount: 1560, color: 'bg-emerald-600',
  },
  {
    name: 'CameraWorld', category: 'Photography & Video', location: 'Seoul, South Korea',
    rating: 4.9, reviews: 3200, badge: 'Platinum', avatar: 'CW', productsCount: 780, color: 'bg-rose-600',
  },
  {
    name: 'FitGear', category: 'Sports & Fitness', location: 'Sydney, Australia',
    rating: 4.8, reviews: 5670, badge: 'Gold', avatar: 'FG', productsCount: 1200, color: 'bg-cyan-600',
  },
];

export function VendorSpotlightSection() {
  return (
    <section className="w-full bg-surface-container-low/40">
      <div className="marketplace-container section-gap">
        <SectionHeader
          title="Featured Stores"
          subtitle="Shop directly from top-rated verified vendors worldwide"
          icon={<Store className="h-5 w-5" />}
          viewAllHref="/vendors"
          viewAllText="Explore All 500+ Stores"
        />
        <ProductCarousel>
          {vendors.map((v) => (
            <CarouselItem key={v.name} className="!w-[260px] sm:!w-[280px]">
              <div className="group rounded-xl border border-outline-variant/15 bg-surface-container-lowest p-5 hover:border-primary/30 card-lift flex flex-col h-full dark:bg-surface-container-low/50">
                <div className="flex items-center justify-between mb-3">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${v.color} text-white font-bold text-sm shadow-md`}>
                    {v.avatar}
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-gold/10 px-2.5 py-0.5 text-[10px] font-bold text-amber-700 dark:text-amber-400">
                    <Award className="h-3 w-3" /> {v.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">{v.name}</h3>
                <p className="text-[11px] text-on-surface-variant mt-0.5">{v.category}</p>
                <p className="text-[10px] text-outline mt-0.5 flex items-center gap-1">
                  <MapPin className="h-2.5 w-2.5" /> {v.location}
                </p>

                <div className="mt-3 flex items-center gap-2 rounded-lg bg-surface-container-low/60 p-2 border border-outline-variant/10">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-3.5 w-3.5 fill-amber-500" />
                    <span className="text-xs font-bold">{v.rating}</span>
                  </div>
                  <span className="text-[10px] text-on-surface-variant">
                    ({v.reviews.toLocaleString()} reviews)
                  </span>
                  <ShieldCheck className="h-3 w-3 text-fresh ml-auto" />
                </div>

                <div className="mt-auto pt-3 flex items-center justify-between border-t border-outline-variant/10 mt-3">
                  <span className="text-[11px] text-on-surface-variant font-medium">{v.productsCount.toLocaleString()} Products</span>
                  <Link href="/catalog" className="text-[11px] font-bold text-primary hover:underline flex items-center gap-0.5">
                    Visit <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </ProductCarousel>
      </div>
    </section>
  );
}
