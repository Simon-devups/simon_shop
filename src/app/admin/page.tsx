import DashboardView from "@/features/Admin/dashboard/DashboardView";
import { getCategorySales, getDashboardKpis, getMonthlySales, getRecentOrders, getTopProducts, getWeeklySales } from "@/lib/Admin/orders/dashboard";

export default async function DashboardPage() {
  const dashboardKpis = await getDashboardKpis()
  const salesData = await getWeeklySales()
  const categoryData = await getCategorySales()
  const topProducts = await getTopProducts()
  const recentOrders = await getRecentOrders()
  const monthlyData = await getMonthlySales()
  return (
    <DashboardView
      salesData={salesData}
      monthlyData={monthlyData}
      categoryData={categoryData}
      topProducts={topProducts}
      recentOrders={recentOrders}
      kpis={dashboardKpis}
    />
  );
}
