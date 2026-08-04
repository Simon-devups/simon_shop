import { Edit3, Trash2, Package, TrendingUp } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import type { Brand } from "@/constants/types";

export default function BrandCard({ brand }: { brand: Brand }) {
  return (
    <div className="card fade-up" style={{ padding: 20 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 14,
            background: `#1111`,
            display: "grid",
            placeItems: "center",
            fontSize: 26,
          }}
        >
          {brand.logo}
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <button className="icon-btn" title="ویرایش">
            <Edit3 size={14} />
          </button>
          <button className="icon-btn" title="حذف" style={{ color: "var(--danger)" }}>
            <Trash2 size={14} />
          </button>
        </div>
      </div>
      <h4 style={{ fontSize: 15, fontWeight: 700, marginBottom: 2 }}>{brand.name}</h4>
      {/* <p style={{ fontSize: 12.5, color: "var(--muted)", marginBottom: 14 }}>{brand.country}</p> */}
      <div style={{ display: "flex", gap: 16, paddingTop: 14, borderTop: "1px solid var(--border-soft)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <Package size={14} color="var(--muted)" />
          <span style={{ fontSize: 12.5 }} className="num-fa">
            {formatPrice(brand.products)} محصول
          </span>
        </div>
        {/* <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <TrendingUp size={14} color="var(--success)" />
          <span style={{ fontSize: 12.5 }} className="num-fa">
            {(brand.revenue / 1_000_000_000).toFixed(1)} میلیارد
          </span>
        </div> */}
      </div>
    </div>
  );
}
