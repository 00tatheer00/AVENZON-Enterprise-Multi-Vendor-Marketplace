import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layouts/breadcrumb';
import { Button } from '@/components/ui/button';
import { CreditCard, Plus, Lock, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Payment Methods',
  description: 'Manage stored payment cards and wallet options on AVENZON.',
};

export default function CustomerPaymentsPage() {
  return (
    <div className="w-full space-y-6">
      <Breadcrumb items={[{ label: 'Customer Account', href: '/account/profile' }, { label: 'Payment Methods' }]} />

      <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Saved Payment Methods</h1>
          <p className="text-xs text-on-surface-variant mt-0.5">Encrypted 256-bit PCI-compliant tokenized payment cards.</p>
        </div>
        <Button variant="default" size="sm" className="gap-1.5">
          <Plus className="h-4 w-4" /> Add Payment Method
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Visa Card */}
        <div className="rounded-2xl border-2 border-primary bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-lg relative">
          <span className="absolute top-4 right-4 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold">
            Default Payment
          </span>
          <div className="flex items-center gap-2 mb-8">
            <CreditCard className="h-6 w-6 text-amber-400" />
            <span className="text-sm font-bold tracking-widest uppercase">Visa Signature</span>
          </div>
          <div className="text-lg font-mono tracking-widest mb-6">•••• •••• •••• 4242</div>
          <div className="flex justify-between text-xs opacity-80">
            <span>CARDHOLDER: ALEXANDER WRIGHT</span>
            <span>EXPIRES: 12/28</span>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-surface-container-low p-4 border border-outline-variant/30 flex items-center gap-3">
        <Lock className="h-5 w-5 text-primary shrink-0" />
        <span className="text-xs text-on-surface-variant">Your payment info is encrypted via Stripe PCI-DSS Level 1 security standards.</span>
      </div>
    </div>
  );
}
