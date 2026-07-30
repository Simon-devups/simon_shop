import Avatar from "@/components/ui/Avatar";
import Badge from "@/components/ui/Badge";
import { formatPrice } from "@/lib/utils";
import type { RecentOrder } from "@/constants/types";

interface OrdersTableProps {
  orders: RecentOrder[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export default function OrdersTable({ orders, selectedId, onSelect }: OrdersTableProps) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table className="t">
        <thead>
          <tr>
            <th>سفارش</th>
            <th>مشتری</th>
            <th>مبلغ</th>
            <th>پرداخت</th>
            <th>وضعیت</th>
            <th>تاریخ</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr
              key={o.id}
              onClick={() => onSelect(o.id)}
              style={{
                cursor: "pointer",
                background: selectedId === o.id ? "var(--accent-soft)" : undefined,
              }}
            >
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
                <span className="cell-muted">{o.payment}</span>
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
  );
}
