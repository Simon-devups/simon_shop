import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import type { ColorTag } from "@/constants/types";

interface KpiCardProps {
  icon: LucideIcon;
  color: ColorTag;
  label: string;
  value: string;
  /** برای تأخیر انیمیشن ورود (fade-up d1..d6) */
  index?: number;
  /** محتوای گوشه بالا-راست کارت (مثلاً نشان روند یا دکمه بیشتر) */
  topRight?: ReactNode;
  /** محتوای پایین مقدار (مثلاً روند و متن مقایسه) */
  footer?: ReactNode;
  /** نمودار کوچک (اسپارک‌لاین) در پایین کارت */
  chart?: ReactNode;
}

export default function KpiCard({
  icon: Icon,
  color,
  label,
  value,
  index,
  topRight,
  footer,
  chart,
}: KpiCardProps) {
  const delayClass = index ? `d${index}` : "";
  return (
    <div className={`kpi fade-up ${delayClass}`}>
      <div className="kpi-top">
        <div className={`kpi-icon ${color}`}>
          <Icon size={20} />
        </div>
        {topRight}
      </div>
      <div className="kpi-label">{label}</div>
      <div className="kpi-value num-fa">{value}</div>
      {footer}
      {chart && <div className="kpi-chart">{chart}</div>}
    </div>
  );
}
