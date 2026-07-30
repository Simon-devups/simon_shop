import { formatPrice } from "@/lib/utils";
import type { TopProduct } from "@/constants/types";

export default function TopProductsMini({ data }: { data: TopProduct[] }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">پرفروش‌ترین محصولات</h3>
      </div>
      <div className="card-body">
        {data.map((p, i) => (
          <div
            key={p.name}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "9px 0",
              borderBottom: i < data.length - 1 ? "1px solid var(--border-soft)" : "0",
              fontSize: 13,
            }}
          >
            <span>{p.name}</span>
            <strong className="num-fa">{formatPrice(p["درآمد"])}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
