// lib/client/api.ts
// -----------------------------------------------------------------------------
// Typed fetch layer for the home page (categories + products) and search page.
// If the project already has a `types.ts`, move the types below there and
// `import type { ... } from "@/types"` here instead of redeclaring them.
// -----------------------------------------------------------------------------

/** A single product category shown in the "دسته‌بندی‌ها" strip. */
export type Category = {
  id: string;
  slug: string;
  name: string;
  icon: string;
  count: number;
};

/** A single product card's data shape (matches ProductCard's `product` prop). */
export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: string;
  category: {
    id: string;
    slug: string;
    name: string;
  };
};

export type ProductSection = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  viewAllHref: string;
  products: Product[];
};

export type HomePageData = {
  categories: Category[];
  sections: ProductSection[];
};

/** A single product card's data shape used specifically on the search results page. */
export type SearchProduct = {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  isBestseller?: boolean;
};

export type SearchFilters = {
  query: string;
  categories?: string[];
  brands?: string[];
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  sort?: "relevance" | "cheapest" | "expensive" | "newest" | "rating";
  page?: number;
  pageSize?: number;
};

export type SearchFacet = {
  value: string;
  count: number;
};

export type SearchResponse = {
  products: SearchProduct[];
  total: number;
  page: number;
  pageSize: number;
  facets?: {
    categories: SearchFacet[];
    brands: SearchFacet[];
  };
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

/**
 * Fetches everything the home page needs in one call.
 * Input: none.
 * Output: Promise<HomePageData>.
 */
export async function getHomePageData(): Promise<HomePageData> {
  const res = await fetch(`${API_BASE_URL}/api/home`, {
    next: { revalidate: 60 }, // ISR: refresh every 60s
  });

  if (!res.ok) {
    throw new Error(`getHomePageData failed: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<HomePageData>;
}

/**
 * Fetches all categories.
 * Input: none.
 * Output: Promise<Category[]>.
 */
export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${API_BASE_URL}/api/categories`, {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error(`getCategories failed: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<Category[]>;
}

/**
 * Fetches a page of products, optionally filtered by category.
 * Input: { categoryId?: string; page?: number; pageSize?: number }.
 * Output: Promise<{ products: Product[]; total: number; page: number; pageSize: number }>.
 */
export async function getProducts(params: {
  categoryId?: string;
  page?: number;
  pageSize?: number;
}): Promise<{ products: Product[]; total: number; page: number; pageSize: number }> {
  const { categoryId, page = 1, pageSize = 8 } = params;

  const query = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
    ...(categoryId ? { categoryId } : {}),
  });

  const res = await fetch(`${API_BASE_URL}/api/products?${query.toString()}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`getProducts failed: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

/**
 * Fetches search results with filters, sorting, and pagination.
 * Used by the /search page. Backend should support all SearchFilters fields
 * as query params (arrays as repeated params or comma-joined — adjust to match
 * whatever the real API expects).
 * Input: SearchFilters.
 * Output: Promise<SearchResponse>.
 */
export async function getSearchResults(filters: SearchFilters): Promise<SearchResponse> {
  const {
    query,
    categories = [],
    brands = [],
    minPrice,
    maxPrice,
    minRating,
    sort = "relevance",
    page = 1,
    pageSize = 12,
  } = filters;

  const params = new URLSearchParams({
    q: query,
    sort,
    page: String(page),
    pageSize: String(pageSize),
  });

  categories.forEach((c) => params.append("category", c));
  brands.forEach((b) => params.append("brand", b));
  if (minPrice !== undefined) params.set("minPrice", String(minPrice));
  if (maxPrice !== undefined) params.set("maxPrice", String(maxPrice));
  if (minRating !== undefined) params.set("minRating", String(minRating));

  const res = await fetch(`${API_BASE_URL}/api/search?${params.toString()}`, {
    // Search results shouldn't be cached across different filter combos.
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`getSearchResults failed: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<SearchResponse>;
}

/* ------------------------------------------------------------------ */
/*  "Safe" wrappers — used by page.tsx (HomePage). Try the real        */
/*  backend; on any failure (not up yet, network error, bad shape)     */
/*  fall back to the mock data in data/store.ts instead of throwing,   */
/*  so the page never crashes on `.map` over undefined.                */
/* ------------------------------------------------------------------ */

/**
 * Input: none.
 * Output: Promise<Category[]> — never rejects; falls back to mock categories.
 */
export async function getCategoriesSafe(): Promise<Category[]> {
  try {
    const data = await getCategories();
    if (Array.isArray(data) && data.length > 0) return data;
    throw new Error("empty categories response");
  } catch {
    const { categories } = await import("../../data/store");
    return categories;
  }
}

/**
 * Input: same as getProducts.
 * Output: Promise<Product[]> — never rejects; falls back to mock products.
 * (Real getProducts returns { products, total, page, pageSize }; this
 * wrapper unwraps it to just the array, which is all page.tsx needs.)
 */
export async function getProductsSafe(params: {
  categoryId?: string;
  page?: number;
  pageSize?: number;
} = {}): Promise<Product[]> {
  try {
    const data = await getProducts(params);
    if (Array.isArray(data.products) && data.products.length > 0) {
      return data.products;
    }
    throw new Error("empty products response");
  } catch {
    const { amazingProducts } = await import("../../data/store");
    return amazingProducts;
  }
}