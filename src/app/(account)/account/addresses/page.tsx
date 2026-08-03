import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layouts/breadcrumb';
import { Button } from '@/components/ui/button';
import { MapPin, Plus, Edit, Trash2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Saved Addresses',
  description: 'Manage shipping and billing addresses on AVENZON.',
};

export default function CustomerAddressesPage() {
  return (
    <div className="w-full space-y-6">
      <Breadcrumb items={[{ label: 'Customer Account', href: '/account/profile' }, { label: 'Saved Addresses' }]} />

      <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Saved Shipping Addresses</h1>
          <p className="text-xs text-on-surface-variant mt-0.5">Manage your delivery locations for fast 1-click checkout.</p>
        </div>
        <Button variant="default" size="sm" className="gap-1.5">
          <Plus className="h-4 w-4" /> Add New Address
        </Button>
      </div>

      {/* Address Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Default Shipping Address */}
        <div className="rounded-2xl border-2 border-primary bg-surface-container-lowest p-6 shadow-sm dark:bg-background relative">
          <span className="absolute top-4 right-4 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
            Default Shipping
          </span>
          <div className="flex items-center gap-2 text-sm font-bold text-foreground mb-3">
            <MapPin className="h-4 w-4 text-primary" /> Primary Residence
          </div>
          <div className="text-xs text-on-surface-variant space-y-1">
            <p className="font-semibold text-foreground">Alexander Wright</p>
            <p>742 Evergreen Terrace, Suite 400</p>
            <p>San Francisco, CA 94107, United States</p>
            <p>Phone: +1 (555) 234-8901</p>
          </div>
          <div className="mt-6 pt-4 border-t border-outline-variant/20 flex gap-2">
            <Button variant="outline" size="sm" className="gap-1 text-xs"><Edit className="h-3.5 w-3.5" /> Edit</Button>
            <Button variant="ghost" size="sm" className="gap-1 text-xs text-error hover:bg-error/10"><Trash2 className="h-3.5 w-3.5" /> Delete</Button>
          </div>
        </div>

        {/* Secondary Address */}
        <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-sm dark:bg-background">
          <div className="flex items-center gap-2 text-sm font-bold text-foreground mb-3">
            <MapPin className="h-4 w-4 text-outline" /> Office Location
          </div>
          <div className="text-xs text-on-surface-variant space-y-1">
            <p className="font-semibold text-foreground">Alexander Wright (Design Studio)</p>
            <p>100 Montgomery Street, Floor 12</p>
            <p>San Francisco, CA 94104, United States</p>
            <p>Phone: +1 (555) 987-6543</p>
          </div>
          <div className="mt-6 pt-4 border-t border-outline-variant/20 flex gap-2">
            <Button variant="outline" size="sm" className="gap-1 text-xs"><Edit className="h-3.5 w-3.5" /> Edit</Button>
            <Button variant="ghost" size="sm" className="text-xs">Set as Default</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
