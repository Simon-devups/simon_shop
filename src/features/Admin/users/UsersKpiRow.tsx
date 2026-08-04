import { Users, UserCheck, Crown, ShieldCheck } from "lucide-react";
import KpiCard from "@/components/admin/ui/KpiCard";
import { formatPrice } from "@/lib/utils";
import type { AppUser } from "@/constants/types";

export default function UsersKpiRow({ users }: { users: AppUser[] }) {
  const active = users.filter((u) => u.status === "active").length;
  const vip = users.filter((u) => u.role === "vip").length;
  const admins = users.filter((u) => u.role === "admin").length;

  return (
    <div className="kpi-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
      <KpiCard index={1} icon={Users} color="blue" label="کل کاربران" value={formatPrice(users.length)} />
      <KpiCard index={2} icon={UserCheck} color="green" label="فعال" value={formatPrice(active)} />
      <KpiCard index={3} icon={Crown} color="orange" label="مشتریان ویژه" value={formatPrice(vip)} />
      <KpiCard index={4} icon={ShieldCheck} color="purple" label="مدیران" value={formatPrice(admins)} />
    </div>
  );
}
