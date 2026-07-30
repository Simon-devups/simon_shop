import PaymentsView from "@/features/Admin/payments/PaymentsView";
import { payments } from "@/lib/mock-data";

export default function PaymentsPage() {
  return <PaymentsView payments={payments} />;
}
