"use client"

import {
  TrendingUp, TrendingDown, Users, ShoppingBag, DollarSign, Package,
  ArrowUpLeft, Calendar, Activity, Sparkles, Eye, MoreHorizontal, Download
} from "lucide-react";
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer,
  XAxis, YAxis, Tooltip, CartesianGrid
} from "recharts";
import { salesData, monthlyData, categoryData, topProducts, recentOrders, formatPrice } from "../../../data/mock";

const tooltipStyle = {
  background: "#fff",
  border: "1px solid #dcdde1",
  borderRadius: 12,
  padding: "10px 14px",
  boxShadow: "0 8px 24px rgba(45,52,54,0.08)",
  fontSize: 12,
  fontFamily: "Vazirmatn",
  direction: "rtl" as const,
};

const kpis = [
  { label: "فروش امروز", value: "۳۲,۵۰۰,۰۰۰", sub: "تومان", trend: 12.4, up: true, icon: DollarSign, color: "blue", suffix: "تومان" },
  { label: "درآمد این ماه", value: "۸۴۲,۱۸۰,۰۰۰", sub: "تومان", trend: 8.2, up: true, icon: TrendingUp, color: "green" },
  { label: "سفارش‌های جدید", value: "۱۲۸", sub: "سفارش", trend: 5.7, up: true, icon: ShoppingBag, color: "purple" },
  { label: "کاربران جدید", value: "۳۴۲", sub: "کاربر", trend: 2.1, up: false, icon: Users, color: "pink" },
  { label: "محصولات فعال", value: "۱,۲۴۸", sub: "محصول", trend: 0.4, up: true, icon: Package, color: "orange" },
  { label: "موجودی انبار", value: "۹۲٪", sub: "پر", trend: 1.2, up: false, icon: Activity, color: "cyan" },
];

const sparkData = [
  { v: 12 }, { v: 18 }, { v: 14 }, { v: 22 }, { v: 19 }, { v: 28 }, { v: 32 }
];

export default function Dashboard() {
  return (
    <div>
      {/* Greeting */}
      <div className="greeting fade-up">
        <div className="greeting-text">
          <h2>سلام، امیر عزیز 👋</h2>
          <p>امروز عملکرد فروشگاه شما فوق‌العاده بوده است. ۲۸٪ نسبت به دیروز رشد داشته‌اید.</p>
          <div className="greeting-meta">
            <div className="gm-item"><Calendar size={14} /> <strong>شنبه ۱۷ آذر ۱۴۰۳</strong></div>
            <div className="gm-item"><Activity size={14} /> وضعیت سرور: <strong style={{ color: "var(--success)" }}>پایدار</strong></div>
            <div className="gm-item"><Eye size={14} /> <strong className="num-fa">۲,۴۸۱</strong> بازدید امروز</div>
          </div>
        </div>
        <div className="greeting-actions">
          <button className="btn btn-secondary"><Download size={16} /> گزارش روزانه</button>
          <button className="btn btn-primary"><Sparkles size={16} /> تحلیل هوشمند</button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="kpi-grid">
        {kpis.map((k, i) => {
          const Icon = k.icon;
          return (
            <div key={k.label} className={`kpi fade-up d${i + 1}`}>
              <div className="kpi-top">
                <div className={`kpi-icon ${k.color}`}><Icon size={20} /></div>
                <button className="icon-btn" style={{ width: 28, height: 28, border: "none", background: "transparent" }}><MoreHorizontal size={16} /></button>
              </div>
              <div className="kpi-label">{k.label}</div>
              <div className="kpi-value num-fa">{k.value}</div>
              <div className="kpi-meta">
                <span className={`kpi-trend ${k.up ? "up" : "down"}`}>
                  {k.up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  {k.trend}٪
                </span>
                <span className="kpi-compare">نسبت به دیروز</span>
              </div>
              <div className="kpi-chart">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={sparkData}>
                    <defs>
                      <linearGradient id={`sp${i}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={k.color === "blue" ? "#3742fa" : k.color === "green" ? "#2ed573" : k.color === "purple" ? "#8a4cff" : k.color === "pink" ? "#ff4d8d" : k.color === "orange" ? "#ffa502" : "#00b8d4"} stopOpacity={0.3} />
                        <stop offset="100%" stopColor={k.color === "blue" ? "#3742fa" : k.color === "green" ? "#2ed573" : k.color === "purple" ? "#8a4cff" : k.color === "pink" ? "#ff4d8d" : k.color === "orange" ? "#ffa502" : "#00b8d4"} stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="v" stroke={k.color === "blue" ? "#3742fa" : k.color === "green" ? "#2ed573" : k.color === "purple" ? "#8a4cff" : k.color === "pink" ? "#ff4d8d" : k.color === "orange" ? "#ffa502" : "#00b8d4"} strokeWidth={2} fill={`url(#sp${i})`} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts row 1 */}
      <div className="grid-2 fade-up d3">
        <div className="card chart-card">
          <div className="chart-head">
            <div>
              <h3>نمودار فروش هفتگی</h3>
              <p>مقایسه فروش و تعداد سفارش‌ها در هفته جاری</p>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <div className="chart-legend">
                <div className="li"><span className="swatch" style={{ background: "#3742fa" }} /> فروش</div>
                <div className="li"><span className="swatch" style={{ background: "#2ed573" }} /> سفارش</div>
              </div>
              <div className="segmented">
                <button>روز</button>
                <button className="active">هفته</button>
                <button>ماه</button>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={salesData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="sa1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3742fa" stopOpacity={0.32} />
                  <stop offset="100%" stopColor="#3742fa" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="sa2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2ed573" stopOpacity={0.28} />
                  <stop offset="100%" stopColor="#2ed573" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ecedef" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#636e72", fontFamily: "Vazirmatn" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#636e72", fontFamily: "Vazirmatn" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${(v / 1000000).toFixed(0)}م`} />
              <Tooltip contentStyle={tooltipStyle} />
              <Area type="monotone" dataKey="فروش" stroke="#3742fa" strokeWidth={2.5} fill="url(#sa1)" />
              <Area type="monotone" dataKey="سفارش" stroke="#2ed573" strokeWidth={2.5} fill="url(#sa2)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="card chart-card">
          <div className="chart-head">
            <div>
              <h3>فروش بر اساس دسته‌بندی</h3>
              <p>سهم هر دسته از کل فروش ماه</p>
            </div>
            <button className="icon-btn" style={{ width: 32, height: 32, border: "none" }}><MoreHorizontal size={16} /></button>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={categoryData} dataKey="value" innerRadius={60} outerRadius={92} paddingAngle={3} stroke="none">
                {categoryData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
            </PieChart>
          </ResponsiveContainer>
          <div className="chart-legend" style={{ justifyContent: "center", marginTop: 8 }}>
            {categoryData.map((c) => (
              <div key={c.name} className="li">
                <span className="swatch" style={{ background: c.color }} />
                <span style={{ fontSize: 12 }}>{c.name}</span>
                <strong className="num-fa" style={{ fontSize: 12, color: "var(--text)" }}>{c.value}٪</strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Charts row 2 */}
      <div className="grid-2 fade-up d4" style={{ marginTop: 18 }}>
        <div className="card chart-card">
          <div className="chart-head">
            <div>
              <h3>مقایسه ماهانه فروش و بازدید</h3>
              <p>روند فروش و بازدیدکنندگان در ۹ ماه گذشته</p>
            </div>
            <div className="chart-legend">
              <div className="li"><span className="swatch" style={{ background: "#3742fa" }} /> فروش (میلیون)</div>
              <div className="li"><span className="swatch" style={{ background: "#ffa502" }} /> بازدید (هزار)</div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={monthlyData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }} barCategoryGap="22%">
              <CartesianGrid strokeDasharray="3 3" stroke="#ecedef" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#636e72", fontFamily: "Vazirmatn" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#636e72", fontFamily: "Vazirmatn" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "#f5f6fa" }} />
              <Bar dataKey="فروش" fill="#3742fa" radius={[6, 6, 0, 0]} maxBarSize={28} />
              <Bar dataKey="بازدید" fill="#ffa502" radius={[6, 6, 0, 0]} maxBarSize={28} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <div className="card-header">
            <div>
              <h3 className="card-title">پرفروش‌ترین محصولات</h3>
              <div className="card-subtitle">بر اساس درآمد این ماه</div>
            </div>
            <button className="btn btn-ghost btn-sm">مشاهده همه <ArrowUpLeft size={14} style={{ transform: "rotate(180deg)" }} /></button>
          </div>
          <div className="card-body">
            {topProducts.map((p, i) => {
              const max = topProducts[0].درآمد;
              const pct = (p.درآمد / max) * 100;
              return (
                <div key={p.name} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: i < topProducts.length - 1 ? "1px solid var(--border-soft)" : "0" }}>
                  <div className="avatar" style={{ background: p.color, fontSize: 12 }}>{i + 1}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{p.name}</div>
                    <div className="progress"><span style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${p.color} 0%, ${p.color}99 100%)` }} /></div>
                  </div>
                  <div style={{ textAlign: "left", minWidth: 90 }}>
                    <div className="num-fa" style={{ fontWeight: 700, fontSize: 13 }}>{formatPrice(p.درآمد)}</div>
                    <div style={{ fontSize: 11, color: "var(--muted)" }}>{formatPrice(p.فروش)} عدد</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recent orders + activity */}
      <div className="grid-2 fade-up d5" style={{ marginTop: 18 }}>
        <div className="card">
          <div className="card-header">
            <div>
              <h3 className="card-title">سفارش‌های اخیر</h3>
              <div className="card-subtitle">آخرین سفارش‌های ثبت شده در فروشگاه</div>
            </div>
            <button className="btn btn-ghost btn-sm">مشاهده همه</button>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table className="t">
              <thead>
                <tr>
                  <th>سفارش</th>
                  <th>مشتری</th>
                  <th>مبلغ</th>
                  <th>وضعیت</th>
                  <th>تاریخ</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.slice(0, 5).map((o) => (
                  <tr key={o.id}>
                    <td><span className="cell-strong num-fa">{o.id}</span></td>
                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div className="avatar sm" style={{ background: "linear-gradient(135deg, #3742fa, #ff6b9d)" }}>{o.avatar}</div>
                        <span className="cell-strong">{o.customer}</span>
                      </div>
                    </td>
                    <td><span className="cell-amount num-fa">{formatPrice(o.amount)}</span></td>
                    <td><span className={`badge ${o.status}`}><span className="dot" />{o.statusLabel}</span></td>
                    <td><span className="cell-muted num-fa">{o.date}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

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
                <p className="tl-desc">سفارش <strong className="num-fa">NV-82394</strong> توسط علی محمدی به مبلغ ۴,۲۵۰,۰۰۰ تومان</p>
                <span className="tl-time num-fa">۱۰ دقیقه پیش</span>
              </div>
              <div className="tl-item done">
                <h4 className="tl-title">پرداخت موفق</h4>
                <p className="tl-desc">پرداخت سفارش <strong className="num-fa">NV-82391</strong> تأیید شد</p>
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
                <p className="tl-desc">کد <strong>BLACKFRIDAY</strong> با ۵۰٪ تخفیف فعال گردید</p>
                <span className="tl-time num-fa">۳ ساعت پیش</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
