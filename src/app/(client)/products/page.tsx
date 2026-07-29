import { ProductCard } from "@/features/product/components/ProductCard";
import "../../../../public/style.css"

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
            <ProductCard/>
        </main>
    )
}