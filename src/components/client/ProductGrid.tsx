import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Product } from "@/lib/client/api";
import { ProductCard } from "@/features/Client/product/components/ProductCard";

type Props = {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  products?: Product[];
  viewAllHref?: string;
  /** اختیاریه — اگه ندی، ProductCard خودش مستقیم به CartContext وصل می‌شه. */
  onAdd?: (product: Product) => void;
  onWishlist?: (product: Product) => void;
  // پشتیبانی از پراپ‌های قدیمی/جایگزین که ممکنه در صفحات دیگه استفاده شده باشن
  onViewAll?: string;
  onSelect?: (product: Product) => void;
};

/**
 * داده‌ی موقت (Mock) — فقط تا وقتی سرور/API واقعی وصل بشه.
 * اگه products نیاد یا خالی/نامعتبر باشه از این استفاده می‌کنیم
 * تا صفحه کرش نکنه.
 *
 * ⚠️ نکته‌ی مهم: نسخه‌ی قبلی این آرایه فقط id/name/price/image داشت و با
 * `as Product` تایپ‌اسکریپت رو مجبور می‌کرد ساکت باشه — ولی چون `slug` و
 * `category` واقعاً وجود نداشتن، `ProductCard` وقتی می‌خواست به
 * `/product/${product.slug}` لینک بده، نتیجه‌ش `/product/undefined` می‌شد.
 * الان هر آیتم دقیقاً تمام فیلدهای اجباری Product رو داره، بدون type-cast.
 */
const MOCK_PRODUCTS: Product[] = [
  {
    id: "mock-1",
    slug: "sample-product-1",
    name: "محصول نمونه ۱",
    price: 1250000,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80",
    category: { id: "sample", slug: "sample", name: "دسته‌ی نمونه" },
  },
  {
    id: "mock-2",
    slug: "sample-product-2",
    name: "محصول نمونه ۲",
    price: 890000,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    category: { id: "sample", slug: "sample", name: "دسته‌ی نمونه" },
  },
  {
    id: "mock-3",
    slug: "sample-product-3",
    name: "محصول نمونه ۳",
    price: 2450000,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    category: { id: "sample", slug: "sample", name: "دسته‌ی نمونه" },
  },
  {
    id: "mock-4",
    slug: "sample-product-4",
    name: "محصول نمونه ۴",
    price: 560000,
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    category: { id: "sample", slug: "sample", name: "دسته‌ی نمونه" },
  },
];

export default function ProductGrid({
  id,
  eyebrow,
  title,
  subtitle,
  products,
  viewAllHref,
  onAdd,
  onWishlist,
  onViewAll,
  onSelect,
}: Props) {
  const list =
    Array.isArray(products) && products.length > 0 ? products : MOCK_PRODUCTS;

  // href نهایی: اول viewAllHref، بعد onViewAll (اسم قدیمی)، در آخر یک مقدار پیش‌فرض امن
  const href = viewAllHref || onViewAll || "/products";

  // نکته: اینجا دیگه fallback به () => {} نمی‌زنیم. اگه onAdd پاس داده نشده
  // باشه، باید undefined بمونه تا ProductCard خودش تشخیص بده و از
  // CartContext استفاده کنه — یه fallback نویس‌محور اینجا باعث می‌شد
  // ProductCard همیشه فکر کنه "onAdd صریح دارم" و هیچوقت به Context نره.
  const handleWishlist = onWishlist ?? onSelect;

  return (
    <section id={id} className="mx-auto max-w-[1600px] px-4 py-8 md:px-6 md:py-10">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="mb-1 text-[12px] font-bold text-[#1D4ED8]">{eyebrow}</div>
          <h2 className="text-[22px] font-extrabold tracking-tight text-[#111827] md:text-[26px]">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-1 text-[13px] text-[#6B7280]">{subtitle}</p>
          ) : null}
        </div>

        <Link
          href={href}
          className="flex items-center gap-1.5 rounded-[12px] border border-[#E5E7EB] bg-white px-4 py-2.5 text-[13px] font-semibold text-[#111827] transition-colors duration-150 ease-out hover:border-[#1D4ED8] hover:text-[#1D4ED8]"
        >
          مشاهده همه
          <ArrowLeft size={16} strokeWidth={2} />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {list.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAdd={onAdd}
            onWishlist={handleWishlist}
          />
        ))}
      </div>
    </section>
  );
}