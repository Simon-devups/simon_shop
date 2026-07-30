import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "پنل مدیریت فروشگاه | نوا مارکت",
  description: "پنل مدیریت فروشگاه نوا مارکت",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.variable}>
        <div className="app-shell">
          <Sidebar />
          <div className="main">
            <Topbar />
            <main className="page">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
