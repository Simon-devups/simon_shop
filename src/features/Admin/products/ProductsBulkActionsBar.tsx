import { Package, Trash2 } from "lucide-react";

interface ProductsBulkActionsBarProps {
  count: number;
  onCancel: () => void;
}

export default function ProductsBulkActionsBar({ count, onCancel }: ProductsBulkActionsBarProps) {
  return (
    <div className="alert info fade-up" style={{ marginBottom: 18 }}>
      <Package size={18} className="alert-icon" />
      <div style={{ flex: 1 }}>
        <div className="alert-title">
          <span className="num-fa">{count.toLocaleString("fa-IR")}</span> محصول انتخاب شده
        </div>
        <div className="alert-desc">عملیات گروهی بر روی آیتم‌های انتخابی اعمال می‌شود.</div>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <button className="btn btn-secondary btn-sm">ویرایش گروهی</button>
        <button className="btn btn-secondary btn-sm">تغییر دسته</button>
        <button className="btn btn-danger btn-sm">
          <Trash2 size={13} /> حذف
        </button>
        <button className="btn btn-ghost btn-sm" onClick={onCancel}>
          لغو
        </button>
      </div>
    </div>
  );
}
