// app/api/search/route.ts
import { NextResponse } from "next/server";
import { searchProducts } from "@/lib/server/store";
import type { SearchFilters } from "@/lib/client/api";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const filters: SearchFilters = {
    query: searchParams.get("q") ?? "",
    categories: searchParams.getAll("category"),
    brands: searchParams.getAll("brand"),
    minPrice: searchParams.has("minPrice") ? Number(searchParams.get("minPrice")) : undefined,
    maxPrice: searchParams.has("maxPrice") ? Number(searchParams.get("maxPrice")) : undefined,
    minRating: searchParams.has("minRating") ? Number(searchParams.get("minRating")) : undefined,
    sort: (searchParams.get("sort") as SearchFilters["sort"]) ?? "relevance",
    page: Number(searchParams.get("page") ?? "1"),
    pageSize: Number(searchParams.get("pageSize") ?? "12"),
  };

  const result = searchProducts(filters);
  return NextResponse.json(result);
}