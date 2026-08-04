import { Copy, Edit3, Trash2 } from "lucide-react";
import Badge from "@/components/admin/ui/Badge";
import ProgressBar from "@/components/admin/ui/ProgressBar";
import { formatPrice } from "@/lib/utils";
import type { Discount } from "@/constants/types";

export default function DiscountCard({ discount }: { discount: Discount }) {
  const usagePercent = discount.limit ? (discount.uses / discount.limit) * 100 : 0;

  return (
    <div className="card fade-up" style={{ padding: 20 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <span className="cell-strong num-fa" style={{ fontSize: 15, letterSpacing: "0.03em" }} dir="ltr">
          {discount.code}
        </span>
        <Badge variant={discount.status === "active" ? "success" : "danger"} pulse={discount.status === "active"}>
          {discount.status === "active" ? "فعال" : "منقضی"}
        </Badge>
      </div>

      <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }} className="num-fa">
        {discount.type === "درصدی" && `${discount.value}٪`}
        {discount.type === "مبلغ ثابت" && `${formatPrice(discount.value)} تومان`}
        {discount.type === "ارسال رایگان" && "ارسال رایگان"}
      </div>
      <div style={{ fontSize: 12.5, color: "var(--muted)", marginBottom: 16 }}>{discount.type}</div>

      <div style={{ marginBottom: 8 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 12,
            color: "var(--muted)",
            marginBottom: 6,
          }}
        >
          <span className="num-fa">
            {formatPrice(discount.uses)} از {discount.limit ? formatPrice(discount.limit) : "نامحدود"} استفاده
          </span>
          {discount.limit && <span className="num-fa">{usagePercent.toFixed(0)}٪</span>}
        </div>
        {discount.limit && <ProgressBar percent={usagePercent} />}
      </div>

      <div
        style={{
          fontSize: 12,
          color: "var(--muted)",
          paddingTop: 12,
          borderTop: "1px solid var(--border-soft)",
          marginBottom: 12,
        }}
      >
        انقضا: <span className="num-fa">{discount.expires}</span>
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <button className="btn btn-secondary btn-sm" style={{ flex: 1 }}>
          <Copy size={13} /> کپی کد
        </button>
        <button className="icon-btn" title="ویرایش">
          <Edit3 size={14} />
        </button>
        <button className="icon-btn" title="حذف" style={{ color: "var(--danger)" }}>
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  );
}
