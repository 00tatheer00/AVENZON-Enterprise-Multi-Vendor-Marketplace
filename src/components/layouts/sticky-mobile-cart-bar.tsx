'use client';

import * as React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PriceDisplay } from '@/components/shared/price-display';

interface StickyMobileCartBarProps {
  price: number;
  originalPrice?: number;
  onAddToCart?: () => void;
}

export function StickyMobileCartBar({ price, originalPrice, onAddToCart }: StickyMobileCartBarProps) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-surface/90 backdrop-blur-xl border-t border-outline-variant/30 shadow-2xl flex items-center justify-between gap-4">
      <PriceDisplay price={price} originalPrice={originalPrice} size="sm" />
      <Button size="default" className="gap-2 font-bold flex-1 max-w-[200px]" onClick={onAddToCart}>
        <ShoppingCart className="h-4 w-4" /> Add to Cart
      </Button>
    </div>
  );
}
