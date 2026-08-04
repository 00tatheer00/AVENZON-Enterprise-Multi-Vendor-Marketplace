'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Menu, X, Search, ShieldCheck, User, Heart, ShoppingBag, Flame, Sparkles,
  Laptop, Smartphone, Shirt, Home, Watch, Headphones, Dumbbell, Gamepad2,
  Brush, Car, BookOpen, Baby, ChevronRight, Package, Store
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const mobileCategories = [
  { name: 'Electronics', icon: <Laptop className="h-4 w-4 text-blue-500" />, href: '/categories/electronics' },
  { name: 'Smartphones & Tablets', icon: <Smartphone className="h-4 w-4 text-purple-500" />, href: '/categories/phones' },
  { name: 'Fashion & Apparel', icon: <Shirt className="h-4 w-4 text-pink-500" />, href: '/categories/fashion' },
  { name: 'Home & Kitchen', icon: <Home className="h-4 w-4 text-amber-500" />, href: '/categories/home' },
  { name: 'Luxury Watches', icon: <Watch className="h-4 w-4 text-slate-500" />, href: '/categories/watches' },
  { name: 'Audio & Acoustics', icon: <Headphones className="h-4 w-4 text-indigo-500" />, href: '/categories/audio' },
  { name: 'Sports & Outdoors', icon: <Dumbbell className="h-4 w-4 text-green-500" />, href: '/categories/sports' },
  { name: 'Gaming', icon: <Gamepad2 className="h-4 w-4 text-red-500" />, href: '/categories/gaming' },
  { name: 'Beauty & Personal Care', icon: <Brush className="h-4 w-4 text-rose-500" />, href: '/categories/beauty' },
  { name: 'Automotive', icon: <Car className="h-4 w-4 text-orange-500" />, href: '/categories/automotive' },
  { name: 'Books & Stationery', icon: <BookOpen className="h-4 w-4 text-teal-500" />, href: '/categories/books' },
  { name: 'Baby & Kids', icon: <Baby className="h-4 w-4 text-yellow-500" />, href: '/categories/baby' },
];

export function MobileNavigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  // Close drawer on ESC key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        aria-label="Open mobile menu"
        className="text-foreground hover:bg-surface-container-low"
      >
        <Menu className="h-6 w-6" />
      </Button>

      {isOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md transition-opacity animate-slide-up"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-out Side Drawer */}
          <aside
            className="fixed inset-y-0 left-0 z-50 flex h-full w-[85vw] max-w-[340px] flex-col bg-white/95 backdrop-blur-2xl shadow-2xl transition-transform dark:bg-slate-900/95 dark:text-foreground border-r border-outline-variant/20"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-outline-variant/20 p-4 bg-surface-container-low/50 dark:bg-slate-800/50">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="AVENZON"
                  width={140}
                  height={36}
                  priority
                  className="h-8 w-auto object-contain dark:brightness-110"
                />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                aria-label="Close mobile menu"
                className="h-9 w-9 rounded-full hover:bg-surface-container-high"
              >
                <X className="h-5 w-5 text-foreground" />
              </Button>
            </div>

            {/* Quick Search */}
            <div className="p-4 border-b border-outline-variant/15">
              <div className="relative flex w-full items-center rounded-xl border border-outline-variant/30 bg-surface-container-low px-3 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 dark:bg-slate-800">
                <Search className="h-4 w-4 text-outline shrink-0 mr-2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products, brands..."
                  className="w-full bg-transparent text-xs text-foreground placeholder:text-outline focus:outline-none"
                />
              </div>
            </div>

            {/* Content Scroll Area */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-5 scrollbar-hide">
              {/* Account & Quick Action Grid */}
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 rounded-xl bg-surface-container-low p-2.5 text-xs font-semibold text-foreground hover:bg-primary/10 hover:text-primary transition-colors dark:bg-slate-800"
                >
                  <User className="h-4 w-4 text-primary shrink-0" />
                  <span>Account</span>
                </Link>
                <Link
                  href="/wishlist"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 rounded-xl bg-surface-container-low p-2.5 text-xs font-semibold text-foreground hover:bg-primary/10 hover:text-primary transition-colors dark:bg-slate-800"
                >
                  <Heart className="h-4 w-4 text-deal shrink-0" />
                  <span>Wishlist (5)</span>
                </Link>
                <Link
                  href="/cart"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 rounded-xl bg-surface-container-low p-2.5 text-xs font-semibold text-foreground hover:bg-primary/10 hover:text-primary transition-colors dark:bg-slate-800"
                >
                  <ShoppingBag className="h-4 w-4 text-fresh shrink-0" />
                  <span>Cart (3)</span>
                </Link>
                <Link
                  href="/deals"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 rounded-xl bg-deal/10 p-2.5 text-xs font-bold text-deal hover:bg-deal/20 transition-colors"
                >
                  <Flame className="h-4 w-4 text-deal shrink-0" />
                  <span>Flash Deals</span>
                </Link>
              </div>

              {/* Department Directory */}
              <div>
                <div className="flex items-center justify-between mb-2 px-1">
                  <span className="text-[11px] font-bold text-outline uppercase tracking-wider">Explore Departments</span>
                  <Link href="/categories" onClick={() => setIsOpen(false)} className="text-[11px] font-semibold text-primary">
                    View All
                  </Link>
                </div>
                <nav className="flex flex-col space-y-1">
                  {mobileCategories.map((cat) => (
                    <Link
                      key={cat.name}
                      href={cat.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between rounded-xl px-3 py-2.5 text-xs font-medium text-foreground hover:bg-surface-container-low hover:text-primary transition-colors dark:hover:bg-slate-800"
                    >
                      <div className="flex items-center gap-3">
                        {cat.icon}
                        <span>{cat.name}</span>
                      </div>
                      <ChevronRight className="h-3.5 w-3.5 text-outline-variant" />
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Multi-Vendor & Services */}
              <div className="pt-2 border-t border-outline-variant/15 space-y-1">
                <span className="text-[11px] font-bold text-outline uppercase tracking-wider px-1 block mb-1">Marketplace Services</span>
                <Link
                  href="/vendors"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-2 text-xs font-medium text-on-surface-variant hover:bg-surface-container-low transition-colors dark:hover:bg-slate-800"
                >
                  <Store className="h-4 w-4 text-primary" />
                  <span>Verified Vendor Stores</span>
                </Link>
                <Link
                  href="/sell"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-2 text-xs font-medium text-on-surface-variant hover:bg-surface-container-low transition-colors dark:hover:bg-slate-800"
                >
                  <Sparkles className="h-4 w-4 text-gold" />
                  <span>Become a Seller (0% Comm)</span>
                </Link>
                <Link
                  href="/orders/track"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-2 text-xs font-medium text-on-surface-variant hover:bg-surface-container-low transition-colors dark:hover:bg-slate-800"
                >
                  <Package className="h-4 w-4 text-fresh" />
                  <span>Track Express Orders</span>
                </Link>
              </div>
            </div>

            {/* Footer inside Drawer */}
            <div className="p-4 border-t border-outline-variant/20 bg-surface-container-low/40 dark:bg-slate-800/40 mt-auto">
              <div className="rounded-xl bg-primary/8 p-3 border border-primary/15 flex items-center gap-2.5">
                <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <div className="text-[11px] font-bold text-foreground">100% Escrow Protection</div>
                  <div className="text-[10px] text-on-surface-variant">Audited global multi-vendor suppliers</div>
                </div>
              </div>
            </div>
          </aside>
        </>
      )}
    </div>
  );
}
