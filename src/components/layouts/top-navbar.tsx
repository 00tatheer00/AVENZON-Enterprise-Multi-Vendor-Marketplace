import * as React from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Heart, User, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function TopNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/85 backdrop-blur-xl dark:bg-background/85">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-black tracking-tighter text-primary">
          AVENZON
        </Link>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/catalog" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">
            Marketplace
          </Link>
          <Link href="/categories" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">
            Categories
          </Link>
          <Link href="/vendors" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">
            Vendors
          </Link>
          <Link href="/seller" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">
            Become a Seller
          </Link>
        </nav>

        {/* Search Input */}
        <div className="hidden flex-1 max-w-md mx-6 lg:flex">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-outline" />
            <input
              type="text"
              placeholder="Search premium products or vendors..."
              className="w-full rounded-full border border-outline-variant bg-surface-container-low py-2 pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              aria-label="Search marketplace"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Select language">
            <Globe className="h-5 w-5 text-on-surface-variant" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="View wishlist">
            <Heart className="h-5 w-5 text-on-surface-variant" />
          </Button>
          <Link href="/login" className="hidden text-sm font-medium text-on-surface-variant hover:text-primary sm:block px-2">
            Login
          </Link>
          <Button variant="container" className="gap-2">
            <ShoppingBag className="h-4 w-4" />
            <span>Cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
