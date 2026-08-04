'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight, Truck, Shield, Headphones, RotateCcw } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    title: 'Summer Tech Festival',
    subtitle: 'Up to 60% OFF on Premium Electronics',
    cta: 'Shop Electronics',
    href: '/catalog?c=electronics',
    gradient: 'from-[#0f0c29] via-[#302b63] to-[#24243e]',
    image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 2,
    title: 'Luxury Watch Collection',
    subtitle: 'Precision Engineering Meets Classic Design',
    cta: 'Explore Watches',
    href: '/catalog?c=watches',
    gradient: 'from-[#1a1a2e] via-[#16213e] to-[#0f3460]',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 3,
    title: 'New Season Fashion',
    subtitle: 'Discover 2026 Trending Collections',
    cta: 'Shop Fashion',
    href: '/catalog?c=fashion',
    gradient: 'from-[#2d1b69] via-[#6c5ce7] to-[#a29bfe]',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85',
  },
];

const promoBanners = [
  {
    title: 'New Arrivals',
    subtitle: 'Fresh drops every day',
    gradient: 'from-emerald-600 to-teal-500',
    href: '/catalog?sort=newest',
  },
  {
    title: 'Clearance Sale',
    subtitle: 'Up to 80% OFF',
    gradient: 'from-rose-600 to-pink-500',
    href: '/deals',
  },
];

const trustIcons = [
  { icon: <Truck className="h-5 w-5" />, title: 'Free Shipping', desc: 'Orders over $50' },
  { icon: <Shield className="h-5 w-5" />, title: 'Secure Payment', desc: '256-bit encrypted' },
  { icon: <RotateCcw className="h-5 w-5" />, title: '30-Day Returns', desc: 'Hassle-free returns' },
  { icon: <Headphones className="h-5 w-5" />, title: '24/7 Support', desc: 'Dedicated team' },
];

export function HomepageHero() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);

  return (
    <section className="w-full bg-background">
      <div className="marketplace-container py-4 md:py-8">
        {/* Main Hero Area: Slider + Promo Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 md:gap-4">
          {/* Hero Slider — 3 cols */}
          <div className="lg:col-span-3 relative rounded-xl overflow-hidden group min-h-[280px] sm:min-h-[320px] md:min-h-[380px]">
            {heroSlides.map((slide, idx) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 75vw"
                  className="object-cover"
                  priority={idx === 0}
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-75`} />
                <div className="absolute inset-0 flex flex-col justify-center p-5 sm:p-8 md:p-12">
                  <span className="text-white/80 text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-1 sm:mb-2">AVENZON Exclusive</span>
                  <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-1.5 sm:mb-2 leading-tight max-w-lg">
                    {slide.title}
                  </h2>
                  <p className="text-white/90 text-xs sm:text-sm md:text-base mb-4 sm:mb-6 max-w-md line-clamp-2">{slide.subtitle}</p>
                  <Link
                    href={slide.href}
                    className="inline-flex items-center gap-2 rounded-lg bg-white text-foreground px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold hover:bg-primary hover:text-white transition-colors w-fit shadow-lg active:scale-95"
                  >
                    {slide.cta} <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Link>
                </div>
              </div>
            ))}

            {/* Slider Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/40 transition-all sm:opacity-0 group-hover:opacity-100"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/40 transition-all sm:opacity-0 group-hover:opacity-100"
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all ${idx === currentSlide ? 'w-5 sm:w-6 bg-white' : 'w-1.5 sm:w-2 bg-white/40 hover:bg-white/60'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Promo Cards — 1 col */}
          <div className="hidden lg:flex flex-col gap-3 md:gap-4">
            {promoBanners.map((banner, idx) => (
              <Link
                key={idx}
                href={banner.href}
                className={`flex-1 rounded-xl bg-gradient-to-br ${banner.gradient} p-5 flex flex-col justify-end text-white hover:opacity-95 transition-opacity relative overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-0.5">{banner.title}</h3>
                  <p className="text-white/80 text-xs">{banner.subtitle}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold mt-3 group-hover:gap-2 transition-all">
                    Shop Now <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Trust Icons Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 mt-3 sm:mt-4">
          {trustIcons.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5 sm:gap-3 rounded-lg bg-surface-container-lowest border border-outline-variant/15 p-2.5 sm:p-3 hover:border-primary/20 transition-colors dark:bg-surface-container-low/50">
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-primary/8 text-primary">
                {item.icon}
              </div>
              <div className="min-w-0">
                <h4 className="text-[11px] sm:text-xs font-bold text-foreground truncate">{item.title}</h4>
                <p className="text-[10px] sm:text-[11px] text-on-surface-variant truncate">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
