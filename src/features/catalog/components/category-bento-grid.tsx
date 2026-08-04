'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, LayoutGrid } from 'lucide-react';
import { SectionHeader } from '@/components/shared/section-header';

const collections = [
  {
    title: 'Modern Living',
    desc: 'Contemporary furniture & minimalist decor',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
    href: '/catalog?collection=modern-living',
    span: 'md:col-span-2 md:row-span-2',
    size: '(max-width: 768px) 100vw, 50vw',
  },
  {
    title: 'Luxury Timepieces',
    desc: 'Precision meets classic design',
    image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=1200&q=85',
    href: '/catalog?collection=watches',
    span: 'md:col-span-2 md:row-span-1',
    size: '(max-width: 768px) 100vw, 50vw',
  },
  {
    title: 'Consumer Tech',
    desc: 'Latest gadgets & electronics',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=85',
    href: '/catalog?collection=tech',
    span: 'md:col-span-1 md:row-span-1',
    size: '(max-width: 768px) 100vw, 25vw',
  },
  {
    title: 'Premium Audio',
    desc: 'Studio-quality sound',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=85',
    href: '/catalog?collection=audio',
    span: 'md:col-span-1 md:row-span-1',
    size: '(max-width: 768px) 100vw, 25vw',
  },
  {
    title: 'Outdoor & Adventure',
    desc: 'Gear for every journey',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=85',
    href: '/catalog?collection=outdoor',
    span: 'md:col-span-1 md:row-span-1',
    size: '(max-width: 768px) 100vw, 25vw',
  },
];

export function CategoryBentoGrid() {
  return (
    <section className="w-full bg-background">
      <div className="marketplace-container section-gap">
        <SectionHeader
          title="Featured Collections"
          subtitle="Explore curated categories for every lifestyle"
          viewAllHref="/categories"
        />
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 md:gap-4 min-h-[400px] md:min-h-[480px]">
          {collections.map((col) => (
            <Link
              key={col.title}
              href={col.href}
              className={`group relative ${col.span} rounded-xl overflow-hidden cursor-pointer min-h-[180px]`}
            >
              <Image
                src={col.image}
                alt={col.title}
                fill
                sizes={col.size}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <h3 className="text-lg font-bold text-white mb-0.5">{col.title}</h3>
                <p className="text-xs text-white/70 mb-2">{col.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-white/90 group-hover:text-white transition-colors">
                  Shop Now <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
          {/* Browse All Card */}
          <div className="md:col-span-1 md:row-span-1 rounded-xl border border-outline-variant/15 bg-surface-container-high/50 p-5 flex flex-col items-center justify-center text-center hover:border-primary/30 transition-colors cursor-pointer min-h-[180px]">
            <LayoutGrid className="h-8 w-8 text-primary mb-2" />
            <h3 className="text-sm font-bold text-foreground mb-0.5">All 42+ Collections</h3>
            <p className="text-[11px] text-on-surface-variant mb-3">Browse full catalog</p>
            <Link href="/categories" className="rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-bold hover:bg-primary hover:text-white transition-colors">
              Browse All
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
