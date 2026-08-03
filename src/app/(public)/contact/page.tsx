import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layouts/breadcrumb';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Contact Support',
  description: 'Get 24/7 priority concierge support from AVENZON.',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-8">
      <Breadcrumb items={[{ label: 'Contact Support' }]} />
      <h1 className="text-4xl font-extrabold text-foreground mt-4 mb-4">Contact Priority Concierge</h1>
      <div className="max-w-lg rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 dark:bg-background space-y-4">
        <input type="text" placeholder="Your Name" className="w-full rounded-lg border border-outline-variant p-2.5 text-sm" />
        <input type="email" placeholder="Email Address" className="w-full rounded-lg border border-outline-variant p-2.5 text-sm" />
        <textarea placeholder="Describe your inquiry..." rows={4} className="w-full rounded-lg border border-outline-variant p-2.5 text-sm" />
        <Button size="lg" className="w-full">Send Inquiry</Button>
      </div>
    </div>
  );
}
