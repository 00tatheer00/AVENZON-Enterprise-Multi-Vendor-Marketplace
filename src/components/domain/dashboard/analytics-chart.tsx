import * as React from 'react';
import { cn } from '@/core/utils/cn';

interface AnalyticsChartProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function AnalyticsChart({ title, subtitle, className }: AnalyticsChartProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-sm dark:bg-background',
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4 mb-6">
        <div>
          <h3 className="text-base font-bold text-foreground">{title}</h3>
          {subtitle && <p className="text-xs text-on-surface-variant mt-0.5">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
            <span className="h-2 w-2 rounded-full bg-primary" /> Live Data
          </span>
        </div>
      </div>

      {/* Responsive Visual Bar Chart Representation */}
      <div className="h-64 w-full flex items-end justify-between gap-3 pt-6 px-2">
        {[
          { label: 'Jan', value: '65%' },
          { label: 'Feb', value: '45%' },
          { label: 'Mar', value: '80%' },
          { label: 'Apr', value: '55%' },
          { label: 'May', value: '90%' },
          { label: 'Jun', value: '75%' },
          { label: 'Jul', value: '95%' },
        ].map((bar, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
            <div
              style={{ height: bar.value }}
              className="w-full rounded-t-lg bg-primary-container/80 transition-all duration-300 group-hover:bg-primary group-hover:shadow-md"
            />
            <span className="text-[11px] font-semibold text-on-surface-variant">{bar.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
