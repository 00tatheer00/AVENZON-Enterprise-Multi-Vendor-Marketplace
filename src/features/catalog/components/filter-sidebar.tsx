'use client';

import * as React from 'react';
import { RatingStars } from '@/components/shared/rating-stars';
import { Button } from '@/components/ui/button';

interface FilterSidebarProps {
  onClearAll?: () => void;
  className?: string;
}

export function FilterSidebar({ onClearAll, className }: FilterSidebarProps) {
  return (
    <aside className={className}>
      <div className="glass-panel sticky top-28 rounded-2xl border border-outline-variant/30 p-6 shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4 mb-6">
          <h2 className="text-lg font-bold text-foreground">Filters</h2>
          <button
            onClick={onClearAll}
            className="text-xs font-semibold text-primary hover:underline"
          >
            Clear All
          </button>
        </div>

        {/* Category Filters */}
        <div className="mb-6 border-b border-outline-variant/20 pb-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-3">
            Category
          </h3>
          <div className="space-y-2.5">
            {['Electronics', 'Smart Home', 'Audio', 'Wearables', 'Luxury Timepieces'].map((cat, i) => (
              <label key={i} className="flex items-center gap-2.5 cursor-pointer group">
                <input
                  type="checkbox"
                  defaultChecked={i === 1}
                  className="h-4 w-4 rounded border-outline-variant text-primary focus:ring-primary"
                />
                <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                  {cat}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-6 border-b border-outline-variant/20 pb-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-3">
            Price Range ($)
          </h3>
          <div className="flex items-center gap-2">
            <input
              type="number"
              placeholder="Min"
              className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest p-2 text-sm focus:border-primary focus:outline-none"
              aria-label="Minimum Price"
            />
            <span className="text-on-surface-variant">-</span>
            <input
              type="number"
              placeholder="Max"
              className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest p-2 text-sm focus:border-primary focus:outline-none"
              aria-label="Maximum Price"
            />
          </div>
        </div>

        {/* Brand Filter */}
        <div className="mb-6 border-b border-outline-variant/20 pb-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-3">
            Vendor Brand
          </h3>
          <div className="space-y-2.5">
            {['NexusTech', 'Aether Audio', 'Lumina', 'Horology Haus'].map((brand, i) => (
              <label key={i} className="flex items-center gap-2.5 cursor-pointer group">
                <input
                  type="checkbox"
                  defaultChecked={i === 1}
                  className="h-4 w-4 rounded border-outline-variant text-primary focus:ring-primary"
                />
                <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                  {brand}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Rating Filter */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-3">
            Minimum Rating
          </h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="rating" defaultChecked className="text-primary focus:ring-primary" />
              <RatingStars rating={4.5} />
              <span className="text-xs text-on-surface-variant">&amp; Up</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="rating" className="text-primary focus:ring-primary" />
              <RatingStars rating={4.0} />
              <span className="text-xs text-on-surface-variant">&amp; Up</span>
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
}
