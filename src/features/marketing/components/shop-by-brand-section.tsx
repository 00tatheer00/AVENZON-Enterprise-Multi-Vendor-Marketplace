'use client';

import * as React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/shared/section-header';
import { ProductCarousel, CarouselItem } from '@/components/shared/product-carousel';

const brands = [
  { name: 'Apple', products: 1420, initial: 'A', color: 'from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700', borderHover: 'hover:border-gray-400' },
  { name: 'Samsung', products: 980, initial: 'S', color: 'from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30', borderHover: 'hover:border-blue-400' },
  { name: 'Sony', products: 756, initial: 'S', color: 'from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700', borderHover: 'hover:border-slate-400' },
  { name: 'Nike', products: 2100, initial: 'N', color: 'from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30', borderHover: 'hover:border-orange-400' },
  { name: 'Dyson', products: 340, initial: 'D', color: 'from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30', borderHover: 'hover:border-purple-400' },
  { name: 'Bose', products: 280, initial: 'B', color: 'from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30', borderHover: 'hover:border-indigo-400' },
  { name: 'Adidas', products: 1850, initial: 'A', color: 'from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30', borderHover: 'hover:border-green-400' },
  { name: 'Canon', products: 560, initial: 'C', color: 'from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30', borderHover: 'hover:border-red-400' },
  { name: 'LEGO', products: 1200, initial: 'L', color: 'from-yellow-50 to-yellow-100 dark:from-yellow-900/30 dark:to-yellow-800/30', borderHover: 'hover:border-yellow-500' },
  { name: 'Logitech', products: 420, initial: 'L', color: 'from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30', borderHover: 'hover:border-teal-400' },
  { name: 'JBL', products: 380, initial: 'J', color: 'from-cyan-50 to-cyan-100 dark:from-cyan-900/30 dark:to-cyan-800/30', borderHover: 'hover:border-cyan-400' },
  { name: 'Puma', products: 950, initial: 'P', color: 'from-rose-50 to-rose-100 dark:from-rose-900/30 dark:to-rose-800/30', borderHover: 'hover:border-rose-400' },
];

export function ShopByBrandSection() {
  return (
    <section className="w-full bg-background">
      <div className="marketplace-container section-gap">
        <SectionHeader
          title="Shop by Brand"
          subtitle="Explore products from your favorite brands"
          viewAllHref="/brands"
        />
        <ProductCarousel>
          {brands.map((brand) => (
            <CarouselItem key={brand.name} className="!w-[140px] sm:!w-[160px]">
              <Link
                href={`/brands/${brand.name.toLowerCase()}`}
                className={`flex flex-col items-center justify-center rounded-xl border border-outline-variant/15 bg-gradient-to-b ${brand.color} p-5 text-center transition-all ${brand.borderHover} hover:shadow-md h-full`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm text-2xl font-extrabold text-foreground mb-3 dark:bg-surface-container-low">
                  {brand.initial}
                </div>
                <h4 className="text-sm font-bold text-foreground">{brand.name}</h4>
                <span className="text-[11px] text-on-surface-variant mt-0.5">{brand.products.toLocaleString()} Products</span>
              </Link>
            </CarouselItem>
          ))}
        </ProductCarousel>
      </div>
    </section>
  );
}
