import ProductsView from "@/features/Admin/products/ProductsView";
import { products } from "@/lib/mock-data";

export default function ProductsPage() {
  return <ProductsView products={products} />;
}
