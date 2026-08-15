import { ProductCard } from "@/features/Client/product/components/ProductCard";

export default function ProductsPage({
  searchParams,
}: {
  searchParams: {
    brand?: string;
    category?: string;
    page?: string;
    sort?: string;
  };
}){
    return(
        <main>
            {/* <ProductCard/> */}
        </main>
    )
}