"use client";

import { Edit3, Trash2 } from "lucide-react";
import ToggleSwitch from "@/components/ui/ToggleSwitch";
import { formatPrice } from "@/lib/utils";
import type { Category } from "@/constants/types";

export default function CategoriesTable({ categories }: { categories: Category[] }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table className="t">
        <thead>
          <tr>
            <th>دسته‌بندی</th>
            <th>زیرمجموعه‌ی</th>
            <th>تعداد محصولات</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((c) => (
            <tr key={c.id}>
              <td>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    className="product-thumb"
                    style={{ background: `${c.color}1a`, color: c.color, fontSize: 18 }}
                  >
                    {c.icon}
                  </div>
                  <span className="cell-strong">{c.name}</span>
                </div>
              </td>
              <td>
                <span className="cell-muted">{c.parent}</span>
              </td>
              <td>
                <span className="num-fa" style={{ fontWeight: 600 }}>
                  {formatPrice(c.products)}
                </span>
              </td>
              <td>
                <ToggleSwitch defaultChecked={c.active} />
              </td>
              <td>
                <div className="actions">
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
