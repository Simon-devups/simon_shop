import { getProducts } from "../lib/get-products"
import { ProductCard } from "./ProductCard"


export async function ProductGrid() {
  const products = await getProducts()
  return (
    <section className="pad" id="popular" >
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">پرطرفدارهای این هفته</span>
            <h2>محبوب‌ترین محصولات</h2>
            <p>کالاهایی که مشتری‌های ما بازهم می‌خرند، هر هفته بر اساس فروش واقعی به‌روزرسانی می‌شود.</p>
          </div>
          <a href="#" className="view-all">مشاهده‌ی همه‌ی محصولات ←</a>
        </div>
        <div className="prod-grid">

            <ProductCard product={products[0]}/>

        </div>
      </div>
    </section>
  )
}