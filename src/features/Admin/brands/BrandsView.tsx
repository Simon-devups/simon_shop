import { Plus } from "lucide-react";
import PageHeader from "@/components/admin/ui/PageHeader";
import BrandCard from "./BrandCard";
import type { Brand } from "@/constants/types";

export default function BrandsView({ brands }: { brands: Brand[] }) {
  return (
    <div>
      <PageHeader
        title="برندها"
        subtitle="مدیریت برندهای فروشگاه و تأمین‌کنندگان"
        actions={
          <button className="btn btn-primary">
            <Plus size={16} /> افزودن برند
          </button>
        }
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
        {brands.map((b) => (
          <BrandCard key={b.name} brand={b} />
        ))}
      </div>
    </div>
  );
}
