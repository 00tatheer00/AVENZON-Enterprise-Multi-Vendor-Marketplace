import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { DollarSign, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Commission & Revenue Splits',
  description: 'Manage platform commission tier structures and merchant payout releases.',
};

export default function AdminRevenuePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Commission &amp; Revenue Splits</h1>
          <p className="text-xs text-on-surface-variant mt-0.5">Configure platform revenue sharing rates and automated merchant payouts.</p>
        </div>
        <Button size="sm">Save Fee Structure</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 dark:bg-background space-y-4">
          <h3 className="text-base font-bold text-foreground border-b border-outline-variant/30 pb-3">Category Commission Rates</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="font-semibold text-foreground">Luxury Timepieces</span>
              <input type="text" defaultValue="8.0%" className="w-20 rounded-lg border border-outline-variant p-1.5 text-center text-xs font-bold" />
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="font-semibold text-foreground">Smart Home &amp; Automation</span>
              <input type="text" defaultValue="12.0%" className="w-20 rounded-lg border border-outline-variant p-1.5 text-center text-xs font-bold" />
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="font-semibold text-foreground">Audiophile Gear</span>
              <input type="text" defaultValue="10.0%" className="w-20 rounded-lg border border-outline-variant p-1.5 text-center text-xs font-bold" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
