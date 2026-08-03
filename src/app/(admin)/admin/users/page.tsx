import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'User & Identity Governance',
  description: 'Manage buyer profiles, vendor representatives, and platform RBAC roles.',
};

export default function AdminUsersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">User &amp; Identity Governance</h1>
      <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 dark:bg-background">
        <p className="text-sm text-on-surface-variant">Global buyer &amp; vendor user directory with role-based access management.</p>
      </div>
    </div>
  );
}
