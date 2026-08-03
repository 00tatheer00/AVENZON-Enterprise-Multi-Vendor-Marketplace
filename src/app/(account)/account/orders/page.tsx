import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layouts/breadcrumb';
import { PriceDisplay } from '@/components/shared/price-display';
import { MultiVendorBadge } from '@/components/shared/multi-vendor-badge';
import { Button } from '@/components/ui/button';
import { Package, Truck, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Order History & Status',
  description: 'Track, view, and manage your past and active AVENZON marketplace orders.',
};

const customerOrders = [
  {
    id: 'AVZ-89421',
    date: 'August 2, 2026',
    status: 'In Transit',
    statusColor: 'bg-primary/10 text-primary',
    icon: <Truck className="h-4 w-4 text-primary" />,
    vendorName: 'Horology Haus',
    vendorRating: 4.9,
    itemTitle: 'Aero Chronograph Masterpiece',
    itemCount: 1,
    totalAmount: 1250.0,
    trackingUrl: '/account/orders/track',
  },
  {
    id: 'AVZ-78104',
    date: 'July 14, 2026',
    status: 'Delivered',
    statusColor: 'bg-emerald-500/10 text-emerald-600',
    icon: <CheckCircle2 className="h-4 w-4 text-emerald-600" />,
    vendorName: 'Aether Audio',
    vendorRating: 4.8,
    itemTitle: 'Silence V3 Headphones',
    itemCount: 1,
    totalAmount: 339.0,
    trackingUrl: '/account/orders/track',
  },
];

export default function CustomerOrdersPage() {
  return (
    <div className="w-full space-y-6">
      <Breadcrumb items={[{ label: 'Customer Account', href: '/account/profile' }, { label: 'Order History' }]} />

      <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Order History</h1>
          <p className="text-xs text-on-surface-variant mt-0.5">Track active shipments and review past marketplace orders.</p>
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {customerOrders.map((order) => (
          <div
            key={order.id}
            className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-sm dark:bg-background space-y-4"
          >
            {/* Header row */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-outline-variant/30 pb-4">
              <div>
                <span className="text-xs text-on-surface-variant">Order Code:</span>
                <h3 className="text-base font-bold text-foreground">{order.id}</h3>
                <span className="text-xs text-outline">{order.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${order.statusColor}`}>
                  {order.icon}
                  {order.status}
                </span>
              </div>
            </div>

            {/* Item details */}
            <div className="flex items-center justify-between py-2">
              <div>
                <MultiVendorBadge storeName={order.vendorName} rating={order.vendorRating} />
                <h4 className="text-base font-semibold text-foreground mt-1">{order.itemTitle}</h4>
                <p className="text-xs text-on-surface-variant">{order.itemCount} Item</p>
              </div>
              <PriceDisplay price={order.totalAmount} size="md" />
            </div>

            {/* Actions Footer */}
            <div className="flex items-center justify-between border-t border-outline-variant/20 pt-4">
              <Link href={order.trackingUrl}>
                <Button variant="outline" size="sm" className="gap-1.5 text-xs font-semibold">
                  Track Delivery <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
              <Button variant="ghost" size="sm" className="text-xs font-semibold">
                Download Invoice (PDF)
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
