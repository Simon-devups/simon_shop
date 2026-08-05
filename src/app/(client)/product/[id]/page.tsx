"use client"
import React, { useState, useEffect, useRef } from "react";
import {
  Heart, Star, ShieldCheck, Truck, BadgeCheck, Headphones, RotateCcw,
  ChevronLeft, ChevronRight, Search, ShoppingCart, User, Menu, X,
  ThumbsUp, MessageSquare, Check, Minus, Plus,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  DESIGN TOKENS (from the shared design system)                     */
/* ------------------------------------------------------------------ */

const C = {
  bg: "#F5F7FA",
  surface: "#FFFFFF",
  primary: "#1D4ED8",
  primaryHover: "#1E40AF",
  primarySoft: "#EFF4FE",
  danger: "#EF4444",
  dangerSoft: "#FDECEC",
  success: "#22C55E",
  successSoft: "#EAFBF0",
  warning: "#F59E0B",
  border: "#E5E7EB",
  divider: "#F1F5F9",
  text: "#111827",
  textSoft: "#374151",
  muted: "#6B7280",
};

/* ------------------------------------------------------------------ */
/*  DATA                                                              */
/* ------------------------------------------------------------------ */

const PRODUCT = {
  title: "گوشی موبایل اپل مدل iPhone 15 Pro Max ظرفیت ۲۵۶ گیگابایت - نات‌اکتیو",
  brand: "اپل",
  rating: 4.7,
  ratingCount: 1284,
  colors: [
    { name: "تیتانیوم طبیعی", hex: "#9c9488" },
    { name: "تیتانیوم آبی", hex: "#5c6670" },
    { name: "تیتانیوم مشکی", hex: "#3b3b3d" },
    { name: "تیتانیوم سفید", hex: "#e4e1d8" },
  ],
  storages: ["۲۵۶ گیگابایت", "۵۱۲ گیگابایت", "۱ ترابایت"],
  oldPrice: 89900000,
  price: 74500000,
  discount: 17,
  images: [
    "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=900&q=80",
    "https://images.unsplash.com/photo-1592286927505-1def25115558?w=900&q=80",
    "https://images.unsplash.com/photo-1667238676757-8e3f8b8b0b2c?w=900&q=80",
    "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=900&q=80",
  ],
};

const FEATURES = [
  { icon: ShieldCheck, label: "ضمانت اصالت کالا" },
  { icon: Truck, label: "ارسال سریع" },
  { icon: BadgeCheck, label: "۷ روز ضمانت بازگشت" },
  { icon: Headphones, label: "پشتیبانی ۲۴ ساعته" },
  { icon: RotateCcw, label: "امکان مرجوعی" },
];

const SPECS = [
  { group: "کلی", rows: [["برند", "اپل (Apple)"], ["مدل", "iPhone 15 Pro Max"], ["تاریخ عرضه", "مهر ۱۴۰۲"], ["گارانتی", "۱۸ ماه گارانتی شرکتی"]] },
  { group: "نمایشگر", rows: [["اندازه نمایشگر", "۶.۷ اینچ"], ["نوع نمایشگر", "Super Retina XDR OLED"], ["رزولوشن", "۲۷۹۶ × ۱۲۹۰ پیکسل"], ["نرخ به‌روزرسانی", "۱۲۰ هرتز (ProMotion)"]] },
  { group: "سخت‌افزار", rows: [["پردازنده", "Apple A17 Pro"], ["حافظه رم", "۸ گیگابایت"], ["حافظه داخلی", "۲۵۶ گیگابایت"], ["باتری", "۴۴۲۲ میلی‌آمپرساعت"]] },
  { group: "دوربین", rows: [["دوربین اصلی", "۴۸ + ۱۲ + ۱۲ مگاپیکسل"], ["دوربین سلفی", "۱۲ مگاپیکسل"], ["ضبط ویدیو", "۴K با ۶۰ فریم بر ثانیه"]] },
];

const PROS = ["کیفیت ساخت بدنه تیتانیومی", "دوربین فوق‌العاده در نور کم", "عملکرد پردازنده در بازی‌های سنگین", "طول عمر باتری در استفاده روزمره"];
const CONS = ["قیمت بالا نسبت به رقبا", "پورت شارژ هنوز به سرعت نیاز دارد", "وزن نسبتاً بالا"];

const REVIEWS = [
  { name: "محمد رضایی", date: "۲ هفته پیش", rating: 5, body: "کیفیت ساخت فوق‌العاده‌ست، دوربینش عالیه و باتریش هم یک روز کامل جواب می‌ده. راضی‌ام از خرید.", likes: 24, pros: ["دوربین حرفه‌ای", "طراحی زیبا"], cons: ["قیمت بالا"] },
  { name: "سارا احمدی", date: "۱ ماه پیش", rating: 4, body: "گوشی خیلی خوبیه ولی وزنش کمی زیاده و برای دست‌های کوچیک کمی سنگینه. در کل راضی هستم.", likes: 12, pros: ["سرعت بالا"], cons: ["وزن زیاد"] },
  { name: "علی کریمی", date: "۱ ماه پیش", rating: 5, body: "بهترین گوشی‌ای که تا حالا داشتم. ارزش خریدنو داره حتی با این قیمت.", likes: 31, pros: ["عملکرد", "دوربین"], cons: [] },
];

const RELATED = [
  { title: "ایرپاد پرو نسل دوم اپل", price: 12500000, discount: 12, img: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&q=80" },
  { title: "کاور سیلیکونی iPhone 15 Pro Max", price: 850000, discount: 5, img: "https://images.unsplash.com/photo-1601593346740-925612772716?w=400&q=80" },
  { title: "شارژر اورجینال ۲۰ وات اپل", price: 1200000, discount: 0, img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&q=80" },
  { title: "اپل واچ سری ۹", price: 24900000, discount: 8, img: "https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?w=400&q=80" },
  { title: "پاوربانک انکر ۲۰۰۰۰", price: 2100000, discount: 15, img: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&q=80" },
];

const fmt = (n) => n.toLocaleString("fa-IR");

/* ------------------------------------------------------------------ */
/*  ATOMS                                                              */
/* ------------------------------------------------------------------ */

const Card = ({ children, className = "", style }) => (
  <div
    className={`bg-white rounded-[16px] border border-[#E5E7EB] ${className}`}
    style={{ boxShadow: "0 8px 30px rgba(0,0,0,.06)", ...style }}
  >
    {children}
  </div>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-[17px] font-bold text-[#111827] mb-4 flex items-center gap-2">
    <span className="w-1 h-4 bg-[#1D4ED8] rounded-full" />
    {children}
  </h2>
);

const Stars = ({ value, size = 14 }) => (
  <div className="flex items-center gap-0.5" dir="ltr">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        size={size}
        strokeWidth={2}
        className={i <= Math.round(value) ? "fill-[#F59E0B] text-[#F59E0B]" : "fill-[#E5E7EB] text-[#E5E7EB]"}
      />
    ))}
  </div>
);

/* ------------------------------------------------------------------ */
/*  HEADER                                                             */
/* ------------------------------------------------------------------ */

export function PromoRibbon() {
  return (
    <div className="bg-[#1D4ED8] text-white text-[13px] py-2">
      <div className="max-w-[1600px] mx-auto px-6 flex items-center justify-center gap-3">
        <span>جشنواره تابستانه؛ تا ۴۰٪ تخفیف روی محصولات اپل</span>
        <button className="bg-white/15 hover:bg-white/25 transition-colors duration-150 ease-out rounded-full px-3 py-0.5 text-xs font-medium">
          مشاهده جشنواره
        </button>
      </div>
    </div>
  );
}


function Breadcrumb() {
  const items = ["صفحه اصلی", "موبایل و تبلت", "گوشی موبایل", "اپل", "iPhone 15 Pro Max"];
  return (
    <div className="max-w-[1600px] mx-auto px-6 pt-4 text-[12px] text-[#6B7280] flex items-center gap-1.5 flex-wrap">
      {items.map((it, i) => (
        <React.Fragment key={it}>
          <span className={`hover:text-[#1D4ED8] transition-colors duration-150 ease-out cursor-pointer ${i === items.length - 1 ? "text-[#374151]" : ""}`}>{it}</span>
          {i < items.length - 1 && <ChevronLeft size={12} strokeWidth={2} />}
        </React.Fragment>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  GALLERY                                                            */
/* ------------------------------------------------------------------ */

function ProductGallery() {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);

  return (
    <Card className="p-5">
      <div
        className="relative w-full aspect-square bg-[#F5F7FA] rounded-[12px] overflow-hidden group cursor-zoom-in"
        onMouseEnter={() => setZoom(true)}
        onMouseLeave={() => setZoom(false)}
      >
        <img
          src={PRODUCT.images[active]}
          alt={PRODUCT.title}
          className={`w-full h-full object-cover transition-transform duration-300 ease-out ${zoom ? "scale-110" : "scale-100"}`}
        />
        <button className="absolute top-3 left-3 bg-white/90 hover:bg-white rounded-full p-2 transition-colors duration-150 ease-out opacity-0 group-hover:opacity-100">
          <Heart size={16} strokeWidth={2} className="text-[#374151]" />
        </button>
        <button
          onClick={() => setActive((a) => (a - 1 + PRODUCT.images.length) % PRODUCT.images.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-out"
        >
          <ChevronRight size={18} strokeWidth={2} />
        </button>
        <button
          onClick={() => setActive((a) => (a + 1) % PRODUCT.images.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-out"
        >
          <ChevronLeft size={18} strokeWidth={2} />
        </button>
      </div>

      <div className="flex items-center gap-3 mt-4 justify-center">
        {PRODUCT.images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-16 h-16 rounded-[8px] overflow-hidden border-2 transition-all duration-150 ease-out ${active === i ? "border-[#1D4ED8]" : "border-[#E5E7EB] opacity-70 hover:opacity-100"
              }`}
          >
            <img src={img} className="w-full h-full object-cover" alt="" />
          </button>
        ))}
      </div>
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/*  RIGHT INFO COLUMN                                                  */
/* ------------------------------------------------------------------ */

function ProductInfo({ color, setColor, storage, setStorage }) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs bg-[#EFF4FE] text-[#1D4ED8] rounded-full px-2.5 py-1 font-medium">{PRODUCT.brand}</span>
        <button className="text-[#6B7280] hover:text-[#EF4444] transition-colors duration-150 ease-out">
          <Heart size={18} strokeWidth={2} />
        </button>
      </div>

      <h1 className="text-[19px] font-bold text-[#111827] leading-8 mb-3">{PRODUCT.title}</h1>

      <div className="flex items-center gap-2 mb-5">
        <Stars value={PRODUCT.rating} />
        <span className="text-sm font-semibold text-[#111827]">{PRODUCT.rating}</span>
        <span className="text-xs text-[#6B7280]">({fmt(PRODUCT.ratingCount)} نظر)</span>
      </div>

      <div className="h-px bg-[#E5E7EB] mb-5" />

      <div className="mb-5">
        <div className="text-[13px] font-semibold text-[#111827] mb-2.5">رنگ: <span className="text-[#6B7280] font-normal">{color.name}</span></div>
        <div className="flex items-center gap-2.5">
          {PRODUCT.colors.map((c) => (
            <button
              key={c.name}
              onClick={() => setColor(c)}
              className={`w-8 h-8 rounded-full border-2 transition-all duration-150 ease-out ${color.name === c.name ? "border-[#1D4ED8]" : "border-white ring-1 ring-[#E5E7EB]"}`}
              style={{ backgroundColor: c.hex }}
              title={c.name}
            />
          ))}
        </div>
      </div>

      <div className="mb-5">
        <div className="text-[13px] font-semibold text-[#111827] mb-2.5">حافظه داخلی</div>
        <div className="flex items-center gap-2 flex-wrap">
          {PRODUCT.storages.map((s) => (
            <button
              key={s}
              onClick={() => setStorage(s)}
              className={`text-[13px] rounded-[8px] px-3.5 py-2 border transition-colors duration-150 ease-out ${storage === s ? "border-[#1D4ED8] bg-[#EFF4FE] text-[#1D4ED8] font-medium" : "border-[#E5E7EB] text-[#374151] hover:border-[#9CA3AF]"
                }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="h-px bg-[#E5E7EB] mb-5" />

      <div className="space-y-3 text-[13px]">
        <div className="flex items-center justify-between">
          <span className="text-[#6B7280]">فروشنده</span>
          <span className="text-[#111827] font-medium">فروشگاه رسمی اپل</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[#6B7280]">گارانتی</span>
          <span className="text-[#111827] font-medium">۱۸ ماه گارانتی شرکتی</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[#6B7280]">موجودی</span>
          <span className="text-[#22C55E] font-medium">موجود در انبار</span>
        </div>
      </div>

      <div className="h-px bg-[#E5E7EB] my-5" />

      <div className="grid grid-cols-5 gap-1.5">
        {FEATURES.map((f) => (
          <div key={f.label} className="flex flex-col items-center text-center gap-1.5 p-2 rounded-[12px] hover:bg-[#F5F7FA] transition-colors duration-150 ease-out">
            <f.icon size={20} strokeWidth={2} className="text-[#1D4ED8]" />
            <span className="text-[10px] text-[#6B7280] leading-3">{f.label}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/*  LEFT STICKY PRICE / BUY CARD                                      */
/* ------------------------------------------------------------------ */

function ProductPriceCard() {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-24">
      <Card
        className="p-5 transition-shadow duration-200 ease-out"
        style={scrolled ? { boxShadow: "0 18px 60px rgba(0,0,0,.12)" } : undefined}
      >
        <div className="flex items-center justify-between mb-4">
          <span className="bg-[#FDECEC] text-[#EF4444] text-xs font-bold rounded-[8px] px-2.5 py-1">٪{PRODUCT.discount} تخفیف</span>
          <span className="text-[#6B7280] text-xs line-through">{fmt(PRODUCT.oldPrice)} تومان</span>
        </div>

        <div className="flex items-baseline gap-1.5 mb-4">
          <span className="text-2xl font-extrabold text-[#111827]">{fmt(PRODUCT.price)}</span>
          <span className="text-sm text-[#6B7280]">تومان</span>
        </div>

        <div className="bg-[#F5F7FA] rounded-[12px] p-3 mb-4 text-[12px] text-[#374151] flex items-center justify-between">
          <span>خرید اقساطی از</span>
          <span className="font-semibold text-[#111827]">۶,۲۰۸,۳۳۳ تومان / ماه</span>
        </div>

        <div className="flex items-center justify-between text-[12px] text-[#374151] mb-2">
          <div className="flex items-center gap-1.5"><Truck size={14} strokeWidth={2} className="text-[#1D4ED8]" /> ارسال</div>
          <span className="text-[#22C55E] font-medium">فردا، چهارشنبه</span>
        </div>
        <div className="flex items-center justify-between text-[12px] text-[#374151] mb-5">
          <div className="flex items-center gap-1.5"><ShieldCheck size={14} strokeWidth={2} className="text-[#1D4ED8]" /> ضمانت</div>
          <span className="font-medium">۱۸ ماهه شرکتی</span>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center border border-[#E5E7EB] rounded-[12px]">
            <button onClick={() => setQty((q) => q + 1)} className="p-2.5 hover:bg-[#F5F7FA] transition-colors duration-150 ease-out"><Plus size={14} strokeWidth={2} /></button>
            <span className="w-8 text-center text-sm font-medium">{qty}</span>
            <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="p-2.5 hover:bg-[#F5F7FA] transition-colors duration-150 ease-out"><Minus size={14} strokeWidth={2} /></button>
          </div>
        </div>

        <button
          onClick={() => setAdded(true)}
          className={`w-full py-3.5 rounded-[12px] text-sm font-bold transition-colors duration-200 ease-out ${added ? "bg-[#22C55E] text-white" : "bg-[#1D4ED8] hover:bg-[#1E40AF] text-white"
            }`}
        >
          {added ? (
            <span className="flex items-center justify-center gap-2"><Check size={16} strokeWidth={2} /> به سبد خرید اضافه شد</span>
          ) : (
            "افزودن به سبد خرید"
          )}
        </button>
        <button className="w-full py-3 mt-2 rounded-[12px] text-sm font-medium text-[#1D4ED8] border border-[#E5E7EB] hover:bg-[#EFF4FE] transition-colors duration-150 ease-out">
          افزودن به لیست علاقه‌مندی
        </button>
      </Card>

      <Card className="p-4 mt-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-[#EFF4FE] flex items-center justify-center text-[#1D4ED8] font-bold text-sm shrink-0">اپ</div>
          <div className="flex-1 min-w-0">
            <div className="text-[13px] font-semibold text-[#111827]">فروشگاه رسمی اپل</div>
            <div className="flex items-center gap-1 mt-0.5">
              <Stars value={4.9} size={11} />
              <span className="text-[11px] text-[#6B7280]">۹۸٪ رضایت</span>
            </div>
          </div>
          <button className="text-xs text-[#1D4ED8] font-medium border border-[#E5E7EB] rounded-[8px] px-3 py-1.5 hover:bg-[#EFF4FE] transition-colors duration-150 ease-out shrink-0">
            سایر فروشندگان
          </button>
        </div>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  TABS: SPECS / DESCRIPTION / PROS-CONS / REVIEWS                    */
/* ------------------------------------------------------------------ */

function SpecificationTable() {
  return (
    <div className="space-y-5">
      {SPECS.map((group) => (
        <div key={group.group}>
          <div className="text-[13px] font-bold text-[#111827] mb-2.5">{group.group}</div>
          <div className="rounded-[12px] overflow-hidden border border-[#E5E7EB]">
            {group.rows.map(([label, value], i) => (
              <div key={label} className={`flex items-center px-4 py-3 text-[13px] ${i % 2 === 0 ? "bg-[#F1F5F9]" : "bg-white"}`}>
                <span className="text-[#6B7280] w-1/3">{label}</span>
                <span className="text-[#111827] font-medium flex-1">{value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ProsCons() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="overflow-hidden">
        <div className="bg-[#EAFBF0] text-[#22C55E] font-bold text-[13px] px-4 py-2.5 border-b border-[#E5E7EB]">نقاط قوت</div>
        <ul className="p-4 space-y-2.5">
          {PROS.map((p) => (
            <li key={p} className="flex items-start gap-2 text-[13px] text-[#374151]">
              <Check size={15} strokeWidth={2} className="text-[#22C55E] mt-0.5 shrink-0" /> {p}
            </li>
          ))}
        </ul>
      </Card>
      <Card className="overflow-hidden">
        <div className="bg-[#FDECEC] text-[#EF4444] font-bold text-[13px] px-4 py-2.5 border-b border-[#E5E7EB]">نقاط ضعف</div>
        <ul className="p-4 space-y-2.5">
          {CONS.map((c) => (
            <li key={c} className="flex items-start gap-2 text-[13px] text-[#374151]">
              <X size={15} strokeWidth={2} className="text-[#EF4444] mt-0.5 shrink-0" /> {c}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

function Description() {
  return (
    <div className="text-[13.5px] text-[#374151] leading-8 space-y-4">
      <p>
        آیفون ۱۵ پرو مکس جدیدترین پرچمدار اپل با بدنه‌ای از جنس تیتانیوم درجه ۵ است که در عین سبکی، مقاومت بی‌نظیری در برابر ضربه و خط‌وخش دارد. این گوشی با تراشه A17 Pro ساخته شده که با معماری ۳ نانومتری، عملکردی به‌مراتب قدرتمندتر و بهینه‌تر نسبت به نسل‌های قبل ارائه می‌دهد.
      </p>
      <p>
        سیستم دوربین سه‌گانه این گوشی شامل دوربین اصلی ۴۸ مگاپیکسلی، دوربین اولترا واید و دوربین تله‌فوتو با زوم نوری ۵ برابر است که امکان عکاسی حرفه‌ای در شرایط نوری مختلف را فراهم می‌کند.
      </p>
      <p>ویژگی‌های کلیدی:</p>
      <ul className="list-disc pr-5 space-y-1.5">
        <li>دکمه اکشن قابل برنامه‌ریزی به‌جای سوییچ سایلنت سنتی</li>
        <li>پورت USB-C با پشتیبانی از سرعت انتقال داده بالا</li>
        <li>نمایشگر Always-On با نرخ به‌روزرسانی ۱ تا ۱۲۰ هرتز</li>
        <li>پشتیبانی کامل از eSIM و دو سیم‌کارت</li>
      </ul>
    </div>
  );
}

function RatingSummary() {
  const bars = [
    { star: 5, pct: 78 },
    { star: 4, pct: 14 },
    { star: 3, pct: 5 },
    { star: 2, pct: 2 },
    { star: 1, pct: 1 },
  ];
  return (
    <div className="flex flex-col md:flex-row gap-8 mb-6">
      <div className="flex flex-col items-center justify-center shrink-0 md:w-40">
        <span className="text-4xl font-extrabold text-[#111827]">{PRODUCT.rating}</span>
        <Stars value={PRODUCT.rating} size={16} />
        <span className="text-xs text-[#6B7280] mt-1">از {fmt(PRODUCT.ratingCount)} نظر</span>
      </div>
      <div className="flex-1 space-y-1.5">
        {bars.map((b) => (
          <div key={b.star} className="flex items-center gap-2 text-xs text-[#6B7280]">
            <span className="w-3">{b.star}</span>
            <div className="flex-1 h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
              <div className="h-full bg-[#F59E0B] rounded-full transition-all duration-300 ease-out" style={{ width: `${b.pct}%` }} />
            </div>
            <span className="w-8 text-left">٪{b.pct}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReviewCard({ r }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="py-5 border-b border-[#E5E7EB] last:border-0">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-[#EFF4FE] text-[#1D4ED8] flex items-center justify-center font-bold text-xs">
            {r.name[0]}
          </div>
          <div>
            <div className="text-[13px] font-semibold text-[#111827]">{r.name}</div>
            <div className="text-[11px] text-[#6B7280]">{r.date}</div>
          </div>
        </div>
        <Stars value={r.rating} size={13} />
      </div>
      <p className="text-[13px] text-[#374151] leading-7 mb-2.5">{r.body}</p>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {r.pros.map((p) => (
          <span key={p} className="text-[11px] bg-[#EAFBF0] text-[#22C55E] rounded-[8px] px-2 py-1">+ {p}</span>
        ))}
        {r.cons.map((c) => (
          <span key={c} className="text-[11px] bg-[#FDECEC] text-[#EF4444] rounded-[8px] px-2 py-1">- {c}</span>
        ))}
      </div>
      <div className="flex items-center gap-4 text-[12px] text-[#6B7280]">
        <button onClick={() => setLiked(!liked)} className={`flex items-center gap-1.5 transition-colors duration-150 ease-out ${liked ? "text-[#1D4ED8]" : "hover:text-[#1D4ED8]"}`}>
          <ThumbsUp size={13} strokeWidth={2} className={liked ? "fill-[#1D4ED8]" : ""} /> مفید بود ({r.likes + (liked ? 1 : 0)})
        </button>
        <button className="flex items-center gap-1.5 hover:text-[#1D4ED8] transition-colors duration-150 ease-out">
          <MessageSquare size={13} strokeWidth={2} /> پاسخ
        </button>
      </div>
    </div>
  );
}

function Reviews() {
  return (
    <div>
      <RatingSummary />
      <div>{REVIEWS.map((r, i) => <ReviewCard key={i} r={r} />)}</div>
      <div className="flex items-center justify-center gap-2 mt-5">
        {[1, 2, 3].map((p) => (
          <button key={p} className={`w-8 h-8 rounded-[8px] text-xs font-medium transition-colors duration-150 ease-out ${p === 1 ? "bg-[#1D4ED8] text-white" : "text-[#6B7280] hover:bg-[#F5F7FA]"}`}>
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}

function ProductTabs() {
  const tabs = [
    { key: "desc", label: "معرفی محصول", content: <Description /> },
    { key: "specs", label: "مشخصات فنی", content: <SpecificationTable /> },
    { key: "proscons", label: "نقاط قوت و ضعف", content: <ProsCons /> },
    { key: "reviews", label: `نظرات (${fmt(PRODUCT.ratingCount)})`, content: <Reviews /> },
  ];
  const [active, setActive] = useState("desc");

  return (
    <Card className="p-6">
      <div className="flex items-center gap-1 border-b border-[#E5E7EB] mb-6 overflow-x-auto">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`relative px-4 py-3 text-[13px] font-medium whitespace-nowrap transition-colors duration-150 ease-out ${active === t.key ? "text-[#1D4ED8]" : "text-[#6B7280] hover:text-[#111827]"
              }`}
          >
            {t.label}
            {active === t.key && <span className="absolute bottom-0 right-0 left-0 h-0.5 bg-[#1D4ED8] rounded-full" />}
          </button>
        ))}
      </div>
      <div key={active}>
        {tabs.find((t) => t.key === active).content}
      </div>
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/*  RELATED PRODUCTS                                                   */
/* ------------------------------------------------------------------ */

function RelatedCard({ p }) {
  const [wish, setWish] = useState(false);
  return (
    <div
      className="min-w-[180px] max-w-[180px] bg-white rounded-[16px] border border-[#E5E7EB] p-3 transition-shadow duration-200 ease-out cursor-pointer group"
      style={{ boxShadow: "0 8px 30px rgba(0,0,0,.06)" }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 18px 60px rgba(0,0,0,.12)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,.06)")}
    >
      <div className="relative aspect-square rounded-[12px] overflow-hidden bg-[#F5F7FA] mb-3">
        <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out" />
        {p.discount > 0 && (
          <span className="absolute top-2 right-2 bg-[#EF4444] text-white text-[10px] font-bold rounded-[6px] px-1.5 py-0.5">٪{p.discount}</span>
        )}
        <button
          onClick={(e) => { e.stopPropagation(); setWish(!wish); }}
          className="absolute top-2 left-2 bg-white/90 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-out"
        >
          <Heart size={13} strokeWidth={2} className={wish ? "fill-[#EF4444] text-[#EF4444]" : "text-[#374151]"} />
        </button>
      </div>
      <div className="text-[12px] text-[#374151] leading-5 mb-2 line-clamp-2 h-10">{p.title}</div>
      <div className="text-[13px] font-bold text-[#111827]">{fmt(p.price)} تومان</div>
    </div>
  );
}

function RecommendationCarousel() {
  const scrollRef = useRef(null);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <SectionTitle>محصولات مرتبط</SectionTitle>
        <div className="flex items-center gap-1.5">
          <button onClick={() => scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" })} className="w-8 h-8 rounded-full border border-[#E5E7EB] flex items-center justify-center hover:bg-[#F5F7FA] transition-colors duration-150 ease-out">
            <ChevronRight size={16} strokeWidth={2} />
          </button>
          <button onClick={() => scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" })} className="w-8 h-8 rounded-full border border-[#E5E7EB] flex items-center justify-center hover:bg-[#F5F7FA] transition-colors duration-150 ease-out">
            <ChevronLeft size={16} strokeWidth={2} />
          </button>
        </div>
      </div>
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-2 scroll-smooth" style={{ scrollbarWidth: "none" }}>
        {RELATED.map((p, i) => <RelatedCard key={i} p={p} />)}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  FOOTER                                                             */
/* ------------------------------------------------------------------ */

function Footer() {
  const cols = [
    { title: "درباره ما", items: ["درباره فروشگاه", "فرصت‌های شغلی", "قوانین و مقررات", "حریم خصوصی"] },
    { title: "خدمات مشتریان", items: ["راهنمای خرید", "پیگیری سفارش", "شرایط بازگشت کالا", "تماس با ما"] },
    { title: "همکاری با ما", items: ["فروش در فروشگاه", "تبلیغات", "نمایندگی‌ها"] },
  ];
  return (
    <footer className="bg-white border-t border-[#E5E7EB] mt-16">
      <div className="max-w-[1600px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <div className="text-2xl font-extrabold text-[#1D4ED8] mb-3">فروشگاه</div>
          <p className="text-[13px] text-[#6B7280] leading-7 mb-4">
            بزرگ‌ترین فروشگاه اینترنتی ایران با بیش از یک میلیون کالای اورجینال و تحویل سریع در سراسر کشور.
          </p>
          <div className="text-[13px] font-semibold text-[#111827] mb-2">عضویت در خبرنامه</div>
          <div className="flex gap-2">
            <input placeholder="ایمیل شما" className="flex-1 bg-[#F5F7FA] rounded-[12px] px-3 py-2 text-sm outline-none border border-transparent focus:border-[#1D4ED8] transition-colors duration-150 ease-out" />
            <button className="bg-[#1D4ED8] text-white text-sm rounded-[12px] px-4 hover:bg-[#1E40AF] transition-colors duration-150 ease-out">عضویت</button>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-[13px] font-bold text-[#111827] mb-3.5">{c.title}</div>
            <ul className="space-y-2.5">
              {c.items.map((it) => (
                <li key={it} className="text-[13px] text-[#6B7280] hover:text-[#1D4ED8] transition-colors duration-150 ease-out cursor-pointer">{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-[#E5E7EB]">
        <div className="max-w-[1600px] mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-[#6B7280]">
          <span>© ۱۴۰۴ فروشگاه. تمامی حقوق محفوظ است.</span>
          <div className="flex items-center gap-3">
            {["Visa", "MasterCard", "Shetab", "Apple Pay"].map((m) => (
              <span key={m} className="border border-[#E5E7EB] rounded-[6px] px-2.5 py-1 text-[11px]">{m}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  MOBILE STICKY BUY BAR                                              */
/* ------------------------------------------------------------------ */

function MobileBuyBar() {
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 bg-white border-t border-[#E5E7EB] p-3 flex items-center gap-3 md:hidden"
      style={{ boxShadow: "0 -8px 30px rgba(0,0,0,.06)" }}
    >
      <div className="flex flex-col">
        <span className="text-[11px] text-[#6B7280] line-through">{fmt(PRODUCT.oldPrice)}</span>
        <span className="text-sm font-bold text-[#111827]">{fmt(PRODUCT.price)} تومان</span>
      </div>
      <button className="flex-1 bg-[#1D4ED8] text-white rounded-[12px] py-3 text-sm font-bold">افزودن به سبد خرید</button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE ROOT                                                          */
/* ------------------------------------------------------------------ */

export default function ProductPage() {
  const [color, setColor] = useState(PRODUCT.colors[0]);
  const [storage, setStorage] = useState(PRODUCT.storages[0]);

  return (
    <div dir="rtl" className="min-h-screen bg-[#F5F7FA]" style={{ fontFamily: "'Vazirmatn', 'Tahoma', sans-serif" }}>
      
      <Breadcrumb />

      <main className="max-w-[1600px] mx-auto px-6 py-6 pb-24 md:pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr_380px] gap-5 items-start">
          <div className="order-3 lg:order-1">
            <ProductPriceCard />
          </div>
          <div className="order-1 lg:order-2 ">
            <ProductGallery />
          </div>
          <div className="order-2 lg:order-3">
            <ProductInfo color={color} setColor={setColor} storage={storage} setStorage={setStorage} />
          </div>
        </div>

        <div className="mt-6">
          <ProductTabs />
        </div>

        <div className="mt-8">
          <RecommendationCarousel />
        </div>
      </main>

      <MobileBuyBar />
    </div>
  );
}