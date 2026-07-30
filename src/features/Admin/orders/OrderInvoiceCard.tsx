import { formatPrice } from "@/lib/utils";
import type { RecentOrder } from "@/constants/types";

const sampleItems = [
  { name: "هدفون بی‌سیم سونی WH-1000XM5", qty: 1, price: 18500000 },
  { name: "کاور محافظ", qty: 2, price: 350000 },
];

export default function OrderInvoiceCard({ order }: { order: RecentOrder }) {
  const shipping = 45000;
  const itemsTotal = sampleItems.reduce((s, it) => s + it.qty * it.price, 0);

  return (
    <div className="card">
      <div className="card-header">
        <div>
          <h3 className="card-title">اقلام سفارش</h3>
          <div className="card-subtitle num-fa">شماره سفارش: {order.id}</div>
        </div>
      </div>
      <div className="card-body">
        {sampleItems.map((it, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 0",
              borderBottom: "1px solid var(--border-soft)",
              fontSize: 13,
            }}
          >
            <span>{it.name}</span>
            <span className="num-fa" style={{ color: "var(--muted)" }}>
              {it.qty} × {formatPrice(it.price)}
            </span>
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", fontSize: 13 }}>
          <span style={{ color: "var(--muted)" }}>هزینه ارسال</span>
          <span className="num-fa">{formatPrice(shipping)} تومان</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 12,
            borderTop: "1px solid var(--border)",
            fontSize: 14,
            fontWeight: 700,
          }}
        >
          <span>مبلغ نهایی</span>
          <span className="num-fa">{formatPrice(itemsTotal + shipping)} تومان</span>
        </div>
      </div>
    </div>
  );
}
