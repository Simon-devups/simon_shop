import { getProducts } from "../lib/get-products";
import { ProductCardType } from "../types";



export async function ProductCard({product}:{product:ProductCardType}) {
  return (
    <div className="prod-card">
      <div className="prod-media"><div className="glow2"></div><div className="mini-phone" ></div>
        <span className="prod-tag gold">پرفروش</span>
        <button className="wish-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 20.5s-7.5-4.6-9.8-9.1C.7 8 2 4.5 5.4 3.7c2-.5 3.9.3 5 2 .3.4.8 1 1.6 1.9.8-.9 1.3-1.5 1.6-1.9 1.1-1.7 3-2.5 5-2 3.4.8 4.7 4.3 3.2 7.7-2.3 4.5-9.8 9.1-9.8 9.1Z" stroke="currentColor" stroke-width="1.6" /></svg></button>
      </div>
      <div className="prod-body">
        <div className="prod-cat">{product.category.name}</div>
        <div className="prod-name">{product.name}</div>
        <div className="chips"><span className="chip">نمایشگر ۶.۷ اینچ OLED</span><span className="chip">5G</span><span className="chip">۲۵۶ گیگ</span></div>
        <div className="prod-rating"><span className="stars">★★★★★</span> {product.rating}</div>
        <div className="prod-foot">
          <div className="price-block"><span className="price">۳۹٬۹۰۰٬۰۰۰ تومان</span></div>
          <button className="add-btn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg></button>
        </div>
      </div>
    </div>
  )
}