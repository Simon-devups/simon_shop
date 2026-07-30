export default function PriceInventorySection() {
  return (
    <div className="card fade-up">
      <div className="card-header">
        <div>
          <h3 className="card-title">قیمت و موجودی</h3>
          <div className="card-subtitle">قیمت‌گذاری و مدیریت انبار</div>
        </div>
      </div>
      <div className="card-body">
        <div className="form-row">
          <div className="form-group">
            <label className="label">
              <span className="req">*</span> قیمت اصلی (تومان)
            </label>
            <input className="input num-fa" defaultValue="۱۸,۵۰۰,۰۰۰" />
          </div>
          <div className="form-group">
            <label className="label">قیمت با تخفیف (تومان)</label>
            <input className="input num-fa" defaultValue="۱۶,۹۰۰,۰۰۰" />
            <div className="hint">۸.۶٪ تخفیف نسبت به قیمت اصلی</div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="label">
              <span className="req">*</span> موجودی انبار
            </label>
            <input className="input num-fa" defaultValue="۱۲۴" />
          </div>
          <div className="form-group">
            <label className="label">حداقل موجودی هشدار</label>
            <input className="input num-fa" defaultValue="۱۰" />
          </div>
        </div>
        <div className="form-group">
          <label className="label">وضعیت محصول</label>
          <select className="select">
            <option>فعال و قابل فروش</option>
            <option>پیش‌نویس</option>
            <option>ناموجود</option>
          </select>
        </div>
      </div>
    </div>
  );
}
