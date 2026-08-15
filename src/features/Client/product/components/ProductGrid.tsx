import { ArrowLeft } from "lucide-react";
import type { Product } from "../../data/store";
import { ProductCard } from "@/features/Client/product/components/ProductCard";

type Props = {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  products: Product[];
  onAdd: (p: Product) => void;
  onSelect?: (p: Product) => void;
  onViewAll?: () => void;
};

export default function ProductGrid({
  id,
  eyebrow,
  title,
  subtitle,
  products,
  onAdd,
  onSelect,
  onViewAll,
}: Props) {
  return (
    <section id={id} className="mx-auto max-w-[1600px] px-4 py-8 md:px-6 md:py-10">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="mb-1 text-[12px] font-bold text-[#1D4ED8]">{eyebrow}</div>
          <h2 className="text-[22px] font-extrabold tracking-tight text-[#111827] md:text-[26px]">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-1 text-[13px] text-[#6B7280]">{subtitle}</p>
          ) : null}
        </div>

        <button
          type="button"
          onClick={onViewAll}
          className="flex items-center gap-1.5 rounded-[12px] border border-[#E5E7EB] bg-white px-4 py-2.5 text-[13px] font-semibold text-[#111827] transition-colors duration-150 ease-out hover:border-[#1D4ED8] hover:text-[#1D4ED8]"
        >
          مشاهده همه
          <ArrowLeft size={16} strokeWidth={2} />
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}