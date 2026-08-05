import { Heart, Plus, Star } from "lucide-react";
import { ProductCardType } from "../types";

export function ProductCard({ product }: { product: ProductCardType }) {
  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-[16px] border border-[#E5E7EB] bg-white transition-shadow duration-200 ease-out hover:shadow-[0_18px_60px_rgba(0,0,0,0.12)]"
      style={{ boxShadow: "0 8px 30px rgba(0,0,0,.06)" }}
    >
      {/* Media */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F7FA]">
        <div className="absolute inset-0 grid place-items-center">
          <div className="h-24 w-14 rounded-[12px] border border-[#E5E7EB] bg-white" />
        </div>

        {/* Badge */}
        <span className="absolute right-4 top-4 rounded-[8px] bg-[#1D4ED8] px-2.5 py-1 text-[11px] font-bold text-white">
          پرفروش
        </span>

        {/* Wishlist */}
        <button
          type="button"
          className="absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-[12px] border border-[#E5E7EB] bg-white text-[#374151] transition-colors duration-150 ease-out hover:text-[#1D4ED8]"
          aria-label="افزودن به علاقه‌مندی‌ها"
        >
          <Heart size={18} strokeWidth={2} />
        </button>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-[20px]">
        <div className="mb-2 text-[12px] font-medium text-[#6B7280]">
          {product.category.name}
        </div>

        <h3 className="mb-3 line-clamp-2 min-h-[2.6em] cursor-pointer text-[14px] font-semibold leading-relaxed text-[#111827] transition-colors duration-150 ease-out hover:text-[#1D4ED8]">
          {product.name}
        </h3>

        {/* Chips */}
        <div className="mb-3 flex flex-wrap gap-1.5">
          {["نمایشگر ۶.۷ اینچ OLED", "5G", "۲۵۶ گیگ"].map((chip) => (
            <span
              key={chip}
              className="rounded-[8px] bg-[#F5F7FA] px-2 py-1 text-[11px] font-medium text-[#374151]"
            >
              {chip}
            </span>
          ))}
        </div>

        {/* Rating */}
        <div className="mb-4 flex items-center gap-1.5">
          <Star size={16} strokeWidth={2} className="fill-[#F59E0B] text-[#F59E0B]" />
          <span className="text-[12px] font-semibold text-[#111827]">
            {product.rating}
          </span>
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between gap-2">
          <span className="text-[16px] font-bold tracking-tight text-[#111827]">
            ۳۹٬۹۰۰٬۰۰۰ تومان
          </span>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-[12px] bg-[#1D4ED8] text-white transition-colors duration-150 ease-out hover:bg-[#1E40AF]"
            aria-label="افزودن به سبد خرید"
          >
            <Plus size={18} strokeWidth={2} />
          </button>
        </div>
      </div>
    </article>
  );
}