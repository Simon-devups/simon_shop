"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Heart, ChevronLeft, Search, ShoppingCart, User, Menu,
} from "lucide-react";
import { PromoRibbon } from "./Promoribbon";
import { useCart } from "@/context/CartContext";

export function Navbar() {
  const [sticky, setSticky] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { count } = useCart();

  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  };

  return (
    <div
      className="sticky top-0 z-40 bg-white transition-shadow duration-200 ease-out"
      style={sticky ? { boxShadow: "0 8px 30px rgba(0,0,0,.06)" } : undefined}
    >
      <PromoRibbon />
      <div className="max-w-[1600px] mx-auto px-6 py-3 flex items-center gap-6">
        <Link href="/" className="text-2xl font-extrabold text-[#1D4ED8] shrink-0">
          فروشگاه
        </Link>

        <Link
          href="/#categories"
          className="hidden md:flex items-center gap-1.5 text-sm text-[#374151] border border-[#E5E7EB] rounded-[12px] px-3 py-2 hover:bg-[#F5F7FA] transition-colors duration-150 ease-out shrink-0"
        >
          <Menu size={16} strokeWidth={2} />
          دسته‌بندی‌ها
        </Link>

        <form onSubmit={submitSearch} className="flex-1 relative" role="search">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="جستجوی کالا، برند و دسته‌بندی مورد نظر..."
            aria-label="جستجو در فروشگاه"
            className="w-full bg-[#F5F7FA] rounded-[12px] py-2.5 pr-4 pl-11 text-sm border border-transparent focus:border-[#1D4ED8] focus:bg-white outline-none transition-colors duration-150 ease-out"
          />
          <button
            type="submit"
            aria-label="جستجو"
            className="absolute left-3 top-1/2 -translate-y-1/2 grid h-7 w-7 place-items-center rounded-full text-[#6B7280] hover:text-[#1D4ED8] hover:bg-[#EFF4FE] transition-colors duration-150 ease-out"
          >
            <Search size={17} strokeWidth={2} />
          </button>
        </form>

        <div className="flex items-center gap-1 shrink-0">
          <Link
            href="/profile"
            className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-[12px] hover:bg-[#F5F7FA] transition-colors duration-150 ease-out text-[#374151]"
          >
            <User size={19} strokeWidth={2} />
            <span className="text-[11px]">حساب من</span>
          </Link>
          <button className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-[12px] hover:bg-[#F5F7FA] transition-colors duration-150 ease-out text-[#374151]">
            <Heart size={19} strokeWidth={2} />
            <span className="text-[11px]">علاقه‌مندی</span>
          </button>
          <button
            onClick={() => router.push("/cart")}
            className="relative flex flex-col items-center gap-0.5 px-3 py-1 rounded-[12px] hover:bg-[#F5F7FA] transition-colors duration-150 ease-out text-[#374151]"
          >
            <ShoppingCart size={19} strokeWidth={2} />
            {count > 0 && (
              <span className="absolute -top-0.5 right-1 bg-[#EF4444] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                {count > 99 ? "۹۹+" : count.toLocaleString("fa-IR")}
              </span>
            )}
            <span className="text-[11px]">سبد خرید</span>
          </button>
        </div>
      </div>
    </div>
  );
}