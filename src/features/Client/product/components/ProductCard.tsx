"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Heart, Plus, Star } from "lucide-react";
import type { Product } from "@/lib/client/api";
import { useCart } from "@/context/CartContext";

type Props = {
  product: Product;
  /** اگه پاس داده بشه، به‌جای افزودن مستقیم به CartContext صدا زده می‌شه. */
  onAdd?: (product: Product) => void;
  onWishlist?: (product: Product) => void;
  /** برای سازگاری با فراخوانی‌های قدیمی؛ فعلاً بدون اثر بصری خاص. */
  variant?: string;
};

export function ProductCard({ product, onAdd, onWishlist }: Props) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAdd) {
      onAdd(product);
    } else {
      add(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-[16px] border border-[#E5E7EB] bg-white transition-shadow duration-200 ease-out hover:shadow-[0_18px_60px_rgba(0,0,0,0.12)]"
      style={{ boxShadow: "0 8px 30px rgba(0,0,0,.06)" }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F7FA]">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />

        {product.oldPrice && product.oldPrice > product.price ? (
          <span className="absolute right-4 top-4 rounded-[8px] bg-[#1D4ED8] px-2.5 py-1 text-[11px] font-bold text-white">
            پرفروش
          </span>
        ) : null}

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onWishlist?.(product);
          }}
          className="absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-[12px] border border-[#E5E7EB] bg-white text-[#374151] transition-colors duration-150 ease-out hover:text-[#1D4ED8]"
          aria-label="افزودن به علاقه‌مندی‌ها"
        >
          <Heart size={18} strokeWidth={2} />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-[20px]">
        <div className="mb-2 text-[12px] font-medium text-[#6B7280]">
          {product.category.name}
        </div>

        <h3 className="mb-3 line-clamp-2 min-h-[2.6em] text-[14px] font-semibold leading-relaxed text-[#111827] transition-colors duration-150 ease-out group-hover:text-[#1D4ED8]">
          {product.name}
        </h3>

        <div className="mb-4 flex items-center gap-1.5">
          <Star size={16} strokeWidth={2} className="fill-[#F59E0B] text-[#F59E0B]" />
          <span className="text-[12px] font-semibold text-[#111827]">
            {product.rating}
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between gap-2">
          <span className="text-[16px] font-bold tracking-tight text-[#111827]">
            {product.price.toLocaleString("fa-IR")} تومان
          </span>
          <button
            type="button"
            onClick={handleAdd}
            className={`grid h-9 w-9 place-items-center rounded-[12px] text-white transition-colors duration-150 ease-out ${
              added ? "bg-[#22C55E]" : "bg-[#1D4ED8] hover:bg-[#1E40AF]"
            }`}
            aria-label="افزودن به سبد"
          >
            {added ? <Check size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2} />}
          </button>
        </div>
      </div>
    </Link>
  );
}