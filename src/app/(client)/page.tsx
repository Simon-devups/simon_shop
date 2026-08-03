"use client"
import { useState } from "react";
import type { Product } from "../../data/store";
import { amazingProducts } from "../../data/store";

import AdCarousel from "@/components/client/AdCarousel";
import Brands from "@/components/client/Brands";
import Categories from "@/components/client/Categories";
import ProductGrid from "@/components/client/ProductGrid";
import AmazingOffers from "@/components/client/AmazingOffers";
import Hero from "@/components/client/Hero";

// NOTE: در فایل data/store احتمالاً آرایه‌های دیگری هم برای
// "جدیدترین‌ها" و "پرفروش‌ترین‌ها" وجود دارد (مثلاً newestProducts,
// bestSellerProducts). فعلاً چون به من ارسال نشده بود، از همان
// amazingProducts به‌عنوان placeholder برای دو گرید پایینی استفاده کردم.
// کافیه import و نام‌ها را با آرایه‌های واقعی خودت جایگزین کنی.

import {
  ShieldCheck,
  Truck,
  CreditCard,
  Headphones,
  RefreshCw,
  BadgeCheck,
} from "lucide-react";
export default function HomePage() {
  const [cart, setCart] = useState<Product[]>([]);
  const [selected, setSelected] = useState<Product | null>(null);
  const handleAdd = (p: Product) => {
    setCart((prev) => [...prev, p]);
  };

  const handleSelect = (p: Product) => {
    setSelected(p);
    // اینجا می‌تونی مثلاً به صفحه‌ی جزئیات محصول ناوبری کنی
  };

  const handleSelectCategory = (catId: string) => {
    console.log("selected category:", catId);
    // اینجا می‌تونی فیلتر یا ناوبری به صفحه‌ی دسته‌بندی رو انجام بدی
  };

  return (

    <main className="min-h-screen bg-[#E8EDF2]">
      {/* Features strip */}

      <Hero />

      <section className="mx-auto max-w-[1440px] px-4 py-6 md:px-6">
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
              className="flex items-center gap-3 rounded-2xl border border-[#d8dee6] bg-white/80 px-3.5 py-3.5 shadow-[0_4px_14px_rgba(44,57,71,0.04)] backdrop-blur"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#E8EDF2] text-[#547A95]">
                <f.icon size={18} />
              </div>
              <div>
                <div className="text-[12.5px] font-extrabold text-[#2C3947]">
                  {f.t}
                </div>
                <div className="text-[11px] text-[#8a96a3]">{f.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <Categories onSelectCategory={handleSelectCategory} />

      <AdCarousel variant="products" />

      <AmazingOffers onAdd={handleAdd} onSelect={handleSelect} />

      <ProductGrid
        id="newest"
        eyebrow="تازه‌ها"
        title="جدیدترین محصولات"
        subtitle="آخرین محصولات اضافه‌شده به فروشگاه"
        products={amazingProducts}
        onAdd={handleAdd}
        onSelect={handleSelect}
      />

      <Brands />

      <AdCarousel variant="phones" />

      <ProductGrid
        id="popular"
        eyebrow="محبوب‌ها"
        title="پرفروش‌ترین محصولات"
        subtitle="محصولاتی که بیشترین استقبال رو داشتن"
        products={amazingProducts}
        onAdd={handleAdd}
        onSelect={handleSelect}
      />
    </main>
  );
}