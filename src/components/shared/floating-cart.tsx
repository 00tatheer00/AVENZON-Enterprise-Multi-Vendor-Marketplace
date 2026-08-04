'use client';

import * as React from 'react';
import Link from 'next/link';
import { ShoppingBag, X } from 'lucide-react';

export function FloatingCart() {
  const [itemCount] = React.useState(3);
  const [isVisible, setIsVisible] = React.useState(false);
  const [dismissed, setDismissed] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible || dismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <Link
        href="/cart"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl hover:bg-primary-container transition-all hover:scale-105 active:scale-95"
        aria-label={`Shopping cart with ${itemCount} items`}
      >
        <ShoppingBag className="h-6 w-6" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-deal text-[10px] font-bold text-white shadow-md">
            {itemCount}
          </span>
        )}
      </Link>
      <button
        onClick={() => setDismissed(true)}
        className="flex h-6 w-6 items-center justify-center rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors"
        aria-label="Dismiss cart button"
      >
        <X className="h-3 w-3" />
      </button>
    </div>
  );
}
