'use client';

import * as React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

const messages = [
  '🚀 FREE Shipping on orders over $50 — Shop Now',
  '🔥 Flash Sale: Up to 70% OFF on Electronics — Limited Time',
  '✨ New Sellers Welcome — Start selling today with 0% commission',
];

export function AnnouncementBar() {
  const [currentMsg, setCurrentMsg] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMsg((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative w-full bg-gradient-to-r from-primary via-primary-container to-accent py-2 px-4 text-center text-xs font-medium text-white overflow-hidden">
      <div className="marketplace-container flex items-center justify-center gap-2 relative">
        <span className="animate-slide-up" key={currentMsg}>
          {messages[currentMsg]}
        </span>
        <Link
          href="/deals"
          className="underline underline-offset-2 hover:opacity-90 transition-opacity font-bold ml-1"
        >
          Shop →
        </Link>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Dismiss announcement"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
