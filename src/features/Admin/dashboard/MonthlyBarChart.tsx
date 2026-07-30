"use client";

import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { tooltipStyle, axisTickStyle } from "@/lib/chart-config";
import type { MonthlyDataPoint } from "@/constants/types";

export default function MonthlyBarChart({ data }: { data: MonthlyDataPoint[] }) {
  return (
    <div className="card chart-card fade-up d4">
      <div className="chart-head">
        <div>
          <h3>مقایسه ماهانه فروش و بازدید</h3>
          <p>روند فروش و بازدیدکنندگان در ۹ ماه گذشته</p>
        </div>
        <div className="chart-legend">
          <div className="li">
            <span className="swatch" style={{ background: "#3742fa" }} /> فروش (میلیون)
          </div>
          <div className="li">
            <span className="swatch" style={{ background: "#ffa502" }} /> بازدید (هزار)
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }} barCategoryGap="22%">
          <CartesianGrid strokeDasharray="3 3" stroke="#ecedef" vertical={false} />
          <XAxis dataKey="name" tick={axisTickStyle} axisLine={false} tickLine={false} />
          <YAxis tick={axisTickStyle} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "#f5f6fa" }} />
          <Bar dataKey="فروش" fill="#3742fa" radius={[6, 6, 0, 0]} maxBarSize={28} />
          <Bar dataKey="بازدید" fill="#ffa502" radius={[6, 6, 0, 0]} maxBarSize={28} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
