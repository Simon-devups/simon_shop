import { ShoppingCart, Clock, CheckCircle2, XCircle } from "lucide-react";
import KpiCard from "@/components/ui/KpiCard";
import { formatPrice } from "@/lib/utils";
import type { RecentOrder } from "@/constants/types";

export default function OrdersKpiRow({ orders }: { orders: RecentOrder[] }) {
  const processing = orders.filter((o) => o.status === "info" || o.status === "warning").length;
  const done = orders.filter((o) => o.status === "success").length;
  const cancelled = orders.filter((o) => o.status === "danger").length;

  return (
    <div className="kpi-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
      <KpiCard index={1} icon={ShoppingCart} color="blue" label="کل سفارش‌ها" value={formatPrice(orders.length)} />
      <KpiCard index={2} icon={Clock} color="orange" label="در حال پردازش" value={formatPrice(processing)} />
      <KpiCard index={3} icon={CheckCircle2} color="green" label="تکمیل شده" value={formatPrice(done)} />
      <KpiCard index={4} icon={XCircle} color="pink" label="لغو شده" value={formatPrice(cancelled)} />
    </div>
  );
}
