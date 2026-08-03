import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'System & Platform Settings',
  description: 'Manage global marketplace parameters, CDN caches, and integration APIs.',
};

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">System &amp; Infrastructure Settings</h1>
      <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 dark:bg-background">
        <p className="text-sm text-on-surface-variant">Global marketplace cache controls, SSL settings, and Stripe webhook API configurations.</p>
      </div>
    </div>
  );
}
