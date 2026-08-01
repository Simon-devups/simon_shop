import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "@/styles/globals.css";
import AppProvider from "@/context/AppContext";
import Navbar from "@/components/store/Navbar";
import Footer from "@/components/store/Footer";
import CartDrawer from "@/components/store/CartDrawer";
import AuthModal from "@/components/store/AuthModal";
import ProductDetailModal from "@/components/store/ProductDetailModal";

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
      <body className="min-h-screen bg-[#E8EDF2] font-sans antialiased">
        <AppProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
          <AuthModal />
          <ProductDetailModal />
        </AppProvider>
      </body>
    </html>
  );
}