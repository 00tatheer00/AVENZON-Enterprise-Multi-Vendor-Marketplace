'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  ChevronDown, ChevronRight, Laptop, Smartphone, Shirt, Home, Watch,
  Headphones, Dumbbell, Sparkles, ShieldCheck, Camera, Gem, Car,
  Monitor, Gamepad2, Brush, BookOpen
} from 'lucide-react';

interface SubCategory {
  name: string;
  href: string;
}

interface Department {
  name: string;
  icon: React.ReactNode;
  href: string;
  subcategories: SubCategory[];
  featured?: string;
}

const departments: Department[] = [
  {
    name: 'Computers & Laptops',
    icon: <Laptop className="h-4 w-4" />,
    href: '/categories/computers',
    subcategories: [
      { name: 'Gaming Laptops', href: '/catalog?c=gaming-laptops' },
      { name: 'Business Laptops', href: '/catalog?c=business-laptops' },
      { name: 'Desktop PCs', href: '/catalog?c=desktops' },
      { name: 'Monitors', href: '/catalog?c=monitors' },
      { name: 'PC Components', href: '/catalog?c=components' },
      { name: 'Keyboards & Mice', href: '/catalog?c=peripherals' },
      { name: 'Storage & Memory', href: '/catalog?c=storage' },
      { name: 'Networking', href: '/catalog?c=networking' },
    ],
    featured: 'MacBook Pro M4 — Now Available',
  },
  {
    name: 'Smartphones & Tablets',
    icon: <Smartphone className="h-4 w-4" />,
    href: '/categories/phones',
    subcategories: [
      { name: 'iPhone', href: '/catalog?c=iphone' },
      { name: 'Samsung Galaxy', href: '/catalog?c=samsung' },
      { name: 'Google Pixel', href: '/catalog?c=pixel' },
      { name: 'Tablets & iPads', href: '/catalog?c=tablets' },
      { name: 'Phone Cases', href: '/catalog?c=cases' },
      { name: 'Screen Protectors', href: '/catalog?c=screen-protectors' },
      { name: 'Chargers & Cables', href: '/catalog?c=chargers' },
      { name: 'Refurbished Phones', href: '/catalog?c=refurbished' },
    ],
  },
  {
    name: 'Fashion & Apparel',
    icon: <Shirt className="h-4 w-4" />,
    href: '/categories/fashion',
    subcategories: [
      { name: "Men's Clothing", href: '/catalog?c=mens' },
      { name: "Women's Clothing", href: '/catalog?c=womens' },
      { name: 'Shoes & Footwear', href: '/catalog?c=shoes' },
      { name: 'Bags & Wallets', href: '/catalog?c=bags' },
      { name: 'Jewelry', href: '/catalog?c=jewelry' },
      { name: 'Sunglasses', href: '/catalog?c=sunglasses' },
      { name: 'Activewear', href: '/catalog?c=activewear' },
      { name: 'Kids Fashion', href: '/catalog?c=kids-fashion' },
    ],
  },
  {
    name: 'Home & Kitchen',
    icon: <Home className="h-4 w-4" />,
    href: '/categories/home',
    subcategories: [
      { name: 'Furniture', href: '/catalog?c=furniture' },
      { name: 'Kitchen Appliances', href: '/catalog?c=kitchen' },
      { name: 'Bedding & Linen', href: '/catalog?c=bedding' },
      { name: 'Home Décor', href: '/catalog?c=decor' },
      { name: 'Lighting', href: '/catalog?c=lighting' },
      { name: 'Storage Solutions', href: '/catalog?c=storage' },
      { name: 'Garden & Outdoor', href: '/catalog?c=garden' },
      { name: 'Cleaning', href: '/catalog?c=cleaning' },
    ],
  },
  {
    name: 'Watches & Luxury',
    icon: <Watch className="h-4 w-4" />,
    href: '/categories/watches',
    subcategories: [
      { name: 'Luxury Watches', href: '/catalog?c=luxury-watches' },
      { name: 'Smartwatches', href: '/catalog?c=smartwatches' },
      { name: 'Watch Accessories', href: '/catalog?c=watch-accessories' },
      { name: 'Chronographs', href: '/catalog?c=chronographs' },
    ],
  },
  {
    name: 'Audio & Headphones',
    icon: <Headphones className="h-4 w-4" />,
    href: '/categories/audio',
    subcategories: [
      { name: 'Wireless Headphones', href: '/catalog?c=wireless-headphones' },
      { name: 'Earbuds', href: '/catalog?c=earbuds' },
      { name: 'Speakers', href: '/catalog?c=speakers' },
      { name: 'Studio Equipment', href: '/catalog?c=studio' },
    ],
  },
  {
    name: 'Cameras & Photography',
    icon: <Camera className="h-4 w-4" />,
    href: '/categories/cameras',
    subcategories: [
      { name: 'DSLR Cameras', href: '/catalog?c=dslr' },
      { name: 'Mirrorless', href: '/catalog?c=mirrorless' },
      { name: 'Lenses', href: '/catalog?c=lenses' },
      { name: 'Drones', href: '/catalog?c=drones' },
    ],
  },
  {
    name: 'Gaming',
    icon: <Gamepad2 className="h-4 w-4" />,
    href: '/categories/gaming',
    subcategories: [
      { name: 'Consoles', href: '/catalog?c=consoles' },
      { name: 'Gaming PCs', href: '/catalog?c=gaming-pc' },
      { name: 'Accessories', href: '/catalog?c=gaming-accessories' },
      { name: 'VR Headsets', href: '/catalog?c=vr' },
    ],
  },
  {
    name: 'Sports & Fitness',
    icon: <Dumbbell className="h-4 w-4" />,
    href: '/categories/sports',
    subcategories: [
      { name: 'Gym Equipment', href: '/catalog?c=gym' },
      { name: 'Running', href: '/catalog?c=running' },
      { name: 'Cycling', href: '/catalog?c=cycling' },
      { name: 'Outdoor Gear', href: '/catalog?c=outdoor' },
    ],
  },
  {
    name: 'Beauty & Personal Care',
    icon: <Brush className="h-4 w-4" />,
    href: '/categories/beauty',
    subcategories: [
      { name: 'Skincare', href: '/catalog?c=skincare' },
      { name: 'Makeup', href: '/catalog?c=makeup' },
      { name: 'Fragrances', href: '/catalog?c=fragrances' },
      { name: 'Hair Care', href: '/catalog?c=haircare' },
    ],
  },
  {
    name: 'Automotive',
    icon: <Car className="h-4 w-4" />,
    href: '/categories/automotive',
    subcategories: [
      { name: 'Car Electronics', href: '/catalog?c=car-electronics' },
      { name: 'Interior Accessories', href: '/catalog?c=car-interior' },
      { name: 'Exterior Accessories', href: '/catalog?c=car-exterior' },
      { name: 'Maintenance', href: '/catalog?c=car-maintenance' },
    ],
  },
  {
    name: 'Books & Stationery',
    icon: <BookOpen className="h-4 w-4" />,
    href: '/categories/books',
    subcategories: [
      { name: 'Fiction', href: '/catalog?c=fiction' },
      { name: 'Non-Fiction', href: '/catalog?c=non-fiction' },
      { name: 'Textbooks', href: '/catalog?c=textbooks' },
      { name: 'Office Supplies', href: '/catalog?c=office' },
    ],
  },
];

export function MegaMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeDept, setActiveDept] = React.useState<number>(0);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setIsOpen(true);
  };

  const handleClose = () => {
    closeTimer.current = setTimeout(() => setIsOpen(false), 150);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <button
        className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-bold text-foreground bg-surface-container-low hover:bg-surface-container transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <span>All Departments</span>
        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 flex w-[840px] rounded-xl border border-outline-variant/20 bg-white shadow-2xl mega-menu-enter dark:bg-surface-container-low overflow-hidden">
          {/* Left Sidebar — Department List */}
          <div className="w-[240px] border-r border-outline-variant/15 bg-surface-container-low/50 py-2 dark:bg-surface-container">
            {departments.map((dept, idx) => (
              <button
                key={idx}
                onMouseEnter={() => setActiveDept(idx)}
                className={`flex w-full items-center gap-2.5 px-4 py-2.5 text-xs font-medium transition-colors text-left ${
                  activeDept === idx
                    ? 'bg-primary/8 text-primary border-r-2 border-primary'
                    : 'text-on-surface-variant hover:bg-surface-container-high/60 hover:text-foreground'
                }`}
              >
                <span className="shrink-0 text-on-surface-variant">{dept.icon}</span>
                <span className="flex-1 truncate">{dept.name}</span>
                <ChevronRight className="h-3 w-3 shrink-0 opacity-40" />
              </button>
            ))}
          </div>

          {/* Right Panel — Subcategories */}
          <div className="flex-1 p-6">
            <div className="mb-4">
              <Link
                href={departments[activeDept].href}
                className="text-base font-bold text-foreground hover:text-primary transition-colors"
              >
                {departments[activeDept].name}
              </Link>
              <p className="text-[11px] text-on-surface-variant mt-0.5">
                Browse all {departments[activeDept].name.toLowerCase()} products
              </p>
            </div>

            <div className="grid grid-cols-3 gap-x-6 gap-y-2">
              {departments[activeDept].subcategories.map((sub, sIdx) => (
                <Link
                  key={sIdx}
                  href={sub.href}
                  className="rounded-md px-2 py-1.5 text-xs text-on-surface-variant hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  {sub.name}
                </Link>
              ))}
            </div>

            {departments[activeDept].featured && (
              <div className="mt-6 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 p-3 border border-primary/10">
                <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  {departments[activeDept].featured}
                </div>
              </div>
            )}

            <div className="mt-5 pt-4 border-t border-outline-variant/15 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[11px] text-on-surface-variant">
                <ShieldCheck className="h-3.5 w-3.5 text-fresh" />
                <span>All products from <strong>verified vendors</strong></span>
              </div>
              <Link
                href={departments[activeDept].href}
                className="text-xs font-semibold text-primary hover:underline"
              >
                See all →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
