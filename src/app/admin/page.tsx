import DashboardView from "@/features/Admin/dashboard/DashboardView";
import { salesData, monthlyData, categoryData, topProducts, recentOrders } from "@/lib/mock-data";

// این تابع یک Server Component است. برای اتصال به Prisma کافیست بجای ایمپورت
// مستقیم داده‌های mock، آن‌ها را با کوئری‌های Prisma جایگزین کنید.
export default function DashboardPage() {
  return (
    <DashboardView
      salesData={salesData}
      monthlyData={monthlyData}
      categoryData={categoryData}
      topProducts={topProducts}
      recentOrders={recentOrders}
    />
  );
}
