import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Express Checkout',
  description: 'Secure multi-step checkout on AVENZON.',
};

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-8">
      <h1 className="text-3xl font-bold text-foreground mb-6">Express Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 dark:bg-background">
            <h2 className="text-lg font-bold text-foreground mb-4">1. Shipping Address</h2>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="rounded-lg border border-outline-variant p-2.5 text-sm" />
              <input type="text" placeholder="Last Name" className="rounded-lg border border-outline-variant p-2.5 text-sm" />
              <input type="text" placeholder="Street Address" className="col-span-2 rounded-lg border border-outline-variant p-2.5 text-sm" />
            </div>
          </div>

          <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 dark:bg-background">
            <h2 className="text-lg font-bold text-foreground mb-4">2. Payment Details</h2>
            <p className="text-xs text-on-surface-variant mb-4">Encrypted 256-bit SSL Secure Payment processing.</p>
            <Button size="lg" className="w-full">Place Order ($1,250.00)</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
