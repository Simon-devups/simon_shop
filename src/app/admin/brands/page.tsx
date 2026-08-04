import BrandsView from "@/features/Admin/brands/BrandsView";
import { getBrands } from "@/lib/Admin/brands/bands";
// import { brands } from "@/lib/mock-data";

export default async function BrandsPage() {
  const brands = await getBrands()
  console.log(brands)
  return <BrandsView brands={brands} />;
}
