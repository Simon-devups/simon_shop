import Greeting from "./Greeting";
import DashboardKpiGrid from "./DashboardKpiGrid";
import WeeklySalesChart from "./WeeklySalesChart";
import CategoryPieChart from "./CategoryPieChart";
import MonthlyBarChart from "./MonthlyBarChart";
import TopProductsCard from "./TopProductsCard";
import RecentOrdersTable from "./RecentOrdersTable";
import ActivityTimeline from "./ActivityTimeline";
import type { SalesDataPoint, MonthlyDataPoint, CategoryDatum, TopProduct, RecentOrder } from "@/constants/types";

interface DashboardViewProps {
  salesData: SalesDataPoint[];
  monthlyData: MonthlyDataPoint[];
  categoryData: CategoryDatum[];
  topProducts: TopProduct[];
  recentOrders: RecentOrder[];
}

export default function DashboardView({
  salesData,
  monthlyData,
  categoryData,
  topProducts,
  recentOrders,
}: DashboardViewProps) {
  return (
    <div>
      <Greeting />
      <DashboardKpiGrid />

      <div className="grid-2 fade-up d3">
        <WeeklySalesChart data={salesData} />
        <CategoryPieChart data={categoryData} />
      </div>

      <div className="grid-2 fade-up d4" style={{ marginTop: 18 }}>
        <MonthlyBarChart data={monthlyData} />
        <TopProductsCard data={topProducts} />
      </div>

      <div className="grid-2 fade-up d5" style={{ marginTop: 18 }}>
        <RecentOrdersTable orders={recentOrders} />
        <ActivityTimeline />
      </div>
    </div>
  );
}
