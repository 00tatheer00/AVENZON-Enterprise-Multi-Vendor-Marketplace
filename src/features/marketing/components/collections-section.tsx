'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/shared/section-header';

const collections = [
  {
    title: 'Summer Essentials',
    desc: 'Everything you need for the perfect summer',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85',
    href: '/catalog?collection=summer',
    products: 340,
  },
  {
    title: 'Work From Home',
    desc: 'Upgrade your home office setup',
    image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=800&q=85',
    href: '/catalog?collection=wfh',
    products: 280,
  },
  {
    title: 'Fitness Goals',
    desc: 'Equipment & gear for every workout',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=85',
    href: '/catalog?collection=fitness',
    products: 450,
  },
  {
    title: 'Tech Enthusiast',
    desc: 'Latest gadgets for early adopters',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=85',
    href: '/catalog?collection=tech',
    products: 620,
  },
];

export function CollectionsSection() {
  return (
    <section className="w-full bg-background">
      <div className="marketplace-container section-gap">
        <SectionHeader
          title="Curated Collections"
          subtitle="Handpicked product sets for every lifestyle"
          viewAllHref="/collections"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {collections.map((col) => (
            <Link key={col.title} href={col.href} className="group relative rounded-xl overflow-hidden min-h-[220px] md:min-h-[260px]">
              <Image
                src={col.image}
                alt={col.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-bold text-white mb-0.5">{col.title}</h3>
                <p className="text-xs text-white/70 mb-2">{col.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-white/90 group-hover:text-white transition-colors">
                  {col.products} Products <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
