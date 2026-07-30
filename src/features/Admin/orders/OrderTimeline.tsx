import { Check } from "lucide-react";
import type { RecentOrder } from "@/constants/types";

const steps = ["ثبت سفارش", "پردازش", "ارسال", "تحویل"];

const statusStepIndex: Record<RecentOrder["status"], number> = {
  info: 1,
  warning: 2,
  success: 3,
  danger: 0,
};

export default function OrderTimeline({ order }: { order: RecentOrder }) {
  const current = statusStepIndex[order.status];

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">مراحل سفارش</h3>
      </div>
      <div className="card-body">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {steps.map((step, i) => {
            const isDone = i <= current && order.status !== "danger";
            return (
              <div key={step} style={{ textAlign: "center", flex: 1, position: "relative" }}>
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    margin: "0 auto 6px",
                    display: "grid",
                    placeItems: "center",
                    background: isDone ? "var(--success)" : "var(--surface-2)",
                    color: isDone ? "#fff" : "var(--muted)",
                    border: isDone ? "none" : "1px solid var(--border)",
                  }}
                >
                  {isDone ? <Check size={14} /> : i + 1}
                </div>
                <div style={{ fontSize: 11.5, color: isDone ? "var(--text)" : "var(--muted)" }}>{step}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
