"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import ToggleSwitch from "@/components/ui/ToggleSwitch";

const roles = ["مدیر ارشد", "مدیر محصولات", "مدیر فروش", "پشتیبان", "مدیر محتوا"];

export default function AdminCreateForm() {
  const router = useRouter();
  const [name, setName] = useState("");

  // اولین حرف نام را به‌عنوان آواتار پیش‌فرض نمایش می‌دهیم
  const avatarLetter = name.trim().charAt(0) || "؟";

  const handleSave = () => {
    // TODO: اینجا فراخوانی Prisma / API برای ذخیره‌ی مدیر جدید قرار می‌گیرد
    router.push("/admins");
  };

  return (
    <div>
      <PageHeader
        title="افزودن مدیر جدید"
        subtitle="اطلاعات حساب و سطح دسترسی مدیر جدید را وارد کنید"
        actions={
          <>
            <button className="btn btn-secondary" onClick={() => router.push("/admins")}>
              انصراف
            </button>
            <button className="btn btn-primary" onClick={handleSave}>
              <Save size={16} /> ذخیره مدیر
            </button>
          </>
        }
      />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 260px", gap: 18, alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div className="card fade-up">
            <div className="card-header">
              <div>
                <h3 className="card-title">اطلاعات حساب</h3>
                <div className="card-subtitle">نام، ایمیل و نقش مدیر</div>
              </div>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label className="label">
                  <span className="req">*</span> نام و نام خانوادگی
                </label>
                <input
                  className="input"
                  placeholder="مثلاً امیر حسینی"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="label">
                    <span className="req">*</span> ایمیل
                  </label>
                  <input className="input" dir="ltr" placeholder="admin@novamarket.ir" />
                </div>
                <div className="form-group">
                  <label className="label">شماره تماس</label>
                  <input className="input num-fa" placeholder="۰۹۱۲۱۲۳۴۵۶۷" />
                </div>
              </div>
              <div className="form-group">
                <label className="label">
                  <span className="req">*</span> نقش
                </label>
                <select className="select">
                  {roles.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="card fade-up d1">
            <div className="card-header">
              <div>
                <h3 className="card-title">تنظیم رمز عبور</h3>
                <div className="card-subtitle">رمز ورود اولیه برای این حساب</div>
              </div>
            </div>
            <div className="card-body">
              <div className="form-row">
                <div className="form-group">
                  <label className="label">رمز عبور</label>
                  <input className="input" type="password" placeholder="••••••••" />
                </div>
                <div className="form-group">
                  <label className="label">تکرار رمز عبور</label>
                  <input className="input" type="password" placeholder="••••••••" />
                </div>
              </div>
              <div className="hint">پیشنهاد می‌شود از مدیر بخواهید در اولین ورود رمز را تغییر دهد.</div>
            </div>
          </div>
        </div>

        <div className="card fade-up" style={{ padding: 20 }}>
          <div style={{ textAlign: "center", marginBottom: 18 }}>
            <div
              className="avatar lg"
              style={{
                margin: "0 auto 10px",
                width: 64,
                height: 64,
                fontSize: 22,
                background: "linear-gradient(135deg, #3742fa, #ff6b9d)",
              }}
            >
              {avatarLetter}
            </div>
            <div style={{ fontSize: 13, color: "var(--muted)" }}>پیش‌نمایش آواتار</div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px 0",
              borderTop: "1px solid var(--border-soft)",
            }}
          >
            <div>
              <div style={{ fontSize: 13.5, fontWeight: 600 }}>وضعیت حساب</div>
              <div style={{ fontSize: 12, color: "var(--muted)" }}>فعال / غیرفعال</div>
            </div>
            <ToggleSwitch defaultChecked />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px 0",
              borderTop: "1px solid var(--border-soft)",
            }}
          >
            <div>
              <div style={{ fontSize: 13.5, fontWeight: 600 }}>ارسال ایمیل خوش‌آمدگویی</div>
              <div style={{ fontSize: 12, color: "var(--muted)" }}>اطلاع‌رسانی به ایمیل مدیر</div>
            </div>
            <ToggleSwitch defaultChecked />
          </div>
        </div>
      </div>
    </div>
  );
}