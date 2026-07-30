"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils/cn";

import {
  LayoutDashboard,
  Package,
  FolderTree,
  Tag,
  ShoppingCart,
  Users,
  MessageSquare,
  Ticket,
  CreditCard,
  BarChart3,
  Settings,
  ShieldCheck,
  LogOut,
  Sparkles,
  ChevronLeft,
} from "lucide-react";


type SidebarItem = {
  label: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
};


export default function Sidebar() {

  const pathname = usePathname();

  const [collapsed, setCollapsed] = useState(false);


  const mainItems: SidebarItem[] = [
    {
      label: "داشبورد",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "محصولات",
      href: "/admin/products",
      icon: Package,
      badge: "۱۲",
    },
    {
      label: "دسته‌بندی‌ها",
      href: "/admin/categories",
      icon: FolderTree,
    },
    {
      label: "برندها",
      href: "/admin/brands",
      icon: Tag,
    },
    {
      label: "سفارش‌ها",
      href: "/admin/orders",
      icon: ShoppingCart,
      badge: "۸",
    },
    {
      label: "کاربران",
      href: "/admin/users",
      icon: Users,
    },
    {
      label: "نظرات",
      href: "/admin/comments",
      icon: MessageSquare,
      badge: "۳",
    },
  ];


  const extraItems: SidebarItem[] = [
    {
      label: "کدهای تخفیف",
      href: "/admin/discounts",
      icon: Ticket,
    },
    {
      label: "پرداخت‌ها",
      href: "/admin/payments",
      icon: CreditCard,
    },
    {
      label: "گزارشات",
      href: "/admin/analytics",
      icon: BarChart3,
    },
    {
      label: "تنظیمات",
      href: "/admin/settings",
      icon: Settings,
    },
    {
      label: "مدیران",
      href: "/admin/admins",
      icon: ShieldCheck,
    },
  ];


  const renderItem = (item: SidebarItem) => {

    const Icon = item.icon;

    const active =
      pathname === item.href ||
      pathname.startsWith(item.href + "/");


    return (

      <Link
        key={item.href}
        href={item.href}
        title={collapsed ? item.label : undefined}

        className={cn(
          "nav-item",
          active && "active"
        )}
      >

        <Icon
          size={18}
          className="nav-icon"
        />


        {!collapsed && (
          <span className="nav-label">
            {item.label}
          </span>
        )}


        {!collapsed && item.badge && (
          <span className="nav-badge">
            {item.badge}
          </span>
        )}


        {collapsed && item.badge && (
          <span className="nav-collapsed-badge">
            {item.badge}
          </span>
        )}

      </Link>

    );
  };


  return (

    <aside
      className={cn(
        "sidebar",
        collapsed && "collapsed"
      )}
    >


      <div className="sidebar-brand">


        {!collapsed ? (

          <div className="brand-mark">

            <div className="brand-logo">

              <Sparkles
                size={18}
                strokeWidth={2.5}
              />

            </div>


            <div>

              <div>
                نوا مارکت
              </div>


              <div className="brand-subtitle">
                پنل مدیریت
              </div>

            </div>

          </div>


        ) : (

          <div className="brand-logo collapsed-logo">

            <Sparkles
              size={18}
              strokeWidth={2.5}
            />

          </div>

        )}



        <button
          className={cn(
            "collapse-btn",
            collapsed && "rotate"
          )}

          onClick={() =>
            setCollapsed(prev => !prev)
          }
        >

          <ChevronLeft size={14}/>

        </button>


      </div>



      <nav className="sidebar-nav">


        {!collapsed && (
          <div className="nav-section-label">
            اصلی
          </div>
        )}


        {mainItems.map(renderItem)}



        {!collapsed && (
          <div className="nav-section-label">
            بیشتر
          </div>
        )}


        {extraItems.map(renderItem)}



        {!collapsed && (
          <div className="nav-section-label">
            حساب کاربری
          </div>
        )}



        <div
          className={cn(
            "nav-item",
            "logout"
          )}
        >

          <LogOut
            size={18}
            className="nav-icon"
          />


          {!collapsed && (
            <span className="nav-label">
              خروج
            </span>
          )}

        </div>


      </nav>




      {!collapsed && (

        <div className="sidebar-footer">

          <div className="upgrade-card">

            <div className="upgrade-title">
              🚀 نسخه حرفه‌ای
            </div>


            <div className="upgrade-desc">
              به امکانات پیشرفته دسترسی پیدا کنید
            </div>


            <button className="upgrade-btn">
              ارتقای حساب
            </button>


          </div>

        </div>

      )}



    </aside>

  );
}