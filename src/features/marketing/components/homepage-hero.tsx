'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Heart, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroShaderBg } from './hero-shader-bg';

export function HomepageHero() {
  return (
    <section className="relative w-full overflow-hidden gradient-hero py-16 md:py-24 border-b border-outline-variant/30">
      {/* Background Interactive Particle Canvas */}
      <HeroShaderBg />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Copy Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 max-w-2xl"
          >
            {/* Top Pill Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-outline-variant/50 bg-surface-container-high px-3.5 py-1 text-xs font-semibold text-on-surface-variant">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>$4.2M+ Transacted • 500+ Verified Suppliers</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                <ShieldCheck className="h-3.5 w-3.5" /> 100% Escrow Protection
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
              The Enterprise Multi-Vendor <br />
              <span className="text-primary">Marketplace Ecosystem</span>
            </h1>

            <p className="mt-6 text-base text-on-surface-variant sm:text-lg leading-relaxed">
              Connect directly with audited global manufacturers, boutique studios, and luxury artisans. Experience AI-driven curation and transparent multi-vendor escrow protection.
            </p>

            {/* AI Search Bar in Hero */}
            <div className="glass-panel mt-8 flex flex-col sm:flex-row items-center rounded-2xl p-2 shadow-2xl w-full max-w-xl border border-outline-variant/40">
              <div className="flex items-center w-full px-3 py-2">
                <Sparkles className="h-5 w-5 text-primary shrink-0 mr-2" />
                <input
                  type="text"
                  placeholder="Ask AI: 'Show me precision chronograph watches under $1,500'..."
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-outline focus:outline-none"
                  aria-label="AI Marketplace Search"
                />
              </div>
              <Link href="/search" className="w-full sm:w-auto">
                <Button variant="default" size="lg" className="w-full sm:w-auto shrink-0 rounded-xl font-bold gap-2">
                  Explore AI Search <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Category Quick Tags */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-medium text-on-surface-variant">
              <span>Popular Tags:</span>
              {['Smart Home', 'Luxury Horology', 'Audiophile Gear', 'Boutique Leather'].map((tag, i) => (
                <Link
                  key={i}
                  href="/catalog"
                  className="rounded-full bg-surface-container px-3 py-1 text-xs text-foreground hover:bg-primary-container hover:text-on-primary-container transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>

            {/* Buyer Social Proof */}
            <div className="mt-8 flex items-center gap-4 text-xs font-medium text-on-surface-variant pt-6 border-t border-outline-variant/30">
              <div className="flex -space-x-2">
                <img className="h-9 w-9 rounded-full border-2 border-surface object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" alt="User 1" />
                <img className="h-9 w-9 rounded-full border-2 border-surface object-cover shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" alt="User 2" />
                <img className="h-9 w-9 rounded-full border-2 border-surface object-cover shadow-sm" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80" alt="User 3" />
              </div>
              <div>
                <div className="font-bold text-foreground">Joined by 2M+ Buyers Worldwide</div>
                <div className="text-[11px] text-on-surface-variant">Avg. Vendor Trust Rating 4.9/5.0 ★</div>
              </div>
            </div>
          </motion.div>

          {/* Right Floating Showcase Cards Column (5 cols) */}
          <div className="relative hidden lg:block lg:col-span-5 h-[520px]">
            {/* Primary Watch Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="absolute left-1/2 top-1/2 z-20 w-80 -translate-x-1/2 -translate-y-1/2 -rotate-2 glass-panel rounded-2xl p-4 shadow-2xl border border-outline-variant/40"
            >
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-surface-container">
                <Image
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=85"
                  alt="Aero Chronograph Masterpiece"
                  fill
                  sizes="320px"
                  className="object-cover"
                />
                <button className="absolute right-3 top-3 rounded-full bg-white/80 p-2 shadow-sm text-foreground">
                  <Heart className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-3 flex justify-between items-start">
                <h3 className="font-semibold text-sm text-foreground">Aero Chronograph</h3>
                <span className="font-bold text-sm text-foreground">$1,250</span>
              </div>
              <div className="text-xs text-primary font-medium mt-0.5">Horology Haus • 4.9★</div>
              <Link href="/products/chronograph-masterpiece">
                <Button variant="outline" size="sm" className="mt-3 w-full font-semibold">View Details</Button>
              </Link>
            </motion.div>

            {/* Secondary Headphones Card */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
              className="absolute right-0 top-6 z-10 w-64 rotate-6 glass-panel rounded-2xl p-3 shadow-xl border border-outline-variant/40"
            >
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-surface-container">
                <Image
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=85"
                  alt="Sonic Pro Max Studio"
                  fill
                  sizes="256px"
                  className="object-cover"
                />
              </div>
              <div className="mt-2 flex justify-between items-center text-xs font-semibold">
                <span>Sonic Pro Max</span>
                <span>$349</span>
              </div>
              <div className="text-[11px] text-on-surface-variant mt-0.5">Aether Audio • 4.8★</div>
            </motion.div>

            {/* Tertiary Leather Tote Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 2 }}
              className="absolute left-2 bottom-6 z-10 w-56 -rotate-6 glass-panel rounded-2xl p-3 shadow-xl border border-outline-variant/40"
            >
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-surface-container">
                <Image
                  src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=85"
                  alt="Structure Leather Tote"
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </div>
              <div className="mt-2 flex justify-between items-center text-xs font-semibold">
                <span>Structure Tote</span>
                <span>$590</span>
              </div>
              <div className="text-[11px] text-on-surface-variant mt-0.5">LuxeCraft • 5.0★</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
