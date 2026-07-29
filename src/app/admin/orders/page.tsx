import { useState } from "react";
import {
  Download, MoreHorizontal, Truck, Package,
  CheckCircle2, Clock, XCircle, MapPin, CreditCard, Phone,
  Mail, FileText, Printer
} from "lucide-react";
import { recentOrders, formatPrice } from "../../../data/mock";

const statusMap: Record<string, { label: string; cls: string; icon: any }> = {
  success: { label: "تکمیل شده", cls: "success", icon: CheckCircle2 },
  warning: { label: "در حال ارسال", cls: "warning", icon: Truck },
  info: { label: "در حال پردازش", cls: "info", icon: Clock },
  danger: { label: "لغو شده", cls: "danger", icon: XCircle },
};

export default function Orders() {
  const [selected, setSelected] = useState<typeof recentOrders[0] | null>(recentOrders[0]);

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">سفارش‌ها</h1>
          <p className="page-subtitle">مدیریت و پیگیری سفارش‌های فروشگاه</p>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary"><Download size={15} /> خروجی</button>
          <button className="btn btn-secondary"><Printer size={15} /> چاپ</button>
        </div>
      </div>

      {/* Status overview */}
      <div className="kpi-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
        {[
          { label: "کل سفارش‌ها", value: "۱,۲۴۸", icon: Package, color: "blue", trend: "۱۲٪ افزایش" },
          { label: "در انتظار پردازش", value: "۲۳", icon: Clock, color: "orange", trend: "نیاز به اقدام" },
          { label: "در حال ارسال", value: "۴۸", icon: Truck, color: "purple", trend: "۲۴ سفارش امروز" },
          { label: "تکمیل شده", value: "۱,۱۴۲", icon: CheckCircle2, color: "green", trend: "۹۱٪ نرخ موفقیت" },
        ].map((k, i) => {
          const Icon = k.icon;
          return (
            <div key={i} className={`kpi fade-up d${i + 1}`}>
              <div className="kpi-top">
                <div className={`kpi-icon ${k.color}`}><Icon size={18} /></div>
                <span className={`kpi-trend ${i === 1 ? "down" : "up"}`}>{k.trend}</span>
              </div>
              <div className="kpi-label">{k.label}</div>
              <div className="kpi-value num-fa">{k.value}</div>
            </div>
          );
        })}
      </div>

      <div className="grid-2">
        {/* Orders list */}
        <div className="table-wrap fade-up" style={{ height: "fit-content" }}>
          <div className="table-toolbar">
            <div className="toolbar-left">
              <input className="input input-search" placeholder="جستجوی سفارش..." style={{ width: 220 }} />
              <select className="select" style={{ width: 130 }}>
                <option>همه وضعیت‌ها</option>
                <option>در حال پردازش</option>
                <option>در حال ارسال</option>
                <option>تکمیل شده</option>
                <option>لغو شده</option>
              </select>
              <select className="select" style={{ width: 130 }}>
                <option>همه تاریخ‌ها</option>
                <option>امروز</option>
                <option>این هفته</option>
                <option>این ماه</option>
              </select>
            </div>
          </div>
          <div style={{ maxHeight: 640, overflowY: "auto" }}>
            <table className="t">
              <thead>
                <tr>
                  <th>سفارش</th>
                  <th>مشتری</th>
                  <th>مبلغ</th>
                  <th>وضعیت</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((o) => {
                  const st = statusMap[o.status];
                  const Icon = st.icon;
                  const isSel = selected?.id === o.id;
                  return (
                    <tr key={o.id} onClick={() => setSelected(o)} style={{ cursor: "pointer", background: isSel ? "var(--accent-soft)" : undefined }}>
                      <td>
                        <div className="cell-strong num-fa" style={{ marginBottom: 2 }}>{o.id}</div>
                        <div className="cell-muted num-fa">{o.date}</div>
                      </td>
                      <td>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <div className="avatar sm" style={{ background: "linear-gradient(135deg, #3742fa, #ff6b9d)" }}>{o.avatar}</div>
                          <div>
                            <div className="cell-strong">{o.customer}</div>
                            <div className="cell-muted">{o.payment}</div>
                          </div>
                        </div>
                      </td>
                      <td><span className="cell-amount num-fa">{formatPrice(o.amount)}</span></td>
                      <td>
                        <span className={`badge ${st.cls}`}><Icon size={11} />{st.label}</span>
                      </td>
                      <td>
                        <button className="icon-btn" style={{ width: 30, height: 30, border: "none", background: "transparent" }} onClick={(e) => e.stopPropagation()}>
                          <MoreHorizontal size={14} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Order details */}
        {selected && (
          <div className="fade-up" style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {/* Header */}
            <div className="card">
              <div className="card-pad" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: 12, color: "var(--muted)" }}>سفارش</div>
                  <div className="num-fa" style={{ fontSize: 18, fontWeight: 800 }}>{selected.id}</div>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button className="btn btn-secondary btn-sm"><Printer size={13} /> چاپ فاکتور</button>
                  <button className="btn btn-primary btn-sm">تأیید و ارسال</button>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="card">
              <div className="card-header">
                <div>
                  <h3 className="card-title">وضعیت سفارش</h3>
                  <div className="card-subtitle">روند پردازش و ارسال</div>
                </div>
                <span className={`badge ${statusMap[selected.status].cls}`}>
                  {statusMap[selected.status].label}
                </span>
              </div>
              <div className="card-body">
                <div className="timeline">
                  <div className="tl-item success done">
                    <h4 className="tl-title">سفارش ثبت شد</h4>
                    <p className="tl-desc">سفارش توسط مشتری با موفقیت ثبت شد</p>
                    <span className="tl-time num-fa">{selected.date} - ۱۴:۲۳</span>
                  </div>
                  <div className="tl-item success done">
                    <h4 className="tl-title">پرداخت تأیید شد</h4>
                    <p className="tl-desc">پرداخت از طریق درگاه بانکی با موفقیت انجام شد</p>
                    <span className="tl-time num-fa">{selected.date} - ۱۴:۲۵</span>
                  </div>
                  <div className="tl-item done">
                    <h4 className="tl-title">آماده‌سازی سفارش</h4>
                    <p className="tl-desc">سفارش در انبار بسته‌بندی شد</p>
                    <span className="tl-time num-fa">{selected.date} - ۱۶:۴۰</span>
                  </div>
                  <div className="tl-item">
                    <h4 className="tl-title">تحویل به پست</h4>
                    <p className="tl-desc">در انتظار تحویل مرسوله به پست پیشتاز</p>
                    <span className="tl-time num-fa">در انتظار</span>
                  </div>
                  <div className="tl-item">
                    <h4 className="tl-title">ارسال به مشتری</h4>
                    <p className="tl-desc">مرسوله در مسیر مقصد</p>
                    <span className="tl-time num-fa">—</span>
                  </div>
                  <div className="tl-item">
                    <h4 className="tl-title">تحویل نهایی</h4>
                    <p className="tl-desc">سفارش به مشتری تحویل داده شد</p>
                    <span className="tl-time num-fa">—</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer details */}
            <div className="card">
              <div className="card-header">
                <div>
                  <h3 className="card-title">اطلاعات مشتری</h3>
                </div>
              </div>
              <div className="card-body">
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div className="avatar lg" style={{ background: "linear-gradient(135deg, #3742fa, #ff6b9d)" }}>{selected.avatar}</div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700 }}>{selected.customer}</div>
                    <div style={{ fontSize: 12, color: "var(--muted)" }}>مشتری از ۱۴۰۲/۰۸/۱۲</div>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, padding: 10, background: "var(--surface-2)", borderRadius: 10 }}>
                    <Phone size={15} color="var(--accent)" />
                    <div>
                      <div style={{ fontSize: 11, color: "var(--muted)" }}>تلفن</div>
                      <div className="num-fa" style={{ fontSize: 13, fontWeight: 600 }}>۰۹۱۲۳۴۵۶۷۸۹</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, padding: 10, background: "var(--surface-2)", borderRadius: 10 }}>
                    <Mail size={15} color="var(--accent)" />
                    <div>
                      <div style={{ fontSize: 11, color: "var(--muted)" }}>ایمیل</div>
                      <div style={{ fontSize: 13, fontWeight: 600 }}>{selected.customer.replace(" ", ".")}@email.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Invoice */}
            <div className="card">
              <div className="card-header">
                <div>
                  <h3 className="card-title">فاکتور سفارش</h3>
                </div>
                <span className="badge accent"><FileText size={11} />فاکتور رسمی</span>
              </div>
              <div className="card-body">
                {[
                  { n: "هدفون بی‌سیم سونی WH-1000XM5", q: 1, p: 18500000 },
                  { n: "کیف محافظ هدفون", q: 1, p: 1850000 },
                  { n: "کابل شارژ USB-C", q: 2, p: 350000 },
                ].map((it, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", padding: "10px 0", borderBottom: i < 2 ? "1px solid var(--border-soft)" : "0" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 600 }}>{it.n}</div>
                      <div style={{ fontSize: 12, color: "var(--muted)" }} className="num-fa">{formatPrice(it.q)} عدد</div>
                    </div>
                    <div className="num-fa" style={{ fontWeight: 700 }}>{formatPrice(it.q * it.p)}</div>
                  </div>
                ))}
                <div style={{ marginTop: 12, paddingTop: 12, borderTop: "2px dashed var(--border)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", fontSize: 13 }}>
                    <span style={{ color: "var(--muted)" }}>جمع جزء</span>
                    <span className="num-fa">{formatPrice(21050000)} تومان</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", fontSize: 13 }}>
                    <span style={{ color: "var(--muted)" }}>هزینه ارسال</span>
                    <span className="num-fa">{formatPrice(50000)} تومان</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", fontSize: 13, color: "var(--success)" }}>
                    <span>تخفیف</span>
                    <span className="num-fa">- {formatPrice(0)}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0 0", marginTop: 6, borderTop: "1px solid var(--border-soft)", fontSize: 15, fontWeight: 800 }}>
                    <span>مبلغ نهایی</span>
                    <span className="num-fa" style={{ color: "var(--accent)" }}>{formatPrice(selected.amount)} تومان</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping */}
            <div className="card">
              <div className="card-header">
                <div>
                  <h3 className="card-title">اطلاعات ارسال</h3>
                </div>
                <Truck size={16} color="var(--muted)" />
              </div>
              <div className="card-body">
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--accent-soft)", color: "var(--accent)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                    <MapPin size={18} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>آدرس تحویل</div>
                    <div style={{ fontSize: 12.5, color: "var(--text-soft)", lineHeight: 1.7 }}>
                      تهران، منطقه ۳، محله ونک، خیابان ولیعصر، کوچه شهید فلاحی، پلاک ۲۴، طبقه ۳، واحد ۵
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--border-soft)", display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--success-soft)", color: "var(--success)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                    <CreditCard size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>روش پرداخت: {selected.payment}</div>
                    <div style={{ fontSize: 12, color: "var(--muted)" }}>پرداخت با موفقیت انجام شد</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
