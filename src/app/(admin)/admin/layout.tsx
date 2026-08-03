import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Users, Building2, Scale, DollarSign, Settings, Bell } from 'lucide-react';
import { Sidebar, type SidebarNavItem } from '@/components/layouts/sidebar';
import { ThemeSwitcher } from '@/components/layouts/theme-switcher';

const adminNavItems: SidebarNavItem[] = [
  { title: 'Platform Audit', href: '/admin/audit', icon: <Shield /> },
  { title: 'Vendor Approvals', href: '/admin/vendors', icon: <Building2 />, badge: '3 Pending' },
  { title: 'Commission & Splits', href: '/admin/revenue', icon: <DollarSign /> },
  { title: 'User Governance', href: '/admin/users', icon: <Users /> },
  { title: 'Disputes & Claims', href: '/admin/disputes', icon: <Scale /> },
  { title: 'System Settings', href: '/admin/settings', icon: <Settings /> },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-surface-container-low dark:bg-background">
      {/* Admin Sidebar */}
      <Sidebar
        items={adminNavItems}
        currentPath="/admin/vendors"
        header={
          <div className="flex items-center gap-2 px-2">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="AVENZON Admin"
                width={140}
                height={36}
                className="h-8 w-auto object-contain dark:brightness-110"
              />
            </Link>
          </div>
        }
      />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Admin Header */}
        <header className="flex h-16 items-center justify-between border-b border-outline-variant/30 bg-surface-container-lowest px-6 dark:bg-background">
          <div className="flex items-center gap-2 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>System Health: 100% Operational</span>
          </div>
          <div className="flex items-center gap-3">
            <ThemeSwitcher />
            <button className="relative p-2 text-on-surface-variant hover:text-primary" aria-label="System Alerts">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-error" />
            </button>
          </div>
        </header>

        {/* Admin Viewport */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
