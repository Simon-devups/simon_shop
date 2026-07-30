import { Wallet, CreditCard as CardIcon, Repeat, Eye } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { formatPrice } from "@/lib/utils";
import type { Payment, BadgeVariant } from "@/constants/types";

const methodIcon: Record<Payment["method"], typeof CardIcon> = {
  card: CardIcon,
  transfer: Repeat,
  wallet: Wallet,
};

const statusVariant: Record<Payment["status"], BadgeVariant> = {
  success: "success",
  pending: "warning",
  failed: "danger",
};

const statusLabel: Record<Payment["status"], string> = {
  success: "موفق",
  pending: "در انتظار",
  failed: "ناموفق",
};

export default function PaymentsTable({ payments }: { payments: Payment[] }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table className="t">
        <thead>
          <tr>
            <th>شناسه تراکنش</th>
            <th>سفارش</th>
            <th>مشتری</th>
            <th>روش پرداخت</th>
            <th>مبلغ</th>
            <th>وضعیت</th>
            <th>تاریخ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {payments.map((p) => {
            const Icon = methodIcon[p.method];
            return (
              <tr key={p.id}>
                <td>
                  <span className="cell-strong num-fa">{p.id}</span>
                </td>
                <td>
                  <span className="cell-muted num-fa">{p.order}</span>
                </td>
                <td>
                  <span className="cell-strong">{p.customer}</span>
                </td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Icon size={14} color="var(--muted)" />
                    <span style={{ fontSize: 13 }}>{p.methodLabel}</span>
                  </div>
                </td>
                <td>
                  <span className="cell-amount num-fa">{formatPrice(p.amount)}</span>
                </td>
                <td>
                  <Badge variant={statusVariant[p.status]} pulse={p.status === "success"}>
                    {statusLabel[p.status]}
                  </Badge>
                </td>
                <td>
                  <span className="cell-muted num-fa">{p.date}</span>
                </td>
                <td>
                  <button className="icon-btn" title="جزئیات">
                    <Eye size={14} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
