import { useEffect, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Flame, ArrowLeft, ChevronRight, ChevronLeft } from "lucide-react";
import { amazingProducts, type Product } from "../../data/store";
import { ProductCard } from "@/features/Client/product/components/ProductCard";

import "swiper/css";
import "swiper/css/free-mode";

/* ------------------------------------------------------------------ */
/*  DESIGN TOKENS — pulled from the shared design system               */
/* ------------------------------------------------------------------ */

const C = {
  bg: "#F5F7FA",
  surface: "#FFFFFF",
  primary: "#1D4ED8",
  primaryHover: "#1E40AF",
  primarySoft: "#EFF4FE",
  danger: "#EF4444",
  border: "#E5E7EB",
  divider: "#F1F5F9",
  text: "#111827",
  textSoft: "#374151",
  muted: "#6B7280",
} as const;

const SHADOW_CARD = "0 8px 30px rgba(0,0,0,.06)";

type Props = {
  onAdd: (p: Product) => void;
  onSelect?: (p: Product) => void;
};

/* ------------------------------------------------------------------ */
/*  Countdown hook                                                     */
/* ------------------------------------------------------------------ */

function useCountdown(hours = 8) {
  const [left, setLeft] = useState(hours * 3600);

  useEffect(() => {
    const t = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : hours * 3600)), 1000);
    return () => clearInterval(t);
  }, [hours]);

  return useMemo(() => {
    const h = Math.floor(left / 3600);
    const m = Math.floor((left % 3600) / 60);
    const s = left % 60;
    return { h, m, s };
  }, [left]);
}

function CountdownDigit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="num grid h-10 min-w-[38px] place-items-center rounded-[8px] px-1.5 text-[14px] font-bold text-white"
        style={{ backgroundColor: C.text }}
      >
        {value.toString().padStart(2, "0")}
      </div>
      <span className="text-[10px] text-[#9CA3AF]">{label}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                             */
/* ------------------------------------------------------------------ */

export default function AmazingOffers({ onAdd, onSelect }: Props) {
  const { h, m, s } = useCountdown(9);
  const swiperRef = useRef<SwiperType | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  return (
    <section id="amazing" className="mx-auto max-w-[1600px] px-4 py-8 md:px-6 md:py-12">
      <div
        className="overflow-hidden rounded-[20px] border p-5 md:p-8"
        style={{ backgroundColor: C.surface, borderColor: C.border, boxShadow: SHADOW_CARD }}
      >
        {/* Header */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="grid h-11 w-11 place-items-center rounded-[12px]"
              style={{ backgroundColor: C.primarySoft, color: C.primary }}
            >
              <Flame size={20} strokeWidth={2} />
            </div>
            <div>
              <h2 className="text-[18px] font-bold tracking-tight" style={{ color: C.text }}>
                پیشنهادهای شگفت‌انگیز
              </h2>
              <p className="text-[12.5px]" style={{ color: C.muted }}>
                تخفیف‌های محدود، تا اتمام موجودی
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[12px] font-medium" style={{ color: C.muted }}>
                پایان در
              </span>
              <div className="flex items-center gap-1.5" dir="ltr">
                <CountdownDigit value={s} label="ثانیه" />
                <span className="pb-4 font-bold" style={{ color: C.muted }}>:</span>
                <CountdownDigit value={m} label="دقیقه" />
                <span className="pb-4 font-bold" style={{ color: C.muted }}>:</span>
                <CountdownDigit value={h} label="ساعت" />
              </div>
            </div>

            <button
              type="button"
              className="flex items-center gap-1.5 rounded-[12px] border px-4 py-2.5 text-[13px] font-semibold transition-colors duration-150 ease-out"
              style={{ borderColor: C.border, color: C.primary, backgroundColor: C.primarySoft }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E4ECFC")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.primarySoft)}
            >
              همه شگفت‌انگیزها
              <ArrowLeft size={15} strokeWidth={2} />
            </button>

            {/* Carousel nav arrows — same button system as above */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                aria-label="اسلاید قبلی"
                disabled={atStart}
                onClick={() => swiperRef.current?.slidePrev()}
                className="grid h-9 w-9 place-items-center rounded-full border transition-colors duration-150 ease-out disabled:cursor-not-allowed disabled:opacity-40"
                style={{ borderColor: C.border, color: C.textSoft }}
                onMouseEnter={(e) => !atStart && (e.currentTarget.style.backgroundColor = C.divider)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                <ChevronRight size={16} strokeWidth={2} />
              </button>
              <button
                type="button"
                aria-label="اسلاید بعدی"
                disabled={atEnd}
                onClick={() => swiperRef.current?.slideNext()}
                className="grid h-9 w-9 place-items-center rounded-full border transition-colors duration-150 ease-out disabled:cursor-not-allowed disabled:opacity-40"
                style={{ borderColor: C.border, color: C.textSoft }}
                onMouseEnter={(e) => !atEnd && (e.currentTarget.style.backgroundColor = C.divider)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                <ChevronLeft size={16} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        <div className="h-px w-full" style={{ backgroundColor: C.divider }} />

        {/* Product carousel */}
        <div className="mt-6">
          <Swiper
            modules={[Navigation, FreeMode]}
            dir="rtl"
            freeMode
            spaceBetween={16}
            slidesPerView={2}
            breakpoints={{
              480: { slidesPerView: 2.3, spaceBetween: 16 },
              768: { slidesPerView: 3.3, spaceBetween: 16 },
              1024: { slidesPerView: 4.3, spaceBetween: 16 },
              1280: { slidesPerView: 6, spaceBetween: 16 },
            }}
            onSwiper={(sw) => {
              swiperRef.current = sw;
              setAtStart(sw.isBeginning);
              setAtEnd(sw.isEnd);
            }}
            onSlideChange={(sw) => {
              setAtStart(sw.isBeginning);
              setAtEnd(sw.isEnd);
            }}
            className="!overflow-visible"
          >
            {amazingProducts.map((p) => (
              <SwiperSlide key={p.id}>
                <div
                  className="rounded-[16px] transition-shadow duration-200 ease-out hover:shadow-[0_18px_60px_rgba(0,0,0,.12)]"
                  style={{ boxShadow: SHADOW_CARD }}
                >
                  <ProductCard product={p} variant="amazing" onAdd={onAdd} onSelect={onSelect} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}