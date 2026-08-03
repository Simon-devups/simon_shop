import { ArrowLeft } from "lucide-react";
import { getProducts } from "../lib/get-products";
import { ProductCard } from "./ProductCard";
import Link from "next/link";

export async function ProductGrid() {
  const products = await getProducts();

  return (
    <section id="popular" className="mx-auto max-w-[1440px] px-4 py-8 md:px-6 md:py-10">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="mb-1 block text-[12px] font-bold text-[#547A95]">
            پرطرفدارهای این هفته
          </span>
          <h2 className="text-[22px] font-extrabold tracking-tight text-[#2C3947] md:text-[26px]">
            محبوب‌ترین محصولات
          </h2>
          <p className="mt-1 text-[13px] text-[#6b7a88]">
            کالاهایی که مشتری‌های ما بازهم می‌خرند، هر هفته بر اساس فروش واقعی به‌روزرسانی می‌شود.
          </p>
        </div>
        <Link
          href="#"
          className="flex items-center gap-1.5 rounded-xl border border-[#d8dee6] bg-white px-4 py-2.5 text-[13px] font-bold text-[#2C3947] shadow-sm transition hover:border-[#547A95] hover:text-[#547A95]"
        >
          مشاهده‌ی همه‌ی محصولات
          <ArrowLeft size={15} />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}