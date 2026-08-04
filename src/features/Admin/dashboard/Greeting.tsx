import { Calendar, Activity, Eye, Download, Sparkles } from "lucide-react";

export default function Greeting() {
  const date = new Date();

  const formattedDate = new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  return (
    <div className="greeting fade-up">
      <div className="greeting-text">
        <h2>سلام، امیر عزیز 👋</h2>
        <p>امروز عملکرد فروشگاه شما فوق‌العاده بوده است.</p>
        <div className="greeting-meta">
          <div className="gm-item">
            <Calendar size={14} /> <strong>{formattedDate}</strong>
          </div>
          <div className="gm-item">
            <Activity size={14} /> وضعیت سرور: <strong style={{ color: "var(--success)" }}>پایدار</strong>
          </div>
          <div className="gm-item">
            <Eye size={14} /> <strong className="num-fa">۲,۴۸۱</strong> بازدید امروز
          </div>
        </div>
      </div>
      <div className="greeting-actions">
        <button className="btn btn-secondary">
          <Download size={16} /> گزارش روزانه
        </button>
        <button className="btn btn-primary">
          <Sparkles size={16} /> تحلیل هوشمند
        </button>
      </div>
    </div>
  );
}
