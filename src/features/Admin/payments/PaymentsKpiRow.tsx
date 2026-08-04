import { CreditCard, CheckCircle2, Clock, XCircle } from "lucide-react";
import KpiCard from "@/components/admin/ui/KpiCard";
import { formatPrice } from "@/lib/utils";
import type { Payment } from "@/constants/types";

export default function PaymentsKpiRow({ payments }: { payments: Payment[] }) {
  const success = payments.filter((p) => p.status === "success").length;
  const pending = payments.filter((p) => p.status === "pending").length;
  const failed = payments.filter((p) => p.status === "failed").length;
  const totalAmount = payments.filter((p) => p.status === "success").reduce((s, p) => s + p.amount, 0);

  return (
    <div className="kpi-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
      <KpiCard
        index={1}
        icon={CreditCard}
        color="blue"
        label="مجموع مبالغ موفق"
        value={`${formatPrice(totalAmount)}`}
      />
      <KpiCard index={2} icon={CheckCircle2} color="green" label="موفق" value={formatPrice(success)} />
      <KpiCard index={3} icon={Clock} color="orange" label="در انتظار" value={formatPrice(pending)} />
      <KpiCard index={4} icon={XCircle} color="pink" label="ناموفق" value={formatPrice(failed)} />
    </div>
  );
}
