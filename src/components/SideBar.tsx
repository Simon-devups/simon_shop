"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, Sparkles, ChevronLeft } from "lucide-react";
import { mainNavItems, extraNavItems } from "@/lib/nav-config";
import type { NavItem } from "@/constants/types";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const isActive = (item: NavItem) =>
    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

  const renderItem = (item: NavItem) => {
    const Icon = item.icon;
    const active = isActive(item);
    return (
      <Link
        key={item.id}
        href={`/admin/${item.href}`}
        className={`nav-item ${active ? "active" : ""}`}
        title={collapsed ? item.label : undefined}
        style={{ position: "relative" }}
      >
        <Icon size={18} className="nav-icon" />
        {!collapsed && <span className="nav-label">{item.label}</span>}
        {!collapsed && item.badge && <span className="nav-badge">{item.badge}</span>}
        {collapsed && item.badge && (
          <span
            style={{
              position: "absolute",
              top: 8,
              left: 8,
              background: "#ff4757",
              color: "#fff",
              fontSize: 10,
              padding: "1px 5px",
              borderRadius: 6,
              fontWeight: 700,
            }}
          >
            {item.badge}
          </span>
        )}
      </Link>
    );
  };

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-brand">
        {!collapsed && (
          <div className="brand-mark">
            <div className="brand-logo">
              <Sparkles size={18} strokeWidth={2.5} />
            </div>
            <div>
              <div>نوا مارکت</div>
              <div style={{ fontSize: 10, color: "var(--muted)", fontWeight: 500, marginTop: 1 }}>
                پنل مدیریت
              </div>
            </div>
          </div>
        )}
        {collapsed && (
          <div className="brand-logo" style={{ margin: "0 auto" }}>
            <Sparkles size={18} strokeWidth={2.5} />
          </div>
        )}
        <button
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
          aria-label="جمع کردن منو"
          style={{ transform: collapsed ? "rotate(180deg)" : "none" }}
        >
          <ChevronLeft size={14} />
        </button>
      </div>

      <nav className="sidebar-nav">
        {!collapsed && <div className="nav-section-label">اصلی</div>}
        {mainNavItems.map(renderItem)}

        {!collapsed && <div className="nav-section-label">بیشتر</div>}
        {extraNavItems.map(renderItem)}

        {!collapsed && <div className="nav-section-label">حساب کاربری</div>}
        <div className="nav-item" style={{ color: "#d63b48", cursor: "pointer" }}>
          <LogOut size={18} className="nav-icon" style={{ color: "var(--danger)" }} />
          {!collapsed && <span className="nav-label">خروج</span>}
        </div>
      </nav>

      {!collapsed && (
        <div className="sidebar-footer">
          <div className="upgrade-card">
            <div className="upgrade-title">🚀 نسخه حرفه‌ای</div>
            <div className="upgrade-desc">به امکانات پیشرفته دسترسی پیدا کنید</div>
            <button className="upgrade-btn">ارتقای حساب</button>
          </div>
        </div>
      )}
    </aside>
  );
}
