"use client"

import { Edit3, Trash2, Key } from "lucide-react";
import Avatar from "@/components/ui/Avatar";
import Badge from "@/components/ui/Badge";
import type { Admin , UpdateAdminType } from "@/constants/types";
import { deleteAdmin } from "@/lib/Admin/users/delete-admin";
import { UpdateAdmin } from "@/lib/Admin/users/edit-admin";

export default function AdminsTable({ admins }: { admins: Admin[] }) {
  const handleDelete = async (id:string) => {
    const confirmed = confirm("مطمئنی می‌خوای حذف کنی؟");
    if (!confirmed) return;

    await deleteAdmin(id);
  };

  const handleEdit = async({id,email,isActive,name,role}:UpdateAdminType)=>{
    await UpdateAdmin({id,email,isActive,name,role})
  }

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
                  {/* <Avatar size="sm">{a.avatar}</Avatar> */}
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
                  {a.role === "ADMIN" ? "مدیر" :"کاربر"}
                </Badge>
              </td>
              <td>
                <span className="cell-muted">{a.activeTime.toString()}</span>
              </td>
              <td>
                <Badge variant={a.isActive === true ? "success" : "danger"} pulse={a.isActive === true}>
                  {a.isActive === true ? "فعال" : "غیرفعال"}
                </Badge>
              </td>
              <td>
                <div className="actions">
                  <button className="icon-btn" title="تغییر دسترسی">
                    <Key size={14} />
                  </button>
                  <button className="icon-btn" onClick={()=>handleEdit} title="ویرایش">
                    <Edit3 size={14} />
                  </button>
                  <button className="icon-btn" onClick={() => handleDelete(a.id)} title="حذف" style={{ color: "var(--danger)" }}>
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
