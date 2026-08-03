import * as React from 'react';
import { User, ShoppingBag, Heart, MapPin, CreditCard, Bell } from 'lucide-react';
import { Sidebar, type SidebarNavItem } from '@/components/layouts/sidebar';
import { Header } from '@/components/layouts/header';
import { Footer } from '@/components/layouts/footer';

const customerNavItems: SidebarNavItem[] = [
  { title: 'My Profile', href: '/account/profile', icon: <User /> },
  { title: 'Order History', href: '/account/orders', icon: <ShoppingBag />, badge: '2 Active' },
  { title: 'Saved Wishlist', href: '/account/wishlist', icon: <Heart /> },
  { title: 'Saved Addresses', href: '/account/addresses', icon: <MapPin /> },
  { title: 'Payment Methods', href: '/account/payments', icon: <CreditCard /> },
  { title: 'Notifications', href: '/account/notifications', icon: <Bell /> },
];

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <div className="mx-auto flex w-full max-w-[1280px] flex-1 gap-8 px-6 py-8">
        <Sidebar
          items={customerNavItems}
          currentPath="/account/profile"
          className="hidden md:flex rounded-xl border border-outline-variant/30 shadow-sm"
        />
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
