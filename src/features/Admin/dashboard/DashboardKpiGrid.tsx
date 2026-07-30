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
import KpiCard from "@/components/ui/KpiCard";
import type { Kpi, SparkPoint } from "@/constants/types";

const kpis: Kpi[] = [
  { label: "فروش امروز", value: "۳۲,۵۰۰,۰۰۰", sub: "تومان", trend: 12.4, up: true, icon: DollarSign, color: "blue" },
  { label: "درآمد این ماه", value: "۸۴۲,۱۸۰,۰۰۰", sub: "تومان", trend: 8.2, up: true, icon: TrendingUp, color: "green" },
  { label: "سفارش‌های جدید", value: "۱۲۸", sub: "سفارش", trend: 5.7, up: true, icon: ShoppingBag, color: "purple" },
  { label: "کاربران جدید", value: "۳۴۲", sub: "کاربر", trend: 2.1, up: false, icon: Users, color: "pink" },
  { label: "محصولات فعال", value: "۱,۲۴۸", sub: "محصول", trend: 0.4, up: true, icon: Package, color: "orange" },
  { label: "موجودی انبار", value: "۹۲٪", sub: "پر", trend: 1.2, up: false, icon: Activity, color: "cyan" },
];

const sparkData: SparkPoint[] = [{ v: 12 }, { v: 18 }, { v: 14 }, { v: 22 }, { v: 19 }, { v: 28 }, { v: 32 }];

const colorHex: Record<Kpi["color"], string> = {
  blue: "#3742fa",
  green: "#2ed573",
  purple: "#8a4cff",
  pink: "#ff4d8d",
  orange: "#ffa502",
  cyan: "#00b8d4",
};

export default function DashboardKpiGrid() {
  return (
    <div className="kpi-grid">
      {kpis.map((k, i) => {
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
            footer={
              <div className="kpi-meta">
                <span className={`kpi-trend ${k.up ? "up" : "down"}`}>
                  {k.up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  {k.trend}٪
                </span>
                <span className="kpi-compare">نسبت به دیروز</span>
              </div>
            }
            chart={
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={sparkData}>
                  <defs>
                    <linearGradient id={`sp${i}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={hex} stopOpacity={0.3} />
                      <stop offset="100%" stopColor={hex} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="v" stroke={hex} strokeWidth={2} fill={`url(#sp${i})`} />
                </AreaChart>
              </ResponsiveContainer>
            }
          />
        );
      })}
    </div>
  );
}
