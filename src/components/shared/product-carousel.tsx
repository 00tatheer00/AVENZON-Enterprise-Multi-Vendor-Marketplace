'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductCarouselProps {
  children: React.ReactNode;
  itemWidth?: number;
  gap?: number;
  className?: string;
}

export function ProductCarousel({
  children,
  className = '',
}: ProductCarouselProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const checkScroll = React.useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.8;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`relative group/carousel ${className}`}>
      {/* Left Arrow */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute -left-2 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg border border-outline-variant/30 text-foreground hover:bg-surface-container-low transition-all opacity-0 group-hover/carousel:opacity-100 dark:bg-surface-container-low dark:border-outline-variant/50"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}

      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide snap-x-mandatory carousel-scroll"
      >
        {children}
      </div>

      {/* Right Arrow */}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute -right-2 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg border border-outline-variant/30 text-foreground hover:bg-surface-container-low transition-all opacity-0 group-hover/carousel:opacity-100 dark:bg-surface-container-low dark:border-outline-variant/50"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}

      {/* Edge fade gradients */}
      {canScrollLeft && (
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      )}
      {canScrollRight && (
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      )}
    </div>
  );
}

export function CarouselItem({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex-none snap-start ${className}`} style={{ width: 'var(--carousel-item-width, 220px)' }}>
      {children}
    </div>
  );
}
