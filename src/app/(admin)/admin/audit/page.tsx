import type { Metadata } from 'next';
import { MetricKpiCard } from '@/components/domain/dashboard/metric-kpi-card';
import { AnalyticsChart } from '@/components/domain/dashboard/analytics-chart';
import { Shield, Building2, DollarSign, Scale, CheckCircle2, Clock } from 'lucide-react';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Platform Audit & Governance',
  description: 'Enterprise overview of marketplace volume, vendor verification, and commission splits.',
};

export default function AdminAuditPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Platform Governance &amp; Audit</h1>
          <p className="text-xs text-on-surface-variant mt-0.5">Real-time marketplace system health, financial volume, and risk auditing.</p>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricKpiCard
          title="Gross Volume (GMV)"
          value="$4,285,120"
          change="+18.4%"
          isPositive
          description="vs previous 30 days"
          icon={<DollarSign className="h-5 w-5" />}
        />
        <MetricKpiCard
          title="Active Verified Vendors"
          value="512 Stores"
          change="+12 New"
          isPositive
          description="Pending audit: 3"
          icon={<Building2 className="h-5 w-5" />}
        />
        <MetricKpiCard
          title="Platform Net Revenue"
          value="$342,800"
          change="+14.2%"
          isPositive
          description="8.0% avg commission"
          icon={<Shield className="h-5 w-5" />}
        />
        <MetricKpiCard
          title="Open Dispute Tickets"
          value="2 Tickets"
          change="-50%"
          isPositive
          description="Risk score: Low"
          icon={<Scale className="h-5 w-5" />}
        />
      </div>

      {/* Analytics Chart */}
      <AnalyticsChart
        title="Marketplace Revenue & Volume Growth"
        subtitle="Monthly GMV breakdown across all 42 curated product categories"
      />

      {/* Audit Log Table */}
      <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-sm dark:bg-background space-y-4">
        <h3 className="text-base font-bold text-foreground border-b border-outline-variant/30 pb-3">Recent Security &amp; Compliance Audit Logs</h3>

        <div className="space-y-3">
          {[
            { action: 'Vendor Business Verification Approved', store: 'Horology Haus', status: 'Success', time: '10 mins ago' },
            { action: 'Escrow Payout Released ($14,500)', store: 'NexusTech', status: 'Success', time: '42 mins ago' },
            { action: 'Automated Fraud Audit Scan Completed', store: 'Platform Wide', status: '0 Flags', time: '2 hours ago' },
          ].map((log, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-outline-variant/20 text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span className="font-semibold text-foreground">{log.action}</span>
                <span className="text-on-surface-variant">• {log.store}</span>
              </div>
              <span className="text-outline flex items-center gap-1"><Clock className="h-3 w-3" /> {log.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
