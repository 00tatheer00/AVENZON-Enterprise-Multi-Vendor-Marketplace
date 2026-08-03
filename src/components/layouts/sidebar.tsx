import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/core/utils/cn';

export interface SidebarNavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
}

interface SidebarProps {
  items: SidebarNavItem[];
  currentPath?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export function Sidebar({ items, currentPath, header, footer, className }: SidebarProps) {
  return (
    <aside
      className={cn(
        'flex h-full w-64 flex-col border-r border-outline-variant/30 bg-surface-container-lowest p-4 dark:bg-background',
        className
      )}
    >
      {header && <div className="mb-6">{header}</div>}

      <nav className="flex flex-1 flex-col gap-1">
        {items.map((item, index) => {
          const isActive = currentPath === item.href;

          return (
            <Link
              key={index}
              href={item.href}
              className={cn(
                'flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary-container text-on-primary-container shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container-low hover:text-foreground'
              )}
            >
              <div className="flex items-center gap-3">
                <span className={cn('h-5 w-5', isActive ? 'text-on-primary-container' : 'text-outline')}>
                  {item.icon}
                </span>
                <span>{item.title}</span>
              </div>
              {item.badge && (
                <span
                  className={cn(
                    'rounded-full px-2 py-0.5 text-[10px] font-bold',
                    isActive ? 'bg-primary text-white' : 'bg-surface-container-high text-foreground'
                  )}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {footer && <div className="mt-auto pt-4 border-t border-outline-variant/20">{footer}</div>}
    </aside>
  );
}
