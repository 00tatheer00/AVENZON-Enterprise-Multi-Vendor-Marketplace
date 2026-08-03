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
                <img className="h-9 w-9 rounded-full border-2 border-surface object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGhccwaerxFnTN3Hq8qYrhQ9y0AkTQH_0R8qVpha8U_hjfKwSepRP7Z6bgZZaPQStmM388VutBfWJ5xWZLMw4OkGm4zwzXf9wi81Oy8bNfyW_pBlLZzSaDCCIH8rlafwWrZH6QIKKNJd2kMt0_Rv0DzCgnNrrGsRP2_VmWJOXj1qjsvu5x-h0K9RN8UJK7Z77i8WbfxuAh2xG9izr3tUScLJ77tOrojhXcfi8Y50ipIio0Yd_m1x9Ggg" alt="User 1" />
                <img className="h-9 w-9 rounded-full border-2 border-surface object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlzXYFTBSpWS1BkzxuCwl007uaAEZDPBa5UGvC2ELD1NOpiTNYmXYG73LaBm3H0D7f2KT72JoKgPM-EGE5bofXfSUxsAlJQqa3FgD_s5kp_6IBeL1e78x8vHxFCZPr-9OxoVsX7qAJLFVbZpqUcCJIGu3mnLeSEozzUAP5HI97okuzuSB_PgiM2Ws4HGBSWVKQIugvWXejlXqFknVWz1477nhOgYbsPRQmjGtkiQeu1IjEh6CMJdG2CQ" alt="User 2" />
                <img className="h-9 w-9 rounded-full border-2 border-surface object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBub9_-auRRj6OBSfEUN8WE5RSxI7LRcfhLvrwxiJ5BljQhApbNKBbSheI9hiuMK4vGA62PiezNpQzJdyUk7DgdxoYKvntWDpP3NElGbB1DLlbwip7m1kkypkhYx-iJQIDKq327wVjD7KrWYDwxRf_K-tZ_ZAxGGJJQmkUmuIASoKh_Jmeo_bfjkBCAS-kMpSQnTGYGuRDLmApx7vKg8B5QMpXGKI6Z445AUmm7O1UD-hh6vYckB76Wbw" alt="User 3" />
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXYyVKNJ2BKwV4vXJcryd0okqQlAEDG6zL1qgQuOi400blw4rrJEm1n33xAVB2M8s4rKLxQ1X7sGzwI6gtkR60dH5cZhmum7ik4wtIzIaYPn-ba2diVBz1NLu0jOtg3vVPj-Xef-vKmo91RYyxOUYMgP_4EbGM0_1gI0b8YBBpJcQcMODiJVUo_ypU2TDjf8fvGqfZvDQCALrF0QLdCwJ323fkOElTpKDXJJndJMOGDxg7JWz0TC8Xhw"
                  alt="Aero Chronograph"
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiu_mDARwkFFU-f22qJ6nGB9K6-DaViiATZlkFsm6wFn0CGZG-t4P7c2xMDmVYfy7-kGB9MI0s-fJ7DxepYeKp4YkMo-lw4NOFGR8UP1D3wIkgExIil8Lg9wcEtjcHlp5FuRJrzcLdTRdbiB-OYc9HcJKQXLrs7u9qexWvgSLjkODBp2QrJdW5IAgX3PR9CINr-utl1Y2zUvSNSAUfUKYP56FndL7YLL44VXU-kDjRJiZHfBZLSxUurA"
                  alt="Sonic Pro Max"
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2A6YTKIR4ypVirfDxlPxzna3I5ansXx9k8eSZIxmQysJVdUXFuYEz4e_PrWMzR3aqklsNMFzw12gL9htgbbiwPxtE-XvcLVXQCSgHrbRrDtNXgNFbZs5A2paon9GSKiqImwn0AI-B3m7txyjqfDtp4RwkfmmY7svVRmRDyEk2vJUrUZ8Zf5OP8ZrSjEFSb8r4LC15m-E2W5krZiIuo-qH_zbtpdHuOUny8UCVS9oWLcTQe8e9hA6-9g"
                  alt="Structure Tote"
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
