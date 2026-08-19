"use client";

// components/client/AddToCartButton.tsx
// -----------------------------------------------------------------------------
// The product detail page (app/(client)/product/[slug]/page.tsx) is a Server
// Component and can't call useCart() directly. This tiny client component is
// the boundary: everything above it stays server-rendered (fast, SEO-friendly
// product info), only this button ships JS.
// -----------------------------------------------------------------------------

import { useState } from "react";
import { Check, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/lib/client/api";

export default function AddToCartButton({ product }: { product: Product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    add(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <button
      type="button"
      onClick={handleAdd}
      className={`flex w-full items-center justify-center gap-2 rounded-[12px] py-3.5 text-sm font-bold text-white transition-colors duration-200 ease-out ${
        added ? "bg-[#22C55E]" : "bg-[#1D4ED8] hover:bg-[#1E40AF]"
      }`}
    >
      {added ? (
        <>
          <Check size={16} strokeWidth={2} /> به سبد خرید اضافه شد
        </>
      ) : (
        <>
          <Plus size={16} strokeWidth={2} /> افزودن به سبد خرید
        </>
      )}
    </button>
  );
}