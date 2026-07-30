export default function ActivityTimeline() {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <h3 className="card-title">فعالیت‌های اخیر</h3>
          <div className="card-subtitle">رخدادهای مهم امروز</div>
        </div>
        <button className="btn btn-ghost btn-sm">همه</button>
      </div>
      <div className="card-body">
        <div className="timeline">
          <div className="tl-item success">
            <h4 className="tl-title">سفارش جدید ثبت شد</h4>
            <p className="tl-desc">
              سفارش <strong className="num-fa">NV-82394</strong> توسط علی محمدی به مبلغ ۴,۲۵۰,۰۰۰ تومان
            </p>
            <span className="tl-time num-fa">۱۰ دقیقه پیش</span>
          </div>
          <div className="tl-item done">
            <h4 className="tl-title">پرداخت موفق</h4>
            <p className="tl-desc">
              پرداخت سفارش <strong className="num-fa">NV-82391</strong> تأیید شد
            </p>
            <span className="tl-time num-fa">۲۵ دقیقه پیش</span>
          </div>
          <div className="tl-item">
            <h4 className="tl-title">محصول جدید اضافه شد</h4>
            <p className="tl-desc">«هدفون سونی WH-1000XM5» توسط مریم احمدی</p>
            <span className="tl-time num-fa">۱ ساعت پیش</span>
          </div>
          <div className="tl-item">
            <h4 className="tl-title">نظر جدید در انتظار تأیید</h4>
            <p className="tl-desc">۳ نظر جدید برای محصولات شما ثبت شده است</p>
            <span className="tl-time num-fa">۲ ساعت پیش</span>
          </div>
          <div className="tl-item">
            <h4 className="tl-title">کد تخفیف فعال شد</h4>
            <p className="tl-desc">
              کد <strong>BLACKFRIDAY</strong> با ۵۰٪ تخفیف فعال گردید
            </p>
            <span className="tl-time num-fa">۳ ساعت پیش</span>
          </div>
        </div>
      </div>
    </div>
  );
}
