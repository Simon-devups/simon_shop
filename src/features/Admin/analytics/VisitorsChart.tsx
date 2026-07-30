"use client";

import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { tooltipStyle, axisTickStyle } from "@/lib/chart-config";
import type { VisitorDataPoint } from "@/constants/types";

export default function VisitorsChart({ data }: { data: VisitorDataPoint[] }) {
  return (
    <div className="card chart-card fade-up">
      <div className="chart-head">
        <div>
          <h3>روند بازدیدکنندگان</h3>
          <p>تعداد بازدیدکنندگان یکتا در ۶ هفته گذشته</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ecedef" vertical={false} />
          <XAxis dataKey="name" tick={axisTickStyle} axisLine={false} tickLine={false} />
          <YAxis tick={axisTickStyle} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "#f5f6fa" }} />
          <Bar dataKey="بازدیدکننده" fill="#3742fa" radius={[6, 6, 0, 0]} maxBarSize={36} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
