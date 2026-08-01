"use client";

import { useApp } from "@/context/AppContext";
import Hero from "@/components/client/Hero";
import Categories from "@/components/client/Categories";
import AmazingOffers from "@/components/client/AmazingOffers";
import Brands from "@/components/client/Brands";
import {
  popularProducts,
  phoneProducts,
} from "@/data/store";
import {
  ShieldCheck,
  Truck,
  CreditCard,
  Headphones,
  RefreshCw,
  BadgeCheck,
} from "lucide-react";
import Link from "next/link";
import AdCarousel from "@/components/client/AdCarousel";
import ProductGrid from "@/components/client/ProductGrid";

export default function HomePage() {
  const { addToCart, setSelectedProduct, openAuthModal } = useApp();

  return (
    <>
      <Hero />

      {/* ویژگی‌ها */}
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

      <AdCarousel variant="products" />

      {/* دسته‌بندی‌ها با لینک به صفحه محصولات */}
      <Categories />

      <ProductGrid
        id="popular"
        eyebrow="محبوب‌ترین‌ها"
        title="محصولات پرفروش"
        subtitle="انتخاب کاربران نوا استور در هفته اخیر"
        products={popularProducts}
        onAdd={addToCart}
        onSelect={setSelectedProduct}
        onViewAll="/products?category=all"
      />

      <AmazingOffers
        onAdd={addToCart}
        onSelect={setSelectedProduct}
      />

      <Brands />

      <AdCarousel variant="phones" />

      <ProductGrid
        id="phones"
        eyebrow="دسته موبایل"
        title="گوشی‌های هوشمند"
        subtitle="پرچمدار تا میان‌رده — موجودی محدود"
        products={phoneProducts}
        onAdd={addToCart}
        onSelect={setSelectedProduct}
        onViewAll="/products?category=phones"
      />

      {/* بنر اپلیکیشن */}
      <section className="mx-auto max-w-[1440px] px-4 py-6 md:px-6 md:py-10">
        {/* ... (همون بنر قبلی) ... */}
      </section>
    </>
  );
}