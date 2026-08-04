import { Download } from "lucide-react";
import PageHeader from "@/components/admin/ui/PageHeader";
import PaymentsKpiRow from "./PaymentsKpiRow";
import PaymentsTable from "./PaymentsTable";
import type { Payment } from "@/constants/types";

export default function PaymentsView({ payments }: { payments: Payment[] }) {
  return (
    <div>
      <PageHeader
        title="پرداخت‌ها"
        subtitle="تراکنش‌های مالی و وضعیت پرداخت سفارش‌ها"
        actions={
          <button className="btn btn-secondary">
            <Download size={15} /> خروجی گزارش
          </button>
        }
      />
      <div style={{ marginBottom: 18 }}>
        <PaymentsKpiRow payments={payments} />
      </div>
      <div className="table-wrap fade-up">
        <PaymentsTable payments={payments} />
      </div>
    </div>
  );
}
