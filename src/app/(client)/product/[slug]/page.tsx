// app/(client)/product/[slug]/page.tsx
// -----------------------------------------------------------------------------
// Did not exist before — every "add to cart" / search-result click led to a
// 404. Server Component: fetches directly via lib/server/store. Uses
// notFound() for an unknown slug instead of silently rendering an empty page.
// -----------------------------------------------------------------------------

import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Star } from "lucide-react";
import { getProductBySlug, getRelatedProducts } from "@/lib/server/store";
import { ProductCard } from "@/features/Client/product/components/ProductCard";
import AddToCartButton from "@/components/client/AddToCartButton";

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(params.slug, 4);

  return (
    <div dir="rtl" className="min-h-screen bg-[#F5F7FA]">
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-1.5 px-6 pt-4 text-[12px] text-[#6B7280]">
        <Link href="/" className="transition-colors duration-150 ease-out hover:text-[#1D4ED8]">صفحه اصلی</Link>
        <ChevronLeft size={12} strokeWidth={2} />
        <Link href={`/category/${product.category.slug}`} className="transition-colors duration-150 ease-out hover:text-[#1D4ED8]">
          {product.category.name}
        </Link>
        <ChevronLeft size={12} strokeWidth={2} />
        <span className="font-medium text-[#374151]">{product.name}</span>
      </div>

      <main className="mx-auto max-w-[1600px] px-6 py-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_420px]">
          {/* Gallery */}
          <div className="rounded-[16px] border border-[#E5E7EB] bg-white p-5" style={{ boxShadow: "0 8px 30px rgba(0,0,0,.06)" }}>
            <div className="aspect-square overflow-hidden rounded-[12px] bg-[#F5F7FA]">
              <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
            </div>
          </div>

          {/* Info + buy box */}
          <div className="rounded-[16px] border border-[#E5E7EB] bg-white p-6" style={{ boxShadow: "0 8px 30px rgba(0,0,0,.06)" }}>
            <span className="mb-2 inline-block rounded-full bg-[#EFF4FE] px-2.5 py-1 text-xs font-medium text-[#1D4ED8]">
              {product.category.name}
            </span>
            <h1 className="mb-3 text-[19px] font-bold leading-8 text-[#111827]">{product.name}</h1>

            <div className="mb-5 flex items-center gap-1.5">
              <Star size={16} strokeWidth={2} className="fill-[#F59E0B] text-[#F59E0B]" />
              <span className="text-sm font-semibold text-[#111827]">{product.rating}</span>
            </div>

            <div className="mb-5 h-px bg-[#E5E7EB]" />

            <div className="mb-5 flex items-baseline gap-2">
              {product.oldPrice && product.oldPrice > product.price && (
                <span className="text-xs text-[#9CA3AF] line-through">
                  {product.oldPrice.toLocaleString("fa-IR")}
                </span>
              )}
              <span className="text-2xl font-extrabold text-[#111827]">
                {product.price.toLocaleString("fa-IR")}
              </span>
              <span className="text-sm text-[#6B7280]">تومان</span>
            </div>

            <AddToCartButton product={product} />
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-10">
            <h2 className="mb-4 text-[17px] font-bold text-[#111827]">محصولات مرتبط</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}