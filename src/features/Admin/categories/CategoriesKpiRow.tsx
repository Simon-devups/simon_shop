import { FolderTree, CheckCircle2, XCircle, Package } from "lucide-react";
import KpiCard from "@/components/ui/KpiCard";
import { formatPrice } from "@/lib/utils";
import type { Category } from "@/constants/types";

export default function CategoriesKpiRow({ categories }: { categories: Category[] }) {
  const active = categories.filter((c) => c.active).length;
  const inactive = categories.length - active;
  const totalProducts = categories.reduce((sum, c) => sum + c.products, 0);

  return (
    <div className="kpi-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
      <KpiCard index={1} icon={FolderTree} color="blue" label="کل دسته‌بندی‌ها" value={formatPrice(categories.length)} />
      <KpiCard index={2} icon={CheckCircle2} color="green" label="فعال" value={formatPrice(active)} />
      <KpiCard index={3} icon={XCircle} color="orange" label="غیرفعال" value={formatPrice(inactive)} />
      <KpiCard index={4} icon={Package} color="purple" label="مجموع محصولات" value={formatPrice(totalProducts)} />
    </div>
  );
}
