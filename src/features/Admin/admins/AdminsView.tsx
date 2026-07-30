import { Link, Plus } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import AdminsKpiRow from "./AdminsKpiRow";
import AdminsTable from "./AdminsTable";
import type { Admin } from "@/constants/types";
import { getAdmins } from "@/lib/Admin/users/admin";
import AdminCreateForm from "./AdminCreateForm";

export default async function AdminsView() {
  const admins:Admin[] = await getAdmins() ;
  return (
    <div>
      <PageHeader
        title="مدیران"
        subtitle="مدیریت دسترسی‌ها و حساب‌های مدیریتی"
        actions={
            <button className="btn btn-primary">
              <Plus size={16} /> افزودن مدیر
            </button>
        }
      />
      <div style={{ marginBottom: 18 }}>
        <AdminsKpiRow admins={admins} />
      </div>
      <div className="table-wrap fade-up">
        <AdminsTable admins={admins} />
      </div>
    </div>
  );
}
