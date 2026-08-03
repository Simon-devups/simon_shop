import { useEffect, useState } from "react";
import { Flame, ArrowLeft } from "lucide-react";
import { amazingProducts, type Product } from "../../data/store";
import { ProductCard } from "@/features/Client/product/components/ProductCard";

type Props = {
  onAdd: (p: Product) => void;
  onSelect?: (p: Product) => void;
};

function useCountdown(hours = 8) {
  const [left, setLeft] = useState(hours * 3600);
  useEffect(() => {
    const t = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : hours * 3600)), 1000);
    return () => clearInterval(t);
  }, [hours]);
  const h = Math.floor(left / 3600);
  const m = Math.floor((left % 3600) / 60);
  const s = left % 60;
  return { h, m, s };
}

export default function AmazingOffers({ onAdd, onSelect }: Props) {
  const { h, m, s } = useCountdown(9);

  return (
    <section id="amazing" className="mx-auto max-w-[1440px] px-4 py-8 md:px-6 md:py-12">
      <div className="amazing-strip overflow-hidden rounded-[28px] p-5 shadow-[0_20px_50px_rgba(44,57,71,0.18)] md:p-8">
        {/* Header */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#C2A56D] text-[#2C3947] shadow-lg">
              <Flame size={22} fill="#2C3947" />
            </div>
            <div>
              <h2 className="text-[22px] font-black tracking-tight text-white md:text-[26px]">
                پیشنهادهای شگفت‌انگیز
              </h2>
              <p className="text-[12.5px] text-white/65">
                تخفیف‌های محدود — تا اتمام موجودی
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[12px] font-semibold text-white/70">پایان در:</span>
              <div className="flex items-center gap-1.5" dir="ltr">
                <div className="countdown-box num">{s.toString().padStart(2, "0")}</div>
                <span className="font-bold text-white/50">:</span>
                <div className="countdown-box num">{m.toString().padStart(2, "0")}</div>
                <span className="font-bold text-white/50">:</span>
                <div className="countdown-box num">{h.toString().padStart(2, "0")}</div>
              </div>
            </div>
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-xl bg-white/10 px-4 py-2.5 text-[13px] font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              همه شگفت‌انگیزها
              <ArrowLeft size={15} />
            </button>
          </div>
        </div>

        {/* Product cards grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {amazingProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              variant="amazing"
              onAdd={onAdd}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
