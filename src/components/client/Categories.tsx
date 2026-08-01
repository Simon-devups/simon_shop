import { categories } from "../../data/store";

type Props = {
  onSelectCategory?: (catId: string) => void;
};

export default function Categories({ onSelectCategory }: Props) {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-6 md:px-6 md:py-8">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <div className="mb-1 text-[12px] font-bold text-[#547A95]">دسته‌بندی‌ها</div>
          <h2 className="text-[22px] font-extrabold tracking-tight text-[#2C3947] md:text-[26px]">
            خرید بر اساس دسته
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        {categories.map((c, i) => (
          <button
            key={c.id}
            type="button"
            onClick={() => onSelectCategory?.(c.id)}
            className="group fade-up flex flex-col items-center gap-3 rounded-2xl border border-[#d8dee6] bg-white p-4 text-center shadow-[0_4px_16px_rgba(44,57,71,0.04)] transition hover:-translate-y-1 hover:border-[#547A95] hover:shadow-[0_16px_36px_rgba(44,57,71,0.1)]"
            style={{ animationDelay: `${i * 0.04}s` }}
          >
            <div
              className="grid h-16 w-16 place-items-center rounded-2xl text-[28px] transition group-hover:scale-110"
              style={{
                background: "linear-gradient(145deg, #E8EDF2 0%, #f7f9fb 100%)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)",
              }}
            >
              {c.icon}
            </div>
            <div>
              <div className="text-[13px] font-extrabold text-[#2C3947]">{c.name}</div>
              <div className="num mt-0.5 text-[11px] text-[#8a96a3]">
                {c.count.toLocaleString("fa-IR")}+ کالا
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
