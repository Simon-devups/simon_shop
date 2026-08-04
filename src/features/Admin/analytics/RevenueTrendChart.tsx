"use client";

import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import Segmented from "@/components/admin/ui/Segmented";
import { tooltipStyle, axisTickStyle } from "@/lib/chart-config";
import type { MonthlyDataPoint } from "@/constants/types";

export default function RevenueTrendChart({ data }: { data: MonthlyDataPoint[] }) {
  return (
    <div className="card chart-card fade-up">
      <div className="chart-head">
        <div>
          <h3>روند درآمد و بازدید</h3>
          <p>مقایسه درآمد و بازدید در ۹ ماه گذشته</p>
        </div>
        <Segmented options={["۳ ماه", "۶ ماه", "۱ سال"]} defaultValue="۱ سال" />
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ecedef" vertical={false} />
          <XAxis dataKey="name" tick={axisTickStyle} axisLine={false} tickLine={false} />
          <YAxis tick={axisTickStyle} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={tooltipStyle} />
          <Line type="monotone" dataKey="فروش" stroke="#3742fa" strokeWidth={2.5} dot={false} />
          <Line type="monotone" dataKey="بازدید" stroke="#ffa502" strokeWidth={2.5} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
