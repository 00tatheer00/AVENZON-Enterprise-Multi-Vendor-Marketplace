import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Building2, Check, X, ShieldAlert } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vendor Governance & Application Approvals',
  description: 'Audit merchant applications and manage verified vendor stores.',
};

const vendorApplications = [
  { id: 'v-1', name: 'AeroCraft Studio', category: 'Luxury Leather & Luggage', country: 'Germany', appliedDate: 'August 1, 2026', riskScore: 'Low (98%)' },
  { id: 'v-2', name: 'Optima Sonic', category: 'High-Fidelity Audio', country: 'Japan', appliedDate: 'August 2, 2026', riskScore: 'Low (95%)' },
  { id: 'v-3', name: 'Chronos Lab', category: 'Micro-Brand Horology', country: 'Switzerland', appliedDate: 'August 3, 2026', riskScore: 'Medium (88%)' },
];

export default function AdminVendorsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Vendor Governance Pipeline</h1>
          <p className="text-xs text-on-surface-variant mt-0.5">Review pending merchant onboarding applications and business credentials.</p>
        </div>
      </div>

      <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-sm dark:bg-background space-y-4">
        <h3 className="text-base font-bold text-foreground mb-4">Pending Merchant Onboarding (3)</h3>

        <div className="divide-y divide-outline-variant/20">
          {vendorApplications.map((app) => (
            <div key={app.id} className="py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">{app.name}</h4>
                  <p className="text-xs text-on-surface-variant">{app.category} • {app.country}</p>
                  <span className="text-[11px] text-emerald-600 font-semibold">Verification Score: {app.riskScore}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-1 text-xs text-error hover:bg-error/10">
                  <X className="h-3.5 w-3.5" /> Reject
                </Button>
                <Button variant="default" size="sm" className="gap-1 text-xs bg-emerald-600 hover:bg-emerald-700">
                  <Check className="h-3.5 w-3.5" /> Approve Vendor
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
