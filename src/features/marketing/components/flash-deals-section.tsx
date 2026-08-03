'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Flame, Clock, ShoppingBag, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PriceDisplay } from '@/components/shared/price-display';

export function FlashDealsSection() {
  const [timeLeft, setTimeLeft] = React.useState({ hours: 4, minutes: 18, seconds: 32 });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const flashDeals = [
    {
      id: 'flash-1',
      title: 'Aether Sonics ANC Pro Wireless',
      slug: 'silence-v3-headphones',
      price: 279.0,
      originalPrice: 399.0,
      discount: '30% OFF',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=85',
      vendor: 'Aether Audio',
      soldPercent: 82,
      stockLeft: 4,
    },
    {
      id: 'flash-2',
      title: 'Chronos Heritage Automatic Watch',
      slug: 'chronograph-masterpiece',
      price: 890.0,
      originalPrice: 1250.0,
      discount: '28% OFF',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=85',
      vendor: 'Horology Haus',
      soldPercent: 94,
      stockLeft: 2,
    },
    {
      id: 'flash-3',
      title: 'OmniHub Pro Smart Controller',
      slug: 'omnihub-pro-controller',
      price: 179.0,
      originalPrice: 249.0,
      discount: '28% OFF',
      image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=800&q=85',
      vendor: 'NexusTech',
      soldPercent: 65,
      stockLeft: 8,
    },
  ];

  return (
    <section className="w-full py-16 bg-surface-container-low/70 border-b border-outline-variant/30">
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Header with Live Ticking Timer */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-error/10 text-error font-bold">
              <Flame className="h-6 w-6 animate-bounce" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Exclusive Flash Drops</h2>
              <p className="text-xs text-on-surface-variant">Direct vendor discounts available in limited quantity.</p>
            </div>
          </div>

          {/* Countdown Clock */}
          <div className="flex items-center gap-2 rounded-2xl border border-outline-variant/30 bg-surface-container-lowest px-4 py-2 shadow-sm">
            <Clock className="h-4 w-4 text-primary shrink-0" />
            <span className="text-xs font-semibold text-on-surface-variant mr-1">Sale Ends In:</span>
            <div className="flex items-center gap-1 font-mono text-sm font-bold text-foreground">
              <span className="rounded bg-primary-container px-2 py-0.5 text-on-primary-container">
                {String(timeLeft.hours).padStart(2, '0')}h
              </span>
              :
              <span className="rounded bg-primary-container px-2 py-0.5 text-on-primary-container">
                {String(timeLeft.minutes).padStart(2, '0')}m
              </span>
              :
              <span className="rounded bg-error text-white px-2 py-0.5">
                {String(timeLeft.seconds).padStart(2, '0')}s
              </span>
            </div>
          </div>
        </div>

        {/* Flash Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {flashDeals.map((deal) => (
            <div
              key={deal.id}
              className="group relative rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-5 shadow-sm hover:shadow-xl transition-all duration-300 dark:bg-background flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-surface-container-low mb-4">
                <span className="absolute left-3 top-3 z-10 rounded-full bg-error px-3 py-1 text-xs font-bold text-white shadow-md">
                  {deal.discount}
                </span>
                <Image
                  src={deal.image}
                  alt={deal.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Copy */}
              <div className="flex items-center gap-1 text-xs font-semibold text-primary mb-1">
                <ShieldCheck className="h-3.5 w-3.5" /> {deal.vendor}
              </div>
              <h3 className="font-bold text-base text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                {deal.title}
              </h3>

              <PriceDisplay price={deal.price} originalPrice={deal.originalPrice} size="md" className="mt-2" />

              {/* Progress Bar */}
              <div className="mt-4 pt-3 border-t border-outline-variant/20 space-y-1.5">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-on-surface-variant">{deal.soldPercent}% Claimed</span>
                  <span className="text-error font-bold">Only {deal.stockLeft} left</span>
                </div>
                <div className="h-2 w-full rounded-full bg-surface-container-high overflow-hidden">
                  <div
                    style={{ width: `${deal.soldPercent}%` }}
                    className="h-full rounded-full bg-gradient-to-r from-amber-500 to-error transition-all duration-500"
                  />
                </div>
              </div>

              <Link href={`/products/${deal.slug}`} className="mt-4">
                <Button size="sm" className="w-full gap-2 font-bold">
                  <ShoppingBag className="h-4 w-4" /> Claim Deal Now
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
