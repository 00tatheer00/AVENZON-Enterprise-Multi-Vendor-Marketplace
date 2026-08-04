'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Search, ShoppingBag, Heart, User, MapPin, ChevronDown,
  Headphones, Package, Smartphone, Shirt, Home, Sparkles,
  Laptop, Watch, Dumbbell, BookOpen, Baby, PawPrint
} from 'lucide-react';
import { MegaMenu } from './mega-menu';
import { MobileNavigation } from './mobile-navigation';

const categories = [
  { name: 'All Departments', icon: <ChevronDown className="h-3.5 w-3.5" />, href: '/categories', highlight: true },
  { name: 'Electronics', icon: <Laptop className="h-3.5 w-3.5" />, href: '/categories/electronics' },
  { name: 'Fashion', icon: <Shirt className="h-3.5 w-3.5" />, href: '/categories/fashion' },
  { name: 'Home & Living', icon: <Home className="h-3.5 w-3.5" />, href: '/categories/home' },
  { name: 'Phones', icon: <Smartphone className="h-3.5 w-3.5" />, href: '/categories/phones' },
  { name: 'Watches', icon: <Watch className="h-3.5 w-3.5" />, href: '/categories/watches' },
  { name: 'Audio', icon: <Headphones className="h-3.5 w-3.5" />, href: '/categories/audio' },
  { name: 'Sports', icon: <Dumbbell className="h-3.5 w-3.5" />, href: '/categories/sports' },
  { name: 'Books', icon: <BookOpen className="h-3.5 w-3.5" />, href: '/categories/books' },
  { name: 'Baby', icon: <Baby className="h-3.5 w-3.5" />, href: '/categories/baby' },
  { name: 'Pets', icon: <PawPrint className="h-3.5 w-3.5" />, href: '/categories/pets' },
];

export function Header() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      {/* ROW 1: Top Utility Bar */}
      <div className="w-full bg-surface-container-high/60 backdrop-blur-sm border-b border-outline-variant/20 hidden md:block">
        <div className="marketplace-container flex h-8 items-center justify-between text-[11px]">
          <div className="flex items-center gap-4 text-on-surface-variant">
            <button className="hover:text-primary transition-colors flex items-center gap-1 font-medium">
              <MapPin className="h-3 w-3 text-primary" /> Deliver to: <span className="font-bold text-foreground">Pakistan</span> <ChevronDown className="h-3 w-3" />
            </button>
            <span className="text-outline-variant">|</span>
            <button className="hover:text-primary transition-colors flex items-center gap-1 font-medium">
              English <ChevronDown className="h-3 w-3" />
            </button>
            <span className="text-outline-variant">|</span>
            <button className="hover:text-primary transition-colors flex items-center gap-1 font-medium">
              PKR <ChevronDown className="h-3 w-3" />
            </button>
          </div>
          <div className="flex items-center gap-4 text-on-surface-variant">
            <Link href="/track-order" className="hover:text-primary transition-colors flex items-center gap-1">
              Track Order
            </Link>
            <span className="text-outline-variant">|</span>
            <Link href="/support" className="hover:text-primary transition-colors flex items-center gap-1">
              Help Center
            </Link>
            <span className="text-outline-variant">|</span>
            <Link href="/sell" className="hover:text-primary transition-colors font-medium">Sell on Avenzon</Link>
          </div>
        </div>
      </div>

      {/* ROW 2: Main Header — Logo + Search + Actions */}
      <div className="w-full bg-white/95 backdrop-blur-xl border-b border-outline-variant/20 dark:bg-background/95">
        <div className="marketplace-container flex h-16 items-center gap-4">
          {/* Mobile Nav Trigger */}
          <MobileNavigation />

          {/* Logo */}
          <Link href="/" className="shrink-0 transition-opacity hover:opacity-90" aria-label="AVENZON Home">
            <Image
              src="/logo.png"
              alt="AVENZON"
              width={160}
              height={40}
              priority
              className="h-9 w-auto max-h-10 object-contain dark:brightness-110"
            />
          </Link>

          {/* Search Bar — Large, Prominent */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-4">
            <div className="relative w-full flex">
              <div className="relative flex w-full rounded-lg border-2 border-primary/80 overflow-hidden hover:border-primary focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all bg-white dark:bg-surface-container-low">
                <select className="h-11 border-r border-outline-variant/30 bg-surface-container-low px-3 text-xs font-medium text-on-surface-variant focus:outline-none cursor-pointer dark:bg-surface-container">
                  <option>All Categories</option>
                  <option>Electronics</option>
                  <option>Fashion</option>
                  <option>Home & Living</option>
                  <option>Watches</option>
                  <option>Audio</option>
                </select>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products, brands, and more..."
                  className="h-11 flex-1 px-4 text-sm text-foreground placeholder:text-outline focus:outline-none bg-transparent min-w-0"
                  aria-label="Search marketplace"
                />
                <button className="flex h-11 w-12 shrink-0 items-center justify-center bg-primary text-white hover:bg-primary-container transition-colors" aria-label="Search">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1 sm:gap-2 ml-auto">
            {/* Account */}
            <Link href="/login" className="hidden sm:flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg hover:bg-surface-container-low transition-colors group">
              <User className="h-5 w-5 text-on-surface-variant group-hover:text-primary transition-colors" />
              <span className="text-[10px] font-medium text-on-surface-variant group-hover:text-primary">Account</span>
            </Link>

            {/* Wishlist */}
            <Link href="/wishlist" className="relative flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg hover:bg-surface-container-low transition-colors group">
              <div className="relative">
                <Heart className="h-5 w-5 text-on-surface-variant group-hover:text-primary transition-colors" />
                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-deal text-[9px] font-bold text-white">5</span>
              </div>
              <span className="text-[10px] font-medium text-on-surface-variant group-hover:text-primary hidden sm:block">Wishlist</span>
            </Link>

            {/* Cart */}
            <Link href="/cart" className="relative flex items-center gap-2 px-3 py-2 rounded-lg bg-primary text-white hover:bg-primary-container transition-colors">
              <div className="relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-deal text-[9px] font-bold text-white border border-white">3</span>
              </div>
              <span className="hidden sm:block text-xs font-bold">Cart</span>
            </Link>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden px-4 pb-3">
          <div className="relative flex w-full rounded-lg border border-outline-variant/40 overflow-hidden bg-surface-container-low focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20">
            <input
              type="text"
              placeholder="Search products..."
              className="h-10 flex-1 px-3 text-sm text-foreground placeholder:text-outline focus:outline-none bg-transparent"
              aria-label="Search marketplace"
            />
            <button className="flex h-10 w-10 items-center justify-center bg-primary text-white" aria-label="Search">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ROW 3: Category Navigation Bar — Sticky on scroll */}
      <div className="w-full bg-white/95 backdrop-blur-lg border-b border-outline-variant/15 hidden md:block dark:bg-background/90">
        <div className="marketplace-container">
          <nav className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-1 text-xs font-semibold" aria-label="Category Navigation">
            <MegaMenu />
            <Link href="/deals" className="px-3 py-2 text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap">
              Today&apos;s Deals
            </Link>
            <Link href="/flash-sale" className="px-3 py-2 text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap">
              Flash Sale
            </Link>
            <Link href="/best-sellers" className="px-3 py-2 text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap">
              Best Sellers
            </Link>
            <Link href="/new-arrivals" className="px-3 py-2 text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap">
              New Arrivals
            </Link>
            <Link href="/brands" className="px-3 py-2 text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap">
              Brands
            </Link>
            <Link href="/prime" className="flex items-center gap-1 px-3 py-2 text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap">
              <span>Avenzon Prime</span>
              <span className="rounded bg-primary px-1 py-0.2 text-[9px] font-bold text-white uppercase">NEW</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
