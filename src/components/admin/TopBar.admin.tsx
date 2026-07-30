"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import {
  Search,
  Bell,
  MessageCircle,
  Sun,
  Moon,
  ChevronLeft,
} from "lucide-react";

const pageNames: Record<string, string> = {
  dashboard: "داشبورد",
  products: "محصولات",
  categories: "دسته‌بندی‌ها",
  brands: "برندها",
  orders: "سفارش‌ها",
  users: "کاربران",
  comments: "نظرات",
  discounts: "کدهای تخفیف",
  payments: "پرداخت‌ها",
  analytics: "گزارشات",
  settings: "تنظیمات",
  admins: "مدیران",
};

export default function Topbar() {
  const pathname = usePathname();

  const breadcrumbs = useMemo(() => {
    const paths = pathname
      .split("/")
      .filter(Boolean)
      .filter((item) => item !== "admin");

    return paths.map((item) => ({
      href: item,
      label: pageNames[item] ?? item,
    }));
  }, [pathname]);

  return (
    <header className="topbar">
      <div className="topbar-right">
        <nav className="breadcrumb" aria-label="breadcrumb">
          <span>خانه</span>

          {breadcrumbs.map((item, index) => (
            <div
              key={item.href}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <ChevronLeft
                size={14}
                className="sep"
                style={{
                  marginInline: 8,
                }}
              />

              <span
                className={
                  index === breadcrumbs.length - 1
                    ? "crumb-current"
                    : ""
                }
              >
                {item.label}
              </span>
            </div>
          ))}
        </nav>
      </div>

      <div className="topbar-left">
        <div className="search-box">
          <Search
            size={16}
            className="search-icon"
          />

          <input
            type="text"
            placeholder="جستجو در محصولات، سفارش‌ها، کاربران..."
          />

          <span className="kbd">⌘ K</span>
        </div>

        <div
          className="theme-toggle"
          role="group"
        >
          <button
            className="active"
            title="روشن"
          >
            <Sun size={15} />
          </button>

          <button title="تاریک">
            <Moon size={15} />
          </button>
        </div>

        <button
          className="icon-btn"
          title="پیام‌ها"
        >
          <MessageCircle size={18} />
        </button>

        <button
          className="icon-btn"
          title="اعلان‌ها"
        >
          <Bell size={18} />
          <span className="dot" />
        </button>

        <div className="profile">
          <div className="profile-info">
            <div className="profile-name">
              امیر حسینی
            </div>

            <div className="profile-role">
              مدیر ارشد
            </div>
          </div>

          <div className="avatar">
            ا
            <span className="avatar-status" />
          </div>
        </div>
      </div>
    </header>
  );
}