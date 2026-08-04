import { Check, X, Trash2 } from "lucide-react";
import Avatar from "@/components/admin/ui/Avatar";
import StarRating from "@/components/admin/ui/StarRating";
import Badge from "@/components/admin/ui/Badge";
import type { ProductComment } from "@/constants/types";

const statusLabel: Record<ProductComment["status"], string> = {
  approved: "تأیید شده",
  pending: "در انتظار",
  rejected: "رد شده",
};

const statusVariant: Record<ProductComment["status"], "success" | "warning" | "danger"> = {
  approved: "success",
  pending: "warning",
  rejected: "danger",
};

export default function CommentItem({ comment }: { comment: ProductComment }) {
  return (
    <div style={{ padding: "16px 0", borderBottom: "1px solid var(--border-soft)" }}>
      <div style={{ display: "flex", gap: 12 }}>
        <Avatar size="sm">{comment.avatar}</Avatar>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
            <div>
              <span style={{ fontWeight: 700, fontSize: 13.5 }}>{comment.user}</span>
              <span style={{ fontSize: 12, color: "var(--muted)", marginRight: 8 }}>
                درباره‌ی «{comment.product}»
              </span>
            </div>
            <Badge variant={statusVariant[comment.status]}>{statusLabel[comment.status]}</Badge>
          </div>
          <div style={{ marginBottom: 6 }}>
            <StarRating rating={comment.rating} />
          </div>
          <p style={{ fontSize: 13, color: "var(--text)", marginBottom: 10 }}>{comment.text}</p>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span className="cell-muted num-fa" style={{ fontSize: 11.5 }}>
              {comment.date}
            </span>
            <div style={{ display: "flex", gap: 6, marginRight: "auto" }}>
              {comment.status !== "approved" && (
                <button className="btn btn-secondary btn-sm">
                  <Check size={13} /> تأیید
                </button>
              )}
              {comment.status !== "rejected" && (
                <button className="btn btn-secondary btn-sm">
                  <X size={13} /> رد
                </button>
              )}
              <button className="icon-btn" style={{ color: "var(--danger)" }} title="حذف">
                <Trash2 size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
