// -----------------------------------------------------------------------------
// داده‌های نمونه (Mock Data)
// -----------------------------------------------------------------------------
// این فایل صرفاً داده‌های ساختگی برای نمایش رابط کاربری است.
// در پروژه واقعی، هر یک از این ثابت‌ها را با یک تابع async که از طریق Prisma
// داده را از دیتابیس می‌خواند جایگزین کنید، مثلاً:
//
//   export async function getProducts() {
//     return prisma.product.findMany();
//   }
//
// و در Server Component مربوطه (app/products/page.tsx) به‌جای ایمپورت مستقیم
// آرایه‌ی `products`، تابع `getProducts()` را صدا بزنید.
// -----------------------------------------------------------------------------

import type {
  SalesDataPoint,
  MonthlyDataPoint,
  VisitorDataPoint,
  CategoryDatum,
  TopProduct,
  RecentOrder,
  Product,
  AppUser,
  ProductComment,
  Discount,
  Category,
  Brand,
  Payment,
  Admin,
  DeviceDatum,
  TrafficSource,
} from "@/constants/types";

export const salesData: SalesDataPoint[] = [
  { name: "شنبه", "فروش": 12400000, "سفارش": 42 },
  { name: "یکشنبه", "فروش": 18200000, "سفارش": 58 },
  { name: "دوشنبه", "فروش": 15600000, "سفارش": 49 },
  { name: "سه‌شنبه", "فروش": 22100000, "سفارش": 71 },
  { name: "چهارشنبه", "فروش": 19800000, "سفارش": 63 },
  { name: "پنج‌شنبه", "فروش": 28400000, "سفارش": 89 },
  { name: "جمعه", "فروش": 32500000, "سفارش": 102 },
];

export const monthlyData: MonthlyDataPoint[] = [
  { name: "فروردین", "فروش": 245, "بازدید": 420 },
  { name: "اردیبهشت", "فروش": 312, "بازدید": 510 },
  { name: "خرداد", "فروش": 287, "بازدید": 480 },
  { name: "تیر", "فروش": 398, "بازدید": 620 },
  { name: "مرداد", "فروش": 421, "بازدید": 690 },
  { name: "شهریور", "فروش": 512, "بازدید": 780 },
  { name: "مهر", "فروش": 489, "بازدید": 740 },
  { name: "آبان", "فروش": 567, "بازدید": 820 },
  { name: "آذر", "فروش": 634, "بازدید": 910 },
];

export const visitorsData: VisitorDataPoint[] = [
  { name: "هفته ۱", "بازدیدکننده": 4200 },
  { name: "هفته ۲", "بازدیدکننده": 5100 },
  { name: "هفته ۳", "بازدیدکننده": 4800 },
  { name: "هفته ۴", "بازدیدکننده": 6200 },
  { name: "هفته ۵", "بازدیدکننده": 7100 },
  { name: "هفته ۶", "بازدیدکننده": 8400 },
];

export const categoryData: CategoryDatum[] = [
  { name: "پوشاک", value: 38, color: "#3742fa" },
  { name: "الکترونیک", value: 28, color: "#2ed573" },
  { name: "زیبایی", value: 18, color: "#ffa502" },
  { name: "خانه", value: 10, color: "#ff4757" },
  { name: "سایر", value: 6, color: "#1e90ff" },
];

export const topProducts: TopProduct[] = [
  { name: "هدفون بی‌سیم سونی", "فروش": 1248, "درآمد": 624000000, color: "#3742fa" },
  { name: "ساعت هوشمند اپل", "فروش": 982, "درآمد": 491000000, color: "#2ed573" },
  { name: "کیف چرم مردانه", "فروش": 745, "درآمد": 223500000, color: "#ffa502" },
  { name: "عطر ادوپرفیوم", "فروش": 612, "درآمد": 183600000, color: "#ff4757" },
  { name: "کفش ورزشی نایک", "فروش": 534, "درآمد": 160200000, color: "#1e90ff" },
];

export const recentOrders: RecentOrder[] = [
  { id: "NV-82394", customer: "علی محمدی", avatar: "ع", amount: 4250000, status: "success", statusLabel: "تکمیل شده", date: "۱۴۰۳/۰۹/۱۲", payment: "پرداخت آنلاین" },
  { id: "NV-82393", customer: "زهرا کریمی", avatar: "ز", amount: 1280000, status: "warning", statusLabel: "در حال ارسال", date: "۱۴۰۳/۰۹/۱۲", payment: "پرداخت آنلاین" },
  { id: "NV-82392", customer: "محمد رضایی", avatar: "م", amount: 8920000, status: "info", statusLabel: "در حال پردازش", date: "۱۴۰۳/۰۹/۱۲", payment: "کارت به کارت" },
  { id: "NV-82391", customer: "مریم احمدی", avatar: "م", amount: 2450000, status: "success", statusLabel: "تکمیل شده", date: "۱۴۰۳/۰۹/۱۱", payment: "پرداخت آنلاین" },
  { id: "NV-82390", customer: "حسین نوری", avatar: "ح", amount: 6750000, status: "danger", statusLabel: "لغو شده", date: "۱۴۰۳/۰۹/۱۱", payment: "پرداخت آنلاین" },
  { id: "NV-82389", customer: "نگار صادقی", avatar: "ن", amount: 3450000, status: "warning", statusLabel: "در حال ارسال", date: "۱۴۰۳/۰۹/۱۱", payment: "پرداخت آنلاین" },
  { id: "NV-82388", customer: "رضا حسینی", avatar: "ر", amount: 9800000, status: "success", statusLabel: "تکمیل شده", date: "۱۴۰۳/۰۹/۱۰", payment: "پرداخت آنلاین" },
];

export const products: Product[] = [
  { id: 1, name: "هدفون بی‌سیم سونی WH-1000XM5", category: "الکترونیک", brand: "سونی", price: 18500000, stock: 124, status: "active", emoji: "🎧" },
  { id: 2, name: "ساعت هوشمند اپل واچ سری ۹", category: "الکترونیک", brand: "اپل", price: 24500000, stock: 87, status: "active", emoji: "⌚" },
  { id: 3, name: "کیف چرم مردانه فندی", category: "اکسسوری", brand: "فندی", price: 12800000, stock: 56, status: "active", emoji: "👜" },
  { id: 4, name: "عطر ادوپرفیوم شنل بلو", category: "زیبایی", brand: "شنل", price: 9800000, stock: 32, status: "active", emoji: "🌸" },
  { id: 5, name: "کفش ورزشی نایک ایر مکس", category: "پوشاک", brand: "نایک", price: 7200000, stock: 0, status: "out", emoji: "👟" },
  { id: 6, name: "لپ‌تاپ مک‌بوک پرو M3", category: "الکترونیک", brand: "اپل", price: 89500000, stock: 18, status: "active", emoji: "💻" },
  { id: 7, name: "گوشی آیفون ۱۵ پرو مکس", category: "الکترونیک", brand: "اپل", price: 72500000, stock: 42, status: "active", emoji: "📱" },
  { id: 8, name: "تی‌شرت مردانه نایک DRI-FIT", category: "پوشاک", brand: "نایک", price: 1850000, stock: 245, status: "active", emoji: "👕" },
];

export const users: AppUser[] = [
  { id: 1, name: "علی محمدی", email: "ali.mohammadi@email.com", phone: "۰۹۱۲۳۴۵۶۷۸۹", role: "customer", roleLabel: "مشتری", status: "active", joined: "۱۴۰۳/۰۶/۱۲", orders: 24, avatar: "ع" },
  { id: 2, name: "زهرا کریمی", email: "zahra.karimi@email.com", phone: "۰۹۳۵۱۲۳۴۵۶۷", role: "vip", roleLabel: "مشتری ویژه", status: "active", joined: "۱۴۰۳/۰۵/۲۸", orders: 48, avatar: "ز" },
  { id: 3, name: "محمد رضایی", email: "mohammad.r@email.com", phone: "۰۹۱۱۲۲۳۳۴۴۵", role: "customer", roleLabel: "مشتری", status: "inactive", joined: "۱۴۰۳/۰۴/۱۵", orders: 8, avatar: "م" },
  { id: 4, name: "مریم احمدی", email: "maryam.a@email.com", phone: "۰۹۳۹۸۷۶۵۴۳۲", role: "admin", roleLabel: "مدیر", status: "active", joined: "۱۴۰۳/۰۳/۰۸", orders: 0, avatar: "م" },
  { id: 5, name: "حسین نوری", email: "hossein.n@email.com", phone: "۰۹۱۵۴۳۲۱۰۹۸", role: "customer", roleLabel: "مشتری", status: "active", joined: "۱۴۰۳/۰۲/۲۲", orders: 12, avatar: "ح" },
  { id: 6, name: "نگار صادقی", email: "negar.s@email.com", phone: "۰۹۲۰۱۲۳۴۵۶۷", role: "vip", roleLabel: "مشتری ویژه", status: "active", joined: "۱۴۰۳/۰۱/۱۸", orders: 36, avatar: "ن" },
];

export const comments: ProductComment[] = [
  { id: 1, user: "علی محمدی", avatar: "ع", product: "هدفون سونی WH-1000XM5", rating: 5, text: "کیفیت صدای فوق‌العاده‌ای دارد. خیلی راضی هستم.", status: "approved", date: "۱۴۰۳/۰۹/۱۲" },
  { id: 2, user: "زهرا کریمی", avatar: "ز", product: "ساعت اپل واچ", rating: 4, text: "طراحی زیبا ولی قیمتش بالاست.", status: "pending", date: "۱۴۰۳/۰۹/۱۱" },
  { id: 3, user: "محمد رضایی", avatar: "م", product: "کفش نایک", rating: 3, text: "اندازه‌اش کمی بزرگ‌تر از حد معمول است.", status: "approved", date: "۱۴۰۳/۰۹/۱۰" },
  { id: 4, user: "مریم احمدی", avatar: "م", product: "عطر شنل", rating: 5, text: "رایحه بسیار ماندگار و دلپذیر.", status: "approved", date: "۱۴۰۳/۰۹/۰۹" },
];

export const discounts: Discount[] = [
  { code: "WELCOME20", type: "درصدی", value: 20, uses: 234, limit: 500, status: "active", expires: "۱۴۰۳/۱۲/۲۹" },
  { code: "BLACKFRIDAY", type: "درصدی", value: 50, uses: 1240, limit: 2000, status: "active", expires: "۱۴۰۳/۰۹/۳۰" },
  { code: "FREESHIP", type: "ارسال رایگان", value: 0, uses: 845, limit: null, status: "active", expires: "۱۴۰۴/۰۱/۳۱" },
  { code: "VIP100K", type: "مبلغ ثابت", value: 100000, uses: 56, limit: 200, status: "expired", expires: "۱۴۰۳/۰۸/۳۰" },
];

export const categories: Category[] = [
  { id: 1, name: "الکترونیک", icon: "💻", parent: "-", products: 248, active: true, color: "#3742fa" },
  { id: 2, name: "پوشاک", icon: "👕", parent: "-", products: 412, active: true, color: "#2ed573" },
  { id: 3, name: "زیبایی و سلامت", icon: "💄", parent: "-", products: 186, active: true, color: "#ffa502" },
  { id: 4, name: "خانه و آشپزخانه", icon: "🏠", parent: "-", products: 142, active: true, color: "#ff4757" },
  { id: 5, name: "ورزش و سفر", icon: "⚽", parent: "-", products: 98, active: true, color: "#1e90ff" },
  { id: 6, name: "هدفون و هندزفری", icon: "🎧", parent: "الکترونیک", products: 42, active: true, color: "#8a4cff" },
  { id: 7, name: "ساعت هوشمند", icon: "⌚", parent: "الکترونیک", products: 28, active: true, color: "#00b8d4" },
  { id: 8, name: "کفش ورزشی", icon: "👟", parent: "پوشاک", products: 64, active: false, color: "#ff4d8d" },
];

export const brands: Brand[] = [
  { name: "Apple", country: "آمریکا", products: 124, revenue: 18400000000, logo: "🍎", color: "#000" },
  { name: "Samsung", country: "کره جنوبی", products: 86, revenue: 9200000000, logo: "📱", color: "#1428a0" },
  { name: "Sony", country: "ژاپن", products: 64, revenue: 6400000000, logo: "🎧", color: "#000" },
  { name: "Nike", country: "آمریکا", products: 142, revenue: 5800000000, logo: "👟", color: "#fa5400" },
  { name: "Adidas", country: "آلمان", products: 98, revenue: 4200000000, logo: "⚽", color: "#000" },
  { name: "Chanel", country: "فرانسه", products: 42, revenue: 7800000000, logo: "🌸", color: "#000" },
];

export const payments: Payment[] = [
  { id: "PAY-78234", order: "NV-82394", customer: "علی محمدی", method: "card", methodLabel: "کارت بانکی", amount: 4250000, status: "success", date: "۱۴۰۳/۰۹/۱۲", ref: "۸۲۳۴۲۹۱۲۸" },
  { id: "PAY-78233", order: "NV-82393", customer: "زهرا کریمی", method: "card", methodLabel: "کارت بانکی", amount: 1280000, status: "success", date: "۱۴۰۳/۰۹/۱۲", ref: "۷۲۸۳۹۱۲۲۰" },
  { id: "PAY-78232", order: "NV-82392", customer: "محمد رضایی", method: "transfer", methodLabel: "کارت به کارت", amount: 8920000, status: "pending", date: "۱۴۰۳/۰۹/۱۲", ref: "۶۲۸۳۹۱۲۲۰" },
  { id: "PAY-78231", order: "NV-82391", customer: "مریم احمدی", method: "card", methodLabel: "کارت بانکی", amount: 2450000, status: "success", date: "۱۴۰۳/۰۹/۱۱", ref: "۹۲۳۸۲۱۹۲۱" },
  { id: "PAY-78230", order: "NV-82390", customer: "حسین نوری", method: "wallet", methodLabel: "کیف پول", amount: 6750000, status: "failed", date: "۱۴۰۳/۰۹/۱۱", ref: "—" },
  { id: "PAY-78229", order: "NV-82389", customer: "نگار صادقی", method: "card", methodLabel: "کارت بانکی", amount: 3450000, status: "success", date: "۱۴۰۳/۰۹/۱۱", ref: "۱۲۸۲۳۹۱۲۰" },
];

export const admins: Admin[] = [
  { name: "امیر حسینی", email: "amir@novamarket.ir", role: "مدیر ارشد", status: "active", last: "۲ دقیقه پیش", avatar: "ا" },
  { name: "مریم احمدی", email: "maryam@novamarket.ir", role: "مدیر محصولات", status: "active", last: "۱ ساعت پیش", avatar: "م" },
  { name: "علی رضایی", email: "ali.r@novamarket.ir", role: "مدیر فروش", status: "active", last: "دیروز", avatar: "ع" },
  { name: "زهرا کریمی", email: "z.karimi@novamarket.ir", role: "پشتیبان", status: "active", last: "۳ ساعت پیش", avatar: "ز" },
  { name: "حسین نوری", email: "hossein@novamarket.ir", role: "مدیر محتوا", status: "inactive", last: "۲ هفته پیش", avatar: "ح" },
];

export const deviceData: DeviceDatum[] = [
  { name: "موبایل", value: 62, color: "#3742fa" },
  { name: "دسکتاپ", value: 28, color: "#2ed573" },
  { name: "تبلت", value: 10, color: "#ffa502" },
];

export const trafficSources: TrafficSource[] = [
  { name: "جستجوی گوگل", value: 42, color: "#3742fa" },
  { name: "مستقیم", value: 28, color: "#2ed573" },
  { name: "شبکه‌های اجتماعی", value: 18, color: "#ffa502" },
  { name: "تبلیغات", value: 12, color: "#ff4757" },
];
