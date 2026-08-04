'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Laptop, Smartphone, Shirt, Home, Watch, Headphones,
  Dumbbell, Gem, Camera, Car, BookOpen, Baby
} from 'lucide-react';

const categories = [
  { name: 'Electronics', icon: <Laptop className="h-6 w-6" />, href: '/categories/electronics', color: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
  { name: 'Phones', icon: <Smartphone className="h-6 w-6" />, href: '/categories/phones', color: 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' },
  { name: 'Fashion', icon: <Shirt className="h-6 w-6" />, href: '/categories/fashion', color: 'bg-pink-50 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400' },
  { name: 'Home & Living', icon: <Home className="h-6 w-6" />, href: '/categories/home', color: 'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400' },
  { name: 'Watches', icon: <Watch className="h-6 w-6" />, href: '/categories/watches', color: 'bg-slate-50 text-slate-600 dark:bg-slate-800/30 dark:text-slate-400' },
  { name: 'Audio', icon: <Headphones className="h-6 w-6" />, href: '/categories/audio', color: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400' },
  { name: 'Sports', icon: <Dumbbell className="h-6 w-6" />, href: '/categories/sports', color: 'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400' },
  { name: 'Beauty', icon: <Gem className="h-6 w-6" />, href: '/categories/beauty', color: 'bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400' },
  { name: 'Cameras', icon: <Camera className="h-6 w-6" />, href: '/categories/cameras', color: 'bg-cyan-50 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400' },
  { name: 'Automotive', icon: <Car className="h-6 w-6" />, href: '/categories/automotive', color: 'bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400' },
  { name: 'Books', icon: <BookOpen className="h-6 w-6" />, href: '/categories/books', color: 'bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400' },
  { name: 'Baby & Kids', icon: <Baby className="h-6 w-6" />, href: '/categories/baby', color: 'bg-yellow-50 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400' },
];

export function CategoryHighlightsSection() {
  return (
    <section className="w-full bg-background">
      <div className="marketplace-container section-gap">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-5">Top Categories</h2>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group flex flex-col items-center gap-2 text-center"
            >
              <div className={`flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl ${cat.color} transition-all group-hover:scale-110 group-hover:shadow-lg`}>
                {cat.icon}
              </div>
              <span className="text-[11px] font-medium text-on-surface-variant group-hover:text-primary transition-colors leading-tight">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
