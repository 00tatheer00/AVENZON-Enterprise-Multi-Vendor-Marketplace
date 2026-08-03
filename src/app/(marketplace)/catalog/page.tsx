import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layouts/breadcrumb';
import { FilterSidebar } from '@/features/catalog/components/filter-sidebar';
import { ProductCard, type ProductSummary } from '@/components/shared/product-card';

export const metadata: Metadata = {
  title: 'Marketplace Catalog',
  description: 'Browse all verified multi-vendor products across smart home, luxury horology, and audiophile tech.',
};

const catalogProducts: ProductSummary[] = [
  {
    id: 'cat-1',
    title: 'OmniHub Pro Controller',
    slug: 'omnihub-pro-controller',
    price: 249.0,
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1LRjT9Ihz-8dgWb_3g0iESontfSPPGLRtpNUIcVHjvZo-AOe8kH7nknARQG4_lUV0kglcK1Zlrfvy0kio30xl-5Rl2ii_JZe_SGFYOSOPdCH3-fpkbV5MZmtn_Qwd5ryJbJLxjFkxpADru88twi87bsXww5uaa8kvdDUUX3KojUjlb795bZ2tPyLm2_GH1CxMEB3f3QSOgOVaBlxQNQHUs4hOdd9h2PHah42eqsSaasPixpq8-rgUIg',
    vendorName: 'NexusTech',
    vendorRating: 4.9,
    rating: 4.8,
    reviewCount: 128,
    badge: 'New Arrival',
  },
  {
    id: 'cat-2',
    title: 'Silence V3 Headphones',
    slug: 'silence-v3-headphones',
    price: 339.0,
    originalPrice: 399.0,
    discountBadge: '-15% Sale',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4jrYDfezR-S2mydpwmJk-P78zDrameaw4UIJVJuGk-XbpbOeK86k6ZL8osuxD89hregL95JL1n2G37PR88Iw3YF13iE16nEuSNvDb1aLTmrp8tqKAGcI8wEELMR-3jr7OMdKIEbtEfpCLLGfVmObeVMMzSXxbWbhPfr-lJ8sx5KrxDljKVPELO6gVo4FbbHSQlPfNOzF31766wqqYO6R7VqcKy-tyw--tGHiNKJaatT53QyVxjkkldQ',
    vendorName: 'Aether Audio',
    vendorRating: 4.8,
    rating: 5.0,
    reviewCount: 452,
  },
  {
    id: 'cat-3',
    title: 'EcoStat Touch Thermostat',
    slug: 'ecostat-touch-thermostat',
    price: 199.0,
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEpzkY6LtqHt5Lof_giRa54bHQOY6_xi7eTA5r0fZ8mPJ6FpuV6FPLJ9btDuIR4dpulrS95h6B3PM2PbVz3spqqcKQcerADlJrz5w0KcFwfOdYlUoTFj7TctSVKLN_wNfOo5P42ipcRswylPX-by1n72S7nchJ9YGg4XgtN8c0EjDsoK6u5IebvYzhu3HR3zd-rqyFueDAQC_7JN73oCQgO1DuxRV_mRBvdllbBd68dNiFVB8TKCv4jA',
    vendorName: 'Lumina',
    vendorRating: 4.7,
    rating: 4.6,
    reviewCount: 89,
  },
];

export default function CatalogPage() {
  return (
    <div className="mx-auto max-w-[1280px] w-full px-6 py-8">
      <Breadcrumb items={[{ label: 'Marketplace Catalog' }]} />
      
      {/* Active Filter Chips Bar */}
      <div className="mt-4 flex flex-wrap items-center gap-2 mb-6 pb-4 border-b border-outline-variant/30">
        <span className="text-xs text-on-surface-variant">Active Filters:</span>
        <span className="inline-flex items-center gap-1 bg-surface-container-high px-3 py-1 rounded-full text-xs font-medium text-foreground border border-outline-variant/30">
          Smart Home <button className="hover:text-error">×</button>
        </span>
        <span className="inline-flex items-center gap-1 bg-surface-container-high px-3 py-1 rounded-full text-xs font-medium text-foreground border border-outline-variant/30">
          Aether Audio <button className="hover:text-error">×</button>
        </span>
        <button className="text-xs text-primary font-medium hover:underline ml-2">Clear All</button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <FilterSidebar className="w-full lg:w-64 shrink-0 hidden lg:block" />

        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-foreground">Smart Home &amp; Tech</h1>
            <div className="flex items-center gap-2">
              <span className="text-xs text-on-surface-variant">Sort by:</span>
              <select className="bg-transparent border-none text-xs font-semibold text-foreground cursor-pointer focus:ring-0">
                <option>Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest Arrivals</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalogProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
