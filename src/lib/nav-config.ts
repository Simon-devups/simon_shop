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
} from "lucide-react";
import type { NavItem } from "@/constants/types";

export const mainNavItems: NavItem[] = [
  { id: "dashboard", label: "داشبورد", href: "/", icon: LayoutDashboard },
  { id: "products", label: "محصولات", href: "/products", icon: Package, badge: "۱۲" },
  { id: "categories", label: "دسته‌بندی‌ها", href: "/categories", icon: FolderTree },
  { id: "brands", label: "برندها", href: "/brands", icon: Tag },
  { id: "orders", label: "سفارش‌ها", href: "/orders", icon: ShoppingCart, badge: "۸" },
  { id: "users", label: "کاربران", href: "/users", icon: Users },
  { id: "comments", label: "نظرات", href: "/comments", icon: MessageSquare, badge: "۳" },
];

export const extraNavItems: NavItem[] = [
  { id: "discounts", label: "کدهای تخفیف", href: "/discounts", icon: Ticket },
  { id: "payments", label: "پرداخت‌ها", href: "/payments", icon: CreditCard },
  { id: "analytics", label: "گزارشات", href: "/analytics", icon: BarChart3 },
  { id: "settings", label: "تنظیمات", href: "/settings", icon: Settings },
  { id: "admins", label: "مدیران", href: "/admins", icon: ShieldCheck },
];

/** برای پیدا کردن عنوان صفحه فعلی بر اساس مسیر (استفاده در Topbar/Breadcrumb) */
export const routeTitles: Record<string, string> = {
  "/": "داشبورد",
  "/products": "محصولات",
  "/products/new": "محصول جدید",
  "/categories": "دسته‌بندی‌ها",
  "/brands": "برندها",
  "/orders": "سفارش‌ها",
  "/users": "کاربران",
  "/comments": "نظرات",
  "/discounts": "کدهای تخفیف",
  "/payments": "پرداخت‌ها",
  "/analytics": "گزارشات",
  "/settings": "تنظیمات",
  "/admins": "مدیران",
};

export function getPageTitle(pathname: string): string {
  return routeTitles[pathname] ?? "داشبورد";
}
