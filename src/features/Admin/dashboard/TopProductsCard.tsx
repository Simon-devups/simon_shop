import { ArrowUpLeft } from "lucide-react";
import Avatar from "@/components/admin/ui/Avatar";
import ProgressBar from "@/components/admin/ui/ProgressBar";
import { formatPrice } from "@/lib/utils";
import type { TopProduct } from "@/constants/types";

export default function TopProductsCard({ data }: { data: TopProduct[] }) {
  const max = data[0]?.["درآمد"] ?? 1;
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <h3 className="card-title">پرفروش‌ترین محصولات</h3>
          <div className="card-subtitle">بر اساس درآمد این ماه</div>
        </div>
        <button className="btn btn-ghost btn-sm">
          مشاهده همه <ArrowUpLeft size={14} style={{ transform: "rotate(180deg)" }} />
        </button>
      </div>
      <div className="card-body">
        {data.map((p, i) => {
          const pct = (p["درآمد"] / max) * 100;
          return (
            <div
              key={p.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 0",
                borderBottom: i < data.length - 1 ? "1px solid var(--border-soft)" : "0",
              }}
            >
              <Avatar gradient={p.color} style={{ fontSize: 12 }}>
                {i + 1}
              </Avatar>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{p.name}</div>
                <ProgressBar percent={pct} color={`linear-gradient(90deg, ${p.color} 0%, ${p.color}99 100%)`} />
              </div>
              <div style={{ textAlign: "left", minWidth: 90 }}>
                <div className="num-fa" style={{ fontWeight: 700, fontSize: 13 }}>
                  {formatPrice(p["درآمد"])}
                </div>
                <div style={{ fontSize: 11, color: "var(--muted)" }}>{formatPrice(p["فروش"])} عدد</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
