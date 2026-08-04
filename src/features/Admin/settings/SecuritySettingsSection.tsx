import ToggleSwitch from "@/components/admin/ui/ToggleSwitch";

export default function SecuritySettingsSection() {
  return (
    <>
      <div className="card fade-up">
        <div className="card-header">
          <div>
            <h3 className="card-title">تغییر رمز عبور</h3>
            <div className="card-subtitle">رمز عبور فعلی خود را تغییر دهید</div>
          </div>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label className="label">رمز عبور فعلی</label>
            <input className="input" type="password" placeholder="••••••••" />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="label">رمز عبور جدید</label>
              <input className="input" type="password" placeholder="••••••••" />
            </div>
            <div className="form-group">
              <label className="label">تکرار رمز عبور جدید</label>
              <input className="input" type="password" placeholder="••••••••" />
            </div>
          </div>
          <button className="btn btn-primary">به‌روزرسانی رمز عبور</button>
        </div>
      </div>

      <div className="card fade-up d1">
        <div className="card-header">
          <div>
            <h3 className="card-title">احراز هویت دو مرحله‌ای</h3>
            <div className="card-subtitle">امنیت بیشتر برای ورود به حساب کاربری</div>
          </div>
        </div>
        <div className="card-body">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0" }}>
            <div>
              <div style={{ fontSize: 13.5, fontWeight: 600 }}>فعال‌سازی ورود دو مرحله‌ای (پیامکی)</div>
              <div style={{ fontSize: 12, color: "var(--muted)" }}>
                کد تأیید هنگام ورود به شماره شما پیامک می‌شود
              </div>
            </div>
            <ToggleSwitch defaultChecked />
          </div>
        </div>
      </div>
    </>
  );
}
