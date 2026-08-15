import { useEffect, useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "../../data/store";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const slide = heroSlides[index];

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(t);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length);
  const next = () => setIndex((i) => (i + 1) % heroSlides.length);

  return (
    <section className="mx-auto max-w-[1440px] px-4 pt-5 md:px-6 md:pt-7">
      <div
        className="relative overflow-hidden rounded-[28px] border border-white/60 shadow-[0_20px_60px_rgba(44,57,71,0.08)]"
        style={{ background: slide.bg, minHeight: 420 }}
      >
        {/* Decorative blobs */}
        <div
          className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full opacity-40 blur-3xl"
          style={{ background: slide.dark ? "rgba(194,165,109,0.25)" : "rgba(84,122,149,0.2)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full opacity-30 blur-3xl"
          style={{ background: slide.dark ? "rgba(84,122,149,0.35)" : "rgba(194,165,109,0.25)" }}
        />

        <div className="relative grid items-center gap-6 p-6 md:grid-cols-2 md:gap-10 md:p-12 lg:p-14">
          {/* Text */}
          <div className={`order-2 fade-up md:order-1 ${slide.dark ? "text-white" : "text-[#2C3947]"}`}>
            <div className="mb-4 inline-flex items-center gap-2">
              <span
                className={`rounded-full px-3 py-1 text-[11.5px] font-extrabold ${
                  slide.dark
                    ? "bg-white/15 text-[#C2A56D] ring-1 ring-white/20"
                    : "gold-badge"
                }`}
              >
                {slide.badge}
              </span>
              <span className={`text-[12px] font-medium ${slide.dark ? "text-white/60" : "text-[#8a96a3]"}`}>
                کالکشن ویژه ۱۴۰۳
              </span>
            </div>

            <h1
              className="mb-4 text-[32px] font-black leading-[1.25] tracking-tight md:text-[42px] lg:text-[48px]"
              style={{ letterSpacing: "-0.03em" }}
            >
              {slide.title}
            </h1>
            <p
              className={`mb-8 max-w-md text-[15px] leading-8 md:text-[16px] ${
                slide.dark ? "text-white/75" : "text-[#5a6b7a]"
              }`}
            >
              {slide.subtitle}
              <br />
              ارسال سریع، گارانتی اصالت و پرداخت امن.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                className={`group flex h-12 items-center gap-2 rounded-2xl px-6 text-[14px] font-bold shadow-lg transition hover:-translate-y-0.5 ${
                  slide.dark
                    ? "bg-white text-[#2C3947] hover:bg-[#C2A56D]"
                    : "bg-[#2C3947] text-white hover:bg-[#547A95]"
                }`}
              >
                {slide.cta}
                <ArrowLeft size={16} className="transition group-hover:-translate-x-1" />
              </button>
              <button
                type="button"
                className={`h-12 rounded-2xl border px-6 text-[14px] font-bold transition ${
                  slide.dark
                    ? "border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white/20"
                    : "border-[#d0d8e0] bg-white/70 text-[#2C3947] backdrop-blur hover:bg-white"
                }`}
              >
                مقایسه محصولات
              </button>
            </div>

            {/* Trust row */}
            <div
              className={`mt-10 flex flex-wrap gap-6 text-[12.5px] font-semibold ${
                slide.dark ? "text-white/65" : "text-[#6b7a88]"
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/15 text-sm">✓</span>
                گارانتی ۱۸ ماهه
              </span>
              <span className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/15 text-sm">⚡</span>
                ارسال فوری تهران
              </span>
              <span className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/15 text-sm">↺</span>
                ۷ روز ضمانت بازگشت
              </span>
            </div>
          </div>

          {/* Product image — clean, no floating sales/rating boxes */}
          <div className="order-1 relative flex items-center justify-center md:order-2">
            <div
              className="absolute h-[280px] w-[280px] rounded-full blur-2xl md:h-[340px] md:w-[340px]"
              style={{
                background: slide.dark
                  ? "radial-gradient(circle, rgba(194,165,109,0.2) 0%, transparent 70%)"
                  : "radial-gradient(circle, rgba(255,255,255,0.9) 0%, transparent 70%)",
              }}
            />
            <div
              className="relative h-[280px] w-[280px] overflow-hidden rounded-[32px] border border-white/50 shadow-[0_30px_80px_rgba(44,57,71,0.18)] md:h-[360px] md:w-[360px]"
              style={{
                background: slide.dark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.55)",
                backdropFilter: "blur(8px)",
              }}
            >
              <img
                key={slide.id}
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover fade-up"
              />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-5 left-5 flex items-center gap-2 md:bottom-8 md:left-8">
          <button
            type="button"
            onClick={prev}
            className={`grid h-10 w-10 place-items-center rounded-xl border transition ${
              slide.dark
                ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
                : "border-[#d0d8e0] bg-white/80 text-[#2C3947] hover:bg-white"
            }`}
            aria-label="قبلی"
          >
            <ChevronRight size={18} />
          </button>
          <button
            type="button"
            onClick={next}
            className={`grid h-10 w-10 place-items-center rounded-xl border transition ${
              slide.dark
                ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
                : "border-[#d0d8e0] bg-white/80 text-[#2C3947] hover:bg-white"
            }`}
            aria-label="بعدی"
          >
            <ChevronLeft size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 right-1/2 flex translate-x-1/2 gap-2 md:bottom-8">
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index
                  ? "w-8 bg-[#C2A56D]"
                  : slide.dark
                    ? "w-2.5 bg-white/35"
                    : "w-2.5 bg-[#2C3947]/25"
              }`}
              aria-label={`اسلاید ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
