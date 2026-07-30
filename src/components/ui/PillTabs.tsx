export interface PillTabItem {
  id: string;
  label: string;
  count: number;
}

interface PillTabsProps {
  items: PillTabItem[];
  active: string;
  onChange: (id: string) => void;
}

export default function PillTabs({ items, active, onChange }: PillTabsProps) {
  return (
    <div className="tabs">
      {items.map((t) => (
        <button key={t.id} className={`tab ${active === t.id ? "active" : ""}`} onClick={() => onChange(t.id)}>
          {t.label}
          <span
            style={{
              background: active === t.id ? "rgba(255,255,255,0.2)" : "var(--hover)",
              color: active === t.id ? "#fff" : "var(--muted)",
              padding: "2px 8px",
              borderRadius: 6,
              fontSize: 11,
            }}
            className="num-fa"
          >
            {t.count.toLocaleString("fa-IR")}
          </span>
        </button>
      ))}
    </div>
  );
}
