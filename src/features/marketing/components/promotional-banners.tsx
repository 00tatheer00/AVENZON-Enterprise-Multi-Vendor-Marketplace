'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const banners = [
  {
    title: 'Up to 70% OFF',
    subtitle: 'Premium Electronics',
    desc: 'Laptops, tablets, and more',
    gradient: 'from-[#0046c7] to-[#6c5ce7]',
    href: '/catalog?c=electronics&sale=true',
  },
  {
    title: 'New Season',
    subtitle: 'Fashion Arrivals',
    desc: 'Trending styles for 2026',
    gradient: 'from-[#e84393] to-[#fd79a8]',
    href: '/catalog?c=fashion&sort=newest',
  },
];

const bannersAlt = [
  {
    title: 'Smart Home Sale',
    subtitle: 'Save up to 50%',
    desc: 'Automate your lifestyle',
    gradient: 'from-[#00b894] to-[#00cec9]',
    href: '/catalog?c=smart-home',
  },
  {
    title: 'Fitness Gear',
    subtitle: 'Starting $29.99',
    desc: 'Gym & outdoor essentials',
    gradient: 'from-[#f39c12] to-[#e74c3c]',
    href: '/catalog?c=sports',
  },
];

function BannerRow({ items }: { items: typeof banners }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
      {items.map((b, idx) => (
        <Link
          key={idx}
          href={b.href}
          className={`group relative rounded-xl bg-gradient-to-r ${b.gradient} p-6 md:p-8 text-white overflow-hidden hover:shadow-lg transition-shadow`}
        >
          <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8" />
          <div className="absolute right-10 bottom-0 w-20 h-20 bg-white/5 rounded-full translate-y-6" />
          <div className="relative z-10">
            <span className="text-white/70 text-[11px] font-semibold uppercase tracking-wider">{b.subtitle}</span>
            <h3 className="text-xl md:text-2xl font-extrabold mt-1 mb-1">{b.title}</h3>
            <p className="text-white/70 text-xs mb-4">{b.desc}</p>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-white/20 rounded-full px-4 py-2 group-hover:bg-white/30 transition-colors">
              Shop Now <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function PromotionalBanners() {
  return (
    <section className="w-full bg-background">
      <div className="marketplace-container section-gap">
        <BannerRow items={banners} />
      </div>
    </section>
  );
}

export function PromotionalBanners2() {
  return (
    <section className="w-full bg-background">
      <div className="marketplace-container section-gap">
        <BannerRow items={bannersAlt} />
      </div>
    </section>
  );
}
