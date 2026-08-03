'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CategoryBentoGrid() {
  return (
    <section className="py-16 md:py-24 border-b border-outline-variant/30">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Featured Collections</h2>
            <p className="text-sm text-on-surface-variant mt-1">Explore top-tier categories curated for high-performance lifestyles.</p>
          </div>
          <Link href="/categories" className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Bento Grid Fluid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 min-h-[500px] md:min-h-[600px]">
          {/* Main Feature (2x2) */}
          <div className="group relative md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden cursor-pointer shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
              alt="Modern Living & Architecture"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 glass-panel border-t border-white/20 rounded-b-2xl">
              <span className="inline-block rounded-full bg-surface-container-lowest/80 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-md mb-3">
                Curated
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">Modern Living</h3>
              <p className="text-sm text-white/80 line-clamp-2">
                Elevate your space with our curated selection of contemporary furniture and minimalist decor designed for the discerning eye.
              </p>
            </div>
          </div>

          {/* Secondary Top (2x1) */}
          <div className="group relative md:col-span-2 md:row-span-1 rounded-2xl overflow-hidden cursor-pointer shadow-md min-h-[250px]">
            <Image
              src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=1200&q=85"
              alt="Luxury Timepieces"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-1">Luxury Timepieces</h3>
              <p className="text-xs text-white/80">Precision engineering meets classic horology design.</p>
            </div>
          </div>

          {/* Secondary Bottom 1 (1x1) */}
          <div className="group relative md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden cursor-pointer shadow-md min-h-[220px]">
            <Image
              src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=85"
              alt="Consumer Tech & Earbuds"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 text-white">
              <h3 className="text-lg font-bold">Consumer Tech</h3>
            </div>
          </div>

          {/* Secondary Bottom 2 (1x1 Directory Card) */}
          <div className="md:col-span-1 md:row-span-1 rounded-2xl border border-outline-variant/30 bg-surface-container-high p-6 flex flex-col items-center justify-center text-center hover:border-primary/50 transition-colors cursor-pointer">
            <LayoutGrid className="h-10 w-10 text-primary mb-3" />
            <h3 className="text-sm font-bold text-foreground mb-1">Explore All 42 Collections</h3>
            <p className="text-xs text-on-surface-variant mb-4">Browse full category taxonomy</p>
            <Link href="/categories">
              <Button variant="outline" size="sm" className="rounded-full text-xs">Browse Directory</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
