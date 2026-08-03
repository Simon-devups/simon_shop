"use client"
import {
  Sparkles, Send, Phone, Mail, MapPin, Share2, MessageCircle, Play, AtSign
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-[#d8dee6] bg-[#2C3947] text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-5 px-4 py-10 md:flex-row md:px-6">
          <div>
            <h3 className="text-[18px] font-extrabold">عضویت در خبرنامه نوا</h3>
            <p className="mt-1 text-[13px] text-white/60">
              از تخفیف‌ها و محصولات جدید زودتر باخبر شوید
            </p>
          </div>
          <form
            className="flex w-full max-w-md gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="ایمیل شما"
              className="h-12 flex-1 rounded-2xl border border-white/15 bg-white/10 px-4 text-[13px] text-white outline-none placeholder:text-white/40 focus:border-[#C2A56D]"
            />
            <button
              type="submit"
              className="h-12 rounded-2xl bg-[#C2A56D] px-5 text-[13px] font-extrabold text-[#2C3947] transition hover:bg-[#d4bc8a]"
            >
              عضویت
            </button>
          </form>
        </div>
      </div>

      {/* Links */}
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-12 sm:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <div
              className="grid h-10 w-10 place-items-center rounded-xl"
              style={{ background: "linear-gradient(135deg, #547A95, #C2A56D)" }}
            >
              <Sparkles size={18} />
            </div>
            <div className="text-[17px] font-extrabold">نوا استور</div>
          </div>
          <p className="mb-5 text-[13px] leading-7 text-white/60">
            فروشگاه اینترنتی لوازم دیجیتال با تمرکز بر کیفیت، اصالت کالا و تجربه خرید لوکس. ارسال سریع به سراسر کشور.
          </p>
          <div className="flex gap-2">
            {[Share2, MessageCircle, Play, AtSign, Send].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition hover:border-[#C2A56D] hover:text-[#C2A56D]"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-[14px] font-extrabold">دسترسی سریع</h4>
          <ul className="space-y-2.5 text-[13px] text-white/65">
            {["درباره ما", "تماس با ما", "فرصت‌های شغلی", "وبلاگ نوا", "قوانین و مقررات"].map((l) => (
              <li key={l}>
                <a href="#" className="transition hover:text-[#C2A56D]">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-[14px] font-extrabold">خدمات مشتریان</h4>
          <ul className="space-y-2.5 text-[13px] text-white/65">
            {["پیگیری سفارش", "راهنمای خرید", "شرایط بازگشت", "گارانتی محصولات", "سوالات متداول"].map((l) => (
              <li key={l}>
                <a href="#" className="transition hover:text-[#C2A56D]">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-[14px] font-extrabold">تماس با ما</h4>
          <ul className="space-y-3 text-[13px] text-white/65">
            <li className="flex items-start gap-2.5">
              <Phone size={15} className="mt-0.5 shrink-0 text-[#C2A56D]" />
              <span className="num">۰۲۱-۹۱۰۰۱۲۳۴</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={15} className="mt-0.5 shrink-0 text-[#C2A56D]" />
              <span>support@novastore.ir</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-0.5 shrink-0 text-[#C2A56D]" />
              <span>تهران، خیابان ولیعصر، برج نوا، طبقه ۱۲</span>
            </li>
          </ul>

          <div className="mt-5 grid grid-cols-3 gap-2">
            {["✓ نماد اعتماد", "✓ ساماندهی", "✓ اینماد"].map((b) => (
              <div
                key={b}
                className="grid h-14 place-items-center rounded-xl border border-white/10 bg-white/5 text-[10px] font-bold text-white/50"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-3 px-4 py-5 text-[12px] text-white/45 md:flex-row md:px-6">
          <div>© ۱۴۰۳ نوا استور — تمامی حقوق محفوظ است.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">حریم خصوصی</a>
            <a href="#" className="hover:text-white">شرایط استفاده</a>
            <a href="#" className="hover:text-white">نقشه سایت</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
