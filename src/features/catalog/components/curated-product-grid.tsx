'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ProductCard, type ProductSummary } from '@/components/shared/product-card';

const mockProducts: ProductSummary[] = [
  {
    id: 'prod-1',
    title: 'OmniHub Pro Smart Home Controller',
    slug: 'omnihub-pro-controller',
    price: 249.0,
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA1LRjT9Ihz-8dgWb_3g0iESontfSPPGLRtpNUIcVHjvZo-AOe8kH7nknARQG4_lUV0kglcK1Zlrfvy0kio30xl-5Rl2ii_JZe_SGFYOSOPdCH3-fpkbV5MZmtn_Qwd5ryJbJLxjFkxpADru88twi87bsXww5uaa8kvdDUUX3KojUjlb795bZ2tPyLm2_GH1CxMEB3f3QSOgOVaBlxQNQHUs4hOdd9h2PHah42eqsSaasPixpq8-rgUIg',
    vendorName: 'NexusTech',
    vendorRating: 4.9,
    rating: 4.8,
    reviewCount: 128,
    badge: 'New Arrival',
  },
  {
    id: 'prod-2',
    title: 'Silence V3 ANC Headphones',
    slug: 'silence-v3-headphones',
    price: 339.0,
    originalPrice: 399.0,
    discountBadge: '-15% Sale',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD4jrYDfezR-S2mydpwmJk-P78zDrameaw4UIJVJuGk-XbpbOeK86k6ZL8osuxD89hregL95JL1n2G37PR88Iw3YF13iE16nEuSNvDb1aLTmrp8tqKAGcI8wEELMR-3jr7OMdKIEbtEfpCLLGfVmObeVMMzSXxbWbhPfr-lJ8sx5KrxDljKVPELO6gVo4FbbHSQlPfNOzF31766wqqYO6R7VqcKy-tyw--tGHiNKJaatT53QyVxjkkldQ',
    vendorName: 'Aether Audio',
    vendorRating: 4.8,
    rating: 5.0,
    reviewCount: 452,
  },
  {
    id: 'prod-3',
    title: 'EcoStat Touch Smart Thermostat',
    slug: 'ecostat-touch-thermostat',
    price: 199.0,
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAEpzkY6LtqHt5Lof_giRa54bHQOY6_xi7eTA5r0fZ8mPJ6FpuV6FPLJ9btDuIR4dpulrS95h6B3PM2PbVz3spqqcKQcerADlJrz5w0KcFwfOdYlUoTFj7TctSVKLN_wNfOo5P42ipcRswylPX-by1n72S7nchJ9YGg4XgtN8c0EjDsoK6u5IebvYzhu3HR3zd-rqyFueDAQC_7JN73oCQgO1DuxRV_mRBvdllbBd68dNiFVB8TKCv4jA',
    vendorName: 'Lumina',
    vendorRating: 4.7,
    rating: 4.6,
    reviewCount: 89,
  },
  {
    id: 'prod-4',
    title: 'Nexus Studio Pro Wireless Headphones',
    slug: 'nexus-studio-pro',
    price: 349.0,
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCgEmKaMk9URI_9sX7BwB3yFhrXUCfek0Z6c-_hQZtKeagz7BIcvyeK8W6F9H_7hWJSUgcdwHsTonqyFo69b5CVHORAAZq29_r2x3U2lIG6UokSqW4GINs1MevOpj7Qh3CnDJJkvWMlmNAWIOxfMmS9j8gEN75QHBYgTn_LDn3BVOAjngaFShks4M7KmXPzJ7iKPEhWwhqN8yRyHLkPzUlFdXPXAD9soqw_AV-CTuc78fN2GkXVOO-iFA',
    vendorName: 'Auraudio',
    vendorRating: 4.9,
    rating: 4.9,
    reviewCount: 312,
    badge: 'Top Rated',
  },
];

export function CuratedProductGrid() {
  const [activeTab, setActiveTab] = React.useState('All Products');

  const tabs = ['All Products', 'Luxury Horology', 'Smart Tech', 'Audiophile Sound'];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Handpicked Selection</span>
            <h2 className="text-3xl font-extrabold text-foreground mt-1">Curated Marketplace Trending</h2>
            <p className="text-sm text-on-surface-variant mt-1">Verified for build quality, authenticity, and express worldwide delivery.</p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 rounded-full border border-outline-variant/30 bg-surface-container-low p-1.5">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  activeTab === t
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-on-surface-variant hover:text-foreground'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 rounded-full border border-outline-variant/40 bg-surface-container-lowest px-6 py-3 text-sm font-bold text-foreground shadow-sm hover:bg-primary-container hover:text-on-primary-container transition-colors"
          >
            <span>Explore Full 420+ Product Catalog</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
