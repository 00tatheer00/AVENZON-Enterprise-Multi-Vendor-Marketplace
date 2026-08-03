'use client';

import * as React from 'react';
import Link from 'next/link';
import { ShieldCheck, Star, ArrowRight, Store, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function VendorSpotlightSection() {
  const vendors = [
    {
      name: 'Horology Haus',
      category: 'Swiss Luxury Timepieces',
      location: 'Geneva, Switzerland',
      rating: 4.9,
      reviews: 1420,
      verifiedYears: '4 Years Verified',
      badge: 'Platinum Supplier',
      avatar: 'HH',
      productsCount: 142,
    },
    {
      name: 'Aether Audio',
      category: 'Audiophile Acoustic Gear',
      location: 'Tokyo, Japan',
      rating: 4.8,
      reviews: 980,
      verifiedYears: '3 Years Verified',
      badge: 'Top Tech Studio',
      avatar: 'AA',
      productsCount: 89,
    },
    {
      name: 'NexusTech Labs',
      category: 'Smart Automation & IoT',
      location: 'San Francisco, USA',
      rating: 4.9,
      reviews: 2150,
      verifiedYears: '5 Years Verified',
      badge: 'Gold Certified',
      avatar: 'NT',
      productsCount: 310,
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 border-b border-outline-variant/30">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Verified Merchant Network</span>
            <h2 className="text-3xl font-extrabold text-foreground mt-1">Featured Multi-Vendor Stores</h2>
            <p className="text-sm text-on-surface-variant mt-1">Shop directly from audited manufacturers, studios, and authorized distributors.</p>
          </div>
          <Link href="/vendors" className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
            Explore All 500+ Verified Suppliers <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vendors.map((v, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-sm hover:border-primary hover:shadow-xl transition-all duration-300 dark:bg-background flex flex-col justify-between"
            >
              <div>
                {/* Store Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white font-extrabold text-lg shadow-md">
                    {v.avatar}
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                    <Award className="h-3.5 w-3.5" /> {v.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {v.name}
                </h3>
                <p className="text-xs font-medium text-on-surface-variant mt-0.5">{v.category}</p>
                <p className="text-[11px] text-outline mt-0.5">{v.location} • {v.verifiedYears}</p>

                {/* Rating & Sales */}
                <div className="mt-4 flex items-center gap-3 rounded-xl bg-surface-container-low p-3 border border-outline-variant/20">
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="h-4 w-4 fill-amber-500" /> {v.rating}
                  </div>
                  <span className="text-xs text-on-surface-variant font-medium">
                    ({v.reviews} verified reviews)
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                <span className="text-xs text-on-surface-variant font-semibold">{v.productsCount} Listed Products</span>
                <Link href="/catalog">
                  <Button variant="outline" size="sm" className="gap-1 text-xs font-semibold rounded-full">
                    <Store className="h-3.5 w-3.5" /> Visit Store
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
