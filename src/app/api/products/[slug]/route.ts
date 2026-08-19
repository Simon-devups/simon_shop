// app/api/products/[slug]/route.ts
import { NextResponse } from "next/server";
import { getProductBySlug, getRelatedProducts } from "@/lib/server/store";

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  const related = getRelatedProducts(params.slug);
  return NextResponse.json({ ...product, related });
}