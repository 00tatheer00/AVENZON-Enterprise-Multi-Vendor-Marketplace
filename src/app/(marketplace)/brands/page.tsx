import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layouts/breadcrumb';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Verified Vendor Brands Directory',
  description: 'Explore 500+ verified global brands and independent studios selling on AVENZON.',
};

const brandsList = [
  { name: 'Horology Haus', category: 'Luxury Timepieces', items: '142 Items', rating: 4.9 },
  { name: 'NexusTech', category: 'Smart Home & Tech', items: '310 Items', rating: 4.8 },
  { name: 'Aether Audio', category: 'Audiophile Gear', items: '89 Items', rating: 5.0 },
  { name: 'LuxeCraft Studio', category: 'Modern Living & Leather', items: '215 Items', rating: 4.9 },
];

export default function BrandsPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-8">
      <Breadcrumb items={[{ label: 'Verified Brands Directory' }]} />
      <div className="mt-4 mb-8">
        <h1 className="text-4xl font-extrabold text-foreground">Verified Vendor Brands</h1>
        <p className="mt-2 text-sm text-on-surface-variant max-w-xl">
          Discover top independent creators, boutique workshops, and global suppliers verified by AVENZON.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {brandsList.map((brand, idx) => (
          <div key={idx} className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-sm flex flex-col justify-between hover:border-primary transition-colors dark:bg-background">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-primary mb-2">
                <ShieldCheck className="h-4 w-4" /> Verified Vendor
              </div>
              <h3 className="text-xl font-bold text-foreground">{brand.name}</h3>
              <p className="text-xs text-on-surface-variant mt-1">{brand.category}</p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
              <span className="text-xs font-medium text-on-surface-variant">{brand.items} • {brand.rating}★</span>
              <Link href={`/vendors/${brand.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-primary hover:underline flex items-center text-xs font-bold">
                Visit Store <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
