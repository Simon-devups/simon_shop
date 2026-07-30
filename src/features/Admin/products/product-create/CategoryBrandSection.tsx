export default function CategoryBrandSection() {
  return (
    <div className="card fade-up">
      <div className="card-header">
        <div>
          <h3 className="card-title">دسته‌بندی و برند</h3>
          <div className="card-subtitle">محصول را در دسته‌بندی مناسب قرار دهید</div>
        </div>
      </div>
      <div className="card-body">
        <div className="form-group">
          <label className="label">
            <span className="req">*</span> دسته‌بندی اصلی
          </label>
          <select className="select">
            <option>الکترونیک</option>
            <option>پوشاک</option>
            <option>زیبایی و سلامت</option>
            <option>خانه و آشپزخانه</option>
          </select>
        </div>
        <div className="form-group">
          <label className="label">زیردسته</label>
          <select className="select">
            <option>هدفون و هندزفری</option>
            <option>ساعت هوشمند</option>
            <option>لپ‌تاپ و کامپیوتر</option>
          </select>
        </div>
        <div className="form-group">
          <label className="label">
            <span className="req">*</span> برند
          </label>
          <select className="select">
            <option>سونی</option>
            <option>اپل</option>
            <option>سامسونگ</option>
            <option>نایک</option>
          </select>
        </div>
      </div>
    </div>
  );
}
