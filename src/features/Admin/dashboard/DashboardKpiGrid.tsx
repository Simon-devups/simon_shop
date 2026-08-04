"use client";

import {
  TrendingUp,
  TrendingDown,
  Users,
  ShoppingBag,
  DollarSign,
  Package,
  Activity,
  MoreHorizontal,
} from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import KpiCard from "@/components/admin/ui/KpiCard";
import type { Kpi, SparkPoint } from "@/constants/types";
import type { DashboardKpis } from "@/lib/Admin/orders/dashboard";

const sparkData: SparkPoint[] = [{ v: 12 }, { v: 18 }, { v: 14 }, { v: 22 }, { v: 19 }, { v: 28 }, { v: 32 }];

const colorHex: Record<Kpi["color"], string> = {
  blue: "#3742fa",
  green: "#2ed573",
  purple: "#8a4cff",
  pink: "#ff4d8d",
  orange: "#ffa502",
  cyan: "#00b8d4",
};

export default function DashboardKpiGrid({ kpis }: { kpis: DashboardKpis }) {
  const items: Kpi[] = [
    {
      label: "فروش امروز",
      value: `${kpis.todaySales.toLocaleString("fa-IR")}`,
      sub: "تومان",
      icon: DollarSign,
      color: "blue",
    },
    {
      label: "درآمد این ماه",
      value: `${kpis.monthRevenue.toLocaleString("fa-IR")}`,
      sub: "تومان",
      icon: TrendingUp,
      color: "green",
    },
    {
      label: "سفارش‌های جدید امروز",
      value: kpis.newOrdersToday.toLocaleString("fa-IR"),
      sub: "سفارش",
      icon: ShoppingBag,
      color: "purple",
    },
    {
      label: "کاربران جدید امروز",
      value: kpis.newUsersToday.toLocaleString("fa-IR"),
      sub: "کاربر",
      icon: Users,
      color: "pink",
    },
    {
      label: "محصولات فعال",
      value: kpis.activeProductsCount.toLocaleString("fa-IR"),
      sub: "محصول",
      icon: Package,
      color: "orange",
    },
    {
      label: "تنوع‌های موجود",
      value: `${kpis.stockPercent}٪`,
      sub: "موجود",
      icon: Activity,
      color: "cyan",
    },
  ];

  return (
    <div className="kpi-grid">
      {items.map((k, i) => {
        const hex = colorHex[k.color];
        return (
          <KpiCard
            key={k.label}
            icon={k.icon}
            color={k.color}
            label={k.label}
            value={k.value}
            index={i + 1}
            topRight={
              <button
                className="icon-btn"
                style={{ width: 28, height: 28, border: "none", background: "transparent" }}
              >
                <MoreHorizontal size={16} />
              </button>
            }
          // chart={
          //   <ResponsiveContainer width="100%" height="100%">
          //     <AreaChart data={sparkData}>
          //       <defs>
          //         <linearGradient id={`sp${i}`} x1="0" y1="0" x2="0" y2="1">
          //           <stop offset="0%" stopColor={hex} stopOpacity={0.3} />
          //           <stop offset="100%" stopColor={hex} stopOpacity={0} />
          //         </linearGradient>
          //       </defs>
          //       <Area type="monotone" dataKey="v" stroke={hex} strokeWidth={2} fill={`url(#sp${i})`} />
          //     </AreaChart>
          //   </ResponsiveContainer>
          // }
          />
        );
      })}
    </div>
  );
}