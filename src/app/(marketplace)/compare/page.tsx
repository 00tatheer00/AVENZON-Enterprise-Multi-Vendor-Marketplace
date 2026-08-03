import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layouts/breadcrumb';

export const metadata: Metadata = {
  title: 'Compare Products',
  description: 'Side-by-side technical specification comparison.',
};

export default function ComparePage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-8">
      <Breadcrumb items={[{ label: 'Compare Products' }]} />
      <h1 className="text-3xl font-bold text-foreground mt-4 mb-6">Product Comparison</h1>
      <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-8 text-center dark:bg-background">
        <p className="text-sm text-on-surface-variant">Select products from catalog to compare features side-by-side.</p>
      </div>
    </div>
  );
}
