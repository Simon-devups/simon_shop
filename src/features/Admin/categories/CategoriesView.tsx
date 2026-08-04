import { Plus } from "lucide-react";
import PageHeader from "@/components/admin/ui/PageHeader";
import CategoriesKpiRow from "./CategoriesKpiRow";
import CategoriesTable from "./CategoriesTable";
import type { Category } from "@/constants/types";

export default function CategoriesView({ categories }: { categories: Category[] }) {
  return (
    <div>
      <PageHeader
        title="دسته‌بندی‌ها"
        subtitle="مدیریت دسته‌بندی‌ها و زیردسته‌های فروشگاه"
        actions={
          <button className="btn btn-primary">
            <Plus size={16} /> افزودن دسته‌بندی
          </button>
        }
      />
      <div style={{ marginBottom: 18 }}>
        <CategoriesKpiRow categories={categories} />
      </div>
      <div className="table-wrap fade-up">
        <CategoriesTable categories={categories} />
      </div>
    </div>
  );
}
