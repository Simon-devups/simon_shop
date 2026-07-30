"use client";

import { MoreHorizontal } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { tooltipStyle } from "@/lib/chart-config";
import type { CategoryDatum } from "@/constants/types";

export default function CategoryPieChart({ data }: { data: CategoryDatum[] }) {
  return (
    <div className="card chart-card fade-up">
      <div className="chart-head">
        <div>
          <h3>فروش بر اساس دسته‌بندی</h3>
          <p>سهم هر دسته از کل فروش ماه</p>
        </div>
        <button className="icon-btn" style={{ width: 32, height: 32, border: "none" }}>
          <MoreHorizontal size={16} />
        </button>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie data={data} dataKey="value" innerRadius={60} outerRadius={92} paddingAngle={3} stroke="none">
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip contentStyle={tooltipStyle} />
        </PieChart>
      </ResponsiveContainer>
      <div className="chart-legend" style={{ justifyContent: "center", marginTop: 8 }}>
        {data.map((c) => (
          <div key={c.name} className="li">
            <span className="swatch" style={{ background: c.color }} />
            <span style={{ fontSize: 12 }}>{c.name}</span>
            <strong className="num-fa" style={{ fontSize: 12, color: "var(--text)" }}>
              {c.value}٪
            </strong>
          </div>
        ))}
      </div>
    </div>
  );
}
