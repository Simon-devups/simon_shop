import { Ticket, CheckCircle2, XCircle, Percent } from "lucide-react";
import KpiCard from "@/components/ui/KpiCard";
import { formatPrice } from "@/lib/utils";
import type { Discount } from "@/constants/types";

export default function DiscountsKpiRow({ discounts }: { discounts: Discount[] }) {
  const active = discounts.filter((d) => d.status === "active").length;
  const expired = discounts.length - active;
  const totalUses = discounts.reduce((s, d) => s + d.uses, 0);

  return (
    <div className="kpi-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
      <KpiCard index={1} icon={Ticket} color="blue" label="کل کدها" value={formatPrice(discounts.length)} />
      <KpiCard index={2} icon={CheckCircle2} color="green" label="فعال" value={formatPrice(active)} />
      <KpiCard index={3} icon={XCircle} color="pink" label="منقضی شده" value={formatPrice(expired)} />
      <KpiCard index={4} icon={Percent} color="purple" label="مجموع استفاده" value={formatPrice(totalUses)} />
    </div>
  );
}
