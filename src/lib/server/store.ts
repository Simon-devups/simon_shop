// lib/server/store.ts
// -----------------------------------------------------------------------------
// Server-only data access. This is the ONE place that knows how to read
// categories/products/search results. Right now it reads from data/store.ts
// (in-memory mock); later it becomes a database query — nothing outside this
// file needs to change when that happens.
//
// Two kinds of callers use this file:
//   1. Server Components (Home, /category/[slug], /product/[slug], /products)
//      import these functions DIRECTLY — no HTTP round-trip, fastest path.
//   2. Route Handlers (app/api/*/route.ts) call the SAME functions and wrap
//      the result in NextResponse.json(...) — this is what client components
//      (SearchPage, CartContext later) actually fetch over HTTP.
// -----------------------------------------------------------------------------

import "server-only";
import type { Category, Product, SearchProduct, SearchFilters } from "@/lib/client/api";
import {
  categories as storeCategories,
  allProducts as storeAllProducts,
} from "../../data/store";

/**
 * Input: none.
 * Output: Category[].
 */
export function getCategories(): Category[] {
  return storeCategories;
}

/**
 * Input: slug.
 * Output: Category | null.
 */
export function getCategoryBySlug(slug: string): Category | null {
  return storeCategories.find((c) => c.slug === slug || c.id === slug) ?? null;
}

/**
 * Input: { categoryId?, page?, pageSize?, sort? }.
 * Output: { products, total, page, pageSize }.
 */
export function getProducts(params: {
  categoryId?: string;
  page?: number;
  pageSize?: number;
  sort?: "newest" | "popular" | "cheapest" | "expensive";
}): { products: Product[]; total: number; page: number; pageSize: number } {
  const { categoryId, page = 1, pageSize = 12, sort } = params;

  let list = storeAllProducts;
  if (categoryId) {
    list = list.filter((p) => p.category.id === categoryId || p.category.slug === categoryId);
  }

  if (sort === "cheapest") list = [...list].sort((a, b) => a.price - b.price);
  else if (sort === "expensive") list = [...list].sort((a, b) => b.price - a.price);
  else if (sort === "popular") list = [...list].sort((a, b) => b.rating - a.rating);
  // "newest" فعلاً معادل ترتیب پیش‌فرضه چون data/store.ts فیلد تاریخ نداره

  const total = list.length;
  const start = (page - 1) * pageSize;
  const products = list.slice(start, start + pageSize);

  return { products, total, page, pageSize };
}

/**
 * Input: slug.
 * Output: Product | null.
 */
export function getProductBySlug(slug: string): Product | null {
  return storeAllProducts.find((p) => p.slug === slug || p.id === slug) ?? null;
}

/**
 * Input: slug, limit?.
 * Output: Product[] — همون دسته، به‌جز خودش.
 */
export function getRelatedProducts(slug: string, limit = 6): Product[] {
  const current = getProductBySlug(slug);
  if (!current) return [];
  return storeAllProducts
    .filter((p) => p.category.id === current.category.id && p.slug !== current.slug)
    .slice(0, limit);
}

/**
 * Input: SearchFilters.
 * Output: { products (SearchProduct shape), total, page, pageSize }.
 * نکته: SearchProduct شکل جدایی از Product داره (category:string نه object) —
 * برای سازگاری با چیزی که SearchPage.tsx از قبل مصرف می‌کنه.
 */
export function searchProducts(filters: SearchFilters): {
  products: SearchProduct[];
  total: number;
  page: number;
  pageSize: number;
} {
  const {
    query,
    categories: categoryFilters = [],
    brands = [],
    minPrice,
    maxPrice,
    minRating,
    sort = "relevance",
    page = 1,
    pageSize = 12,
  } = filters;

  const q = query.trim().toLowerCase();

  let list = storeAllProducts.filter((p) => {
    if (q && !p.name.toLowerCase().includes(q) && !(p.brand ?? "").toLowerCase().includes(q)) {
      return false;
    }
    if (categoryFilters.length && !categoryFilters.includes(p.category.id)) return false;
    if (brands.length && p.brand && !brands.includes(p.brand)) return false;
    if (minPrice !== undefined && p.price < minPrice) return false;
    if (maxPrice !== undefined && p.price > maxPrice) return false;
    if (minRating !== undefined && p.rating < minRating) return false;
    return true;
  });

  if (sort === "cheapest") list = [...list].sort((a, b) => a.price - b.price);
  else if (sort === "expensive") list = [...list].sort((a, b) => b.price - a.price);
  else if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);

  const total = list.length;
  const start = (page - 1) * pageSize;
  const pageItems = list.slice(start, start + pageSize);

  const products: SearchProduct[] = pageItems.map((p) => ({
    id: p.id,
    slug: p.slug,
    name: p.name,
    category: p.category.name,
    brand: p.brand ?? "",
    price: p.price,
    oldPrice: p.oldPrice,
    rating: p.rating,
    reviewCount: p.reviewCount ?? 0,
    image: p.image,
    isBestseller: Boolean(p.badge),
  }));

  return { products, total, page, pageSize };
}