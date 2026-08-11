"use client";

// context/CartContext.tsx
// -----------------------------------------------------------------------------
// Single source of truth for the cart. Every component that adds/reads/removes
// cart items goes through useCart() — never its own useState.
//
// STEP 1 (this file): add / remove / updateQuantity / persistence (localStorage).
// STEP 2 (later):     applyCoupon() and checkout() become real API calls; the
//                      localStorage read/write here gets replaced by fetches to
//                      /api/cart, but the shape returned by useCart() stays the
//                      same — so ProductCard, Navbar, and the cart page don't
//                      need to change again.
// -----------------------------------------------------------------------------

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "@/lib/client/api";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  count: number; // مجموع تعداد کالاها (نه تعداد ردیف‌ها)
  subtotal: number; // جمع قبل از تخفیف/مالیات/ارسال

  add: (product: Product, quantity?: number) => void;
  remove: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clear: () => void;
  has: (productId: string) => boolean;
};

/* ------------------------------------------------------------------ */
/*  Persistence (localStorage for now — guest cart)                    */
/* ------------------------------------------------------------------ */

const STORAGE_KEY = "store:cart";

function loadFromStorage(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveToStorage(items: CartItem[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // localStorage ممکنه پر یا غیرفعال باشه — بی‌سروصدا نادیده می‌گیریم
  }
}

/* ------------------------------------------------------------------ */
/*  Context                                                             */
/* ------------------------------------------------------------------ */

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Load once on mount (client-only — avoids SSR/localStorage mismatch)
  useEffect(() => {
    setItems(loadFromStorage());
    setHydrated(true);
  }, []);

  // Persist on every change, but only after the initial load finished —
  // otherwise the very first render (empty array) would overwrite storage.
  useEffect(() => {
    if (hydrated) saveToStorage(items);
  }, [items, hydrated]);

  const add: CartContextValue["add"] = (product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const remove: CartContextValue["remove"] = (productId) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  };

  const updateQuantity: CartContextValue["updateQuantity"] = (productId, quantity) => {
    if (quantity <= 0) {
      remove(productId);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.product.id === productId ? { ...i, quantity } : i))
    );
  };

  const clear = () => setItems([]);

  const has: CartContextValue["has"] = (productId) =>
    items.some((i) => i.product.id === productId);

  const count = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
    [items]
  );

  const value: CartContextValue = {
    items,
    count,
    subtotal,
    add,
    remove,
    updateQuantity,
    clear,
    has,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

/**
 * Input: none.
 * Output: CartContextValue — throws if used outside <CartProvider>, so a
 * missing provider fails loudly during development instead of silently
 * returning undefined.
 */
export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within <CartProvider>");
  }
  return ctx;
}