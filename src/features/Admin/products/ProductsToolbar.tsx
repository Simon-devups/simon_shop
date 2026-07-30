import { Filter } from "lucide-react";

export default function ProductsToolbar() {
  return (
    <div className="table-toolbar">
      <div className="toolbar-left">
        <div style={{ position: "relative", width: 280 }}>
          <input className="input input-search" placeholder="جستجوی محصول..." />
        </div>
        <select className="select" style={{ width: 160 }}>
          <option>همه دسته‌ها</option>
          <option>الکترونیک</option>
          <option>پوشاک</option>
          <option>زیبایی</option>
        </select>
        <select className="select" style={{ width: 140 }}>
          <option>همه برندها</option>
          <option>اپل</option>
          <option>سونی</option>
          <option>نایک</option>
        </select>
        <select className="select" style={{ width: 140 }}>
          <option>همه وضعیت‌ها</option>
          <option>فعال</option>
          <option>ناموجود</option>
          <option>پیش‌نویس</option>
        </select>
        <button className="btn btn-ghost btn-sm">
          <Filter size={14} /> فیلتر بیشتر
        </button>
      </div>
      <div className="toolbar-right">
        <span style={{ fontSize: 12, color: "var(--muted)" }}>نمایش</span>
        <select className="select" style={{ width: 80 }}>
          <option>۱۰</option>
          <option>۲۰</option>
          <option>۵۰</option>
        </select>
      </div>
    </div>
  );
}
