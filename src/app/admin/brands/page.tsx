import BrandsView from "@/features/Admin/brands/BrandsView";
import { brands } from "@/lib/mock-data";

export default function BrandsPage() {
  return <BrandsView brands={brands} />;
}
