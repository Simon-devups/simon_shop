import OrdersView from "@/features/Admin/orders/OrdersView";
import { recentOrders } from "@/lib/mock-data";

export default function OrdersPage() {
  return <OrdersView orders={recentOrders} />;
}
