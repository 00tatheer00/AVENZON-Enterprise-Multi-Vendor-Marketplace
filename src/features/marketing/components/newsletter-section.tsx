'use client';

import * as React from 'react';
import { Mail, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function NewsletterSection() {
  const [subscribed, setSubscribed] = React.useState(false);
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary-container p-8 md:p-14 text-white shadow-2xl">
          {/* Decorative radial lighting */}
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-1 text-xs font-semibold backdrop-blur-md mb-4">
                <Sparkles className="h-3.5 w-3.5 text-amber-300" /> VIP Marketplace Access
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Unlock Private Drops &amp; Exclusive Vendor Discounts
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/80 max-w-xl">
                Subscribe to receive private collection drops, limited flash sale alerts, and an instant <strong className="text-white">$50 VIP voucher</strong> on your first order.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="rounded-2xl bg-white/15 p-6 backdrop-blur-xl border border-white/20 flex items-center gap-3">
                  <CheckCircle2 className="h-8 w-8 text-amber-300 shrink-0" />
                  <div>
                    <div className="font-bold text-sm">Welcome to AVENZON VIP!</div>
                    <div className="text-xs text-white/80">Use code <code className="rounded bg-white/20 px-1.5 py-0.5 font-mono text-white font-bold">AVENZONVIP50</code> at checkout.</div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-panel p-2 rounded-2xl flex flex-col sm:flex-row gap-2 bg-white/10 border border-white/20 backdrop-blur-xl">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/70" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your work email address..."
                      className="w-full bg-transparent py-3 pl-10 pr-4 text-sm text-white placeholder:text-white/60 focus:outline-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="bg-white text-primary hover:bg-white/90 font-bold shrink-0 rounded-xl">
                    Claim $50 Voucher
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
