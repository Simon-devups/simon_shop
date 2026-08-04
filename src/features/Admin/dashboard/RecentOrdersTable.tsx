import Avatar from "@/components/admin/ui/Avatar";
import Badge from "@/components/admin/ui/Badge";
import { formatPrice } from "@/lib/utils";
import type { RecentOrder } from "@/constants/types";

export default function RecentOrdersTable({ orders }: { orders: RecentOrder[] }) {
  return (
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
            {orders.slice(0, 5).map((o) => (
              <tr key={o.id}>
                <td>
                  <span className="cell-strong num-fa">{o.id}</span>
                </td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <Avatar size="sm">{o.avatar}</Avatar>
                    <span className="cell-strong">{o.customer}</span>
                  </div>
                </td>
                <td>
                  <span className="cell-amount num-fa">{formatPrice(o.amount)}</span>
                </td>
                <td>
                  <Badge variant={o.status}>{o.statusLabel}</Badge>
                </td>
                <td>
                  <span className="cell-muted num-fa">{o.date}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
