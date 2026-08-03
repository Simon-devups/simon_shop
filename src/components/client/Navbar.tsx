"use client"
import { useEffect, useState } from "react";
import {
  Search, ShoppingBag, User, Heart, Menu, X, ChevronDown,
  MapPin, Phone, Sparkles
} from "lucide-react";
import { navCategories } from "../../data/store";

type Props = {
  cartCount: number;
  onCartOpen: () => void;
  search: string;
  onSearch: (v: string) => void;
  onNavigate: (page: string, param?: string) => void;
  onOpenAuth: (tab: "login" | "signup") => void;
  isLoggedIn: boolean;
  userName?: string;
  currentPage?: string;
};

export default function Navbar({
  cartCount,
  onCartOpen,
  search,
  onSearch,
  onNavigate,
  onOpenAuth,
  isLoggedIn,
  userName = "امیرحسین رضایی",
  currentPage = "home",
}: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top thin bar */}
      <div className="hidden border-b border-[#d8dee6] bg-[#2C3947] text-white md:block">
        <div className="mx-auto flex h-9 max-w-[1440px] items-center justify-between px-6 text-[12px]">
          <div className="flex items-center gap-5 text-white/80">
            <span className="flex items-center gap-1.5">
              <Phone size={12} className="text-[#C2A56D]" />
              پشتیبانی: ۰۲۱-۹۱۰۰۱۲۳۴
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={12} className="text-[#C2A56D]" />
              ارسال به سراسر ایران
            </span>
          </div>
          <div className="flex items-center gap-4 text-white/75">
            <button
              type="button"
              onClick={() => onNavigate("orders")}
              className={`transition hover:text-white ${
                currentPage === "orders" ? "font-extrabold text-[#C2A56D]" : ""
              }`}
            >
              پیگیری سفارش
            </button>
            <button
              type="button"
              onClick={() => onNavigate("products", "all")}
              className="transition hover:text-white"
            >
              فهرست محصولات
            </button>
            <button
              type="button"
              onClick={() =>
                isLoggedIn ? onNavigate("profile") : onOpenAuth("login")
              }
              className="transition hover:text-[#C2A56D]"
            >
              باشگاه مشتریان
            </button>
          </div>
        </div>
      </div>

      {/* Main sticky nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[#d8dee6]/80 bg-white/85 shadow-[0_8px_30px_rgba(44,57,71,0.08)] backdrop-blur-xl"
            : "border-b border-transparent bg-[#E8EDF2]/90 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-4 md:px-6">
          {/* Row 1 */}
          <div className="flex h-[72px] items-center gap-3 md:gap-5">
            {/* Mobile menu */}
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-xl border border-[#d8dee6] bg-white text-[#2C3947] lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="منو"
            >
              <Menu size={20} />
            </button>

            {/* Logo */}
            <button
              type="button"
              onClick={() => onNavigate("home")}
              className="flex shrink-0 items-center gap-2.5 text-right"
            >
              <div
                className="grid h-11 w-11 place-items-center rounded-2xl text-white shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #2C3947 0%, #547A95 100%)",
                  boxShadow: "0 8px 20px rgba(84,122,149,0.35)",
                }}
              >
                <Sparkles size={20} strokeWidth={2.2} />
              </div>
              <div className="hidden sm:block">
                <div className="text-[17px] font-extrabold tracking-tight text-[#2C3947]">
                  نوا استور
                </div>
                <div className="text-[10px] font-medium text-[#8a96a3]">
                  فروشگاه دیجیتال پریمیوم
                </div>
              </div>
            </button>

            {/* Search */}
            <div className="relative mx-auto hidden min-w-0 flex-1 max-w-2xl md:block">
              <div className="relative">
                <Search
                  size={18}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8a96a3]"
                />
                <input
                  type="search"
                  value={search}
                  onChange={(e) => onSearch(e.target.value)}
                  placeholder="جستجوی گوشی، لپ‌تاپ، هدفون، برند..."
                  className="store-input h-12 w-full rounded-2xl border border-[#d8dee6] bg-white pr-12 pl-28 text-[13.5px] text-[#2C3947] shadow-[0_2px_10px_rgba(44,57,71,0.04)] transition placeholder:text-[#a0aab5]"
                />
                <button
                  type="button"
                  className="absolute left-1.5 top-1/2 flex h-9 -translate-y-1/2 items-center gap-1.5 rounded-xl bg-[#2C3947] px-4 text-[12.5px] font-bold text-white transition hover:bg-[#547A95]"
                >
                  جستجو
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="mr-auto flex items-center gap-1.5 md:gap-2">
              {isLoggedIn ? (
                <button
                  type="button"
                  onClick={() => onNavigate("profile")}
                  className={`hidden h-11 items-center gap-2 rounded-xl border px-3.5 text-[13px] font-bold transition sm:flex ${
                    currentPage === "profile"
                      ? "border-[#547A95] bg-[#2C3947] text-white"
                      : "border-[#d8dee6] bg-white text-[#2C3947] hover:border-[#547A95] hover:text-[#547A95]"
                  }`}
                >
                  <User size={17} />
                  <span className="hidden lg:inline">{userName}</span>
                </button>
              ) : (
                <div className="hidden items-center gap-1 sm:flex">
                  <button
                    type="button"
                    onClick={() => onOpenAuth("login")}
                    className="h-11 rounded-xl border border-[#d8dee6] bg-white px-3.5 text-[13px] font-extrabold text-[#2C3947] transition hover:border-[#547A95] hover:text-[#547A95]"
                  >
                    ورود | ثبت‌نام
                  </button>
                </div>
              )}

              <button
                type="button"
                onClick={() =>
                  isLoggedIn ? onNavigate("profile") : onOpenAuth("login")
                }
                className="relative grid h-11 w-11 place-items-center rounded-xl border border-[#d8dee6] bg-white text-[#2C3947] transition hover:border-[#547A95]"
                aria-label="علاقه‌مندی‌ها"
              >
                <Heart size={18} />
              </button>

              <button
                type="button"
                onClick={onCartOpen}
                className="relative flex h-11 items-center gap-2 rounded-xl border border-[#d8dee6] bg-white px-3 text-[13px] font-semibold text-[#2C3947] transition hover:border-[#C2A56D]"
              >
                <ShoppingBag size={18} />
                <span className="hidden md:inline">سبد خرید</span>
                {cartCount > 0 && (
                  <span className="num absolute -left-1.5 -top-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-[#C2A56D] px-1 text-[10px] font-extrabold text-[#2C3947] shadow">
                    {cartCount.toLocaleString("fa-IR")}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile search */}
          <div className="pb-3 md:hidden">
            <div className="relative">
              <Search
                size={16}
                className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8a96a3]"
              />
              <input
                type="search"
                value={search}
                onChange={(e) => onSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onNavigate("search", search);
                  }
                }}
                placeholder="جستجو در نوا استور..."
                className="store-input h-11 w-full rounded-xl border border-[#d8dee6] bg-white pr-10 pl-4 text-[13px] text-[#2C3947] placeholder:text-[#a0aab5]"
              />
            </div>
          </div>

          {/* Categories row */}
          <div className="hidden h-12 items-center gap-1 border-t border-[#d8dee6]/70 lg:flex">
            <div className="relative">
              <button
                type="button"
                onClick={() => setCatOpen(!catOpen)}
                className="flex items-center gap-2 rounded-xl bg-[#2C3947] px-4 py-2 text-[12.5px] font-bold text-white transition hover:bg-[#547A95]"
              >
                <Menu size={15} />
                دسته‌بندی‌ها
                <ChevronDown
                  size={14}
                  className={`transition ${catOpen ? "rotate-180" : ""}`}
                />
              </button>
              {catOpen && (
                <div className="absolute right-0 top-[calc(100%+8px)] z-50 w-64 overflow-hidden rounded-2xl border border-[#d8dee6] bg-white py-2 shadow-[0_20px_50px_rgba(44,57,71,0.15)]">
                  {navCategories.map((c) => (
                    <button
                      key={c}
                      type="button"
                      className="flex w-full items-center justify-between px-4 py-2.5 text-[13px] font-medium text-[#2C3947] transition hover:bg-[#E8EDF2] hover:text-[#547A95]"
                      onClick={() => {
                        setCatOpen(false);
                        onNavigate("products", c);
                      }}
                    >
                      {c}
                      <span className="text-[#c5ced6]">‹</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <nav className="mr-2 flex items-center gap-1 overflow-x-auto no-scrollbar">
              {navCategories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => onNavigate("products", c)}
                  className="nav-link whitespace-nowrap rounded-lg px-3 py-2 text-[12.5px] font-semibold text-[#4a5a6a] transition hover:bg-white hover:text-[#2C3947]"
                >
                  {c}
                </button>
              ))}
            </nav>

            <div className="mr-auto flex items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate("products", "all")}
                className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12.5px] font-extrabold text-[#C2A56D] transition hover:bg-white"
              >
                <span className="pulse-soft">🔥</span>
                پیشنهاد شگفت‌انگیز
              </button>
              <button
                type="button"
                onClick={() => onNavigate("products", "phones")}
                className="rounded-lg px-3 py-1.5 text-[12.5px] font-bold text-[#547A95] transition hover:bg-white"
              >
                گوشی‌ها
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-[#2C3947]/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="absolute inset-y-0 right-0 w-[300px] overflow-y-auto bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#e8edf2] p-4">
              <div className="flex items-center gap-2 font-extrabold text-[#2C3947]">
                <Sparkles size={18} className="text-[#547A95]" />
                نوا استور
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-lg bg-[#E8EDF2]"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="space-y-1 p-3">
              {isLoggedIn ? (
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onNavigate("profile");
                  }}
                  className="flex w-full items-center gap-3 rounded-2xl bg-[#2C3947] px-4 py-3.5 text-right text-[14px] font-extrabold text-white"
                >
                  <User size={18} />
                  <span>حساب کاربری ({userName})</span>
                </button>
              ) : (
                <div className="grid grid-cols-2 gap-2 pb-2">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileOpen(false);
                      onOpenAuth("login");
                    }}
                    className="rounded-xl bg-[#2C3947] py-3 text-[13.5px] font-bold text-white"
                  >
                    ورود به حساب
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileOpen(false);
                      onOpenAuth("signup");
                    }}
                    className="rounded-xl border border-[#d8dee6] bg-[#F7F9FB] py-3 text-[13.5px] font-bold text-[#2C3947]"
                  >
                    ثبت‌نام
                  </button>
                </div>
              )}

              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onNavigate("orders");
                }}
                className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-right text-[13.5px] font-bold text-[#547A95] hover:bg-[#E8EDF2]"
              >
                <span>پیگیری سفارش‌های من</span>
                <span>‹</span>
              </button>

              <div className="my-2 border-t border-[#e8edf2]" />

              <div className="px-3 py-1 text-xs font-bold text-[#8a96a3]">
                دسته‌بندی‌های کالا
              </div>
              {navCategories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onNavigate("products", c);
                  }}
                  className="block w-full rounded-xl px-3 py-3 text-right text-[13.5px] font-semibold text-[#2C3947] hover:bg-[#E8EDF2]"
                >
                  {c}
                </button>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
