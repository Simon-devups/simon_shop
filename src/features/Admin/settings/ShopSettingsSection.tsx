export default function ShopSettingsSection() {
  return (
    <div className="card fade-up">
      <div className="card-header">
        <div>
          <h3 className="card-title">اطلاعات فروشگاه</h3>
          <div className="card-subtitle">اطلاعات نمایشی فروشگاه برای مشتریان</div>
        </div>
      </div>
      <div className="card-body">
        <div className="form-group">
          <label className="label">نام فروشگاه</label>
          <input className="input" defaultValue="نوا مارکت" />
        </div>
        <div className="form-group">
          <label className="label">توضیحات فروشگاه</label>
          <textarea className="textarea" defaultValue="فروشگاه آنلاین محصولات اورجینال با ضمانت اصالت کالا" />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="label">ایمیل پشتیبانی</label>
            <input className="input" dir="ltr" defaultValue="support@novamarket.ir" />
          </div>
          <div className="form-group">
            <label className="label">شماره تماس پشتیبانی</label>
            <input className="input num-fa" defaultValue="۰۲۱۹۱۰۰۰۰۰۰" />
          </div>
        </div>
        <div className="form-group">
          <label className="label">آدرس فروشگاه</label>
          <input className="input" defaultValue="تهران، خیابان ولیعصر، برج نوا، طبقه ۸" />
        </div>
      </div>
    </div>
  );
}
