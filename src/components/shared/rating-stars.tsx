import * as React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/core/utils/cn';

interface RatingStarsProps {
  rating: number;
  maxStars?: number;
  reviewCount?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function RatingStars({
  rating,
  maxStars = 5,
  reviewCount,
  size = 'sm',
  className,
}: RatingStarsProps) {
  const starSizes = {
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };

  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex text-amber-500" aria-label={`Rating: ${rating} out of ${maxStars} stars`}>
        {Array.from({ length: maxStars }).map((_, i) => {
          const fillAmount = Math.min(Math.max(rating - i, 0), 1);
          return (
            <Star
              key={i}
              className={cn(
                starSizes[size],
                fillAmount >= 0.5 ? 'fill-amber-500 text-amber-500' : 'text-outline-variant'
              )}
            />
          );
        })}
      </div>
      {reviewCount !== undefined && (
        <span className="text-xs text-on-surface-variant font-medium">({reviewCount})</span>
      )}
    </div>
  );
}
