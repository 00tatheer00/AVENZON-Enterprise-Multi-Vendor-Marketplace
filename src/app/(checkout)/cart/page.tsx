import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layouts/breadcrumb';
import { PriceDisplay } from '@/components/shared/price-display';
import { Button } from '@/components/ui/button';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'Review items in your AVENZON shopping cart.',
};

export default function CartPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-8">
      <Breadcrumb items={[{ label: 'Shopping Cart' }]} />
      <h1 className="text-3xl font-bold text-foreground mt-4 mb-6">Your Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 flex items-center justify-between dark:bg-background">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-xl bg-surface-container-low shrink-0" />
              <div>
                <h3 className="font-semibold text-base text-foreground">Aero Chronograph Masterpiece</h3>
                <p className="text-xs text-on-surface-variant">Vendor: Horology Haus</p>
              </div>
            </div>
            <PriceDisplay price={1250} size="sm" />
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-sm flex flex-col gap-4 dark:bg-background">
            <h3 className="text-lg font-bold text-foreground border-b border-outline-variant/30 pb-3">Order Summary</h3>
            <div className="flex justify-between text-sm text-on-surface-variant">
              <span>Subtotal</span>
              <span className="font-semibold text-foreground">$1,250.00</span>
            </div>
            <div className="flex justify-between text-sm text-on-surface-variant">
              <span>Shipping</span>
              <span className="font-semibold text-emerald-600">Free Express</span>
            </div>
            <div className="border-t border-outline-variant/30 pt-3 flex justify-between text-base font-bold text-foreground">
              <span>Total</span>
              <span>$1,250.00</span>
            </div>
            <Link href="/checkout">
              <Button size="lg" className="w-full mt-2 gap-2">
                Proceed to Checkout <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
