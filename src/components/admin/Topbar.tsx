"use client";

import { usePathname } from "next/navigation";
import { Search, Bell, MessageCircle, Sun, Moon, ChevronLeft } from "lucide-react";
import { getPageTitle } from "@/lib/nav-config";

export default function Topbar() {
  const pathname = usePathname();
  const breadcrumb = [{ label: getPageTitle(pathname) }];

  return (
    <header className="topbar">
      <div className="topbar-right">
        <nav className="breadcrumb" aria-label="مسیر">
          <span>خانه</span>
          <ChevronLeft size={14} className="sep" />
          {breadcrumb.map((b, i) => (
            <span key={i} className={i === breadcrumb.length - 1 ? "crumb-current" : ""}>
              {b.label}
              {i < breadcrumb.length - 1 && (
                <ChevronLeft size={14} className="sep" style={{ marginRight: 8, marginLeft: 8 }} />
              )}
            </span>
          ))}
        </nav>
      </div>

      <div className="topbar-left">
        <div className="search-box">
          <Search size={16} className="search-icon" />
          <input type="text" placeholder="جستجو در محصولات، سفارش‌ها، کاربران..." />
          <span className="kbd">⌘ K</span>
        </div>

        <div className="theme-toggle" role="group" aria-label="تم">
          <button className="active" title="روشن">
            <Sun size={15} />
          </button>
          <button title="تاریک">
            <Moon size={15} />
          </button>
        </div>

        <button className="icon-btn" title="پیام‌ها">
          <MessageCircle size={18} />
        </button>
        <button className="icon-btn" title="اعلان‌ها">
          <Bell size={18} />
          <span className="dot" />
        </button>

        <div className="profile">
          <div className="profile-info">
            <div className="profile-name">امیر حسینی</div>
            <div className="profile-role">مدیر ارشد</div>
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
