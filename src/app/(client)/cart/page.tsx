"use client";

import { useState } from "react";
import { Check, Minus, Plus, Ticket, Trash2, Truck } from "lucide-react";

/* ────────────────────────────────────────────────────────────────────────────
   Types
──────────────────────────────────────────────────────────────────────────── */
type CartLine = {
  id: string;
  name: string;
  price: number; // تومان
  oldPrice?: number; // تومان (قبل از تخفیف)
  quantity: number;
  imageBg: string; // رنگ پس‌زمینه تصویر placeholder
  inStock: boolean;
};

/* ────────────────────────────────────────────────────────────────────────────
   Persians helpers (اینلاین تا یک فایل بماند)
──────────────────────────────────────────────────────────────────────────── */
const FA = "۰۱۲۳۴۵۶۷۸۹";
const toFa = (n: number | string) =>
  String(n).replace(/[0-9]/g, (d) => FA[Number(d)]);

const faPrice = (n: number) =>
  toFa(Math.round(n).toLocaleString("en-US")) + " تومان";

/* ────────────────────────────────────────────────────────────────────────────
   Constants
──────────────────────────────────────────────────────────────────────────── */
const FREE_SHIPPING_THRESHOLD = 2_000_000;
const SHIPPING_COST = 35_000;
const TAX_RATE = 0.09;
const COUPON = { code: "PARS10", percentOff: 10 };

const INITIAL_LINES: CartLine[] = [
  {
    id: "p-1",
    name: "هدفون بی‌سیم سونی مدل WH-1000XM5",
    price: 8_950_000,
    oldPrice: 10_100_000,
    quantity: 1,
    imageBg: "#EFF4FF",
    inStock: true,
  },
  {
    id: "p-2",
    name: "ساعت هوشمند اپل واچ سری ۹",
    price: 23_400_000,
    oldPrice: 24_700_000,
    quantity: 1,
    imageBg: "#F0FDF4",
    inStock: true,
  },
  {
    id: "p-3",
    name: "کفش رانینگ نایک ایر زوم پگاسوس",
    price: 3_150_000,
    quantity: 2,
    imageBg: "#FFF7ED",
    inStock: true,
  },
  {
    id: "p-4",
    name: "لپ‌تاپ ایسوس راگ ست‌ریکس گیمینگ",
    price: 48_750_000,
    oldPrice: 53_000_000,
    quantity: 1,
    imageBg: "#FEF2F2",
    inStock: false,
  },
];

/* ────────────────────────────────────────────────────────────────────────────
   Sub-components
──────────────────────────────────────────────────────────────────────────── */

function QuantityStepper({
  value,
  onChange,
}: {
  value: number;
  onChange: (n: number) => void;
}) {
  const clamp = (n: number) => Math.min(99, Math.max(1, n));
  return (
    <div className="inline-flex items-center rounded-[12px] border border-[#E5E7EB] bg-white">
      <button
        type="button"
        onClick={() => onChange(clamp(value - 1))}
        disabled={value <= 1}
        aria-label="کاهش تعداد"
        className="grid h-9 w-9 place-items-center text-[#374151] transition-colors duration-150 ease-out hover:text-[#1D4ED8] disabled:cursor-not-allowed disabled:text-[#9CA3AF]"
      >
        <Minus size={16} strokeWidth={2} />
      </button>
      <input
        type="number"
        inputMode="numeric"
        value={value}
        min={1}
        max={99}
        onChange={(e) => {
          const p = Number(e.target.value);
          if (Number.isFinite(p)) onChange(clamp(p));
        }}
        aria-label="تعداد کالا"
        className="w-10 border-0 bg-transparent text-center text-sm font-semibold text-[#111827] focus:outline-none"
      />
      <button
        type="button"
        onClick={() => onChange(clamp(value + 1))}
        disabled={value >= 99}
        aria-label="افزایش تعداد"
        className="grid h-9 w-9 place-items-center text-[#374151] transition-colors duration-150 ease-out hover:text-[#1D4ED8] disabled:cursor-not-allowed disabled:text-[#9CA3AF]"
      >
        <Plus size={16} strokeWidth={2} />
      </button>
    </div>
  );
}

function LineItem({
  line,
  onRemove,
  onQuantity,
}: {
  line: CartLine;
  onRemove: () => void;
  onQuantity: (n: number) => void;
}) {
  const discount = line.oldPrice
    ? Math.round(((line.oldPrice - line.price) / line.oldPrice) * 100)
    : 0;

  return (
    <li
      className="flex gap-4 border-b border-[#F1F5F9] p-5 last:border-b-0 sm:gap-5"
      aria-label={line.name}
    >
      {/* Thumbnail */}
      <div
        className="relative grid h-[104px] w-[88px] shrink-0 place-items-center overflow-hidden rounded-[16px] sm:h-[120px] sm:w-[104px]"
        style={{ backgroundColor: line.imageBg }}
      >
        <div className="h-16 w-10 rounded-[12px] border border-[#E5E7EB] bg-white" />
        {!line.inStock && (
          <span className="absolute inset-0 grid place-items-center bg-white/60 text-[10px] font-bold text-[#EF4444]">
            ناموجود
          </span>
        )}
      </div>

      {/* Details */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-2 text-sm font-semibold leading-relaxed text-[#111827]">
            {line.name}
          </h3>
          <button
            type="button"
            onClick={onRemove}
            aria-label="حذف کالا"
            className="grid h-8 w-8 shrink-0 place-items-center rounded-[8px] text-[#9CA3AF] transition-colors duration-150 ease-out hover:bg-[#FEF2F2] hover:text-[#EF4444]"
          >
            <Trash2 size={16} strokeWidth={2} />
          </button>
        </div>

        <p className="mt-1 text-xs text-[#6B7280]">تعداد موجود: ۱۰ عدد</p>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-3">
          {/* Price */}
          <div className="flex flex-col">
            {line.oldPrice && (
              <span className="text-xs text-[#9CA3AF] line-through">
                {faPrice(line.oldPrice)}
              </span>
            )}
            <div className="flex items-center gap-2">
              <span className="text-[15px] font-bold tracking-tight text-[#111827]">
                {faPrice(line.price)}
              </span>
              {discount > 0 && (
                <span className="rounded-[8px] bg-[#FEF2F2] px-1.5 py-0.5 text-[11px] font-bold text-[#EF4444]">
                  {toFa(discount)}٪
                </span>
              )}
            </div>
          </div>

          <QuantityStepper value={line.quantity} onChange={onQuantity} />
        </div>
      </div>
    </li>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   Cart Page (single file, no header / footer / layout)
──────────────────────────────────────────────────────────────────────────── */
export default function Cart() {
  const [lines, setLines] = useState<CartLine[]>(INITIAL_LINES);
  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState(false);
  const [checkout, setCheckout] = useState<
    "idle" | "loading" | "success"
  >("idle");

  const updateQuantity = (id: string, quantity: number) =>
    setLines((ls) =>
      ls.map((l) => (l.id === id ? { ...l, quantity } : l))
    );

  const removeLine = (id: string) =>
    setLines((ls) => ls.filter((l) => l.id !== id));

  const subtotal = lines.reduce(
    (sum, l) => sum + l.price * l.quantity,
    0
  );

  const discount = applied
    ? Math.round((subtotal * COUPON.percentOff) / 100)
    : 0;

  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const tax = Math.round(((subtotal - discount) * TAX_RATE) / 10) * 10;
  const total = subtotal - discount + shipping + tax;
  const count = lines.reduce((s, l) => s + l.quantity, 0);

  const progress = Math.min(
    100,
    Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100)
  );
  const remaining = FREE_SHIPPING_THRESHOLD - subtotal;

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === COUPON.code) {
      setApplied(true);
    }
  };

  const placeOrder = () => {
    if (lines.length === 0 || checkout !== "idle") return;
    setCheckout("loading");
    setTimeout(() => setCheckout("success"), 1400);
  };

  const empty = lines.length === 0;

  return (
    <div dir="rtl" className="bg-[#F5F7FA]">
      <div className="mx-auto w-full max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        {/* Heading */}
        <div className="mb-6 lg:mb-10">
          <h1 className="text-xl font-extrabold text-[#111827] lg:text-2xl">
            سبد خرید شما
          </h1>
          <p className="mt-1 text-sm text-[#6B7280]">
            {empty
              ? "سبد خرید شما خالی است."
              : `${toFa(count)} کالا در سبد شما`}
          </p>
        </div>

        {/* Free-shipping progress */}
        {!empty && subtotal < FREE_SHIPPING_THRESHOLD && (
          <div className="mb-6 flex flex-col gap-2 rounded-[16px] border border-[#E5E7EB] bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,.06)]">
            <div className="flex items-center gap-2 text-sm text-[#374151]">
              <Truck size={18} strokeWidth={2} className="text-[#1D4ED8]" />
              <span>
                با خرید{" "}
                <b className="text-[#1D4ED8]">{faPrice(remaining)}</b> دیگر
                ارسال رایگان شوید
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#F1F5F9]">
              <div
                className="h-full rounded-full bg-[#1D4ED8] transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {empty ? (
          /* Empty state */
          <div className="grid place-items-center rounded-[16px] border border-[#E5E7EB] bg-white px-6 py-16 text-center shadow-[0_8px_30px_rgba(0,0,0,.06)]">
            <div className="grid h-20 w-20 place-items-center rounded-[20px] bg-[#F1F5F9]">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9CA3AF"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"
                />
              </svg>
            </div>
            <h2 className="mt-6 text-lg font-bold text-[#111827]">
              سبد خرید شما خالی است
            </h2>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#6B7280]">
              هنوز محصولی به سبد خرید اضافه نکرده‌اید. برای مشاهده محصولات به
              فروشگاه بازگردید.
            </p>
            <button
              type="button"
              className="mt-6 h-11 rounded-[16px] bg-[#1D4ED8] px-8 text-sm font-medium text-white transition-colors duration-150 ease-out hover:bg-[#1E40AF]"
            >
              بازگشت به فروشگاه
            </button>
          </div>
        ) : (
          /* Layout: items + summary */
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
            {/* Items list */}
            <section className="lg:col-span-8">
              <ul className="overflow-hidden rounded-[16px] border border-[#E5E7EB] bg-white shadow-[0_8px_30px_rgba(0,0,0,.06)]">
                {lines.map((line) => (
                  <LineItem
                    key={line.id}
                    line={line}
                    onRemove={() => removeLine(line.id)}
                    onQuantity={(n) => updateQuantity(line.id, n)}
                  />
                ))}
              </ul>

              <p className="mt-3 px-1 text-xs text-[#9CA3AF]">
                * قیمت نهایی کالاها پس از اعمال تخفیف و مالیات محاسبه می‌شود.
              </p>
            </section>

            {/* Summary */}
            <aside className="lg:col-span-4">
              <div className="rounded-[16px] border border-[#E5E7EB] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,.06)]">
                <h2 className="text-base font-bold text-[#111827]">
                  خلاصه سفارش
                </h2>

                {/* Coupon */}
                <div className="mt-5 flex items-center gap-2">
                  <Ticket
                    size={18}
                    strokeWidth={2}
                    className="shrink-0 text-[#1D4ED8]"
                  />
                  <input
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="کد تخفیف"
                    disabled={applied}
                    aria-label="کد تخفیف"
                    className="min-w-0 flex-1 rounded-[16px] border border-[#E5E7EB] bg-[#F5F7FA] px-4 py-2.5 text-sm text-[#111827] transition-colors duration-150 ease-out placeholder:text-[#9CA3AF] focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15"
                  />
                  <button
                    type="button"
                    onClick={applyCoupon}
                    disabled={applied}
                    className="h-10 shrink-0 rounded-[16px] bg-[#1D4ED8] px-4 text-sm font-medium text-white transition-colors duration-150 ease-out hover:bg-[#1E40AF] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    اعمال
                  </button>
                </div>
                {applied && (
                  <p className="mt-2 flex items-center gap-1 text-xs font-medium text-[#22C55E]">
                    <Check size={14} strokeWidth={2.5} />
                    کد تخفیف «{COUPON.code}» با موفقیت اعمال شد
                  </p>
                )}

                {/* Totals */}
                <dl className="mt-5 space-y-3 border-t border-[#F1F5F9] pt-5 text-sm">
                  <div className="flex items-center justify-between text-[#374151]">
                    <dt>جمع کالاها</dt>
                    <dd className="font-medium text-[#111827]">
                      {faPrice(subtotal)}
                    </dd>
                  </div>
                  {discount > 0 && (
                    <div className="flex items-center justify-between text-[#22C55E]">
                      <dt>تخفیف کالاها</dt>
                      <dd className="font-medium">− {faPrice(discount)}</dd>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-[#374151]">
                    <dt>هزینه ارسال</dt>
                    <dd
                      className={
                        shipping === 0
                          ? "font-medium text-[#22C55E]"
                          : "font-medium text-[#111827]"
                      }
                    >
                      {shipping === 0 ? "رایگان" : faPrice(shipping)}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between text-[#374151]">
                    <dt>مالیات (۹٪)</dt>
                    <dd className="font-medium text-[#111827]">
                      {faPrice(tax)}
                    </dd>
                  </div>

                  <div className="flex items-center justify-between border-t border-[#F1F5F9] pt-4">
                    <dt className="text-base font-bold text-[#111827]">
                      مبلغ قابل پرداخت
                    </dt>
                    <dd className="text-lg font-extrabold tracking-tight text-[#1D4ED8]">
                      {faPrice(total)}
                    </dd>
                  </div>
                </dl>

                {/* Checkout */}
                <button
                  type="button"
                  onClick={placeOrder}
                  disabled={checkout !== "idle"}
                  className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-[16px] bg-[#1D4ED8] text-[15px] font-medium text-white shadow-[0_8px_20px_rgba(29,78,216,.25)] transition-all duration-200 ease-out hover:bg-[#1E40AF] hover:shadow-[0_12px_28px_rgba(29,78,216,.32)] active:translate-y-px disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {checkout === "loading" && (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  )}
                  {checkout === "success" && (
                    <Check size={18} strokeWidth={2.5} />
                  )}
                  {checkout === "idle" && "ادامه فرایند خرید"}
                  {checkout === "loading" && "در حال ثبت سفارش…"}
                  {checkout === "success" && "سفارش ثبت شد"}
                </button>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
