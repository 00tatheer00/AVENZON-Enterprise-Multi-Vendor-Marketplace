import * as React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/30 bg-surface-container py-16 dark:bg-surface-container-low">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          {/* Brand Info */}
          <div className="col-span-2 flex flex-col items-start lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-foreground">
              AVENZON
            </Link>
            <p className="mt-4 max-w-xs text-sm text-on-surface-variant">
              The premium multi-vendor marketplace prioritizing trust, technological precision, and a high-fidelity shopping experience.
            </p>
            <p className="mt-6 text-xs text-on-surface-variant">
              © 2026 AVENZON Global Marketplace. All rights reserved.
            </p>
          </div>

          {/* Navigation Column 1 */}
          <div className="col-span-1 flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-foreground">Marketplace</h4>
            <Link href="/catalog" className="text-xs text-on-surface-variant hover:text-primary transition-colors">
              Explore Categories
            </Link>
            <Link href="/vendors" className="text-xs text-on-surface-variant hover:text-primary transition-colors">
              Featured Brands
            </Link>
            <Link href="/deals" className="text-xs text-on-surface-variant hover:text-primary transition-colors">
              Flash Sales
            </Link>
          </div>

          {/* Navigation Column 2 */}
          <div className="col-span-1 flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-foreground">Vendors</h4>
            <Link href="/seller" className="text-xs text-on-surface-variant hover:text-primary transition-colors">
              Become a Seller
            </Link>
            <Link href="/seller/dashboard" className="text-xs text-on-surface-variant hover:text-primary transition-colors">
              Seller Central
            </Link>
            <Link href="/vendor-agreement" className="text-xs text-on-surface-variant hover:text-primary transition-colors">
              Vendor Agreement
            </Link>
          </div>

          {/* Navigation Column 3 */}
          <div className="col-span-1 flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-foreground">Company</h4>
            <Link href="/about" className="text-xs text-on-surface-variant hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/careers" className="text-xs text-on-surface-variant hover:text-primary transition-colors">
              Careers
            </Link>
            <Link href="/contact" className="text-xs text-on-surface-variant hover:text-primary transition-colors">
              Contact Support
            </Link>
          </div>

          {/* Navigation Column 4 */}
          <div className="col-span-1 flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-foreground">Legal</h4>
            <Link href="/terms" className="text-xs text-on-surface-variant hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-xs text-on-surface-variant hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/accessibility" className="text-xs text-on-surface-variant hover:text-primary transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
