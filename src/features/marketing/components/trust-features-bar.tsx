import * as React from 'react';
import { ShieldCheck, Truck, Shield, Headphones, Users, Star } from 'lucide-react';

export function TrustFeaturesBar() {
  return (
    <section className="w-full bg-surface-container-lowest border-y border-outline-variant/15 dark:bg-surface-container-low/30">
      <div className="marketplace-container py-4">
        <div className="flex items-center justify-between gap-4 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-6 md:gap-8 flex-1 justify-between">
            {[
              { icon: <ShieldCheck className="h-5 w-5 text-primary" />, title: '500+ Verified Vendors', desc: 'Audited global suppliers' },
              { icon: <Truck className="h-5 w-5 text-primary" />, title: 'Global Express Delivery', desc: 'Fast tracked shipping' },
              { icon: <Shield className="h-5 w-5 text-primary" />, title: '100% Buyer Protection', desc: 'Secure payment & refunds' },
              { icon: <Headphones className="h-5 w-5 text-primary" />, title: '24/7 Priority Support', desc: 'Dedicated team' },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-2.5 whitespace-nowrap">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/8">
                  {f.icon}
                </div>
                <div className="hidden sm:block">
                  <h4 className="text-xs font-bold text-foreground">{f.title}</h4>
                  <p className="text-[10px] text-on-surface-variant">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-2 pl-6 border-l border-outline-variant/20">
            <div className="flex items-center gap-0.5 text-amber-500">
              <Star className="h-3.5 w-3.5 fill-amber-500" />
              <span className="text-xs font-bold">4.9</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-on-surface-variant">
              <Users className="h-3.5 w-3.5" />
              <span className="font-medium">Trusted by 2M+ buyers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
