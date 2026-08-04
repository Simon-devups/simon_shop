import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";
import ThemeProvider from "@/components/admin/ThemeProvider";
import "./globals.css";
import { getPagesCount } from "@/lib/Admin/products/getProducts";

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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const productsCount = await getPagesCount()
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var isDark = saved ? saved === 'dark' : prefersDark;
                  if (isDark) document.documentElement.classList.add('dark');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={vazirmatn.variable}>
        <ThemeProvider>
          <div className="app-shell">
            <Sidebar productsCount={productsCount}/>
            <div className="main">
              <Topbar />
              <main className="page">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
