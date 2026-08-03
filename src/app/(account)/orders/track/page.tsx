import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layouts/breadcrumb';
import { Truck, CheckCircle, Package } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Order Status & Tracking',
  description: 'Live courier tracking for your orders.',
};

export default function OrderTrackingPage() {
  return (
    <div className="w-full">
      <Breadcrumb items={[{ label: 'Order Tracking' }]} />
      <h1 className="text-3xl font-bold text-foreground mt-4 mb-6">Tracking Order #AVZ-89421</h1>
      <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 dark:bg-background">
        <div className="flex items-center justify-between pb-6 border-b border-outline-variant/30">
          <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600">
            <Truck className="h-5 w-5" /> In Transit — Expected Tomorrow
          </div>
          <span className="text-xs text-on-surface-variant">Courier: DHL Express</span>
        </div>

        <div className="mt-8 grid grid-cols-3 text-center">
          <div className="flex flex-col items-center gap-2">
            <CheckCircle className="h-6 w-6 text-emerald-500" />
            <span className="text-xs font-bold">Order Placed</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Package className="h-6 w-6 text-primary" />
            <span className="text-xs font-bold">Shipped by Vendor</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-outline">
            <Truck className="h-6 w-6" />
            <span className="text-xs font-bold">Out for Delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
}
