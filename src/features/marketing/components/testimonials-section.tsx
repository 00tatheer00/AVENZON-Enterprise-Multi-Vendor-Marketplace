'use client';

import * as React from 'react';
import Image from 'next/image';
import { Star, ShieldCheck, ThumbsUp, MessageSquare } from 'lucide-react';
import { SectionHeader } from '@/components/shared/section-header';
import { ProductCarousel, CarouselItem } from '@/components/shared/product-carousel';

const reviews = [
  {
    id: 'rev-1', name: 'Sarah M.', rating: 5, verified: true,
    product: 'MacBook Pro M4 Max', productImage: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=200&q=80',
    text: 'Absolutely incredible performance. The M4 chip handles everything I throw at it. Best laptop I have ever owned. AVENZON delivery was super fast too!',
    date: '2 days ago', helpful: 42,
  },
  {
    id: 'rev-2', name: 'James K.', rating: 5, verified: true,
    product: 'Sony WH-1000XM6', productImage: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=200&q=80',
    text: 'The noise cancellation on these is unreal. Perfect for my daily commute and work calls. Sound quality is studio-grade. Worth every penny.',
    date: '5 days ago', helpful: 38,
  },
  {
    id: 'rev-3', name: 'Priya R.', rating: 4, verified: true,
    product: 'Nike Air Max 2026', productImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=200&q=80',
    text: 'Super comfortable and stylish. The cushioning is amazing for long walks. Only wish they had more color options. Great buy from a verified seller.',
    date: '1 week ago', helpful: 27,
  },
  {
    id: 'rev-4', name: 'Alex T.', rating: 5, verified: true,
    product: 'Dyson V15 Detect', productImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=200&q=80',
    text: 'This vacuum is a game-changer. The laser dust detection is mind-blowing. My floors have never been cleaner. Premium product, premium experience.',
    date: '3 days ago', helpful: 56,
  },
  {
    id: 'rev-5', name: 'Maria L.', rating: 5, verified: true,
    product: 'Le Creuset Dutch Oven', productImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=200&q=80',
    text: 'The quality is exceptional. Heavy, well-made, and cooks everything perfectly. The color is gorgeous too. Already planning to buy more Le Creuset!',
    date: '4 days ago', helpful: 34,
  },
];

export function TestimonialsSection() {
  return (
    <section className="w-full bg-background">
      <div className="marketplace-container section-gap">
        <SectionHeader
          title="Customer Reviews"
          subtitle="Real feedback from verified buyers"
          icon={<MessageSquare className="h-5 w-5" />}
          viewAllHref="/reviews"
        />
        <ProductCarousel>
          {reviews.map((r) => (
            <CarouselItem key={r.id} className="!w-[300px] sm:!w-[340px]">
              <div className="rounded-xl border border-outline-variant/15 bg-surface-container-lowest p-4 flex flex-col h-full dark:bg-surface-container-low/50">
                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                      {r.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-foreground">{r.name}</span>
                        {r.verified && (
                          <span className="flex items-center gap-0.5 text-[10px] font-medium text-fresh">
                            <ShieldCheck className="h-3 w-3" /> Verified
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-on-surface-variant">{r.date}</span>
                    </div>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-3.5 w-3.5 ${i < r.rating ? 'fill-amber-500 text-amber-500' : 'text-outline-variant'}`} />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-3 flex-1">{r.text}</p>

                {/* Product */}
                <div className="mt-3 flex items-center gap-2 rounded-lg bg-surface-container-low/60 p-2 border border-outline-variant/10">
                  <div className="relative h-10 w-10 rounded-md overflow-hidden bg-surface-container shrink-0">
                    <Image src={r.productImage} alt={r.product} fill sizes="40px" className="object-cover" />
                  </div>
                  <span className="text-[11px] font-medium text-foreground line-clamp-1">{r.product}</span>
                </div>

                {/* Helpful */}
                <div className="mt-2 flex items-center gap-1 text-[11px] text-on-surface-variant">
                  <ThumbsUp className="h-3 w-3" />
                  <span>{r.helpful} found this helpful</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </ProductCarousel>
      </div>
    </section>
  );
}
