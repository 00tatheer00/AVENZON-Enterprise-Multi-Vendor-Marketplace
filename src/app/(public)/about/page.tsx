import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layouts/breadcrumb';

export const metadata: Metadata = {
  title: 'About AVENZON',
  description: 'Learn about AVENZON enterprise multi-vendor marketplace vision and mission.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-8">
      <Breadcrumb items={[{ label: 'About Us' }]} />
      <h1 className="text-4xl font-extrabold text-foreground mt-4 mb-4">About AVENZON</h1>
      <p className="text-base text-on-surface-variant max-w-2xl leading-relaxed">
        AVENZON is an enterprise multi-vendor marketplace built for buyers who demand technological precision, authentic craftsmanship, and global reliability.
      </p>
    </div>
  );
}
