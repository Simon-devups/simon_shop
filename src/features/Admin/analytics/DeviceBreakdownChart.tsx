"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { tooltipStyle } from "@/lib/chart-config";
import type { DeviceDatum } from "@/constants/types";

export default function DeviceBreakdownChart({ data }: { data: DeviceDatum[] }) {
  return (
    <div className="card chart-card fade-up">
      <div className="chart-head">
        <div>
          <h3>دستگاه‌های بازدیدکنندگان</h3>
          <p>سهم هر دستگاه از بازدیدهای فروشگاه</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie data={data} dataKey="value" innerRadius={55} outerRadius={82} paddingAngle={3} stroke="none">
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip contentStyle={tooltipStyle} />
        </PieChart>
      </ResponsiveContainer>
      <div className="chart-legend" style={{ justifyContent: "center", marginTop: 8 }}>
        {data.map((d) => (
          <div key={d.name} className="li">
            <span className="swatch" style={{ background: d.color }} />
            <span style={{ fontSize: 12 }}>{d.name}</span>
            <strong className="num-fa" style={{ fontSize: 12 }}>
              {d.value}٪
            </strong>
          </div>
        ))}
      </div>
    </div>
  );
}
