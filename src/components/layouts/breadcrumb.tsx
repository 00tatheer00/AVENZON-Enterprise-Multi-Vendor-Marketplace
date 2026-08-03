import * as React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  showHome?: boolean;
}

export function Breadcrumb({ items, showHome = true }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-on-surface-variant">
        {showHome && (
          <li className="flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-primary transition-colors"
              aria-label="Home"
            >
              <Home className="h-3.5 w-3.5" />
            </Link>
            <ChevronRight className="h-3 w-3 text-outline-variant" />
          </li>
        )}

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              {isLast || !item.href ? (
                <span className="font-medium text-foreground truncate max-w-[200px]" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-primary transition-colors truncate max-w-[150px]"
                >
                  {item.label}
                </Link>
              )}
              {!isLast && <ChevronRight className="h-3 w-3 text-outline-variant" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
