'use client';

import * as React from 'react';
import { Star, Quote, ShieldCheck } from 'lucide-react';

export function TestimonialsSection() {
  const reviews = [
    {
      quote: "The verification process for luxury watches gave me 100% confidence. Receiving my tourbillon with authenticated escrow delivery was flawless.",
      author: "Marcus Vance",
      title: "Collector & Tech Investor",
      location: "London, UK",
      store: "Horology Haus Purchase",
      rating: 5,
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGhccwaerxFnTN3Hq8qYrhQ9y0AkTQH_0R8qVpha8U_hjfKwSepRP7Z6bgZZaPQStmM388VutBfWJ5xWZLMw4OkGm4zwzXf9wi81Oy8bNfyW_pBlLZzSaDCCIH8rlafwWrZH6QIKKNJd2kMt0_Rv0DzCgnNrrGsRP2_VmWJOXj1qjsvu5x-h0K9RN8UJK7Z77i8WbfxuAh2xG9izr3tUScLJ77tOrojhXcfi8Y50ipIio0Yd_m1x9Ggg",
    },
    {
      quote: "AVENZON's multi-vendor tracking is lightyears ahead of typical marketplaces. Express DHL shipping arrived in under 36 hours.",
      author: "Elena Rostova",
      title: "Audio Engineer",
      location: "Zurich, Switzerland",
      store: "Aether Audio Purchase",
      rating: 5,
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlzXYFTBSpWS1BkzxuCwl007uaAEZDPBa5UGvC2ELD1NOpiTNYmXYG73LaBm3H0D7f2KT72JoKgPM-EGE5bofXfSUxsAlJQqa3FgD_s5kp_6IBeL1e78x8vHxFCZPr-9OxoVsX7qAJLFVbZpqUcCJIGu3mnLeSEozzUAP5HI97okuzuSB_PgiM2Ws4HGBSWVKQIugvWXejlXqFknVWz1477nhOgYbsPRQmjGtkiQeu1IjEh6CMJdG2CQ",
    },
    {
      quote: "As a vendor, selling on AVENZON provided our studio direct access to global buyers with automated escrow and zero dispute headaches.",
      author: "David Chen",
      title: "Founder, NexusTech",
      location: "San Francisco, CA",
      store: "Verified Merchant Partner",
      rating: 5,
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBub9_-auRRj6OBSfEUN8WE5RSxI7LRcfhLvrwxiJ5BljQhApbNKBbSheI9hiuMK4vGA62PiezNpQzJdyUk7DgdxoYKvntWDpP3NElGbB1DLlbwip7m1kkypkhYx-iJQIDKq327wVjD7KrWYDwxRf_K-tZ_ZAxGGJJQmkUmuIASoKh_Jmeo_bfjkBCAS-kMpSQnTGYGuRDLmApx7vKg8B5QMpXGKI6Z445AUmm7O1UD-hh6vYckB76Wbw",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-surface-container-low/50 border-b border-outline-variant/30">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Global Buyer Proof</span>
          <h2 className="text-3xl font-extrabold text-foreground mt-1">Trusted by 2M+ Buyers Worldwide</h2>
          <p className="text-sm text-on-surface-variant mt-2">See what verified purchasers say about their AVENZON marketplace experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-sm flex flex-col justify-between dark:bg-background"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500">
                    {Array.from({ length: r.rating }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-amber-500" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-outline-variant/50" />
                </div>
                <p className="text-sm text-foreground leading-relaxed italic">&quot;{r.quote}&quot;</p>
              </div>

              <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center gap-3">
                <img src={r.avatar} alt={r.author} className="h-10 w-10 rounded-full object-cover border border-outline-variant/40" />
                <div>
                  <h4 className="text-xs font-bold text-foreground flex items-center gap-1">
                    {r.author} <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                  </h4>
                  <p className="text-[11px] text-on-surface-variant">{r.title} • {r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
