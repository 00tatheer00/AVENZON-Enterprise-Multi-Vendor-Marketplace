'use client';

import * as React from 'react';
import { Mail, Gift } from 'lucide-react';

export function NewsletterSection() {
  const [email, setEmail] = React.useState('');

  return (
    <section className="w-full bg-gradient-to-r from-primary via-primary-container to-accent">
      <div className="marketplace-container py-10 md:py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white text-center md:text-left max-w-md">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Gift className="h-6 w-6" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/80">Exclusive Offer</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-1">Get $10 OFF Your First Order</h2>
            <p className="text-white/70 text-sm">Subscribe to our newsletter and get exclusive deals, new arrivals, and insider-only discounts delivered to your inbox.</p>
          </div>

          <div className="w-full max-w-md">
            <div className="flex rounded-lg overflow-hidden shadow-xl bg-white/10 backdrop-blur-md border border-white/20">
              <div className="flex items-center px-3">
                <Mail className="h-5 w-5 text-white/60" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-transparent py-3.5 text-sm text-white placeholder:text-white/50 focus:outline-none"
                aria-label="Email for newsletter"
              />
              <button className="bg-white text-primary px-6 py-3.5 text-sm font-bold hover:bg-white/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-[11px] text-white/50 mt-2 text-center md:text-left">
              By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
