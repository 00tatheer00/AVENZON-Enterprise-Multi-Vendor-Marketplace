import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layouts/breadcrumb';
import { Button } from '@/components/ui/button';
import { User, Mail, Phone, ShieldCheck, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'My Profile & Account Settings',
  description: 'Manage your AVENZON profile, security, and personal preferences.',
};

export default function CustomerProfilePage() {
  return (
    <div className="w-full space-y-6">
      <Breadcrumb items={[{ label: 'Customer Account', href: '/account/profile' }, { label: 'My Profile' }]} />

      <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Personal Profile</h1>
          <p className="text-xs text-on-surface-variant mt-0.5">Manage your personal information, contact details, and security.</p>
        </div>
        <Button variant="default" size="sm">Save Changes</Button>
      </div>

      {/* Account Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Details */}
        <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 dark:bg-background space-y-4">
          <h3 className="text-base font-bold text-foreground flex items-center gap-2 border-b border-outline-variant/30 pb-3">
            <User className="h-4 w-4 text-primary" /> Personal Information
          </h3>

          <div>
            <label className="text-xs font-semibold text-on-surface-variant block mb-1">Full Name</label>
            <input type="text" defaultValue="Alexander Wright" className="w-full rounded-lg border border-outline-variant bg-surface-container-low p-2.5 text-sm focus:border-primary focus:outline-none" />
          </div>

          <div>
            <label className="text-xs font-semibold text-on-surface-variant block mb-1">Email Address</label>
            <div className="relative">
              <input type="email" defaultValue="alexander.wright@avenzon.com" className="w-full rounded-lg border border-outline-variant bg-surface-container-low p-2.5 pr-10 text-sm focus:border-primary focus:outline-none" />
              <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-outline" />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-on-surface-variant block mb-1">Phone Number</label>
            <div className="relative">
              <input type="tel" defaultValue="+1 (555) 234-8901" className="w-full rounded-lg border border-outline-variant bg-surface-container-low p-2.5 pr-10 text-sm focus:border-primary focus:outline-none" />
              <Phone className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-outline" />
            </div>
          </div>
        </div>

        {/* Security & Verification */}
        <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 dark:bg-background space-y-4">
          <h3 className="text-base font-bold text-foreground flex items-center gap-2 border-b border-outline-variant/30 pb-3">
            <ShieldCheck className="h-4 w-4 text-primary" /> Account Security
          </h3>

          <div className="rounded-xl bg-emerald-500/10 p-3.5 border border-emerald-500/20 flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0" />
            <div>
              <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400">Two-Factor Authentication Active</div>
              <div className="text-[11px] text-on-surface-variant">Your account is secured with SMS 2FA.</div>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-on-surface-variant block mb-1">Current Password</label>
            <input type="password" defaultValue="••••••••••••" className="w-full rounded-lg border border-outline-variant bg-surface-container-low p-2.5 text-sm focus:border-primary focus:outline-none" />
          </div>

          <Button variant="outline" size="sm" className="w-full">Change Password</Button>
        </div>
      </div>
    </div>
  );
}
