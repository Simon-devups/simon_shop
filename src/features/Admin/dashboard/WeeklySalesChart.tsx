"use client";

import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import Segmented from "@/components/ui/Segmented";
import { tooltipStyle, axisTickStyle } from "@/lib/chart-config";
import type { SalesDataPoint } from "@/constants/types";

export default function WeeklySalesChart({ data }: { data: SalesDataPoint[] }) {
  return (
    <div className="card chart-card fade-up">
      <div className="chart-head">
        <div>
          <h3>نمودار فروش هفتگی</h3>
          <p>مقایسه فروش و تعداد سفارش‌ها در هفته جاری</p>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div className="chart-legend">
            <div className="li">
              <span className="swatch" style={{ background: "#3742fa" }} /> فروش
            </div>
            <div className="li">
              <span className="swatch" style={{ background: "#2ed573" }} /> سفارش
            </div>
          </div>
          <Segmented options={["روز", "هفته", "ماه"]} defaultValue="هفته" />
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="sa1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3742fa" stopOpacity={0.32} />
              <stop offset="100%" stopColor="#3742fa" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="sa2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2ed573" stopOpacity={0.28} />
              <stop offset="100%" stopColor="#2ed573" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#ecedef" vertical={false} />
          <XAxis dataKey="name" tick={axisTickStyle} axisLine={false} tickLine={false} />
          <YAxis
            tick={axisTickStyle}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `${(v / 1000000).toFixed(0)}م`}
          />
          <Tooltip contentStyle={tooltipStyle} />
          <Area type="monotone" dataKey="فروش" stroke="#3742fa" strokeWidth={2.5} fill="url(#sa1)" />
          <Area type="monotone" dataKey="سفارش" stroke="#2ed573" strokeWidth={2.5} fill="url(#sa2)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
