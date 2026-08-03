import * as React from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { cn } from '@/core/utils/cn';

interface MultiVendorBadgeProps {
  storeName: string;
  rating?: number;
  isVerified?: boolean;
  href?: string;
  className?: string;
}

export function MultiVendorBadge({
  storeName,
  rating,
  isVerified = true,
  href,
  className,
}: MultiVendorBadgeProps) {
  const content = (
    <span className={cn('inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline', className)}>
      {isVerified && <ShieldCheck className="h-3.5 w-3.5 text-primary shrink-0" />}
      <span>{storeName}</span>
      {rating !== undefined && <span className="text-on-surface-variant font-normal">• {rating}★</span>}
    </span>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
