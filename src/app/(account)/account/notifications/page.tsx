import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layouts/breadcrumb';
import { Button } from '@/components/ui/button';
import { Bell, Mail, Smartphone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Notification Preferences',
  description: 'Customize order status alerts and promotional communications.',
};

export default function CustomerNotificationsPage() {
  return (
    <div className="w-full space-y-6">
      <Breadcrumb items={[{ label: 'Customer Account', href: '/account/profile' }, { label: 'Notifications' }]} />

      <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Notification Preferences</h1>
          <p className="text-xs text-on-surface-variant mt-0.5">Control how and when you receive marketplace updates.</p>
        </div>
        <Button variant="default" size="sm">Save Preferences</Button>
      </div>

      <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 dark:bg-background space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20">
          <div className="flex items-center gap-3">
            <Bell className="h-5 w-5 text-primary" />
            <div>
              <h3 className="text-sm font-bold text-foreground">Order &amp; Courier Tracking Alerts</h3>
              <p className="text-xs text-on-surface-variant">Instant SMS &amp; Email updates when items are shipped or delivered.</p>
            </div>
          </div>
          <input type="checkbox" defaultChecked className="h-5 w-5 rounded text-primary focus:ring-primary" />
        </div>

        <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20">
          <div className="flex items-center gap-3">
            <Smartphone className="h-5 w-5 text-primary" />
            <div>
              <h3 className="text-sm font-bold text-foreground">Price Drop Alerts on Wishlist Items</h3>
              <p className="text-xs text-on-surface-variant">Notify when saved items go on sale or limited discount.</p>
            </div>
          </div>
          <input type="checkbox" defaultChecked className="h-5 w-5 rounded text-primary focus:ring-primary" />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <h3 className="text-sm font-bold text-foreground">Weekly Editorial &amp; Collection Drops</h3>
              <p className="text-xs text-on-surface-variant">Curated stories on luxury horology, smart home, and audiophile gear.</p>
            </div>
          </div>
          <input type="checkbox" className="h-5 w-5 rounded text-primary focus:ring-primary" />
        </div>
      </div>
    </div>
  );
}
