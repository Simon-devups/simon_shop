"use client";

import ProgressBar from "@/components/ui/ProgressBar";
import type { TrafficSource } from "@/constants/types";

export default function TrafficSourcesChart({ data }: { data: TrafficSource[] }) {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <h3 className="card-title">منابع ورودی</h3>
          <div className="card-subtitle">از کجا کاربران فروشگاه شما را پیدا می‌کنند</div>
        </div>
      </div>
      <div className="card-body">
        {data.map((s) => (
          <div key={s.name} style={{ marginBottom: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 12.5 }}>
              <span>{s.name}</span>
              <strong className="num-fa">{s.value}٪</strong>
            </div>
            <ProgressBar percent={s.value} color={s.color} />
          </div>
        ))}
      </div>
    </div>
  );
}
