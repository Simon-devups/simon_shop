import AnalyticsView from "@/features/Admin/analytics/AnalyticsView";
import { monthlyData, visitorsData, deviceData, trafficSources, topProducts } from "@/lib/mock-data";

export default function AnalyticsPage() {
  return (
    <AnalyticsView
      monthlyData={monthlyData}
      visitorsData={visitorsData}
      deviceData={deviceData}
      trafficSources={trafficSources}
      topProducts={topProducts}
    />
  );
}
