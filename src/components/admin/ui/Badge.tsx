import type { ReactNode } from "react";
import type { BadgeVariant } from "@/constants/types";

interface BadgeProps {
  variant: BadgeVariant;
  children: ReactNode;
  /** نقطه‌ی رنگی سمت راست برچسب را نمایش می‌دهد */
  dot?: boolean;
  /** انیمیشن ضربان روی نقطه (برای وضعیت‌های "فعال زنده") */
  pulse?: boolean;
}

export default function Badge({ variant, children, dot = true, pulse = false }: BadgeProps) {
  return (
    <span className={`badge ${variant}`}>
      {dot && <span className={`dot ${pulse ? "pulse" : ""}`} />}
      {children}
    </span>
  );
}
