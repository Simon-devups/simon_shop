import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "@/app/(client)/globals.css";
import Footer from "@/components/client/Footer";
import { Navbar } from "@/components/client/Navbar";

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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}