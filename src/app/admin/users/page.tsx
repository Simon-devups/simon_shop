import UsersView from "@/features/Admin/users/UsersView";
import { users } from "@/lib/mock-data";

export default function UsersPage() {
  return <UsersView users={users} />;
}
