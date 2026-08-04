'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronUp, Mail, Phone, MapPin, CreditCard, Shield, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full">
      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-full bg-surface-container-high/80 hover:bg-surface-container-high py-3 text-center text-xs font-medium text-on-surface-variant hover:text-foreground transition-colors flex items-center justify-center gap-1"
      >
        <ChevronUp className="h-3.5 w-3.5" />
        Back to Top
      </button>

      {/* Main Footer Links */}
      <div className="w-full bg-surface-container dark:bg-surface-container-low border-t border-outline-variant/20">
        <div className="marketplace-container py-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {/* Brand */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2 flex flex-col items-start">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="AVENZON"
                  width={140}
                  height={36}
                  className="h-8 w-auto object-contain dark:brightness-110"
                />
              </Link>
              <p className="mt-3 max-w-xs text-xs text-on-surface-variant leading-relaxed">
                The premium multi-vendor marketplace connecting 500+ verified global suppliers with millions of discerning buyers worldwide.
              </p>

              {/* Contact Info */}
              <div className="mt-4 flex flex-col gap-1.5 text-xs text-on-surface-variant">
                <a href="mailto:support@avenzon.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Mail className="h-3 w-3" /> support@avenzon.com
                </a>
                <a href="tel:+18001234567" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Phone className="h-3 w-3" /> 1-800-123-4567
                </a>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3 w-3" /> 350 5th Ave, New York, NY
                </span>
              </div>

              {/* Social Icons */}
              <div className="mt-4 flex items-center gap-2">
                {[
                  { icon: <Facebook className="h-4 w-4" />, label: 'Facebook' },
                  { icon: <Twitter className="h-4 w-4" />, label: 'Twitter' },
                  { icon: <Instagram className="h-4 w-4" />, label: 'Instagram' },
                  { icon: <Youtube className="h-4 w-4" />, label: 'YouTube' },
                ].map((s) => (
                  <button
                    key={s.label}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant hover:bg-primary hover:text-white transition-colors"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Marketplace */}
            <div className="flex flex-col gap-2">
              <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">Marketplace</h4>
              {['Browse Categories', 'Flash Deals', 'New Arrivals', 'Best Sellers', 'Trending Now', 'Brand Directory'].map((l) => (
                <Link key={l} href="/catalog" className="text-xs text-on-surface-variant hover:text-primary transition-colors">{l}</Link>
              ))}
            </div>

            {/* Vendors */}
            <div className="flex flex-col gap-2">
              <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">For Vendors</h4>
              {['Become a Seller', 'Seller Central', 'Vendor Agreement', 'Advertising', 'Fulfillment Services', 'Seller Support'].map((l) => (
                <Link key={l} href="/sell" className="text-xs text-on-surface-variant hover:text-primary transition-colors">{l}</Link>
              ))}
            </div>

            {/* Help & Support */}
            <div className="flex flex-col gap-2">
              <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">Help</h4>
              {['Help Center', 'Track Your Order', 'Returns & Refunds', 'Shipping Info', 'Payment Methods', 'Contact Us'].map((l) => (
                <Link key={l} href="/support" className="text-xs text-on-surface-variant hover:text-primary transition-colors">{l}</Link>
              ))}
            </div>

            {/* Company */}
            <div className="flex flex-col gap-2">
              <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">Company</h4>
              {['About AVENZON', 'Careers', 'Press & Media', 'Investor Relations', 'Terms of Service', 'Privacy Policy'].map((l) => (
                <Link key={l} href="/about" className="text-xs text-on-surface-variant hover:text-primary transition-colors">{l}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods & Security */}
      <div className="w-full bg-surface-container-high/60 border-t border-outline-variant/15 dark:bg-surface-container">
        <div className="marketplace-container py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-on-surface-variant">
              <span className="font-medium">We Accept:</span>
              <div className="flex items-center gap-2">
                {['Visa', 'Mastercard', 'PayPal', 'Apple Pay', 'Google Pay', 'Amex'].map((p) => (
                  <div key={p} className="rounded border border-outline-variant/30 bg-white px-2 py-1 text-[10px] font-bold text-on-surface-variant dark:bg-surface-container-low">
                    {p}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs text-on-surface-variant">
              <div className="flex items-center gap-1">
                <Shield className="h-3.5 w-3.5 text-fresh" />
                <span className="font-medium">SSL Secured</span>
              </div>
              <div className="flex items-center gap-1">
                <CreditCard className="h-3.5 w-3.5 text-primary" />
                <span className="font-medium">Secure Payments</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-foreground text-white/60 dark:bg-surface-container-low">
        <div className="marketplace-container flex flex-col sm:flex-row items-center justify-between gap-2 py-3 text-[11px]">
          <p>© 2026 AVENZON Global Marketplace. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
            <span className="text-white/30">|</span>
            <button className="hover:text-white transition-colors flex items-center gap-1">
              <MapPin className="h-3 w-3" /> United States
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
