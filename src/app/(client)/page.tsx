"use client";
import { useEffect, useState } from "react";
import type { Product, Category } from "@/lib/client/api";
import { getCategoriesSafe, getProductsSafe } from "@/lib/client/api";
import {
  categories as mockCategories,
  amazingProducts as mockProducts,
} from "../../data/store";

import AdCarousel from "@/components/client/AdCarousel";
import Brands from "@/components/client/Brands";
import Categories from "@/components/client/Categories";
import ProductGrid from "@/components/client/ProductGrid";
import AmazingOffers from "@/components/client/AmazingOffers";
import Hero from "@/components/client/Hero";

import {
  ShieldCheck,
  Truck,
  CreditCard,
  Headphones,
  RefreshCw,
  BadgeCheck,
} from "lucide-react";

export default function HomePage() {
  // Seed with mock data (never undefined) so the first render never crashes,
  // then replace with real data once/if the backend responds.
  const [categories, setCategories] = useState<Category[]>(mockCategories);
  const [newestProducts, setNewestProducts] = useState<Product[]>(mockProducts);
  const [popularProducts, setPopularProducts] = useState<Product[]>(mockProducts);

  // NOTE: سبد خرید دیگه اینجا state نداره — همه‌ی ProductCardها (این صفحه،
  // AmazingOffers، صفحه‌ی سرچ، صفحه‌ی محصول) مستقیم به CartContext
  // (context/CartContext.tsx) وصلن، پس سبد بین همه‌ی صفحات مشترکه.
  // فقط "انتخاب برای علاقه‌مندی/wishlist" فعلاً همینجا لوکاله، چون
  // WishlistContext هنوز پیاده نشده (قدم بعدی).
  const [selected, setSelected] = useState<Product | null>(null);
  const handleWishlist = (p: Product) => {
    setSelected(p);
  };

  useEffect(() => {
    getCategoriesSafe().then(setCategories);
    getProductsSafe({ page: 1, pageSize: 8 }).then(setNewestProducts);
    getProductsSafe({ page: 1, pageSize: 8, categoryId: "popular" }).then(setPopularProducts);
  }, []);

  return (
    <main className="min-h-screen bg-[#F5F7FA]">
      <Hero />

      <section className="mx-auto max-w-[1600px] px-4 py-6 md:px-6">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {[
            { icon: Truck, t: "ارسال سریع", d: "تهران همان‌روز" },
            { icon: ShieldCheck, t: "ضمانت اصالت", d: "کالای ۱۰۰٪ اصل" },
            { icon: CreditCard, t: "پرداخت امن", d: "درگاه معتبر بانکی" },
            { icon: RefreshCw, t: "۷ روز بازگشت", d: "بدون قید و شرط" },
            { icon: Headphones, t: "پشتیبانی ۲۴/۷", d: "چت و تلفن" },
            { icon: BadgeCheck, t: "گارانتی رسمی", d: "تا ۱۸ ماه" },
          ].map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-[16px] border border-[#E5E7EB] bg-white px-3.5 py-3.5"
              style={{ boxShadow: "0 8px 30px rgba(0,0,0,.06)" }}
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-[12px] bg-[#EFF4FE] text-[#1D4ED8]">
                <f.icon size={18} strokeWidth={2} />
              </div>
              <div>
                <div className="text-[12.5px] font-extrabold text-[#111827]">{f.t}</div>
                <div className="text-[11px] text-[#6B7280]">{f.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Categories categories={categories} />

      <AdCarousel variant="products" />

      {/* onAdd پاس داده نمی‌شه → ProductCard خودش از CartContext استفاده می‌کنه */}
      <AmazingOffers onSelect={handleWishlist} />

      <ProductGrid
        id="newest"
        eyebrow="تازه‌ها"
        title="جدیدترین محصولات"
        subtitle="آخرین محصولات اضافه‌شده به فروشگاه"
        products={newestProducts}
        viewAllHref="/products?sort=newest"
        onWishlist={handleWishlist}
      />

      <Brands />

      <AdCarousel variant="phones" />

      <ProductGrid
        id="popular"
        eyebrow="محبوب‌ها"
        title="پرفروش‌ترین محصولات"
        subtitle="محصولاتی که بیشترین استقبال رو داشتن"
        products={popularProducts}
        viewAllHref="/products?sort=popular"
        onWishlist={handleWishlist}
      />
    </main>
  );
}