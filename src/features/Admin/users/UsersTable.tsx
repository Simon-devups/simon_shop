import { Eye, Edit3, Trash2 } from "lucide-react";
import Avatar from "@/components/admin/ui/Avatar";
import Badge from "@/components/admin/ui/Badge";
import type { AppUser, BadgeVariant } from "@/constants/types";

const roleVariant: Record<AppUser["role"], BadgeVariant> = {
  customer: "neutral",
  vip: "accent",
  admin: "info",
};

export default function UsersTable({ users }: { users: AppUser[] }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table className="t">
        <thead>
          <tr>
            <th>کاربر</th>
            <th>ایمیل</th>
            <th>شماره تماس</th>
            <th>نقش</th>
            <th>تعداد سفارش</th>
            <th>تاریخ عضویت</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Avatar size="sm">{u.avatar}</Avatar>
                  <span className="cell-strong">{u.name}</span>
                </div>
              </td>
              <td>
                <span className="cell-muted" dir="ltr" style={{ display: "inline-block" }}>
                  {u.email}
                </span>
              </td>
              <td>
                <span className="cell-muted num-fa">{u.phone}</span>
              </td>
              <td>
                <Badge variant={roleVariant[u.role]} dot={false}>
                  {u.roleLabel}
                </Badge>
              </td>
              <td>
                <span className="num-fa" style={{ fontWeight: 600 }}>
                  {u.orders.toLocaleString("fa-IR")}
                </span>
              </td>
              <td>
                <span className="cell-muted num-fa">{u.joined}</span>
              </td>
              <td>
                <Badge variant={u.status === "active" ? "success" : "danger"} pulse={u.status === "active"}>
                  {u.status === "active" ? "فعال" : "غیرفعال"}
                </Badge>
              </td>
              <td>
                <div className="actions">
                  <button className="icon-btn" title="مشاهده">
                    <Eye size={14} />
                  </button>
                  <button className="icon-btn" title="ویرایش">
                    <Edit3 size={14} />
                  </button>
                  <button className="icon-btn" title="حذف" style={{ color: "var(--danger)" }}>
                    <Trash2 size={14} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
