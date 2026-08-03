import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layouts/breadcrumb';

export const metadata: Metadata = {
  title: 'Terms of Service & Legal Policies',
  description: 'Legal terms of service, privacy policies, and marketplace governance agreements.',
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-8">
      <Breadcrumb items={[{ label: 'Terms of Service' }]} />
      <h1 className="text-4xl font-extrabold text-foreground mt-4 mb-4">Terms of Service &amp; Policies</h1>
      <div className="max-w-3xl space-y-4 text-sm text-on-surface-variant leading-relaxed">
        <p>By accessing AVENZON Global Marketplace, you agree to comply with all platform governance policies, buyer protection guarantees, and multi-vendor escrow terms.</p>
      </div>
    </div>
  );
}
