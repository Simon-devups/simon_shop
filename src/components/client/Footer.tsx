"use client"
import {
  Sparkles, Send, Phone, Mail, MapPin, Share2, MessageCircle, Play, AtSign
} from "lucide-react";

export default function Footer() {
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
