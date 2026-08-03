import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layouts/breadcrumb';

export const metadata: Metadata = {
  title: 'AVENZON Insights & Stories',
  description: 'Editorial insights on modern horology, smart home automation, and luxury tech craftsmanship.',
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-8">
      <Breadcrumb items={[{ label: 'Insights & Blog' }]} />
      <h1 className="text-4xl font-extrabold text-foreground mt-4 mb-4">AVENZON Insights</h1>
      <p className="text-sm text-on-surface-variant max-w-xl">
        Explore stories behind independent horology houses, engineering breakthroughs, and curated design trends.
      </p>
    </div>
  );
}
