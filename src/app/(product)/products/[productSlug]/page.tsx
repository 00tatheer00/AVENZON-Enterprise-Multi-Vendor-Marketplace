import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layouts/breadcrumb';
import { ProductGallery } from '@/features/products/components/product-gallery';
import { RatingStars } from '@/components/shared/rating-stars';
import { PriceDisplay } from '@/components/shared/price-display';
import { MultiVendorBadge } from '@/components/shared/multi-vendor-badge';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Chronograph Masterpiece Tourbillon',
  description: 'Ultra-high-resolution luxury tourbillon watch with skeletonized dial and polished titanium casing.',
};

const pdpImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDx3nn6CtykwZuSidkkTrrGE7SY3EYoaC8MhFw4QSB4VN56tcoUUZpM0SUN-s7BxHFdUNinSipIwJDj04K3p7NezHX5GEgPQQPtIF26itBdGOWa1Ao-P-BRcGGHztiZ1C_lb0ZrmyHuXA1IQ6cptN5CxocPg-pMiO6eay7ggw1L8sVRtjWlDDubguRcpBRuTipIv8IwV0-bD6gM76KZvKnGmM6RKJ_obAzBH_-O03mkmMnln6dgBZR5GA',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDrkf1M4rZa6AhGpUE1ZA7tVbl6yCLX_SYvI_RLHSsjRIio6qgO3pdvzZi4Hx8E7w5_VtrD5BY6k0CXv59TGiS4OnZRwkx8zQEw-L1JkJvrzidaKQuPpavsJyVb9nmj67MVPgqI8K2pfWGEhIpdbmJDV9Zo9A7tIzrwiMlgtjxrAJcnvQNT4bHtHmrIcREjCtrruDBx6FdPLJyGJdUNjgQBLCP4E5AV7zMVD_OYrHp8Jicz2cn9zNrt2A',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA3vmIvl37nqGBuoiYoc4UWZQf7EbIxv7yG0gU7RRRWBbATRShGzS3YPCPovQFMPyz_fW1fiXYnIYS9AIFD2c5Aixn067ZdB8dQHUtZ6A9qakHaZ2OeQnsuavYcJ_X3BIfpIAO4_VBkGk0vnJ5xdbfBe73JQRZY-NAzdF5Sb0RvVsYdEMdregFKj_bopBYzG_uTqiZezh_LoaSyX7O-K_jlF7_CTcs8HstFuKrkXj_U8077BBdgZcu_Vw',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAG2Fk8SV2q920MiXcKqu27pIqpLKe_x3m_jffQt768tlbvxX76Q6MlD8Thqb5HwE1mMdEwyy7jC45KSsDMBaYh7e_pupPBZO_re4YzDZKgnGpFZCzg0CaN3K-ZDHjJeqC8GvRUCnIbYOma3jBWE4toRtNvmQq2edUsIC7mI6TFPgofFnZgO0wQ2N7ZSZnLyO6dXDl7S8H6DS6pxx5aol5rT85_b8nZrgt9jbE6PcqldcTZkf692P5QUw',
];

export default function ProductDetailPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-8">
      <Breadcrumb
        items={[
          { label: 'Marketplace', href: '/catalog' },
          { label: 'Luxury Timepieces', href: '/catalog?category=watches' },
          { label: 'Chronograph Masterpiece' },
        ]}
      />

      <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Gallery Column (7 cols) */}
        <div className="lg:col-span-7">
          <ProductGallery images={pdpImages} title="Chronograph Masterpiece Tourbillon" />
        </div>

        {/* Info Column (5 cols) */}
        <div className="flex flex-col gap-6 lg:col-span-5">
          <div className="border-b border-outline-variant/30 pb-6">
            <MultiVendorBadge storeName="Maison Horlogerie" rating={4.9} isVerified />
            <h1 className="mt-2 text-3xl font-extrabold text-foreground">
              Chronograph Masterpiece Tourbillon
            </h1>
            
            <div className="mt-3 flex items-center gap-4">
              <RatingStars rating={4.9} reviewCount={128} size="md" />
              <span className="text-xs text-primary font-medium underline cursor-pointer">Read All Reviews</span>
            </div>

            <PriceDisplay price={14500} originalPrice={16000} discountBadge="Save $1,500" size="lg" className="mt-4" />
          </div>

          {/* Variants */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-semibold text-foreground mb-2">
                <span>Case Material</span>
                <span className="text-on-surface-variant">Selected: Titanium</span>
              </div>
              <div className="flex gap-3">
                <button className="h-10 w-10 rounded-full border-2 border-primary bg-[#E5E7EB] p-0.5 focus:ring-2 focus:ring-primary focus:outline-none" aria-label="Select Titanium Material" />
                <button className="h-10 w-10 rounded-full border border-outline-variant bg-[#FCD34D] p-0.5 focus:ring-2 focus:ring-primary focus:outline-none" aria-label="Select Gold Material" />
                <button className="h-10 w-10 rounded-full border border-outline-variant bg-[#FDA4AF] p-0.5 focus:ring-2 focus:ring-primary focus:outline-none" aria-label="Select Rose Gold Material" />
              </div>
            </div>
          </div>

          {/* Buy Box Container */}
          <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-sm flex flex-col gap-4 dark:bg-background">
            <div className="flex items-center justify-between text-xs text-on-surface-variant pb-4 border-b border-outline-variant/30">
              <span className="flex items-center gap-1.5"><Truck className="h-4 w-4 text-primary" /> Ships in 24h</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-primary" /> 5-Year Warranty</span>
              <span className="flex items-center gap-1.5"><RotateCcw className="h-4 w-4 text-primary" /> 30-Day Return</span>
            </div>

            <Button size="lg" className="w-full gap-2 text-base font-bold">
              <ShoppingCart className="h-5 w-5" /> Add to Cart
            </Button>

            <Button variant="outline" size="lg" className="w-full text-base font-bold">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
