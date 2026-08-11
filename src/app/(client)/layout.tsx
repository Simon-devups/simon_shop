import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "@/app/(client)/globals.css";
import Footer from "@/components/client/Footer";
import { Navbar } from "@/components/client/Navbar";
import { Suspense } from "react";
import { CartProvider } from "@/context/CartContext";

const vazir = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-vazir",
});

export const metadata: Metadata = {
  title: "نوا استور | فروشگاه آنلاین",
  description: "خرید مطمئن با ضمانت اصالت و ارسال سریع",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazir.variable}>
      <body className="min-h-screen bg-[#F5F7FA] font-sans antialiased">
        <CartProvider>
          <Suspense fallback={null}>
            <Navbar />
          </Suspense>
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}