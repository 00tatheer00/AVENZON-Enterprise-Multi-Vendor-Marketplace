import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Order Confirmed',
  description: 'Thank you for your order on AVENZON.',
};

export default function OrderSuccessPage() {
  return (
    <div className="mx-auto max-w-[640px] px-6 py-16 text-center">
      <CheckCircle2 className="mx-auto h-16 w-16 text-emerald-500" />
      <h1 className="mt-4 text-3xl font-extrabold text-foreground">Order Confirmed!</h1>
      <p className="mt-2 text-sm text-on-surface-variant">
        Order <span className="font-bold text-foreground">#AVZ-89421</span> has been placed. Verified sellers are preparing your items for express shipment.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link href="/catalog">
          <Button variant="outline">Continue Shopping</Button>
        </Link>
        <Link href="/account/orders/track">
          <Button>Track Order</Button>
        </Link>
      </div>
    </div>
  );
}
