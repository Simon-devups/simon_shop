import { Vazirmatn } from 'next/font/google'
import './globals.css';

const vazir = Vazirmatn({
  subsets: ['latin'], // زیرمجموعه‌های مورد نیاز
  display: 'swap',
  variable: '--font-vazir',
})

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={vazir.className}>
      <body>{children}</body>
    </html>
  )
}