import { ShieldCheck, UserCheck, UserX } from "lucide-react";
import KpiCard from "@/components/ui/KpiCard";
import type { Admin } from "@/constants/types";

export default function AdminsKpiRow({ admins }: { admins: Admin[] }) {
  const active = admins.filter((a) => a.isActive === true).length;
  const inactive = admins.length - active;

  return (
    <div className="kpi-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
      <KpiCard index={1} icon={ShieldCheck} color="blue" label="کل مدیران" value={admins.length.toLocaleString("fa-IR")} />
      <KpiCard index={2} icon={UserCheck} color="green" label="فعال" value={active.toLocaleString("fa-IR")} />
      <KpiCard index={3} icon={UserX} color="pink" label="غیرفعال" value={inactive.toLocaleString("fa-IR")} />
    </div>
  );
}
