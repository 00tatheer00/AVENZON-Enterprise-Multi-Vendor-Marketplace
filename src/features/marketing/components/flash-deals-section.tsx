'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Flame, ShoppingCart, Star, Eye } from 'lucide-react';
import { SectionHeader } from '@/components/shared/section-header';
import { ProductCarousel, CarouselItem } from '@/components/shared/product-carousel';
import { formatCurrency } from '@/core/utils/formatters';

const flashProducts = [
  {
    id: 'fd-1', title: 'Apple iPad Pro (Mid 2026)', slug: 'ipad-pro-2026',
    price: 799, originalPrice: 1099, discount: 27,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=85',
    vendor: 'TechVault', rating: 4.9, reviews: 2340, soldPercent: 82, stockLeft: 4,
  },
  {
    id: 'fd-2', title: 'Sony WH-1000XM6 Headphones', slug: 'sony-wh1000xm6',
    price: 279, originalPrice: 399, discount: 30,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=85',
    vendor: 'AudioPrime', rating: 4.8, reviews: 1820, soldPercent: 91, stockLeft: 2,
  },
  {
    id: 'fd-3', title: 'Samsung Galaxy S26 Ultra', slug: 'galaxy-s26-ultra',
    price: 899, originalPrice: 1299, discount: 31,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=85',
    vendor: 'MobileHub', rating: 4.7, reviews: 956, soldPercent: 73, stockLeft: 6,
  },
  {
    id: 'fd-4', title: 'Apple Watch Ultra 3', slug: 'apple-watch-ultra-3',
    price: 649, originalPrice: 899, discount: 28,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=600&q=85',
    vendor: 'WristTech', rating: 4.9, reviews: 1123, soldPercent: 88, stockLeft: 3,
  },
  {
    id: 'fd-5', title: 'DJI Mini 4 Pro Drone', slug: 'dji-mini-4-pro',
    price: 599, originalPrice: 849, discount: 29,
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=600&q=85',
    vendor: 'SkyShop', rating: 4.8, reviews: 670, soldPercent: 67, stockLeft: 7,
  },
  {
    id: 'fd-6', title: 'Bose QuietComfort Ultra', slug: 'bose-qc-ultra',
    price: 249, originalPrice: 379, discount: 34,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=85',
    vendor: 'SoundElite', rating: 4.7, reviews: 890, soldPercent: 78, stockLeft: 5,
  },
];

export function FlashDealsSection() {
  const [timeLeft, setTimeLeft] = React.useState({ hours: 7, minutes: 42, seconds: 18 });
  const [activeTab, setActiveTab] = React.useState('All');

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
          title="Flash Deals"
          subtitle="Limited-time offers from top vendors — selling fast!"
          icon={<Flame className="h-5 w-5" />}
          badge="HOT"
          viewAllHref="/deals"
          countdown={timeLeft}
          tabs={['All', 'Electronics', 'Fashion', 'Home']}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Main Flash Deals Layout: Featured + Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Featured Large Deal */}
          <div className="lg:col-span-1 rounded-xl border border-deal/20 bg-gradient-to-b from-deal/5 to-surface-container-lowest p-4 flex flex-col dark:from-deal/10 dark:to-surface-container-low">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-surface-container-low mb-3">
              <span className="absolute left-2 top-2 z-10 rounded-md bg-deal px-2.5 py-1 text-xs font-bold text-white shadow">
                -{flashProducts[0].discount}%
              </span>
              <Image
                src={flashProducts[0].image}
                alt={flashProducts[0].title}
                fill
                sizes="300px"
                className="object-cover"
              />
            </div>
            <span className="text-[11px] font-medium text-primary">{flashProducts[0].vendor}</span>
            <h3 className="text-sm font-bold text-foreground mt-0.5 line-clamp-2">{flashProducts[0].title}</h3>
            <div className="flex items-center gap-1 mt-1.5">
              <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
              <span className="text-[11px] font-bold text-amber-600">{flashProducts[0].rating}</span>
              <span className="text-[11px] text-on-surface-variant">({flashProducts[0].reviews})</span>
            </div>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-xl font-extrabold text-foreground">{formatCurrency(flashProducts[0].price)}</span>
              <span className="text-xs text-outline line-through">{formatCurrency(flashProducts[0].originalPrice)}</span>
            </div>
            {/* Progress */}
            <div className="mt-3 space-y-1">
              <div className="flex justify-between text-[11px] font-medium">
                <span className="text-on-surface-variant">{flashProducts[0].soldPercent}% Sold</span>
                <span className="text-deal font-bold">{flashProducts[0].stockLeft} left</span>
              </div>
              <div className="h-2 w-full rounded-full bg-surface-container-high overflow-hidden">
                <div
                  style={{ width: `${flashProducts[0].soldPercent}%` }}
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 to-deal progress-fill"
                />
              </div>
            </div>
            <Link
              href={`/products/${flashProducts[0].slug}`}
              className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-deal text-white py-2.5 text-xs font-bold hover:bg-deal/90 transition-colors"
            >
              <ShoppingCart className="h-3.5 w-3.5" /> Add to Cart
            </Link>
          </div>

          {/* Product Carousel */}
          <div className="lg:col-span-3">
            <ProductCarousel>
              {flashProducts.slice(1).map((p) => (
                <CarouselItem key={p.id} className="!w-[200px] sm:!w-[220px]">
                  <div className="group flex flex-col rounded-xl border border-outline-variant/15 bg-surface-container-lowest overflow-hidden card-lift h-full dark:bg-surface-container-low/50">
                    <div className="relative aspect-square overflow-hidden bg-surface-container-low">
                      <span className="absolute left-2 top-2 z-10 rounded-md bg-deal px-2 py-0.5 text-[10px] font-bold text-white">
                        -{p.discount}%
                      </span>
                      <button className="absolute right-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm hover:bg-white text-on-surface-variant transition-colors">
                        <Eye className="h-3 w-3" />
                      </button>
                      <Image src={p.image} alt={p.title} fill sizes="220px" className="object-cover product-img-zoom" />
                    </div>
                    <div className="p-2.5 flex flex-col flex-1">
                      <span className="text-[10px] font-medium text-primary">{p.vendor}</span>
                      <h4 className="text-xs font-semibold text-foreground line-clamp-2 mt-0.5 leading-tight">{p.title}</h4>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="h-2.5 w-2.5 fill-amber-500 text-amber-500" />
                        <span className="text-[10px] font-bold">{p.rating}</span>
                        <span className="text-[10px] text-on-surface-variant">({p.reviews})</span>
                      </div>
                      <div className="flex items-baseline gap-1.5 mt-1.5">
                        <span className="text-sm font-bold text-foreground">{formatCurrency(p.price)}</span>
                        <span className="text-[10px] text-outline line-through">{formatCurrency(p.originalPrice)}</span>
                      </div>
                      {/* Mini progress */}
                      <div className="mt-2 space-y-0.5">
                        <div className="h-1.5 w-full rounded-full bg-surface-container-high overflow-hidden">
                          <div style={{ width: `${p.soldPercent}%` }} className="h-full rounded-full bg-gradient-to-r from-amber-500 to-deal progress-fill" />
                        </div>
                        <span className="text-[9px] text-deal font-medium">{p.stockLeft} left</span>
                      </div>
                      <button className="mt-auto pt-2 flex items-center justify-center gap-1.5 rounded-md bg-primary/10 text-primary py-1.5 text-[11px] font-bold hover:bg-primary hover:text-white transition-colors">
                        <ShoppingCart className="h-3 w-3" /> Add to Cart
                      </button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </ProductCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}
