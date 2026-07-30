import PageHeader from "@/components/ui/PageHeader";
import AnalyticsKpiRow from "./AnalyticsKpiRow";
import RevenueTrendChart from "./RevenueTrendChart";
import VisitorsChart from "./VisitorsChart";
import DeviceBreakdownChart from "./DeviceBreakdownChart";
import TrafficSourcesChart from "./TrafficSourcesChart";
import TopProductsMini from "./TopProductsMini";
import type { MonthlyDataPoint, VisitorDataPoint, DeviceDatum, TrafficSource, TopProduct } from "@/constants/types";

interface AnalyticsViewProps {
  monthlyData: MonthlyDataPoint[];
  visitorsData: VisitorDataPoint[];
  deviceData: DeviceDatum[];
  trafficSources: TrafficSource[];
  topProducts: TopProduct[];
}

export default function AnalyticsView({
  monthlyData,
  visitorsData,
  deviceData,
  trafficSources,
  topProducts,
}: AnalyticsViewProps) {
  return (
    <div>
      <PageHeader title="گزارشات و تحلیل" subtitle="تحلیل عملکرد فروشگاه در بازه‌های زمانی مختلف" />

      <div style={{ marginBottom: 18 }}>
        <AnalyticsKpiRow />
      </div>

      <div style={{ marginBottom: 18 }}>
        <RevenueTrendChart data={monthlyData} />
      </div>

      <div className="grid-2" style={{ marginBottom: 18 }}>
        <VisitorsChart data={visitorsData} />
        <DeviceBreakdownChart data={deviceData} />
      </div>

      <div className="grid-2">
        <TrafficSourcesChart data={trafficSources} />
        <TopProductsMini data={topProducts} />
      </div>
    </div>
  );
}
