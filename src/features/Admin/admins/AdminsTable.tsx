import { Edit3, Trash2, Key } from "lucide-react";
import Avatar from "@/components/ui/Avatar";
import Badge from "@/components/ui/Badge";
import type { Admin } from "@/constants/types";

export default function AdminsTable({ admins }: { admins: Admin[] }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table className="t">
        <thead>
          <tr>
            <th>مدیر</th>
            <th>ایمیل</th>
            <th>نقش</th>
            <th>آخرین فعالیت</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((a) => (
            <tr key={a.email}>
              <td>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Avatar size="sm">{a.avatar}</Avatar>
                  <span className="cell-strong">{a.name}</span>
                </div>
              </td>
              <td>
                <span className="cell-muted" dir="ltr">
                  {a.email}
                </span>
              </td>
              <td>
                <Badge variant="accent" dot={false}>
                  {a.role}
                </Badge>
              </td>
              <td>
                <span className="cell-muted">{a.last}</span>
              </td>
              <td>
                <Badge variant={a.status === "active" ? "success" : "danger"} pulse={a.status === "active"}>
                  {a.status === "active" ? "فعال" : "غیرفعال"}
                </Badge>
              </td>
              <td>
                <div className="actions">
                  <button className="icon-btn" title="تغییر دسترسی">
                    <Key size={14} />
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
