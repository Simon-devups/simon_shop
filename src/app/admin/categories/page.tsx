import CategoriesView from "@/features/Admin/categories/CategoriesView";
import { categories } from "@/lib/mock-data";

export default function CategoriesPage() {
  return <CategoriesView categories={categories} />;
}
