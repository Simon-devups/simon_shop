import { prisma } from "@/constants/prisma";
import type { OrderStatus as PrismaOrderStatus } from "@prisma/client";
import type {
  SalesDataPoint,
  MonthlyDataPoint,
  CategoryDatum,
  TopProduct,
  RecentOrder,
  OrderStatus,
} from "@/constants/types";

// سفارش‌های لغو/مرجوع‌شده در محاسبه‌ی درآمد و آمار فروش لحاظ نمی‌شوند
const COUNTED_STATUSES: PrismaOrderStatus[] = ["PENDING", "PROCESSING", "SHIPPED", "DELIVERED"];

const WEEKDAY_FA = ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"];
const MONTH_FA = [
  "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور",
  "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند",
];

const statusMap: Record<PrismaOrderStatus, { status: OrderStatus; label: string }> = {
  PENDING: { status: "warning", label: "در انتظار پرداخت" },
  PROCESSING: { status: "info", label: "در حال پردازش" },
  SHIPPED: { status: "warning", label: "در حال ارسال" },
  DELIVERED: { status: "success", label: "تکمیل شده" },
  CANCELLED: { status: "danger", label: "لغو شده" },
  RETURNED: { status: "danger", label: "مرجوع شده" },
};

const paymentMethodLabel: Record<string, string> = {
  zarinpal: "زرین‌پال (آنلاین)",
  idpay: "آیدی‌پی (آنلاین)",
};

/* ===================== KPI های بالای داشبورد ===================== */

export async function getDashboardKpis() {
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  const [
    todayOrders,
    monthOrders,
    newOrdersToday,
    newUsersToday,
    activeProductsCount,
    variantsTotal,
    variantsInStock,
  ] = await Promise.all([
    prisma.order.findMany({
      where: { createdAt: { gte: startOfToday }, status: { in: COUNTED_STATUSES } },
      select: { total: true },
    }),
    prisma.order.findMany({
      where: { createdAt: { gte: startOfMonth }, status: { in: COUNTED_STATUSES } },
      select: { total: true },
    }),
    prisma.order.count({ where: { createdAt: { gte: startOfToday } } }),
    prisma.user.count({ where: { createdAt: { gte: startOfToday } } }),
    prisma.product.count({ where: { isPublished: true } }),
    prisma.productVariant.count(),
    prisma.productVariant.count({ where: { stock: { gt: 0 } } }),
  ]);

  const todaySales = todayOrders.reduce((sum, o) => sum + Number(o.total), 0);
  const monthRevenue = monthOrders.reduce((sum, o) => sum + Number(o.total), 0);
  const stockPercent = variantsTotal > 0 ? Math.round((variantsInStock / variantsTotal) * 100) : 0;

  return {
    todaySales,
    monthRevenue,
    newOrdersToday,
    newUsersToday,
    activeProductsCount,
    stockPercent,
  };
}

export type DashboardKpis = Awaited<ReturnType<typeof getDashboardKpis>>;

/* ===================== نمودار فروش هفتگی ===================== */

export async function getWeeklySales(): Promise<SalesDataPoint[]> {
  const today = new Date();
  const start = new Date(today);
  start.setDate(start.getDate() - 6);
  start.setHours(0, 0, 0, 0);

  const orders = await prisma.order.findMany({
    where: { createdAt: { gte: start }, status: { in: COUNTED_STATUSES } },
    select: { total: true, createdAt: true },
  });

  const days: SalesDataPoint[] = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    return { name: WEEKDAY_FA[d.getDay()], "فروش": 0, "سفارش": 0 };
  });

  orders.forEach((o) => {
    const diffDays = Math.floor((o.createdAt.getTime() - start.getTime()) / 86400000);
    if (diffDays >= 0 && diffDays < 7) {
      days[diffDays]["فروش"] += Number(o.total);
      days[diffDays]["سفارش"] += 1;
    }
  });

  return days;
}

/* ===================== نمودار ماهانه (۹ ماه گذشته) ===================== */
// نکته: به‌جای «بازدید» (که داده‌ای براش نداریم)، «کاربران جدید» را برمی‌گردانیم.

export async function getMonthlySales(): Promise<MonthlyDataPoint[]> {
  const now = new Date();
  const months: { year: number; month: number }[] = Array.from({ length: 9 }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - (8 - i), 1);
    return { year: d.getFullYear(), month: d.getMonth() };
  });

  const rangeStart = new Date(months[0].year, months[0].month, 1);

  const [orders, users] = await Promise.all([
    prisma.order.findMany({
      where: { createdAt: { gte: rangeStart }, status: { in: COUNTED_STATUSES } },
      select: { total: true, createdAt: true },
    }),
    prisma.user.findMany({
      where: { createdAt: { gte: rangeStart } },
      select: { createdAt: true },
    }),
  ]);

  return months.map(({ year, month }) => {
    const revenue = orders
      .filter((o) => o.createdAt.getFullYear() === year && o.createdAt.getMonth() === month)
      .reduce((sum, o) => sum + Number(o.total), 0);

    const newUsers = users.filter(
      (u) => u.createdAt.getFullYear() === year && u.createdAt.getMonth() === month
    ).length;

    return {
      name: MONTH_FA[month],
      // مقدار به میلیون تومان گرد شده تا با محور نمودار سازگار باشد
      "فروش": Math.round(revenue / 1_000_000),
      "بازدید": newUsers, // ← در واقع «کاربران جدید»، نگاه کن به توضیح پایین صفحه
    };
  });
}

/* ===================== سهم دسته‌بندی‌ها از فروش ===================== */

export async function getCategorySales(): Promise<CategoryDatum[]> {
  const items = await prisma.orderItem.findMany({
    where: { order: { status: { in: COUNTED_STATUSES } } },
    select: {
      price: true,
      quantity: true,
      variant: { select: { product: { select: { category: { select: { name: true } } } } } },
    },
  });

  const totals = new Map<string, number>();
  items.forEach((it) => {
    const categoryName = it.variant.product.category.name;
    const revenue = Number(it.price) * it.quantity;
    totals.set(categoryName, (totals.get(categoryName) ?? 0) + revenue);
  });

  const grandTotal = [...totals.values()].reduce((a, b) => a + b, 0) || 1;
  const palette = ["#3742fa", "#2ed573", "#ffa502", "#ff4757", "#1e90ff", "#8a4cff"];

  const sorted = [...totals.entries()].sort((a, b) => b[1] - a[1]);
  const top = sorted.slice(0, 4);
  const rest = sorted.slice(4);
  const restSum = rest.reduce((sum, [, v]) => sum + v, 0);

  const result: CategoryDatum[] = top.map(([name, value], i) => ({
    name,
    value: Math.round((value / grandTotal) * 100),
    color: palette[i],
  }));

  if (restSum > 0) {
    result.push({ name: "سایر", value: Math.round((restSum / grandTotal) * 100), color: palette[5] });
  }

  return result;
}

/* ===================== پرفروش‌ترین محصولات ===================== */

export async function getTopProducts(limit = 5): Promise<TopProduct[]> {
  const items = await prisma.orderItem.findMany({
    where: { order: { status: { in: COUNTED_STATUSES } } },
    select: {
      price: true,
      quantity: true,
      variant: { select: { productId: true, product: { select: { name: true } } } },
    },
  });

  const byProduct = new Map<string, { name: string; qty: number; revenue: number }>();
  items.forEach((it) => {
    const id = it.variant.productId;
    const existing = byProduct.get(id) ?? { name: it.variant.product.name, qty: 0, revenue: 0 };
    existing.qty += it.quantity;
    existing.revenue += Number(it.price) * it.quantity;
    byProduct.set(id, existing);
  });

  const palette = ["#3742fa", "#2ed573", "#ffa502", "#ff4757", "#1e90ff"];

  return [...byProduct.values()]
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, limit)
    .map((p, i) => ({
      name: p.name,
      "فروش": p.qty,
      "درآمد": Math.round(p.revenue),
      color: palette[i % palette.length],
    }));
}

/* ===================== سفارش‌های اخیر ===================== */

export async function getRecentOrders(limit = 7): Promise<RecentOrder[]> {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: "desc" },
    take: limit,
    include: { user: { select: { name: true } }, payment: { select: { method: true } } },
  });

  return orders.map((o) => {
    const { status, label } = statusMap[o.status];
    return {
      id: o.orderNumber,
      customer: o.user.name,
      avatar: o.user.name.charAt(0),
      amount: Number(o.total),
      status,
      statusLabel: label,
      date: o.createdAt.toLocaleDateString("fa-IR"),
      payment: o.payment ? paymentMethodLabel[o.payment.method] ?? o.payment.method : "در انتظار پرداخت",
    };
  });
}