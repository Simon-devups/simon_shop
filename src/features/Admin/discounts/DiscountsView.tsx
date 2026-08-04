import { Plus } from "lucide-react";
import PageHeader from "@/components/admin/ui/PageHeader";
import DiscountsKpiRow from "./DiscountsKpiRow";
import DiscountCard from "./DiscountCard";
import type { Discount } from "@/constants/types";

export default function DiscountsView({ discounts }: { discounts: Discount[] }) {
  return (
    <div>
      <PageHeader
        title="کدهای تخفیف"
        subtitle="مدیریت کدهای تخفیف و کمپین‌های فروش"
        actions={
          <button className="btn btn-primary">
            <Plus size={16} /> کد تخفیف جدید
          </button>
        }
      />
      <div style={{ marginBottom: 18 }}>
        <DiscountsKpiRow discounts={discounts} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
        {discounts.map((d) => (
          <DiscountCard key={d.code} discount={d} />
        ))}
      </div>
    </div>
  );
}
