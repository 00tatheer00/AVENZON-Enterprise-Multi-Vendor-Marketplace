import * as React from 'react';
import { ShieldCheck, Truck, Shield, Headphones } from 'lucide-react';

export function TrustFeaturesBar() {
  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: '500+ Verified Vendors',
      description: 'Vetted global suppliers & creators',
    },
    {
      icon: <Truck className="h-6 w-6 text-primary" />,
      title: 'Global Express Delivery',
      description: 'Fully tracked express shipping',
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: '100% Buyer Protection',
      description: 'Encrypted payment & money back',
    },
    {
      icon: <Headphones className="h-6 w-6 text-primary" />,
      title: '24/7 Priority Support',
      description: 'Dedicated concierge support',
    },
  ];

  return (
    <section className="w-full border-y border-outline-variant/30 bg-surface-container-low/60 py-10">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                {feature.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">{feature.title}</h4>
                <p className="text-xs text-on-surface-variant mt-0.5">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
