import CategoriesView from "@/features/Admin/categories/CategoriesView";
import { getCategories } from "@/lib/Admin/categories/categories";
// import { categories } from "@/lib/mock-data";

export default async function CategoriesPage() {
  const categories = await getCategories()
  // console.log("category : ",categories)
  return <CategoriesView categories={categories} />;
}
