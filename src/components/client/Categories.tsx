import { categories } from "../../data/store";

type Props = {
  onSelectCategory?: (catId: string) => void;
};

export default function Categories({ onSelectCategory }: Props) {
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
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
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
                {c.count.toLocaleString("fa-IR")}+ کالا
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}