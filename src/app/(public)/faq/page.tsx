import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layouts/breadcrumb';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ)',
  description: 'Find answers to common questions about shipping, vendor verification, and buyer protection.',
};

const faqs = [
  { q: 'How does AVENZON verify vendors?', a: 'Every seller undergoes a 4-step business audit, tax identification verification, and product authenticity testing.' },
  { q: 'What is the Buyer Protection Guarantee?', a: 'All transactions are held in secure escrow until item delivery is confirmed by the buyer.' },
  { q: 'How fast is express shipping?', a: 'Over 85% of items ship within 24 hours via tracked DHL Express or FedEx delivery.' },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-8">
      <Breadcrumb items={[{ label: 'Frequently Asked Questions' }]} />
      <h1 className="text-4xl font-extrabold text-foreground mt-4 mb-6">Frequently Asked Questions</h1>
      <div className="max-w-2xl space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-6 dark:bg-background">
            <h3 className="text-base font-bold text-foreground">{faq.q}</h3>
            <p className="mt-2 text-sm text-on-surface-variant">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
