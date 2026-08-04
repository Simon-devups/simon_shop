import { Zap } from "lucide-react";
import ProgressBar from "@/components/admin/ui/ProgressBar";

export default function CompletionTipBanner() {
  return (
    <div
      className="card fade-up"
      style={{ padding: 20, marginBottom: 18, background: "linear-gradient(120deg, #eef0ff 0%, #ffffff 100%)" }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: "var(--accent)",
            color: "#fff",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Zap size={22} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 2 }}>
            نکته: برای فروش بهتر، محصول را کامل پر کنید
          </div>
          <div style={{ fontSize: 12.5, color: "var(--muted)" }}>
            محصولاتی که حداقل ۵ تصویر و توضیحات کامل دارند، ۳ برابر بیشتر فروش دارند.
          </div>
        </div>
        <ProgressBar percent={35} style={{ width: 200 }} />
        <div style={{ fontSize: 12, color: "var(--muted)" }}>
          <strong>۳۵٪</strong> تکمیل شده
        </div>
      </div>
    </div>
  );
}
