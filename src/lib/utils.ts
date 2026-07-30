import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * ادغام کلاس‌های Tailwind به همراه رفع تداخل بین آن‌ها.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * فرمت اعداد به شکل فارسی (جداکننده هزارگان + ارقام فارسی).
 */
export const formatPrice = (n: number) => n.toLocaleString("fa-IR");
