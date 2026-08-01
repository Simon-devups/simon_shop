// Mock data for the admin dashboard

export const salesData = [
  { name: "شنبه", فروش: 12400000, سفارش: 42 },
  { name: "یکشنبه", فروش: 18200000, سفارش: 58 },
  { name: "دوشنبه", فروش: 15600000, سفارش: 49 },
  { name: "سه‌شنبه", فروش: 22100000, سفارش: 71 },
  { name: "چهارشنبه", فروش: 19800000, سفارش: 63 },
  { name: "پنج‌شنبه", فروش: 28400000, سفارش: 89 },
  { name: "جمعه", فروش: 32500000, سفارش: 102 },
];

export const monthlyData = [
  { name: "فروردین", فروش: 245, بازدید: 420 },
  { name: "اردیبهشت", فروش: 312, بازدید: 510 },
  { name: "خرداد", فروش: 287, بازدید: 480 },
  { name: "تیر", فروش: 398, بازدید: 620 },
  { name: "مرداد", فروش: 421, بازدید: 690 },
  { name: "شهریور", فروش: 512, بازدید: 780 },
  { name: "مهر", فروش: 489, بازدید: 740 },
  { name: "آبان", فروش: 567, بازدید: 820 },
  { name: "آذر", فروش: 634, بازدید: 910 },
];

export const visitorsData = [
  { name: "هفته ۱", بازدیدکننده: 4200 },
  { name: "هفته ۲", بازدیدکننده: 5100 },
  { name: "هفته ۳", بازدیدکننده: 4800 },
  { name: "هفته ۴", بازدیدکننده: 6200 },
  { name: "هفته ۵", بازدیدکننده: 7100 },
  { name: "هفته ۶", بازدیدکننده: 8400 },
];

export const categoryData = [
  { name: "پوشاک", value: 38, color: "#3742fa" },
  { name: "الکترونیک", value: 28, color: "#2ed573" },
  { name: "زیبایی", value: 18, color: "#ffa502" },
  { name: "خانه", value: 10, color: "#ff4757" },
  { name: "سایر", value: 6, color: "#1e90ff" },
];

export const topProducts = [
  { name: "هدفون بی‌سیم سونی", فروش: 1248, درآمد: 624000000, color: "#3742fa" },
  { name: "ساعت هوشمند اپل", فروش: 982, درآمد: 491000000, color: "#2ed573" },
  { name: "کیف چرم مردانه", فروش: 745, درآمد: 223500000, color: "#ffa502" },
  { name: "عطر ادوپرفیوم", فروش: 612, درآمد: 183600000, color: "#ff4757" },
  { name: "کفش ورزشی نایک", فروش: 534, درآمد: 160200000, color: "#1e90ff" },
];

export const recentOrders = [
  { id: "NV-82394", customer: "علی محمدی", avatar: "ع", amount: 4250000, status: "success", statusLabel: "تکمیل شده", date: "۱۴۰۳/۰۹/۱۲", payment: "پرداخت آنلاین" },
  { id: "NV-82393", customer: "زهرا کریمی", avatar: "ز", amount: 1280000, status: "warning", statusLabel: "در حال ارسال", date: "۱۴۰۳/۰۹/۱۲", payment: "پرداخت آنلاین" },
  { id: "NV-82392", customer: "محمد رضایی", avatar: "م", amount: 8920000, status: "info", statusLabel: "در حال پردازش", date: "۱۴۰۳/۰۹/۱۲", payment: "کارت به کارت" },
  { id: "NV-82391", customer: "مریم احمدی", avatar: "م", amount: 2450000, status: "success", statusLabel: "تکمیل شده", date: "۱۴۰۳/۰۹/۱۱", payment: "پرداخت آنلاین" },
  { id: "NV-82390", customer: "حسین نوری", avatar: "ح", amount: 6750000, status: "danger", statusLabel: "لغو شده", date: "۱۴۰۳/۰۹/۱۱", payment: "پرداخت آنلاین" },
  { id: "NV-82389", customer: "نگار صادقی", avatar: "ن", amount: 3450000, status: "warning", statusLabel: "در حال ارسال", date: "۱۴۰۳/۰۹/۱۱", payment: "پرداخت آنلاین" },
  { id: "NV-82388", customer: "رضا حسینی", avatar: "ر", amount: 9800000, status: "success", statusLabel: "تکمیل شده", date: "۱۴۰۳/۰۹/۱۰", payment: "پرداخت آنلاین" },
];

export const products = [
  { id: 1, name: "هدفون بی‌سیم سونی WH-1000XM5", category: "الکترونیک", brand: "سونی", price: 18500000, stock: 124, status: "active", emoji: "🎧" },
  { id: 2, name: "ساعت هوشمند اپل واچ سری ۹", category: "الکترونیک", brand: "اپل", price: 24500000, stock: 87, status: "active", emoji: "⌚" },
  { id: 3, name: "کیف چرم مردانه فندی", category: "اکسسوری", brand: "فندی", price: 12800000, stock: 56, status: "active", emoji: "👜" },
  { id: 4, name: "عطر ادوپرفیوم شنل بلو", category: "زیبایی", brand: "شنل", price: 9800000, stock: 32, status: "active", emoji: "🌸" },
  { id: 5, name: "کفش ورزشی نایک ایر مکس", category: "پوشاک", brand: "نایک", price: 7200000, stock: 0, status: "out", emoji: "👟" },
  { id: 6, name: "لپ‌تاپ مک‌بوک پرو M3", category: "الکترونیک", brand: "اپل", price: 89500000, stock: 18, status: "active", emoji: "💻" },
  { id: 7, name: "گوشی آیفون ۱۵ پرو مکس", category: "الکترونیک", brand: "اپل", price: 72500000, stock: 42, status: "active", emoji: "📱" },
  { id: 8, name: "تی‌شرت مردانه نایک DRI-FIT", category: "پوشاک", brand: "نایک", price: 1850000, stock: 245, status: "active", emoji: "👕" },
];

export const users = [
  { id: 1, name: "علی محمدی", email: "ali.mohammadi@email.com", phone: "۰۹۱۲۳۴۵۶۷۸۹", role: "customer", roleLabel: "مشتری", status: "active", joined: "۱۴۰۳/۰۶/۱۲", orders: 24, avatar: "ع" },
  { id: 2, name: "زهرا کریمی", email: "zahra.karimi@email.com", phone: "۰۹۳۵۱۲۳۴۵۶۷", role: "vip", roleLabel: "مشتری ویژه", status: "active", joined: "۱۴۰۳/۰۵/۲۸", orders: 48, avatar: "ز" },
  { id: 3, name: "محمد رضایی", email: "mohammad.r@email.com", phone: "۰۹۱۱۲۲۳۳۴۴۵", role: "customer", roleLabel: "مشتری", status: "inactive", joined: "۱۴۰۳/۰۴/۱۵", orders: 8, avatar: "م" },
  { id: 4, name: "مریم احمدی", email: "maryam.a@email.com", phone: "۰۹۳۹۸۷۶۵۴۳۲", role: "admin", roleLabel: "مدیر", status: "active", joined: "۱۴۰۳/۰۳/۰۸", orders: 0, avatar: "م" },
  { id: 5, name: "حسین نوری", email: "hossein.n@email.com", phone: "۰۹۱۵۴۳۲۱۰۹۸", role: "customer", roleLabel: "مشتری", status: "active", joined: "۱۴۰۳/۰۲/۲۲", orders: 12, avatar: "ح" },
  { id: 6, name: "نگار صادقی", email: "negar.s@email.com", phone: "۰۹۲۰۱۲۳۴۵۶۷", role: "vip", roleLabel: "مشتری ویژه", status: "active", joined: "۱۴۰۳/۰۱/۱۸", orders: 36, avatar: "ن" },
];

export const comments = [
  { id: 1, user: "علی محمدی", avatar: "ع", product: "هدفون سونی WH-1000XM5", rating: 5, text: "کیفیت صدای فوق‌العاده‌ای دارد. خیلی راضی هستم.", status: "approved", date: "۱۴۰۳/۰۹/۱۲" },
  { id: 2, user: "زهرا کریمی", avatar: "ز", product: "ساعت اپل واچ", rating: 4, text: "طراحی زیبا ولی قیمتش بالاست.", status: "pending", date: "۱۴۰۳/۰۹/۱۱" },
  { id: 3, user: "محمد رضایی", avatar: "م", product: "کفش نایک", rating: 3, text: "اندازه‌اش کمی بزرگ‌تر از حد معمول است.", status: "approved", date: "۱۴۰۳/۰۹/۱۰" },
  { id: 4, user: "مریم احمدی", avatar: "م", product: "عطر شنل", rating: 5, text: "رایحه بسیار ماندگار و دلپذیر.", status: "approved", date: "۱۴۰۳/۰۹/۰۹" },
];

export const discounts = [
  { code: "WELCOME20", type: "درصدی", value: 20, uses: 234, limit: 500, status: "active", expires: "۱۴۰۳/۱۲/۲۹" },
  { code: "BLACKFRIDAY", type: "درصدی", value: 50, uses: 1240, limit: 2000, status: "active", expires: "۱۴۰۳/۰۹/۳۰" },
  { code: "FREESHIP", type: "ارسال رایگان", value: 0, uses: 845, limit: null, status: "active", expires: "۱۴۰۴/۰۱/۳۱" },
  { code: "VIP100K", type: "مبلغ ثابت", value: 100000, uses: 56, limit: 200, status: "expired", expires: "۱۴۰۳/۰۸/۳۰" },
];

export const formatPrice = (n: number) => n.toLocaleString("fa-IR");
