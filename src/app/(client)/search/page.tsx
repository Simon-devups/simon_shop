"use client"

import { useMemo, useState } from "react";
import {
  Search, SlidersHorizontal, ChevronDown, ChevronLeft, ChevronRight,
  Star, Heart, Plus, X, Check, ChevronUp,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  DESIGN TOKENS — same values used across Navbar / ProductPage /     */
/*  ProductCard so every screen shares one language.                   */
/* ------------------------------------------------------------------ */

const RADIUS = { sm: "8px", md: "12px", DEFAULT: "16px", lg: "20px" };
const SHADOW = {
  card: "0 8px 30px rgba(0,0,0,.06)",
  hover: "0 18px 60px rgba(0,0,0,.12)",
  floating: "0 25px 80px rgba(0,0,0,.18)",
};

/* ------------------------------------------------------------------ */
/*  MOCK DATA — replace with a React Query hook (e.g. useSearchProducts)*/
/* ------------------------------------------------------------------ */

type SearchProduct = {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  isBestseller?: boolean;
};

const QUERY = "آیفون";

const RESULTS: SearchProduct[] = [
  { id: "1", name: "گوشی موبایل اپل مدل iPhone 15 Pro Max ظرفیت ۲۵۶ گیگابایت", category: "موبایل", brand: "اپل", price: 74500000, oldPrice: 89900000, rating: 4.7, reviewCount: 1284, image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&q=80", isBestseller: true },
  { id: "2", name: "گوشی موبایل اپل مدل iPhone 15 ظرفیت ۱۲۸ گیگابایت", category: "موبایل", brand: "اپل", price: 42900000, oldPrice: 47900000, rating: 4.6, reviewCount: 872, image: "https://images.unsplash.com/photo-1592286927505-1def25115558?w=500&q=80" },
  { id: "3", name: "گوشی موبایل اپل مدل iPhone 14 Pro ظرفیت ۲۵۶ گیگابایت", category: "موبایل", brand: "اپل", price: 58900000, rating: 4.5, reviewCount: 634, image: "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=500&q=80" },
  { id: "4", name: "کاور سیلیکونی اورجینال iPhone 15 Pro Max", category: "لوازم جانبی", brand: "اپل", price: 850000, oldPrice: 950000, rating: 4.3, reviewCount: 211, image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=500&q=80" },
  { id: "5", name: "شارژر اورجینال ۲۰ وات اپل", category: "لوازم جانبی", brand: "اپل", price: 1200000, rating: 4.4, reviewCount: 156, image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&q=80" },
  { id: "6", name: "گلس محافظ صفحه iPhone 15 Pro Max", category: "لوازم جانبی", brand: "بی‌نام", price: 350000, rating: 4.1, reviewCount: 98, image: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=500&q=80" },
  { id: "7", name: "ایرپاد پرو نسل دوم اپل", category: "صوتی", brand: "اپل", price: 12500000, oldPrice: 14200000, rating: 4.8, reviewCount: 942, image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&q=80", isBestseller: true },
  { id: "8", name: "اپل واچ سری ۹ سایز ۴۵ میلی‌متر", category: "پوشیدنی", brand: "اپل", price: 24900000, rating: 4.6, reviewCount: 405, image: "https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?w=500&q=80" },
];

const CATEGORIES = ["موبایل", "لوازم جانبی", "صوتی", "پوشیدنی"];
const BRANDS = ["اپل", "سامسونگ", "شیائومی", "بی‌نام"];

const fmt = (n: number) => n.toLocaleString("fa-IR");

/* ------------------------------------------------------------------ */
/*  ATOMS                                                              */
/* ------------------------------------------------------------------ */

function Card({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`bg-white border border-[#E5E7EB] ${className}`}
      style={{ borderRadius: RADIUS.DEFAULT, boxShadow: SHADOW.card, ...style }}
    >
      {children}
    </div>
  );
}

function Stars({ value, size = 13 }: { value: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5" dir="ltr">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          strokeWidth={0}
          className={i <= Math.round(value) ? "fill-[#F59E0B]" : "fill-[#E5E7EB]"}
        />
      ))}
    </div>
  );
}

function Checkbox({ checked, onChange, label, count }: { checked: boolean; onChange: () => void; label: string; count?: number }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className="flex w-full items-center justify-between gap-2 py-1.5 text-[13px] text-[#374151] transition-colors duration-150 ease-out hover:text-[#1D4ED8]"
    >
      <span className="flex items-center gap-2.5">
        <span
          className={`grid h-[18px] w-[18px] shrink-0 place-items-center rounded-[6px] border transition-colors duration-150 ease-out ${
            checked ? "bg-[#1D4ED8] border-[#1D4ED8]" : "border-[#E5E7EB] bg-white"
          }`}
        >
          {checked && <Check size={12} strokeWidth={3} className="text-white" />}
        </span>
        {label}
      </span>
      {count !== undefined && <span className="text-[11px] text-[#9CA3AF]">{fmt(count)}</span>}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  BREADCRUMB                                                         */
/* ------------------------------------------------------------------ */

function Breadcrumb({ query }: { query: string }) {
  return (
    <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-1.5 px-6 pt-4 text-[12px] text-[#6B7280]">
      <span className="cursor-pointer transition-colors duration-150 ease-out hover:text-[#1D4ED8]">صفحه اصلی</span>
      <ChevronLeft size={12} strokeWidth={2} />
      <span className="font-medium text-[#374151]">نتایج جستجو برای «{query}»</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  FILTERS SIDEBAR                                                    */
/* ------------------------------------------------------------------ */

function FilterSection({ title, children, defaultOpen = true }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-[#F1F5F9] py-4 first:pt-0 last:border-0 last:pb-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="mb-2 flex w-full items-center justify-between text-[13px] font-bold text-[#111827]"
      >
        {title}
        {open ? <ChevronUp size={16} strokeWidth={2} className="text-[#9CA3AF]" /> : <ChevronDown size={16} strokeWidth={2} className="text-[#9CA3AF]" />}
      </button>
      {open && <div className="mt-2">{children}</div>}
    </div>
  );
}

function FiltersPanel({
  categories, setCategories, brands, setBrands, priceRange, setPriceRange, minRating, setMinRating, onReset,
}: {
  categories: string[]; setCategories: (v: string[]) => void;
  brands: string[]; setBrands: (v: string[]) => void;
  priceRange: [number, number]; setPriceRange: (v: [number, number]) => void;
  minRating: number; setMinRating: (v: number) => void;
  onReset: () => void;
}) {
  const toggle = (list: string[], set: (v: string[]) => void, value: string) =>
    set(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);

  return (
    <Card className="p-5">
      <div className="mb-1 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[14px] font-extrabold text-[#111827]">
          <SlidersHorizontal size={18} strokeWidth={2} className="text-[#1D4ED8]" />
          فیلترها
        </div>
        <button type="button" onClick={onReset} className="text-[12px] font-medium text-[#1D4ED8] transition-colors duration-150 ease-out hover:text-[#1E40AF]">
          حذف همه
        </button>
      </div>

      <FilterSection title="دسته‌بندی">
        <div className="space-y-0.5">
          {CATEGORIES.map((c) => (
            <Checkbox key={c} label={c} checked={categories.includes(c)} onChange={() => toggle(categories, setCategories, c)} />
          ))}
        </div>
      </FilterSection>

      <FilterSection title="برند">
        <div className="space-y-0.5">
          {BRANDS.map((b) => (
            <Checkbox key={b} label={b} checked={brands.includes(b)} onChange={() => toggle(brands, setBrands, b)} />
          ))}
        </div>
      </FilterSection>

      <FilterSection title="محدوده قیمت">
        <div className="space-y-3">
          <input
            type="range"
            min={0}
            max={100000000}
            step={500000}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="w-full accent-[#1D4ED8]"
          />
          <div className="flex items-center justify-between text-[11px] text-[#6B7280]">
            <span className="num">{fmt(priceRange[0])} تومان</span>
            <span className="num">{fmt(priceRange[1])} تومان</span>
          </div>
        </div>
      </FilterSection>

      <FilterSection title="حداقل امتیاز">
        <div className="flex flex-col gap-1.5">
          {[4, 3, 2].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setMinRating(minRating === r ? 0 : r)}
              className={`flex items-center gap-2 rounded-[8px] px-2 py-1.5 text-[12px] transition-colors duration-150 ease-out ${
                minRating === r ? "bg-[#EFF4FE] text-[#1D4ED8]" : "text-[#374151] hover:bg-[#F5F7FA]"
              }`}
            >
              <Stars value={r} size={12} />
              <span>{r} به بالا</span>
            </button>
          ))}
        </div>
      </FilterSection>
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/*  RESULT PRODUCT CARD — same visual language as the product page's   */
/*  ProductCard (radius/shadow/spacing/colors identical).              */
/* ------------------------------------------------------------------ */

function ResultCard({ product }: { product: SearchProduct }) {
  const [wish, setWish] = useState(false);
  return (
    <article
      className="group relative flex h-full cursor-pointer flex-col overflow-hidden border border-[#E5E7EB] bg-white transition-all duration-200 ease-out hover:-translate-y-1"
      style={{ borderRadius: RADIUS.DEFAULT, boxShadow: SHADOW.card }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = SHADOW.hover)}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = SHADOW.card)}
    >
      <div className="relative aspect-square overflow-hidden bg-[#F5F7FA]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
        {product.isBestseller && (
          <span
            className="absolute right-3 top-3 px-2.5 py-1 text-[11px] font-extrabold text-white"
            style={{ borderRadius: RADIUS.sm, background: "#F59E0B" }}
          >
            پرفروش
          </span>
        )}
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); setWish(!wish); }}
          aria-label="افزودن به علاقه‌مندی"
          className="absolute left-3 top-3 grid h-9 w-9 place-items-center border border-[#E5E7EB] bg-white/90 text-[#374151] opacity-0 backdrop-blur-md transition-all duration-150 ease-out group-hover:opacity-100 hover:text-[#EF4444]"
          style={{ borderRadius: RADIUS.md }}
        >
          <Heart size={16} strokeWidth={2} className={wish ? "fill-[#EF4444] text-[#EF4444]" : ""} />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1.5 text-[11px] font-semibold text-[#1D4ED8]">{product.category}</div>
        <h3 className="mb-2.5 line-clamp-2 min-h-[2.6em] text-[13px] font-bold leading-relaxed text-[#111827] transition-colors duration-150 ease-out group-hover:text-[#1D4ED8]">
          {product.name}
        </h3>

        <div className="mb-3 flex items-center gap-1">
          <Stars value={product.rating} />
          <span className="num text-[11px] font-bold text-[#111827]">{product.rating}</span>
          <span className="text-[10.5px] text-[#9CA3AF]">({fmt(product.reviewCount)})</span>
        </div>

        <div className="mt-auto flex items-center justify-between gap-2 pt-1">
          <div className="flex flex-col">
            {product.oldPrice && (
              <span className="num text-[10.5px] text-[#9CA3AF] line-through">{fmt(product.oldPrice)}</span>
            )}
            <span className="num text-[14.5px] font-extrabold text-[#111827]">
              {fmt(product.price)} <span className="text-[10.5px] font-medium text-[#6B7280]">تومان</span>
            </span>
          </div>
          <button
            type="button"
            onClick={(e) => e.stopPropagation()}
            aria-label="افزودن به سبد خرید"
            className="grid h-9 w-9 shrink-0 place-items-center text-white transition-all duration-150 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
            style={{ borderRadius: RADIUS.md, background: "#1D4ED8", boxShadow: "0 4px 12px rgba(29,78,216,.25)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#1E40AF")}
            onMouseLeaveCapture={(e) => (e.currentTarget.style.background = "#1D4ED8")}
          >
            <Plus size={16} strokeWidth={2} />
          </button>
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/*  SORT DROPDOWN                                                      */
/* ------------------------------------------------------------------ */

const SORT_OPTIONS = [
  { key: "relevance", label: "مرتبط‌ترین" },
  { key: "cheapest", label: "ارزان‌ترین" },
  { key: "expensive", label: "گران‌ترین" },
  { key: "newest", label: "جدیدترین" },
  { key: "rating", label: "پربازدیدترین" },
] as const;

function SortDropdown({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const current = SORT_OPTIONS.find((o) => o.key === value)!;
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-[12.5px] font-semibold text-[#374151] transition-colors duration-150 ease-out hover:border-[#1D4ED8]"
        style={{ borderRadius: RADIUS.md }}
      >
        مرتب‌سازی: <span className="text-[#111827]">{current.label}</span>
        <ChevronDown size={14} strokeWidth={2} className={`text-[#9CA3AF] transition-transform duration-200 ease-out ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div
          className="absolute left-0 top-[calc(100%+8px)] z-20 w-44 overflow-hidden border border-[#E5E7EB] bg-white"
          style={{ borderRadius: RADIUS.md, boxShadow: SHADOW.hover }}
        >
          {SORT_OPTIONS.map((o) => (
            <button
              key={o.key}
              type="button"
              onClick={() => { onChange(o.key); setOpen(false); }}
              className={`flex w-full items-center justify-between px-3.5 py-2.5 text-[12.5px] transition-colors duration-150 ease-out ${
                o.key === value ? "bg-[#EFF4FE] text-[#1D4ED8] font-semibold" : "text-[#374151] hover:bg-[#F5F7FA]"
              }`}
            >
              {o.label}
              {o.key === value && <Check size={14} strokeWidth={2.5} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  MOBILE FILTER DRAWER                                               */
/* ------------------------------------------------------------------ */

function MobileFilterDrawer({ open, onClose, ...filterProps }: any) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-[#111827]/40" onClick={onClose} />
      <div
        className="absolute inset-y-0 right-0 w-[85%] max-w-[360px] overflow-y-auto bg-[#F5F7FA] p-5"
        style={{ boxShadow: SHADOW.floating }}
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[15px] font-extrabold text-[#111827]">فیلترها</span>
          <button type="button" onClick={onClose} className="grid h-9 w-9 place-items-center rounded-[12px] hover:bg-[#E5E7EB] transition-colors duration-150 ease-out">
            <X size={18} strokeWidth={2} />
          </button>
        </div>
        <FiltersPanel {...filterProps} />
        <button
          type="button"
          onClick={onClose}
          className="mt-4 w-full py-3.5 text-[14px] font-extrabold text-white transition-colors duration-150 ease-out"
          style={{ borderRadius: RADIUS.md, background: "#1D4ED8" }}
        >
          اعمال فیلتر
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGINATION                                                         */
/* ------------------------------------------------------------------ */

function Pagination({ page, total, onChange }: { page: number; total: number; onChange: (p: number) => void }) {
  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, page - 1))}
        className="grid h-9 w-9 place-items-center border border-[#E5E7EB] text-[#374151] transition-colors duration-150 ease-out hover:bg-[#F5F7FA]"
        style={{ borderRadius: RADIUS.sm }}
      >
        <ChevronRight size={16} strokeWidth={2} />
      </button>
      {Array.from({ length: total }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onChange(p)}
          className="num grid h-9 w-9 place-items-center text-[13px] font-semibold transition-colors duration-150 ease-out"
          style={{
            borderRadius: RADIUS.sm,
            background: p === page ? "#1D4ED8" : "transparent",
            color: p === page ? "#fff" : "#6B7280",
          }}
        >
          {p.toLocaleString("fa-IR")}
        </button>
      ))}
      <button
        type="button"
        onClick={() => onChange(Math.min(total, page + 1))}
        className="grid h-9 w-9 place-items-center border border-[#E5E7EB] text-[#374151] transition-colors duration-150 ease-out hover:bg-[#F5F7FA]"
        style={{ borderRadius: RADIUS.sm }}
      >
        <ChevronLeft size={16} strokeWidth={2} />
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  EMPTY STATE                                                        */
/* ------------------------------------------------------------------ */

function EmptyState({ query }: { query: string }) {
  return (
    <Card className="flex flex-col items-center justify-center gap-3 px-6 py-20 text-center">
      <div className="grid h-16 w-16 place-items-center rounded-full bg-[#F5F7FA]">
        <Search size={26} strokeWidth={2} className="text-[#9CA3AF]" />
      </div>
      <h3 className="text-[15px] font-extrabold text-[#111827]">نتیجه‌ای برای «{query}» پیدا نشد</h3>
      <p className="max-w-xs text-[13px] text-[#6B7280]">
        املای عبارت را بررسی کنید یا از کلمات کلی‌تر استفاده کنید.
      </p>
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE ROOT                                                          */
/* ------------------------------------------------------------------ */

export default function SearchPage() {
  const [query] = useState(QUERY);
  const [categories, setCategories] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000000]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState("relevance");
  const [page, setPage] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = RESULTS.filter((p) => {
      if (categories.length && !categories.includes(p.category)) return false;
      if (brands.length && !brands.includes(p.brand)) return false;
      if (p.price > priceRange[1]) return false;
      if (minRating && p.rating < minRating) return false;
      return true;
    });
    if (sort === "cheapest") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "expensive") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.reviewCount - a.reviewCount);
    return list;
  }, [categories, brands, priceRange, minRating, sort]);

  const resetFilters = () => {
    setCategories([]);
    setBrands([]);
    setPriceRange([0, 100000000]);
    setMinRating(0);
  };

  const filterProps = { categories, setCategories, brands, setBrands, priceRange, setPriceRange, minRating, setMinRating, onReset: resetFilters };

  return (
    <div dir="rtl" className="min-h-screen bg-[#F5F7FA]" style={{ fontFamily: "'Vazirmatn', 'Tahoma', sans-serif" }}>
      <Breadcrumb query={query} />

      <main className="mx-auto max-w-[1600px] px-6 py-6">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="text-[19px] font-extrabold text-[#111827]">نتایج جستجو برای «{query}»</h1>
            <p className="num mt-1 text-[12.5px] text-[#6B7280]">{fmt(filtered.length)} کالا پیدا شد</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="flex items-center gap-1.5 border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-[12.5px] font-semibold text-[#374151] transition-colors duration-150 ease-out hover:border-[#1D4ED8] lg:hidden"
              style={{ borderRadius: RADIUS.md }}
            >
              <SlidersHorizontal size={15} strokeWidth={2} />
              فیلترها
            </button>
            <SortDropdown value={sort} onChange={setSort} />
          </div>
        </div>

        {/* Active filter chips */}
        {(categories.length > 0 || brands.length > 0 || minRating > 0) && (
          <div className="mb-5 flex flex-wrap items-center gap-2">
            {[...categories, ...brands, ...(minRating ? [`${minRating}+ امتیاز`] : [])].map((f) => (
              <span
                key={f}
                className="flex items-center gap-1.5 border border-[#E5E7EB] bg-white px-3 py-1.5 text-[11.5px] font-medium text-[#374151]"
                style={{ borderRadius: RADIUS.sm }}
              >
                {f}
              </span>
            ))}
            <button type="button" onClick={resetFilters} className="text-[11.5px] font-semibold text-[#EF4444] transition-colors duration-150 ease-out hover:text-[#dc2626]">
              پاک‌کردن فیلترها
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[260px_1fr]">
          <aside className="sticky top-24 hidden lg:block">
            <FiltersPanel {...filterProps} />
          </aside>

          <section>
            {filtered.length === 0 ? (
              <EmptyState query={query} />
            ) : (
              <>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
                  {filtered.map((p) => (
                    <ResultCard key={p.id} product={p} />
                  ))}
                </div>
                <Pagination page={page} total={3} onChange={setPage} />
              </>
            )}
          </section>
        </div>
      </main>

      <MobileFilterDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} {...filterProps} />
    </div>
  );
}