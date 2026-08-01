import { useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { adBanners, phoneAds, formatPrice } from "../../data/store";

type Props = {
  variant?: "products" | "phones";
};

export default function AdCarousel({ variant = "products" }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isPhone = variant === "phones";
  const items = isPhone ? phoneAds : adBanners;

  // Duplicate for seamless loop
  const loop = [...items, ...items];

  useEffect(() => {
    // CSS animation handles scroll; pause on hover is in CSS
  }, []);

  return (
    <section className="mx-auto max-w-[1440px] px-4 py-8 md:px-6 md:py-10">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <div className="mb-1 text-[12px] font-bold tracking-wide text-[#547A95]">
            {isPhone ? "تبلیغات موبایل" : "پیشنهادهای ویژه"}
          </div>
          <h2 className="text-[22px] font-extrabold tracking-tight text-[#2C3947] md:text-[26px]">
            {isPhone ? "بنرهای گوشی هوشمند" : "آگهی‌های محصول"}
          </h2>
        </div>
        <button
          type="button"
          className="flex items-center gap-1.5 text-[13px] font-bold text-[#547A95] transition hover:text-[#2C3947]"
        >
          مشاهده همه
          <ArrowLeft size={15} />
        </button>
      </div>

      <div className="relative overflow-hidden rounded-[24px]">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#E8EDF2] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#E8EDF2] to-transparent" />

        <div
          ref={trackRef}
          className={isPhone ? "marquee-track-rev gap-4" : "marquee-track gap-4"}
        >
          {loop.map((item, i) => {
            if (isPhone) {
              const p = item as (typeof phoneAds)[0];
              return (
                <article
                  key={`${p.id}-${i}`}
                  className="group relative h-[220px] w-[340px] shrink-0 overflow-hidden rounded-2xl border border-[#d8dee6] bg-[#2C3947] shadow-[0_10px_30px_rgba(44,57,71,0.1)] md:h-[240px] md:w-[400px]"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C3947] via-[#2C3947]/50 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="mb-1 text-[11px] font-bold text-[#C2A56D]">موبایل</div>
                    <h3 className="mb-1 text-[17px] font-extrabold text-white">{p.title}</h3>
                    <p className="mb-3 text-[12.5px] text-white/70">{p.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="num text-[15px] font-extrabold text-white">
                        از {formatPrice(p.price)}
                        <span className="mr-1 text-[11px] font-medium text-white/60">تومان</span>
                      </span>
                      <span className="rounded-xl bg-white/15 px-3 py-1.5 text-[12px] font-bold text-white backdrop-blur transition group-hover:bg-[#C2A56D] group-hover:text-[#2C3947]">
                        خرید
                      </span>
                    </div>
                  </div>
                </article>
              );
            }

            const b = item as (typeof adBanners)[0];
            return (
              <article
                key={`${b.id}-${i}`}
                className="group relative h-[180px] w-[320px] shrink-0 overflow-hidden rounded-2xl border border-white/70 shadow-[0_10px_30px_rgba(44,57,71,0.08)] md:h-[200px] md:w-[380px]"
                style={{ background: b.color }}
              >
                <img
                  src={b.image}
                  alt={b.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-700 group-hover:scale-105 group-hover:opacity-65"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(120deg, ${b.color}ee 0%, ${b.color}88 45%, transparent 100%)`,
                  }}
                />
                <div className="relative flex h-full flex-col justify-end p-5">
                  <h3 className="mb-1 text-[17px] font-extrabold text-white drop-shadow">{b.title}</h3>
                  <p className="mb-3 text-[12.5px] text-white/80">{b.desc}</p>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-xl bg-white/95 px-3 py-1.5 text-[12px] font-extrabold text-[#2C3947] transition group-hover:bg-[#C2A56D]">
                      مشاهده
                      <ArrowLeft size={13} />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
