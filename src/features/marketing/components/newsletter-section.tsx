'use client';

import * as React from 'react';
import { Mail, Gift } from 'lucide-react';

export function NewsletterSection() {
  const [email, setEmail] = React.useState('');

  return (
    <section className="w-full bg-[#0B132B] text-white">
      <div className="marketplace-container py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
              <Mail className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-1">Subscribe to our Newsletter</h2>
              <p className="text-white/70 text-xs sm:text-sm">Get updates on the latest deals and offers</p>
            </div>
          </div>

          <div className="w-full max-w-md">
            <div className="flex rounded-lg overflow-hidden bg-white p-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-transparent px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
                aria-label="Email for newsletter"
              />
              <button className="bg-primary text-white px-6 py-2.5 text-sm font-bold hover:bg-primary-container transition-colors whitespace-nowrap rounded-md shadow-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
