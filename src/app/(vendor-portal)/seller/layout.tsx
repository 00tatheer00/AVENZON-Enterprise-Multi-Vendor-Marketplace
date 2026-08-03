import * as React from 'react';
import Link from 'next/link';
import { LayoutDashboard, Package, ShoppingCart, BarChart3, Settings, Store, LogOut } from 'lucide-react';
import { Sidebar, type SidebarNavItem } from '@/components/layouts/sidebar';
import { ThemeSwitcher } from '@/components/layouts/theme-switcher';

const sellerNavItems: SidebarNavItem[] = [
  { title: 'Overview', href: '/seller/dashboard', icon: <LayoutDashboard /> },
  { title: 'Inventory & Products', href: '/seller/inventory', icon: <Package />, badge: '42' },
  { title: 'Orders & Shipping', href: '/seller/orders', icon: <ShoppingCart />, badge: '5 New' },
  { title: 'Analytics & Payouts', href: '/seller/analytics', icon: <BarChart3 /> },
  { title: 'Store Settings', href: '/seller/settings', icon: <Settings /> },
];

export default function SellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-surface-container-low dark:bg-background">
      {/* Seller Sidebar */}
      <Sidebar
        items={sellerNavItems}
        currentPath="/seller/dashboard"
        header={
          <div className="flex items-center gap-3 px-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white font-bold">
              HH
            </div>
            <div>
              <div className="text-sm font-bold text-foreground">Horology Haus</div>
              <div className="text-xs text-primary font-medium">Verified Seller • 4.9★</div>
            </div>
          </div>
        }
        footer={
          <Link href="/logout" className="flex items-center gap-3 px-3 py-2 text-sm text-error hover:bg-error/10 rounded-lg transition-colors">
            <LogOut className="h-4 w-4" />
            <span>Logout Seller</span>
          </Link>
        }
      />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Seller Bar */}
        <header className="flex h-16 items-center justify-between border-b border-outline-variant/30 bg-surface-container-lowest px-6 dark:bg-background">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Store className="h-4 w-4 text-primary" />
            <span>Merchant Control Panel</span>
          </div>
          <div className="flex items-center gap-3">
            <ThemeSwitcher />
            <Link href="/" className="text-xs font-medium text-primary hover:underline">
              View Live Storefront →
            </Link>
          </div>
        </header>

        {/* Dashboard Viewport */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
