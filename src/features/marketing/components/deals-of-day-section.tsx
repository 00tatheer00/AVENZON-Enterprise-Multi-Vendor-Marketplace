'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, ShoppingCart, Star } from 'lucide-react';
import { SectionHeader } from '@/components/shared/section-header';
import { formatCurrency } from '@/core/utils/formatters';

const dealsOfDay = [
  {
    id: 'dod-1', title: 'Sony Alpha A7 IV Camera', slug: 'sony-a7-iv', price: 1598, originalPrice: 2498, discount: 36,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=85',
    vendor: 'CameraWorld', rating: 4.9, reviews: 1240, soldPercent: 74, stockLeft: 6, endsIn: '12h 34m',
  },
  {
    id: 'dod-2', title: 'Rolex Submariner Homage', slug: 'submariner-homage', price: 299, originalPrice: 599, discount: 50,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=85',
    vendor: 'WatchHouse', rating: 4.7, reviews: 890, soldPercent: 89, stockLeft: 3, endsIn: '8h 15m',
  },
  {
    id: 'dod-3', title: 'Bose SoundLink Revolve+', slug: 'bose-revolve-plus', price: 199, originalPrice: 329, discount: 40,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=85',
    vendor: 'SoundElite', rating: 4.8, reviews: 2100, soldPercent: 65, stockLeft: 9, endsIn: '15h 45m',
  },
  {
    id: 'dod-4', title: 'Ray-Ban Wayfarer Classic', slug: 'rayban-wayfarer', price: 89, originalPrice: 163, discount: 45,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=85',
    vendor: 'StyleLens', rating: 4.6, reviews: 3450, soldPercent: 82, stockLeft: 4, endsIn: '6h 20m',
  },
];

export function DealsOfDaySection() {
  const [timeLeft, setTimeLeft] = React.useState({ hours: 12, minutes: 34, seconds: 56 });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-background">
      <div className="marketplace-container section-gap">
        <SectionHeader
          title="Deals of the Day"
          subtitle="Unbeatable prices — refreshed every 24 hours"
          icon={<Clock className="h-5 w-5" />}
          badge="LIMITED"
          viewAllHref="/deals/today"
          countdown={timeLeft}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {dealsOfDay.map((deal) => (
            <div key={deal.id} className="group rounded-xl border border-outline-variant/15 bg-surface-container-lowest overflow-hidden card-lift flex flex-col dark:bg-surface-container-low/50">
              <div className="relative aspect-square overflow-hidden bg-surface-container-low">
                <span className="absolute left-2 top-2 z-10 rounded-md bg-deal px-2.5 py-1 text-xs font-bold text-white shadow">
                  -{deal.discount}%
                </span>
                <span className="absolute right-2 top-2 z-10 flex items-center gap-1 rounded-full bg-black/60 text-white px-2 py-0.5 text-[10px] font-medium backdrop-blur-sm">
                  <Clock className="h-2.5 w-2.5" /> {deal.endsIn}
                </span>
                <Link href={`/products/${deal.slug}`}>
                  <Image src={deal.image} alt={deal.title} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover product-img-zoom" />
                </Link>
              </div>
              <div className="p-3 flex flex-col flex-1">
                <span className="text-[11px] font-medium text-primary">{deal.vendor}</span>
                <h4 className="text-sm font-bold text-foreground line-clamp-2 mt-0.5 group-hover:text-primary transition-colors">{deal.title}</h4>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                  <span className="text-[11px] font-bold">{deal.rating}</span>
                  <span className="text-[11px] text-on-surface-variant">({deal.reviews})</span>
                </div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-lg font-extrabold text-foreground">{formatCurrency(deal.price)}</span>
                  <span className="text-xs text-outline line-through">{formatCurrency(deal.originalPrice)}</span>
                </div>
                <div className="mt-2 space-y-1">
                  <div className="flex justify-between text-[10px] font-medium">
                    <span className="text-on-surface-variant">{deal.soldPercent}% Claimed</span>
                    <span className="text-deal font-bold">{deal.stockLeft} left</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-surface-container-high overflow-hidden">
                    <div style={{ width: `${deal.soldPercent}%` }} className="h-full rounded-full bg-gradient-to-r from-amber-500 to-deal progress-fill" />
                  </div>
                </div>
                <button className="mt-3 flex items-center justify-center gap-1.5 rounded-lg bg-deal text-white py-2 text-xs font-bold hover:bg-deal/90 transition-colors">
                  <ShoppingCart className="h-3.5 w-3.5" /> Grab Deal
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
