import { ArrowLeft } from "lucide-react";
import type { Product } from "../../data/store";
import ProductCard from "./ProductCard";

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
    <section id={id} className="mx-auto max-w-[1440px] px-4 py-8 md:px-6 md:py-10">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="mb-1 text-[12px] font-bold text-[#547A95]">{eyebrow}</div>
          <h2 className="text-[22px] font-extrabold tracking-tight text-[#2C3947] md:text-[26px]">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-1 text-[13px] text-[#6b7a88]">{subtitle}</p>
          ) : null}
        </div>
        <button
          type="button"
          onClick={onViewAll}
          className="flex items-center gap-1.5 rounded-xl border border-[#d8dee6] bg-white px-4 py-2.5 text-[13px] font-bold text-[#2C3947] shadow-sm transition hover:border-[#547A95] hover:text-[#547A95]"
        >
          مشاهده همه
          <ArrowLeft size={15} />
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAdd={onAdd}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  );
}
