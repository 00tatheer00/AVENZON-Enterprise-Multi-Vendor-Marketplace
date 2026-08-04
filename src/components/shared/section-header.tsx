'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  viewAllHref?: string;
  viewAllText?: string;
  tabs?: string[];
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  icon?: React.ReactNode;
  badge?: string;
  countdown?: { hours: number; minutes: number; seconds: number };
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  viewAllHref,
  viewAllText = 'View All',
  tabs,
  activeTab,
  onTabChange,
  icon,
  badge,
  countdown,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col gap-3 mb-6 ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              {icon}
            </div>
          )}
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl md:text-2xl font-bold text-foreground">{title}</h2>
              {badge && (
                <span className="rounded-full bg-deal/10 px-2.5 py-0.5 text-[11px] font-bold text-deal badge-pop">
                  {badge}
                </span>
              )}
            </div>
            {subtitle && (
              <p className="text-xs text-on-surface-variant mt-0.5">{subtitle}</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          {countdown && (
            <div className="flex items-center gap-1.5 rounded-full border border-deal/30 bg-deal/5 px-3 py-1.5">
              <span className="text-[11px] font-medium text-on-surface-variant">Ends in</span>
              <div className="flex items-center gap-1 font-mono text-xs font-bold">
                <span className="rounded bg-deal px-1.5 py-0.5 text-white min-w-[26px] text-center">
                  {String(countdown.hours).padStart(2, '0')}
                </span>
                <span className="text-deal">:</span>
                <span className="rounded bg-deal px-1.5 py-0.5 text-white min-w-[26px] text-center">
                  {String(countdown.minutes).padStart(2, '0')}
                </span>
                <span className="text-deal">:</span>
                <span className="rounded bg-foreground px-1.5 py-0.5 text-white min-w-[26px] text-center dark:bg-white dark:text-foreground">
                  {String(countdown.seconds).padStart(2, '0')}
                </span>
              </div>
            </div>
          )}

          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline whitespace-nowrap"
            >
              {viewAllText} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      </div>

      {tabs && tabs.length > 0 && (
        <div className="flex gap-1.5 overflow-x-auto scrollbar-hide py-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange?.(tab)}
              className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high hover:text-foreground'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
