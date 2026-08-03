'use client';

import * as React from 'react';
import Link from 'next/link';
import { ChevronDown, Sparkles } from 'lucide-react';

export interface CategoryTreeItem {
  name: string;
  href: string;
  subcategories: { name: string; href: string }[];
}

const mockCategories: CategoryTreeItem[] = [
  {
    name: 'Smart Home & Tech',
    href: '/catalog?category=smart-home',
    subcategories: [
      { name: 'Controllers & Hubs', href: '/catalog?category=controllers' },
      { name: 'Thermostats', href: '/catalog?category=thermostats' },
      { name: 'Smart Lighting', href: '/catalog?category=lighting' },
      { name: 'Security & Cameras', href: '/catalog?category=security' },
    ],
  },
  {
    name: 'Luxury Watches',
    href: '/catalog?category=watches',
    subcategories: [
      { name: 'Chronographs', href: '/catalog?category=chronographs' },
      { name: 'Tourbillons', href: '/catalog?category=tourbillons' },
      { name: 'Automatic Watches', href: '/catalog?category=automatic' },
      { name: 'Watch Straps & Cases', href: '/catalog?category=straps' },
    ],
  },
  {
    name: 'Audiophile Gear',
    href: '/catalog?category=audio',
    subcategories: [
      { name: 'Wireless Headphones', href: '/catalog?category=headphones' },
      { name: 'In-Ear Monitors', href: '/catalog?category=iem' },
      { name: 'DACs & Amplifiers', href: '/catalog?category=dacs' },
      { name: 'Studio Speakers', href: '/catalog?category=speakers' },
    ],
  },
];

export function MegaMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center gap-1 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors py-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>Categories</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 w-[720px] rounded-2xl border border-outline-variant/30 bg-surface/95 p-6 shadow-2xl backdrop-blur-xl dark:bg-background/95">
          <div className="grid grid-cols-3 gap-6">
            {mockCategories.map((cat, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <Link
                  href={cat.href}
                  className="font-semibold text-sm text-foreground hover:text-primary transition-colors border-b border-outline-variant/30 pb-2"
                >
                  {cat.name}
                </Link>
                <ul className="flex flex-col gap-1.5 pt-1">
                  {cat.subcategories.map((sub, sIdx) => (
                    <li key={sIdx}>
                      <Link
                        href={sub.href}
                        className="text-xs text-on-surface-variant hover:text-primary transition-colors"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between rounded-xl bg-surface-container-low p-3 border border-outline-variant/30">
            <div className="flex items-center gap-2 text-xs font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              <span>Explore 42+ Curated Global Collections</span>
            </div>
            <Link href="/categories" className="text-xs font-semibold text-primary hover:underline">
              View Directory →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
