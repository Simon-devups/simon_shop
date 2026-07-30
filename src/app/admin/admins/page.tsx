import AdminsView from "@/features/Admin/admins/AdminsView";
import { admins } from "@/lib/mock-data";

export default function AdminsPage() {
  return <AdminsView admins={admins} />;
}
