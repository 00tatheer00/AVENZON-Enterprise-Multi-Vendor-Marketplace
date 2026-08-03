import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disputes & Escrow Claims',
  description: 'Arbitrate marketplace buyer-seller disputes and manage escrow holds.',
};

export default function AdminDisputesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Disputes &amp; Escrow Arbitration</h1>
      <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 dark:bg-background">
        <p className="text-sm text-on-surface-variant">Active dispute tickets: 2 (Escrow status: Protected).</p>
      </div>
    </div>
  );
}
