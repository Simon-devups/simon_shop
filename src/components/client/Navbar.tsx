"use client"

import { useEffect, useState } from "react";
import {
  Heart, Star, ShieldCheck, Truck, BadgeCheck, Headphones, RotateCcw,
  ChevronLeft, ChevronRight, Search, ShoppingCart, User, Menu, X,
  ThumbsUp, MessageSquare, Check, Minus, Plus,
} from "lucide-react";
import { PromoRibbon } from "@/app/(client)/product/[id]/page";

export function Navbar() {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="sticky top-0 z-40 bg-white transition-shadow duration-200 ease-out"
      style={sticky ? { boxShadow: "0 8px 30px rgba(0,0,0,.06)" } : undefined}
    >
      <PromoRibbon />
      <div className="max-w-[1600px] mx-auto px-6 py-3 flex items-center gap-6">
        <div className="text-2xl font-extrabold text-[#1D4ED8] shrink-0">فروشگاه</div>

        <button className="hidden md:flex items-center gap-1.5 text-sm text-[#374151] border border-[#E5E7EB] rounded-[12px] px-3 py-2 hover:bg-[#F5F7FA] transition-colors duration-150 ease-out shrink-0">
          <Menu size={16} strokeWidth={2} />
          دسته‌بندی‌ها
        </button>

        <div className="flex-1 relative">
          <input
            placeholder="جستجوی کالا، برند و دسته‌بندی مورد نظر..."
            className="w-full bg-[#F5F7FA] rounded-[12px] py-2.5 pr-4 pl-11 text-sm border border-transparent focus:border-[#1D4ED8] focus:bg-white outline-none transition-colors duration-150 ease-out"
          />
          <Search size={17} strokeWidth={2} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]" />
        </div>

        <div className="flex items-center gap-1 shrink-0">
          <button className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-[12px] hover:bg-[#F5F7FA] transition-colors duration-150 ease-out text-[#374151]">
            <User size={19} strokeWidth={2} />
            <span className="text-[11px]">حساب من</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-[12px] hover:bg-[#F5F7FA] transition-colors duration-150 ease-out text-[#374151]">
            <Heart size={19} strokeWidth={2} />
            <span className="text-[11px]">علاقه‌مندی</span>
          </button>
          <button className="relative flex flex-col items-center gap-0.5 px-3 py-1 rounded-[12px] hover:bg-[#F5F7FA] transition-colors duration-150 ease-out text-[#374151]">
            <ShoppingCart size={19} strokeWidth={2} />
            <span className="absolute -top-0.5 right-1 bg-[#EF4444] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">۲</span>
            <span className="text-[11px]">سبد خرید</span>
          </button>
        </div>
      </div>
    </div>
  );
}
