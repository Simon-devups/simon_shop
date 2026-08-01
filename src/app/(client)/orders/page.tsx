"use client";

import OrdersPage from "@/pages/store/OrdersPage";
import { useRouter } from "next/navigation";

export default function OrdersRoute() {
  const router = useRouter();
  return (
    <OrdersPage
      onBackToHome={() => router.push("/")}
    />
  );
}