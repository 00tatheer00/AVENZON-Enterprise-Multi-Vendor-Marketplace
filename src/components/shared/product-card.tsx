'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Eye, ShoppingCart, Star, Truck, Package } from 'lucide-react';
import { cn } from '@/core/utils/cn';
import { formatCurrency } from '@/core/utils/formatters';

export interface ProductSummary {
  id: string;
  title: string;
  slug: string;
  price: number;
  originalPrice?: number;
  discountBadge?: string;
  discountPercent?: number;
  imageSrc: string;
  vendorName: string;
  vendorRating?: number;
  rating: number;
  reviewCount: number;
  badge?: string;
  stock?: number;
  freeDelivery?: boolean;
  deliveryDate?: string;
}

interface ProductCardProps {
  product: ProductSummary;
  onQuickView?: (id: string) => void;
  onAddToCart?: (id: string) => void;
  rank?: number;
  compact?: boolean;
  className?: string;
}

export function ProductCard({ product, onQuickView, onAddToCart, rank, compact, className }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = React.useState(false);

  const discountPct = product.discountPercent ||
    (product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0);

  return (
    <div className={cn(
      'group relative flex flex-col rounded-xl border border-outline-variant/20 bg-surface-container-lowest overflow-hidden transition-all duration-300 card-lift dark:bg-surface-container-low/50',
      className
    )}>
      {/* Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-surface-container-low">
        {/* Discount Badge */}
        {discountPct > 0 && (
          <div className="absolute left-2 top-2 z-10 rounded-md bg-deal px-2 py-0.5 text-[11px] font-bold text-white shadow-sm">
            -{discountPct}%
          </div>
        )}

        {/* Text Badge (New Arrival, Top Rated, etc.) */}
        {product.badge && !discountPct && (
          <div className="absolute left-2 top-2 z-10 rounded-md bg-primary px-2 py-0.5 text-[11px] font-bold text-white shadow-sm">
            {product.badge}
          </div>
        )}

        {/* Rank Badge */}
        {rank && (
          <div className="absolute left-2 bottom-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-gold text-[11px] font-extrabold text-white shadow-md">
            #{rank}
          </div>
        )}

        {/* Wishlist Toggle */}
        <button
          onClick={(e) => { e.preventDefault(); setIsWishlisted(!isWishlisted); }}
          className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm hover:bg-white text-foreground transition-all shadow-sm"
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`h-3.5 w-3.5 transition-colors ${isWishlisted ? 'fill-deal text-deal' : 'text-on-surface-variant'}`} />
        </button>

        {/* Product Image */}
        <Link href={`/products/${product.slug}`} className="relative block h-full w-full">
          <Image
            src={product.imageSrc}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-cover product-img-zoom"
          />
        </Link>

        {/* Hover Actions Overlay */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 p-2 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <button
            onClick={() => onAddToCart?.(product.id)}
            className="flex h-9 flex-1 items-center justify-center gap-1.5 rounded-lg bg-white text-foreground text-xs font-semibold hover:bg-primary hover:text-white transition-colors shadow-md"
          >
            <ShoppingCart className="h-3.5 w-3.5" /> Add to Cart
          </button>
          {onQuickView && (
            <button
              onClick={() => onQuickView(product.id)}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/90 text-foreground hover:bg-primary hover:text-white transition-colors shadow-md"
              aria-label="Quick View"
            >
              <Eye className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className={cn('flex flex-1 flex-col p-3', compact && 'p-2.5')}>
        {/* Vendor */}
        <span className="text-[11px] font-medium text-primary truncate">{product.vendorName}</span>

        {/* Title */}
        <Link href={`/products/${product.slug}`} className="mt-0.5 text-sm font-semibold text-foreground hover:text-primary transition-colors line-clamp-2 leading-tight">
          {product.title}
        </Link>

        {/* Rating */}
        <div className="mt-1.5 flex items-center gap-1">
          <div className="flex items-center gap-0.5 text-amber-500">
            <Star className="h-3 w-3 fill-amber-500" />
            <span className="text-[11px] font-bold">{product.rating}</span>
          </div>
          <span className="text-[11px] text-on-surface-variant">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="mt-2 flex items-baseline gap-1.5 flex-wrap">
          <span className="text-base font-bold text-foreground">{formatCurrency(product.price)}</span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-xs text-outline line-through">{formatCurrency(product.originalPrice)}</span>
          )}
          {discountPct > 0 && (
            <span className="text-[11px] font-bold text-deal">Save {formatCurrency((product.originalPrice || 0) - product.price)}</span>
          )}
        </div>

        {/* Stock & Delivery */}
        {!compact && (
          <div className="mt-2 flex flex-col gap-0.5">
            {product.stock !== undefined && product.stock <= 10 && product.stock > 0 && (
              <div className="flex items-center gap-1 text-[11px] font-medium text-deal">
                <Package className="h-3 w-3" />
                Only {product.stock} left in stock
              </div>
            )}
            {product.stock !== undefined && product.stock > 10 && (
              <div className="flex items-center gap-1 text-[11px] font-medium text-fresh">
                <Package className="h-3 w-3" />
                In Stock
              </div>
            )}
            {product.freeDelivery && (
              <div className="flex items-center gap-1 text-[11px] font-medium text-on-surface-variant">
                <Truck className="h-3 w-3" />
                {product.deliveryDate ? `FREE delivery ${product.deliveryDate}` : 'FREE delivery'}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
