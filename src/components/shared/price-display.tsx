import * as React from 'react';
import { formatCurrency } from '@/core/utils/formatters';
import { cn } from '@/core/utils/cn';

interface PriceDisplayProps {
  price: number;
  originalPrice?: number;
  discountBadge?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function PriceDisplay({
  price,
  originalPrice,
  discountBadge,
  size = 'md',
  className,
}: PriceDisplayProps) {
  const sizeClasses = {
    sm: 'text-sm font-semibold',
    md: 'text-lg font-bold',
    lg: 'text-3xl font-extrabold',
  };

  return (
    <div className={cn('flex items-baseline gap-2', className)}>
      <span className={cn(sizeClasses[size], 'text-foreground')}>
        {formatCurrency(price)}
      </span>
      {originalPrice && originalPrice > price && (
        <span className="text-xs text-outline line-through">
          {formatCurrency(originalPrice)}
        </span>
      )}
      {discountBadge && (
        <span className="rounded-full bg-error/10 px-2 py-0.5 text-[11px] font-bold text-error">
          {discountBadge}
        </span>
      )}
    </div>
  );
}
