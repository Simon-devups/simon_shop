import DiscountsView from "@/features/Admin/discounts/DiscountsView";
import { discounts } from "@/lib/mock-data";

export default function DiscountsPage() {
  return <DiscountsView discounts={discounts} />;
}
