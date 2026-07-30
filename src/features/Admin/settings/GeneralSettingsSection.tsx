import ToggleSwitch from "@/components/ui/ToggleSwitch";

export default function GeneralSettingsSection() {
  return (
    <>
      <div className="card fade-up">
        <div className="card-header">
          <div>
            <h3 className="card-title">اطلاعات حساب کاربری</h3>
            <div className="card-subtitle">اطلاعات پروفایل مدیر ارشد</div>
          </div>
        </div>
        <div className="card-body">
          <div className="form-row">
            <div className="form-group">
              <label className="label">نام و نام خانوادگی</label>
              <input className="input" defaultValue="امیر حسینی" />
            </div>
            <div className="form-group">
              <label className="label">نام کاربری</label>
              <input className="input" dir="ltr" defaultValue="amir.hosseini" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="label">ایمیل</label>
              <input className="input" dir="ltr" defaultValue="amir@novamarket.ir" />
            </div>
            <div className="form-group">
              <label className="label">شماره تماس</label>
              <input className="input num-fa" defaultValue="۰۹۱۲۱۲۳۴۵۶۷" />
            </div>
          </div>
        </div>
      </div>

      <div className="card fade-up d1">
        <div className="card-header">
          <div>
            <h3 className="card-title">ترجیحات نمایش</h3>
            <div className="card-subtitle">زبان، تم و منطقه زمانی پنل</div>
          </div>
        </div>
        <div className="card-body">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0" }}>
            <div>
              <div style={{ fontSize: 13.5, fontWeight: 600 }}>حالت تاریک</div>
              <div style={{ fontSize: 12, color: "var(--muted)" }}>نمایش پنل با پس‌زمینه تیره</div>
            </div>
            <ToggleSwitch />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0" }}>
            <div>
              <div style={{ fontSize: 13.5, fontWeight: 600 }}>اعداد فارسی</div>
              <div style={{ fontSize: 12, color: "var(--muted)" }}>نمایش اعداد به صورت فارسی در تمام صفحات</div>
            </div>
            <ToggleSwitch defaultChecked />
          </div>
        </div>
      </div>
    </>
  );
}
