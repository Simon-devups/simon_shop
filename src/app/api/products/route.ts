// app/api/products/route.ts
import { NextResponse } from "next/server";
import { getProducts } from "@/lib/server/store";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const categoryId = searchParams.get("categoryId") ?? undefined;
  const page = Number(searchParams.get("page") ?? "1");
  const pageSize = Number(searchParams.get("pageSize") ?? "12");
  const sort = (searchParams.get("sort") ?? undefined) as
    | "newest"
    | "popular"
    | "cheapest"
    | "expensive"
    | undefined;

  const result = getProducts({ categoryId, page, pageSize, sort });
  return NextResponse.json(result);
}