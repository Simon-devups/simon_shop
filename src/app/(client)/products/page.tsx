// app/(client)/products/page.tsx
// -----------------------------------------------------------------------------
// Was completely empty before (just a commented-out <ProductCard/>). This is
// the destination of "مشاهده همه" links from ProductGrid/AmazingOffers on the
// home page (/products?sort=newest, /products?sort=popular).
// -----------------------------------------------------------------------------

import Link from "next/link";
import { getProducts } from "@/lib/server/store";
import { ProductCard } from "@/features/Client/product/components/ProductCard";

const PAGE_SIZE = 12;

const SORT_LABELS: Record<string, string> = {
  newest: "جدیدترین",
  popular: "پرفروش‌ترین",
  cheapest: "ارزان‌ترین",
  expensive: "گران‌ترین",
};

function Pagination({ sort, page, totalPages }: { sort?: string; page: number; totalPages: number }) {
  if (totalPages <= 1) return null;
  const query = sort ? `sort=${sort}&` : "";
  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <Link
          key={p}
          href={`/products?${query}page=${p}`}
          className="grid h-9 w-9 place-items-center rounded-[8px] text-[13px] font-semibold transition-colors duration-150 ease-out"
          style={{
            background: p === page ? "#1D4ED8" : "transparent",
            color: p === page ? "#fff" : "#6B7280",
          }}
        >
          {p.toLocaleString("fa-IR")}
        </Link>
      ))}
    </div>
  );
}

export default function ProductsPage({
  searchParams,
}: {
  searchParams: {
    brand?: string;
    category?: string;
    page?: string;
    sort?: string;
  };
}) {
  const page = Number(searchParams.page ?? "1") || 1;
  const sort = searchParams.sort as "newest" | "popular" | "cheapest" | "expensive" | undefined;

  const { products, total } = getProducts({
    categoryId: searchParams.category,
    page,
    pageSize: PAGE_SIZE,
    sort,
  });
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return (
    <div dir="rtl" className="min-h-screen bg-[#F5F7FA]">
      <div className="mx-auto max-w-[1600px] px-6 pt-6">
        <h1 className="text-[19px] font-extrabold text-[#111827]">
          {sort ? SORT_LABELS[sort] ?? "همه محصولات" : "همه محصولات"}
        </h1>
        <p className="mt-1 text-[12.5px] text-[#6B7280]">
          {total.toLocaleString("fa-IR")} کالا
        </p>
      </div>

      <main className="mx-auto max-w-[1600px] px-6 py-6">
        {products.length === 0 ? (
          <div className="rounded-[16px] border border-[#E5E7EB] bg-white px-6 py-20 text-center" style={{ boxShadow: "0 8px 30px rgba(0,0,0,.06)" }}>
            <p className="text-[14px] text-[#6B7280]">فعلاً محصولی پیدا نشد.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
            <Pagination sort={sort} page={page} totalPages={totalPages} />
          </>
        )}
      </main>
    </div>
  );
}