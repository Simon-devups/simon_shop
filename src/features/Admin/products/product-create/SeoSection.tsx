export default function SeoSection() {
  return (
    <div className="card fade-up">
      <div className="card-header">
        <div>
          <h3 className="card-title">بهینه‌سازی برای موتورهای جستجو (SEO)</h3>
          <div className="card-subtitle">این اطلاعات در نتایج جستجوی گوگل نمایش داده می‌شود</div>
        </div>
      </div>
      <div className="card-body">
        <div className="form-group">
          <label className="label">عنوان صفحه (Meta Title)</label>
          <input className="input" defaultValue="خرید هدفون بی‌سیم سونی WH-1000XM5 | نوا مارکت" />
        </div>
        <div className="form-group">
          <label className="label">توضیحات متا (Meta Description)</label>
          <textarea
            className="textarea"
            defaultValue="هدفون بی‌سیم سونی WH-1000XM5 با حذف نویز فعال و ۳۰ ساعت باتری، همین حالا با بهترین قیمت از نوا مارکت خریداری کنید."
          />
        </div>
        <div className="form-group">
          <label className="label">آدرس URL (Slug)</label>
          <input className="input" dir="ltr" defaultValue="sony-wh-1000xm5-wireless-headphone" />
        </div>
      </div>
    </div>
  );
}
