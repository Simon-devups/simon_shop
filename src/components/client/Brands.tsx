import { brands } from "../../data/store";

export default function Brands() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-8 md:px-6 md:py-10">
      <div className="mb-6 text-center">
        <div className="mb-1 text-[12px] font-bold text-[#547A95]">برندهای معتبر</div>
        <h2 className="text-[22px] font-extrabold tracking-tight text-[#2C3947] md:text-[26px]">
          همکاری با بهترین‌ها
        </h2>
        <p className="mx-auto mt-2 max-w-md text-[13.5px] text-[#6b7a88]">
          محصولات اصل با گارانتی معتبر از برندهای جهانی
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {brands.map((b) => (
          <a
            key={b.name}
            href={`#brand-${b.name}`}
            className="brand-card group flex flex-col items-center justify-center gap-3 rounded-2xl border border-[#d8dee6] bg-white px-4 py-7 shadow-[0_4px_16px_rgba(44,57,71,0.04)]"
          >
            <div
              className="grid h-14 w-14 place-items-center rounded-2xl text-[26px] transition group-hover:scale-110"
              style={{
                background: "linear-gradient(145deg, #E8EDF2 0%, #ffffff 100%)",
                border: "1px solid #e4e9ef",
              }}
            >
              {b.logo}
            </div>
            <div className="text-center">
              <div className="text-[14px] font-extrabold text-[#2C3947] transition group-hover:text-[#547A95]">
                {b.name}
              </div>
              <div className="mt-0.5 text-[11.5px] font-medium text-[#8a96a3]">{b.fa}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
