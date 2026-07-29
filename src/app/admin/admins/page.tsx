import {
  Plus, MoreHorizontal, Edit3, Trash2, Mail, Shield, Activity, Key
} from "lucide-react";

const admins = [
  { name: "امیر حسینی", email: "amir@novamarket.ir", role: "مدیر ارشد", status: "active", last: "۲ دقیقه پیش", avatar: "ا" },
  { name: "مریم احمدی", email: "maryam@novamarket.ir", role: "مدیر محصولات", status: "active", last: "۱ ساعت پیش", avatar: "م" },
  { name: "علی رضایی", email: "ali.r@novamarket.ir", role: "مدیر فروش", status: "active", last: "دیروز", avatar: "ع" },
  { name: "زهرا کریمی", email: "z.karimi@novamarket.ir", role: "پشتیبان", status: "active", last: "۳ ساعت پیش", avatar: "ز" },
  { name: "حسین نوری", email: "hossein@novamarket.ir", role: "مدیر محتوا", status: "inactive", last: "۲ هفته پیش", avatar: "ح" },
];

export default function Admins() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">مدیران و دسترسی‌ها</h1>
          <p className="page-subtitle">مدیریت حساب مدیران و سطوح دسترسی</p>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary"><Key size={15} /> سطوح دسترسی</button>
          <button className="btn btn-primary"><Plus size={16} /> افزودن مدیر</button>
        </div>
      </div>

      <div className="kpi-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
        {[
          { label: "کل مدیران", value: "۵", icon: Shield, color: "blue" },
          { label: "مدیران فعال", value: "۴", icon: Activity, color: "green" },
          { label: "نقش‌ها", value: "۵", icon: Key, color: "purple" },
          { label: "عملیات امروز", value: "۴۸", icon: Mail, color: "orange" },
        ].map((k, i) => {
          const Icon = k.icon;
          return (
            <div key={i} className={`kpi fade-up d${i + 1}`}>
              <div className="kpi-top">
                <div className={`kpi-icon ${k.color}`}><Icon size={18} /></div>
              </div>
              <div className="kpi-label">{k.label}</div>
              <div className="kpi-value num-fa">{k.value}</div>
            </div>
          );
        })}
      </div>

      <div className="table-wrap fade-up">
        <div className="table-toolbar">
          <div className="toolbar-left">
            <input className="input input-search" placeholder="جستجوی مدیر..." style={{ width: 280 }} />
            <select className="select" style={{ width: 140 }}><option>همه نقش‌ها</option><option>مدیر ارشد</option><option>مدیر محصولات</option><option>پشتیبان</option></select>
          </div>
        </div>
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
            {admins.map((a, i) => (
              <tr key={i}>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div className="avatar">{a.avatar}<span className="avatar-status" /></div>
                    <div>
                      <div className="cell-strong">{a.name}</div>
                      <div className="cell-muted">شناسه: #{1000 + i}</div>
                    </div>
                  </div>
                </td>
                <td><span style={{ fontSize: 12.5 }}>{a.email}</span></td>
                <td><span className="badge accent">{a.role}</span></td>
                <td><span className="cell-muted">{a.last}</span></td>
                <td>
                  {a.status === "active" ? (
                    <span className="badge success"><span className="dot pulse" />آنلاین</span>
                  ) : (
                    <span className="badge neutral">غیرفعال</span>
                  )}
                </td>
                <td>
                  <div className="actions">
                    <button className="icon-btn" title="ویرایش"><Edit3 size={14} /></button>
                    <button className="icon-btn" title="حذف" style={{ color: "var(--danger)" }}><Trash2 size={14} /></button>
                    <button className="icon-btn"><MoreHorizontal size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
