import ToggleSwitch from "@/components/ui/ToggleSwitch";
import type { PaymentGateway } from "@/constants/types";

const gateways: PaymentGateway[] = [
  { name: "زرین‌پال", desc: "درگاه پرداخت آنلاین اصلی", enabled: true, icon: "💳" },
  { name: "آیدی‌پی", desc: "درگاه پرداخت جایگزین", enabled: true, icon: "🏦" },
  { name: "پرداخت در محل", desc: "امکان پرداخت نقدی هنگام تحویل", enabled: false, icon: "💵" },
];

export default function PaymentSettingsSection() {
  return (
    <div className="card fade-up">
      <div className="card-header">
        <div>
          <h3 className="card-title">درگاه‌های پرداخت</h3>
          <div className="card-subtitle">روش‌های پرداخت فعال در فروشگاه</div>
        </div>
      </div>
      <div className="card-body">
        {gateways.map((g) => (
          <div
            key={g.name}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 0",
              borderBottom: "1px solid var(--border-soft)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 12,
                  background: "var(--surface-2)",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 20,
                }}
              >
                {g.icon}
              </div>
              <div>
                <div style={{ fontSize: 13.5, fontWeight: 600 }}>{g.name}</div>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>{g.desc}</div>
              </div>
            </div>
            <ToggleSwitch defaultChecked={g.enabled} />
          </div>
        ))}
      </div>
    </div>
  );
}
