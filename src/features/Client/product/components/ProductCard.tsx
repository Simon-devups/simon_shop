import { getProducts } from "../lib/get-products";
import { ProductCardType } from "../types";

export function ProductCard({ product }: { product: ProductCardType }) {
  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#d8dee6] bg-white"
      style={{ boxShadow: "0 4px 20px rgba(44,57,71,0.05)" }}
    >
      {/* Media */}
      <div className="relative aspect-4/3 overflow-hidden bg-[#F3F6F9]">
        {/* glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#C2A56D]/10 via-transparent to-transparent" />
        {/* mini phone placeholder */}
        <div className="absolute inset-0 grid place-items-center">
          <div className="h-24 w-14 rounded-xl border border-[#d8dee6] bg-white/60 backdrop-blur-sm" />
        </div>

        {/* Badge */}
        <span className="absolute right-3 top-3 rounded-lg bg-gradient-to-l from-[#C2A56D] to-[#d4bc8a] px-2.5 py-1 text-[11px] font-extrabold text-[#2C3947] shadow-sm">
          پرفروش
        </span>

        {/* Wishlist */}
        <button
          type="button"
          className="absolute left-3 top-3 grid h-9 w-9 place-items-center rounded-xl border border-white/60 bg-white/80 text-[#2C3947] shadow-sm backdrop-blur-md transition hover:scale-105"
          aria-label="علاقه‌مندی"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 20.5s-7.5-4.6-9.8-9.1C.7 8 2 4.5 5.4 3.7c2-.5 3.9.3 5 2 .3.4.8 1 1.6 1.9.8-.9 1.3-1.5 1.6-1.9 1.1-1.7 3-2.5 5-2 3.4.8 4.7 4.3 3.2 7.7-2.3 4.5-9.8 9.1-9.8 9.1Z"
              stroke="currentColor"
              strokeWidth="1.6"
            />
          </svg>
        </button>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-[20px]" style={{padding: '20px'}}>
        <div className="mb-1.5 text-[11px] font-semibold text-[#547A95]">
          {product.category.name}
        </div>
        <h3 className="mb-3 line-clamp-2 min-h-[2.6em] cursor-pointer text-[13.5px] font-bold leading-relaxed text-[#2C3947] hover:text-[#547A95]">
          {product.name}
        </h3>

        {/* Chips */}
        <div className="mb-3 flex flex-wrap gap-1.5">
          <span className="rounded-md bg-[#F3F6F9] px-2 py-1 text-[10.5px] font-medium text-[#547A95]">
            نمایشگر ۶.۷ اینچ OLED
          </span>
          <span className="rounded-md bg-[#F3F6F9] px-2 py-1 text-[10.5px] font-medium text-[#547A95]">
            5G
          </span>
          <span className="rounded-md bg-[#F3F6F9] px-2 py-1 text-[10.5px] font-medium text-[#547A95]">
            ۲۵۶ گیگ
          </span>
        </div>

        {/* Rating */}
        <div className="mb-3 flex items-center gap-1.5">
          <span className="text-[12px] tracking-tight text-[#C2A56D]">★★★★★</span>
          <span className="text-[11.5px] font-bold text-[#2C3947]">
            {product.rating}
          </span>
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between gap-2">
          <span className="text-[16px] font-extrabold tracking-tight text-[#2C3947]">
            ۳۹٬۹۰۰٬۰۰۰ تومان
          </span>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-xl bg-[#2C3947] text-white shadow-sm transition hover:bg-[#547A95]"
            aria-label="افزودن به سبد"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}