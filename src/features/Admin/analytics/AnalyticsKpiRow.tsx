import { TrendingUp, Eye, ShoppingBag, Percent } from "lucide-react";
import KpiCard from "@/components/admin/ui/KpiCard";

export default function AnalyticsKpiRow() {
  return (
    <div className="kpi-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
      <KpiCard
        index={1}
        icon={TrendingUp}
        color="blue"
        label="درآمد کل"
        value="۸۴۲,۱۸۰,۰۰۰"
        footer={
          <div className="kpi-meta">
            <span className="kpi-trend up">
              <TrendingUp size={12} /> ۱۸.۴٪
            </span>
            <span className="kpi-compare">نسبت به ماه قبل</span>
          </div>
        }
      />
      <KpiCard
        index={2}
        icon={Eye}
        color="purple"
        label="بازدید کل"
        value="۳۶,۰۰۰"
        footer={
          <div className="kpi-meta">
            <span className="kpi-trend up">
              <TrendingUp size={12} /> ۹.۲٪
            </span>
            <span className="kpi-compare">نسبت به ماه قبل</span>
          </div>
        }
      />
      <KpiCard
        index={3}
        icon={ShoppingBag}
        color="green"
        label="نرخ تبدیل"
        value="۳.۸٪"
        footer={
          <div className="kpi-meta">
            <span className="kpi-trend up">
              <TrendingUp size={12} /> ۰.۴٪
            </span>
            <span className="kpi-compare">نسبت به ماه قبل</span>
          </div>
        }
      />
      <KpiCard
        index={4}
        icon={Percent}
        color="orange"
        label="میانگین سبد خرید"
        value="۱,۲۴۰,۰۰۰"
        footer={
          <div className="kpi-meta">
            <span className="kpi-trend down">
              <TrendingUp size={12} /> ۱.۱٪
            </span>
            <span className="kpi-compare">نسبت به ماه قبل</span>
          </div>
        }
      />
    </div>
  );
}
