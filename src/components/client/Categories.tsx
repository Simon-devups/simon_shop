import Link from "next/link";
import type { Category } from "@/lib/client/api";

type Props = {
  categories?: Category[];
  onSelectCategory?: (catId: string) => void;
};

/**
 * داده‌ی موقت (Mock) — فقط برای زمانی‌ست که سرور/API هنوز آماده نیست
 * یا prop خالی/نامعتبر پاس داده شده. وقتی API واقعی وصل شد،
 * می‌تونی این mock رو کامل حذف کنی یا نگه‌داری به‌عنوان fallback.
 */
const MOCK_CATEGORIES: Category[] = [
  { id: "1", name: "موبایل", slug: "mobile", icon: "📱", count: 1240 },
  { id: "2", name: "لپ‌تاپ", slug: "laptop", icon: "💻", count: 530},
  { id: "3", name: "لوازم جانبی", slug: "accessories", icon: "🎧", count: 2100 },
  { id: "4", name: "پوشیدنی", slug: "wearable", icon: "⌚", count: 340 },
  { id: "5", name: "صوتی", slug: "audio", icon: "🔊", count: 410 },
  { id: "6", name: "خانه هوشمند", slug: "smart-home", icon: "🏠", count: 180 },
  { id: "7", name: "گیمینگ", slug: "gaming", icon: "🎮", count: 275 },
  { id: "8", name: "دوربین", slug: "camera", icon: "📷", count: 96 },
];

export default function Categories({ categories, onSelectCategory }: Props) {
  // اگه categories نیومده باشه، خالی باشه یا آرایه نباشه، از mock استفاده کن
  const list =
    Array.isArray(categories) && categories.length > 0
      ? categories
      : MOCK_CATEGORIES;

  return (
    <section className="mx-auto max-w-[1600px] px-4 py-6 md:px-6 md:py-8">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <div className="mb-1 text-[12px] font-bold text-[#1D4ED8]">دسته‌بندی‌ها</div>
          <h2 className="text-[22px] font-extrabold tracking-tight text-[#111827] md:text-[26px]">
            خرید بر اساس دسته
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        {list.map((c) => (
          <Link
            key={c.id}
            href={`/category/${c.slug}`}
            onClick={() => onSelectCategory?.(c.id)}
            className="group flex flex-col items-center gap-3 rounded-[16px] border border-[#E5E7EB] bg-white p-4 text-center transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#1D4ED8] hover:shadow-[0_18px_60px_rgba(0,0,0,0.12)]"
            style={{ boxShadow: "0 8px 30px rgba(0,0,0,.06)" }}
          >
            <div className="grid h-16 w-16 place-items-center rounded-[12px] bg-[#F5F7FA] text-[28px] transition-transform duration-200 ease-out group-hover:scale-105">
              {c.icon}
            </div>
            <div>
              <div className="text-[13px] font-bold text-[#111827]">{c.name}</div>
              <div className="mt-0.5 text-[11px] text-[#6B7280]">
                {(c.count ?? 0).toLocaleString("fa-IR")}+ کالا
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}