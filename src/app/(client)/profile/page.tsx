"use client";

import ProfilePage from "@/pages/store/ProfilePage";
import { useApp } from "@/context/AppContext";
import { useRouter } from "next/navigation";

export default function ProfileRoute() {
  const router = useRouter();
  const { addToCart, logout } = useApp();

  return (
    <ProfilePage
      onNavigateToOrders={() => router.push("/orders")}
      onAdd={addToCart}
      onLogout={() => {
        logout();
        router.push("/");
      }}
    />
  );
}