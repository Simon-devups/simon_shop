import { Plus, Download } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import UsersKpiRow from "./UsersKpiRow";
import UsersTable from "./UsersTable";
import type { AppUser } from "@/constants/types";

export default function UsersView({ users }: { users: AppUser[] }) {
  return (
    <div>
      <PageHeader
        title="کاربران"
        subtitle="مدیریت مشتریان و کاربران فروشگاه"
        actions={
          <>
            <button className="btn btn-secondary">
              <Download size={15} /> خروجی Excel
            </button>
            <button className="btn btn-primary">
              <Plus size={16} /> افزودن کاربر
            </button>
          </>
        }
      />
      <div style={{ marginBottom: 18 }}>
        <UsersKpiRow users={users} />
      </div>
      <div className="table-wrap fade-up">
        <UsersTable users={users} />
      </div>
    </div>
  );
}
