import type { LucideIcon } from "lucide-react";

export interface VerticalTabItem {
  id: string;
  label: string;
  icon: LucideIcon;
  badge?: string;
}

interface VerticalTabsProps {
  items: VerticalTabItem[];
  active: string;
  onChange: (id: string) => void;
  heading?: string;
}

export default function VerticalTabs({ items, active, onChange, heading }: VerticalTabsProps) {
  return (
    <div className="card" style={{ padding: 14, height: "fit-content", position: "sticky", top: 92 }}>
      {heading && (
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: "var(--muted)",
            textTransform: "uppercase",
            letterSpacing: ".06em",
            padding: "8px 12px",
          }}
        >
          {heading}
        </div>
      )}
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.id;
        return (
          <div
            key={item.id}
            className={`nav-item ${isActive ? "active" : ""}`}
            onClick={() => onChange(item.id)}
            style={{ marginBottom: 2, cursor: "pointer" }}
          >
            <Icon size={16} className="nav-icon" />
            <span className="nav-label">{item.label}</span>
            {item.badge && (
              <span className="nav-badge" style={{ background: "rgba(255,255,255,.2)", color: "#fff" }}>
                {item.badge}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
