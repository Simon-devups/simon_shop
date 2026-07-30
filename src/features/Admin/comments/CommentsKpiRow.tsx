import { MessageSquare, Clock, CheckCircle2, XCircle } from "lucide-react";
import KpiCard from "@/components/ui/KpiCard";
import { formatPrice } from "@/lib/utils";
import type { ProductComment } from "@/constants/types";

export default function CommentsKpiRow({ comments }: { comments: ProductComment[] }) {
  const pending = comments.filter((c) => c.status === "pending").length;
  const approved = comments.filter((c) => c.status === "approved").length;
  const rejected = comments.filter((c) => c.status === "rejected").length;

  return (
    <div className="kpi-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
      <KpiCard index={1} icon={MessageSquare} color="blue" label="کل نظرات" value={formatPrice(comments.length)} />
      <KpiCard index={2} icon={Clock} color="orange" label="در انتظار تأیید" value={formatPrice(pending)} />
      <KpiCard index={3} icon={CheckCircle2} color="green" label="تأیید شده" value={formatPrice(approved)} />
      <KpiCard index={4} icon={XCircle} color="pink" label="رد شده" value={formatPrice(rejected)} />
    </div>
  );
}
