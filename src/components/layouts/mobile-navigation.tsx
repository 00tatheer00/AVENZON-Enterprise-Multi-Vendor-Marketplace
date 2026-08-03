'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Search, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MobileNavigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        aria-label="Open mobile menu"
      >
        <Menu className="h-6 w-6 text-foreground" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background/98 backdrop-blur-2xl p-6">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image
                src="/logo.png"
                alt="AVENZON Logo"
                width={140}
                height={36}
                className="h-8 w-auto object-contain dark:brightness-110"
              />
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              aria-label="Close mobile menu"
            >
              <X className="h-6 w-6 text-foreground" />
            </Button>
          </div>

          {/* Search */}
          <div className="relative my-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-outline" />
            <input
              type="text"
              placeholder="Search products or vendors..."
              className="w-full rounded-full border border-outline-variant bg-surface-container-low py-3 pl-10 pr-4 text-sm focus:border-primary focus:outline-none"
            />
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col gap-4 text-lg font-medium">
            <Link href="/catalog" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors py-2 border-b border-outline-variant/20">
              Marketplace Catalog
            </Link>
            <Link href="/categories" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors py-2 border-b border-outline-variant/20">
              Categories Directory
            </Link>
            <Link href="/vendors" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors py-2 border-b border-outline-variant/20">
              Verified Vendors
            </Link>
            <Link href="/seller" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors py-2 border-b border-outline-variant/20">
              Become a Seller
            </Link>
          </nav>

          {/* Vendor Trust Badge */}
          <div className="mt-auto rounded-xl bg-surface-container p-4 border border-outline-variant/30 flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
            <div>
              <div className="text-xs font-semibold text-foreground">100% Buyer Protection</div>
              <div className="text-[11px] text-on-surface-variant">500+ Verified Suppliers</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
