import * as React from 'react';

export default function DashboardBaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface-container-low text-foreground dark:bg-background">
      {children}
    </div>
  );
}
