'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RatingStars } from './rating-stars';
import { MultiVendorBadge } from './multi-vendor-badge';
import { PriceDisplay } from './price-display';

export interface ProductSummary {
  id: string;
  title: string;
  slug: string;
  price: number;
  originalPrice?: number;
  discountBadge?: string;
  imageSrc: string;
  vendorName: string;
  vendorRating: number;
  rating: number;
  reviewCount: number;
  badge?: string;
}

interface ProductCardProps {
  product: ProductSummary;
  onQuickView?: (id: string) => void;
  onAddToCart?: (id: string) => void;
}

export function ProductCard({ product, onQuickView, onAddToCart }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = React.useState(false);

  return (
    <div className="group relative flex flex-col rounded-2xl border border-outline-variant/30 bg-surface-container-lowest overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-background">
      {/* Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-surface-container-low">
        {/* Badges */}
        {product.badge && (
          <div className="absolute left-3 top-3 z-10 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-md">
            {product.badge}
          </div>
        )}
        {product.discountBadge && !product.badge && (
          <div className="absolute left-3 top-3 z-10 rounded-full bg-error/10 px-3 py-1 text-xs font-semibold text-error backdrop-blur-md">
            {product.discountBadge}
          </div>
        )}

        {/* Wishlist Toggle */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/70 backdrop-blur-md hover:bg-white text-foreground transition-colors"
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-error text-error' : 'text-outline'}`} />
        </button>

        {/* Product Image */}
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.imageSrc}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Hover Quick Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
          <Button
            variant="default"
            size="sm"
            className="w-full bg-white text-foreground hover:bg-surface-container-low font-semibold shadow-md"
            onClick={() => onAddToCart?.(product.id)}
          >
            <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <MultiVendorBadge storeName={product.vendorName} rating={product.vendorRating} />
        <Link href={`/products/${product.slug}`} className="mt-1 font-semibold text-base text-foreground hover:text-primary transition-colors line-clamp-1">
          {product.title}
        </Link>
        
        <RatingStars rating={product.rating} reviewCount={product.reviewCount} className="mt-2" />

        <div className="mt-auto pt-3 flex items-center justify-between">
          <PriceDisplay price={product.price} originalPrice={product.originalPrice} discountBadge={product.discountBadge} />
          {onQuickView && (
            <button
              onClick={() => onQuickView(product.id)}
              className="text-xs font-semibold text-primary hover:underline"
            >
              Quick View
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
