import * as React from 'react';
import { cn } from '@/core/utils/cn';

interface MetricKpiCardProps {
  title: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  icon?: React.ReactNode;
  description?: string;
  className?: string;
}

export function MetricKpiCard({
  title,
  value,
  change,
  isPositive = true,
  icon,
  description,
  className,
}: MetricKpiCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-sm dark:bg-background flex flex-col justify-between',
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">{title}</span>
        {icon && <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">{icon}</div>}
      </div>

      <div className="mt-4">
        <div className="text-3xl font-extrabold text-foreground tracking-tight">{value}</div>

        <div className="mt-2 flex items-center gap-2">
          {change && (
            <span
              className={cn(
                'rounded-full px-2 py-0.5 text-xs font-bold',
                isPositive ? 'bg-emerald-500/10 text-emerald-600' : 'bg-error/10 text-error'
              )}
            >
              {change}
            </span>
          )}
          {description && <span className="text-xs text-outline">{description}</span>}
        </div>
      </div>
    </div>
  );
}
