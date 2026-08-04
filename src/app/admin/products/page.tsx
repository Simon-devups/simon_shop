import ProductsView from "@/features/Admin/products/ProductsView";
import { getPagesCount, getProductsForAdmin } from "@/lib/Admin/products/getProducts";
// import { useParams } from "next/navigation";
// import { products } from "@/lib/mock-data";

interface Props {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function ProductsPage({searchParams}:Props) {
  const params = await searchParams;

  const pages = Number(params.page ?? 1);

  const products = await getProductsForAdmin(pages);
  const pageCount = await getPagesCount()
  return <ProductsView products={products} pages={pages} />;
}
