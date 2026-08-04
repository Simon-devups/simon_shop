import { Phone, Mail, MapPin } from "lucide-react";
import Avatar from "@/components/admin/ui/Avatar";
import type { RecentOrder } from "@/constants/types";

export default function OrderCustomerCard({ order }: { order: RecentOrder }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">اطلاعات مشتری</h3>
      </div>
      <div className="card-body">
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <Avatar size="lg">{order.avatar}</Avatar>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14 }}>{order.customer}</div>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>مشتری همیشگی</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5 }}>
            <Phone size={14} color="var(--muted)" />
            <span className="num-fa">۰۹۱۲۳۴۵۶۷۸۹</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5 }}>
            <Mail size={14} color="var(--muted)" />
            <span dir="ltr">customer@email.com</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12.5 }}>
            <MapPin size={14} color="var(--muted)" style={{ marginTop: 2 }} />
            <span>تهران، خیابان ولیعصر، پلاک ۱۲۴، واحد ۶</span>
          </div>
        </div>
      </div>
    </div>
  );
}
