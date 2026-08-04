import { Role } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/client";
import type { LucideIcon } from "lucide-react";

/* ===================== عمومی (Shared / UI) ===================== */

export type ColorTag =
  | "blue"
  | "green"
  | "purple"
  | "pink"
  | "orange"
  | "cyan";

export type BadgeVariant =
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "accent"
  | "neutral";

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface Kpi {
  label: string;
  value: string;
  sub?: string;
  trend?: number;
  up?: boolean;
  icon: LucideIcon;
  color: ColorTag;
}

export interface SparkPoint {
  v: number;
}

/* ===================== داشبورد (Dashboard) ===================== */

export interface SalesDataPoint {
  name: string;
  "فروش": number;
  "سفارش": number;
}

export interface MonthlyDataPoint {
  name: string;
  "فروش": number;
  "بازدید": number;
}

export interface VisitorDataPoint {
  name: string;
  "بازدیدکننده": number;
}

export interface CategoryDatum {
  name: string;
  value: number;
  color: string;
}

export interface TopProduct {
  name: string;
  "فروش": number;
  "درآمد": number;
  color: string;
}

export type OrderStatus = "success" | "warning" | "info" | "danger";

export interface RecentOrder {
  id: string;
  customer: string;
  avatar: string;
  amount: number;
  status: OrderStatus;
  statusLabel: string;
  date: string;
  payment: string;
}

/* ===================== محصولات (Products) ===================== */

export type ProductStatus = true|false;

export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  stock: number;
  status: ProductStatus;
  imageUrl:string;
  sku:string
}

export interface ProductSpec {
  k: string;
  v: string;
}

export interface ShippingMethod {
  label: string;
  price: number;
  enabled: boolean;
}

/* ===================== دسته‌بندی‌ها (Categories) ===================== */

export interface Category {
  id: string;
  name: string;
  parent: {id:string,name:string,slug:string} | null;
  products: number;
  slug: string;
}

/* ===================== برندها (Brands) ===================== */

export interface Brand {
  name: string;
  // country: string;
  products: number;
  // revenue: number;
  logo: string | null;
  slug:string;
  // color: string;
}

/* ===================== کاربران (Users) ===================== */

export type UserRole = "customer" | "vip" | "admin";
export type UserStatus = "active" | "inactive";

export interface AppUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  roleLabel: string;
  status: UserStatus;
  joined: string;
  orders: number;
  avatar: string;
}

/* ===================== نظرات (Comments) ===================== */

export type CommentStatus = "approved" | "pending" | "rejected";

export interface ProductComment {
  id: number;
  user: string;
  avatar: string;
  product: string;
  rating: number;
  text: string;
  status: CommentStatus;
  date: string;
}

/* ===================== کدهای تخفیف (Discounts) ===================== */

export type DiscountType = "درصدی" | "ارسال رایگان" | "مبلغ ثابت";
export type DiscountStatus = "active" | "expired";

export interface Discount {
  code: string;
  type: DiscountType;
  value: number;
  uses: number;
  limit: number | null;
  status: DiscountStatus;
  expires: string;
}

/* ===================== پرداخت‌ها (Payments) ===================== */

export type PaymentMethod = "card" | "transfer" | "wallet";
export type PaymentStatus = "success" | "pending" | "failed";

export interface Payment {
  id: string;
  order: string;
  customer: string;
  method: PaymentMethod;
  methodLabel: string;
  amount: number;
  status: PaymentStatus;
  date: string;
  ref: string;
}

/* ===================== مدیران (Admins) ===================== */

export type AdminStatus = "active" | "inactive";

export interface Admin {
  id:string
  name: string;
  email: string;
  role: Role;
  isActive:boolean;
  activeTime:Date;
}

export interface UpdateAdminType{
  id:string;
  name?: string;
  email?: string;
  role?: Role;
  isActive?:boolean;
}

/* ===================== تحلیل و گزارشات (Analytics) ===================== */

export interface DeviceDatum {
  name: string;
  value: number;
  color: string;
}

export interface TrafficSource {
  name: string;
  value: number;
  color: string;
}

/* ===================== تنظیمات (Settings) ===================== */

export interface SettingsTab {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface ToggleSetting {
  title: string;
  desc: string;
  on: boolean;
}

export interface PaymentGateway {
  name: string;
  desc: string;
  enabled: boolean;
  icon: string;
}
