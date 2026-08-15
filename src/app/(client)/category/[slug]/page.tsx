"use client";

// app/(client)/category/[slug]/page.tsx
// -----------------------------------------------------------------------------
// Categories.tsx already links here (`/category/${c.slug}`), but the page
// never existed — every category click was a 404. This wires it to the same
// getCategoriesSafe/getProductsSafe helpers the home page uses, so it works
// with mock data today and switches to the real backend automatically once
// /api/categories and /api/products are live (no changes needed here).
// -----------------------------------------------------------------------------

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, PackageSearch } from "lucide-react";
import type { Category, Product } from "@/lib/client/api";
import { getCategoriesSafe, getProductsSafe } from "@/lib/client/api";
import { ProductCard } from "@/features/Client/product/components/ProductCard";

const PAGE_SIZE = 12;

function Breadcrumb({ categoryName }: { categoryName: string }) {
  return (
    <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-1.5 px-6 pt-4 text-[12px] text-[#6B7280]">
      <Link href="/" className="transition-colors duration-150 ease-out hover:text-[#1D4ED8]">
        صفحه اصلی
      </Link>
      <ChevronLeft size={12} strokeWidth={2} />
      <span className="font-medium text-[#374151]">{categoryName}</span>
    </div>
  );
}

function CategoryHeader({ category }: { category: Category | null }) {
  return (
    <div className="mx-auto max-w-[1600px] px-6 pt-3">
      <div className="flex items-center gap-4 rounded-[16px] border border-[#E5E7EB] bg-white p-5" style={{ boxShadow: "0 8px 30px rgba(0,0,0,.06)" }}>
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-[12px] bg-[#F5F7FA] text-[28px]">
          {category?.icon ?? "📦"}
        </div>
        <div>
          <h1 className="text-[19px] font-extrabold text-[#111827]">
            {category?.name ?? "دسته‌بندی"}
          </h1>
          <p className="mt-0.5 text-[12.5px] text-[#6B7280]">
            {category ? `${category.count.toLocaleString("fa-IR")}+ کالا در این دسته` : "در حال بارگذاری…"}
          </p>
        </div>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-[16px] border border-[#E5E7EB] bg-white px-6 py-20 text-center" style={{ boxShadow: "0 8px 30px rgba(0,0,0,.06)" }}>
      <div className="grid h-16 w-16 place-items-center rounded-full bg-[#F5F7FA]">
        <PackageSearch size={26} strokeWidth={2} className="text-[#9CA3AF]" />
      </div>
      <h3 className="text-[15px] font-extrabold text-[#111827]">فعلاً کالایی در این دسته نیست</h3>
      <p className="max-w-xs text-[13px] text-[#6B7280]">
        به‌زودی محصولات این دسته اضافه می‌شن. می‌تونی بقیه‌ی فروشگاه رو ببینی.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-[12px] bg-[#1D4ED8] px-5 py-2.5 text-[13px] font-semibold text-white transition-colors duration-150 ease-out hover:bg-[#1E40AF]"
      >
        بازگشت به فروشگاه
      </Link>
    </div>
  );
}

function GridSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="aspect-[4/3] animate-pulse rounded-[16px] bg-[#E5E7EB]" />
      ))}
    </div>
  );
}

function Pagination({ page, totalPages, onChange }: { page: number; totalPages: number; onChange: (p: number) => void }) {
  if (totalPages <= 1) return null;
  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onChange(p)}
          className="grid h-9 w-9 place-items-center rounded-[8px] text-[13px] font-semibold transition-colors duration-150 ease-out"
          style={{
            background: p === page ? "#1D4ED8" : "transparent",
            color: p === page ? "#fff" : "#6B7280",
          }}
        >
          {p.toLocaleString("fa-IR")}
        </button>
      ))}
    </div>
  );
}

export default function CategoryPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug ?? "";

  const [category, setCategory] = useState<Category | null>(null);
  const [products, setProducts] = useState<Product[] | null>(null); // null = هنوز لود نشده
  const [page, setPage] = useState(1);

  // Category info (name/icon/count) — از همون لیست دسته‌بندی‌های صفحه‌ی اصلی
  // فیلتر می‌کنیم تا یه endpoint جدا (/api/categories/:slug) لازم نداشته باشیم
  // مگر این‌که بعداً بخوایم breadcrumb یا فیلتر برند مخصوص دسته اضافه کنیم.
  useEffect(() => {
    let cancelled = false;
    getCategoriesSafe().then((all) => {
      if (cancelled) return;
      setCategory(all.find((c) => c.slug === slug) ?? null);
    });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  // Products for this category + page
  useEffect(() => {
    let cancelled = false;
    setProducts(null);
    getProductsSafe({ categoryId: slug, page, pageSize: PAGE_SIZE }).then((data) => {
      if (!cancelled) setProducts(data);
    });
    return () => {
      cancelled = true;
    };
  }, [slug, page]);

  // Reset to page 1 whenever the category itself changes (new slug)
  useEffect(() => {
    setPage(1);
  }, [slug]);

  const totalPages = useMemo(() => {
    if (!category?.count) return 1;
    return Math.max(1, Math.ceil(category.count / PAGE_SIZE));
  }, [category]);

  return (
    <div dir="rtl" className="min-h-screen bg-[#F5F7FA]">
      <Breadcrumb categoryName={category?.name ?? "..."} />
      <CategoryHeader category={category} />

      <main className="mx-auto max-w-[1600px] px-6 py-6">
        {products === null ? (
          <GridSkeleton />
        ) : products.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
            <Pagination page={page} totalPages={totalPages} onChange={setPage} />
          </>
        )}
      </main>
    </div>
  );
}