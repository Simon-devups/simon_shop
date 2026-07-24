"use client";
const mockProduct = {
  id: "1",
  title: "گوشی موبایل سامسونگ Galaxy S24 Ultra",
  category: "موبایل",
  img: "/sample.webp",
  price: "۴۵,۹۹۰,۰۰۰ تومان",
  prevPrice: "۵۲,۰۰۰,۰۰۰ تومان",
  percent: "۱۲",
  colors: ["black", "blue", "pink", "green"],
  properties: [
    { top: "حافظه داخلی", bottom: "۲۵۶ گیگابایت" },
    { top: "رم", bottom: "۱۲ گیگابایت" },
    { top: "دوربین اصلی", bottom: "۲۰۰ مگاپیکسل" },
    { top: "باتری", bottom: "۵۰۰۰ میلی‌آمپر" },
    { top: "اندازه صفحه", bottom: "۶.۸ اینچ" },
    { top: "پردازنده", bottom: "اسنپدراگون ۸ نسل ۳" }
  ]
}

import { useState, useEffect, useRef } from "react";
import styles from "./product.module.css";

const colorNames = {
  blue: { persian: "آبی", secondUsed: "#5288ff" },
  black: { persian: "مشکی", secondUsed: "#232323" },
  pink: { persian: "صورتی", secondUsed: "#cd7fc1" },
  red: { persian: "قرمز", secondUsed: "#b50021" },
  green: { persian: "سبز", secondUsed: "#38c550" },
  white: { persian: "سفید", secondUsed: "#c3c3c3" },
  gold: { persian: "طلایی", secondUsed: "#b89e13" },
  gray: { persian: "خاکستری", secondUsed: "#373737" },
  navy: { persian: "سرمه ای", secondUsed: "#00009e" },
  orange: { persian: "نارنجی", secondUsed: "#e67700" },
  purple: { persian: "بنفش", secondUsed: "purple" },
};

export default function ProductPage() {
  const product = mockProduct; // داده‌ی ساختگی
  const [colorSelected, setColorSelected] = useState(product.colors[0] || "blue");
  const colorRef = useRef(null);

  // اسکرول به بالای صفحه
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  // وقتی رنگ موجود در محصول تغییر کند، اولین رنگ را انتخاب کن (در صورت نیاز)
  useEffect(() => {
    if (product.colors && product.colors.length > 0) {
      setColorSelected(product.colors[0]);
    }
  }, [product]);

  const handleAddToCart = () => {
    // عملیات افزودن به سبد خرید (محلی)
    alert(`محصول "${product.title}" با رنگ ${colorNames[colorSelected]?.persian || colorSelected} به سبد خرید اضافه شد.`);
    // در اینجا می‌توانید از یک state ساده برای سبد خرید استفاده کنید یا به صفحه‌ی دیگری بروید.
  };

  return (
    <div className={styles["productSelfCont"]}>
      {/* مسیرهای راهنما (Breadcrumb) */}
      <nav className={styles["productSelfCont__flow"]} dir="rtl">
        <div>
          <a href="/" style={{ color: "#81858b" }}>اسم فروشگاه</a>
          <span style={{ marginRight: "12px", marginLeft: "12px" }}>/</span>
        </div>
        <div>
          <a href={`/search/${product.category}`} style={{ color: "#81858b" }}>{product.category}</a>
          <span style={{ marginRight: "12px", marginLeft: "12px" }}>{product.category ? "/" : ""}</span>
        </div>
        <div className={styles["productSelfCont__title"]}>{product.title}</div>
      </nav>

      <div className={styles["productCont"]}>
        {/* بخش راست (تصویر) */}
        <div className={styles["right"]}>
          <div className={styles["right__productImgCont"]}>
            <img src={product.img} style={{ width: "100%" }} alt={product.title} />
          </div>
          <div className={styles["right__lilCont"]}>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={styles["right__lilCont--littleImgCont"]}>
                <img src={product.img} alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* بخش چپ (اطلاعات و خرید) */}
        <div className={styles["left"]}>
          <div className={styles["leftUP"]}>
            <h1 dir="rtl">{product.title}</h1>
          </div>
          <div className={styles["leftDOWN"]}>
            {/* انتخاب رنگ */}
            <div className={styles["leftDOWN__variant"]}>
              <div dir="rtl" className={styles["rangCont"]}>
                <span style={{ fontWeight: "700", fontSize: "16px", lineHeight: "180%" }}>رنگ:</span>
                <span
                  ref={colorRef}
                  style={{
                    color: colorNames[colorSelected]?.secondUsed || "#000",
                    fontWeight: "700",
                    fontSize: "16px",
                    lineHeight: "180%",
                    marginRight: "4px",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  {colorNames[colorSelected]?.persian || colorSelected}
                  <span
                    style={{
                      display: "inline-block",
                      background: colorSelected,
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                    }}
                  />
                </span>
              </div>
              <div dir="rtl" className={styles["leftDOWN__circles"]}>
                {product.colors.map((colorCircle) => (
                  <div
                    key={colorCircle}
                    className={styles["circleCont"]}
                    style={{
                      background: colorSelected === colorCircle ? "#19bfd3" : "white",
                      border: "1px solid #909090",
                    }}
                  >
                    <div
                      onClick={() => setColorSelected(colorCircle)}
                      className={styles["circle"]}
                      style={{
                        background: colorCircle,
                        border: colorCircle === colorSelected ? "4px solid #ffffff" : "none",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ویژگی‌ها */}
            <div className={styles["leftDOWN__properties"]}>
              <div>
                <div dir="rtl" style={{ padding: "12px 0", fontWeight: "700", fontSize: "18px", lineHeight: "2.17" }}>
                  ویژگی ها
                </div>
                <div className={styles["propertiesGrid"]} dir="rtl">
                  {product.properties.map((property, index) => (
                    <div className={styles["box"]} key={index}>
                      <p className={styles["topProperty"]} style={{ color: "#81858b", fontSize: "12px" }}>
                        {property.top}
                      </p>
                      <p className={styles["downProperty"]} style={{ fontWeight: "600", fontSize: "12px" }}>
                        {property.bottom}
                      </p>
                    </div>
                  ))}
                </div>
                <div className={styles["hrWithText"]}>
                  <hr />
                  <button>مشاهده همه ی ویژگی ها</button>
                  <hr />
                </div>
                <div className={styles["alert"]} dir="rtl">
                  <div></div>
                  <div>
                    درخواست مرجوع کردن کالا در این گروه کالایی با دلیل "انصراف از خرید" تنها در صورتی قابل تایید است که کالا در شرایط اولیه باشد (در صورت پلمب بودن، کالا نباید باز شده باشد).
                  </div>
                </div>
              </div>
            </div>

            {/* کارت خرید */}
            <div className={styles["furushContCard"]}>
              <div className={styles["furushInner"]}>
                <div className={styles["card"]} dir="rtl">
                  <div className={styles["furushande"]}>
                    <h3>امکان فروش عمده</h3>
                  </div>
                  <div className={styles["digi"]}>
                    <div>
                      <div style={{ fontSize: "1.1rem", color: "#3f4064" }}>ارسال رایگان</div>
                      <div style={{ color: "#81858b" }} dir="rtl">
                        <span style={{ color: "#00a049", fontWeight: "500" }}>100%</span> رضایت از کالا
                      </div>
                    </div>
                    <div className={styles["circle"]} style={{ background: "#6C63FF", scale: "0.8", marginLeft: "16px" }} />
                  </div>
                  <div className={styles["price"]}>
                    <div className={styles["price__innerPrice"]}>
                      <div className={styles["price__PrevThenNow"]}>
                        <div className={styles["price--prevPriceInner"]}>
                          {product.percent && (
                            <div className={styles["prevPriceColCont"]}>
                              <span>%{product.percent}</span>
                              <div dir="rtl">{product.prevPrice}</div>
                            </div>
                          )}
                          <div style={{ fontSize: "24px", fontWeight: "700", color: "#23254e" }}>{product.price}</div>
                        </div>
                      </div>
                      {/* انیمیشن */}
                      <div className={styles["price__animator"]} dir="rtl">
                        <div className={styles["price__animator--track"]}>
                          <div className={styles["price__animator--track-item"]}>
                            <img src="/IMGS/Uncategorized/heart.png" alt="" />
                            <span>۴۰۰+ نفر به این کالا علاقه دارند</span>
                          </div>
                          <div className={styles["price__animator--track-item"]}>
                            <img src="/IMGS/Uncategorized/hundred.png" alt="" />
                            <span>۵۰۰+ نفر این کالا را خریدند</span>
                          </div>
                          <div className={styles["price__animator--track-item"]}>
                            <img src="/IMGS/Uncategorized/eye.png" alt="" />
                            <span>۵۰۰۰+ بازدید در ۲۴ ساعت اخیر</span>
                          </div>
                          {/* کلون برای لوپ نرم */}
                          <div className={styles["price__animator--track-item"]}>
                            <img src="/IMGS/Uncategorized/heart.png" alt="" />
                            <span>۴۰۰+ نفر به این کالا علاقه دارند</span>
                          </div>
                        </div>
                      </div>
                      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <button
                          style={{
                            backgroundColor: "#6C63FF",
                            fontWeight: "600",
                            color: "white",
                            width: "100%",
                            height: "48px",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                          }}
                          onClick={handleAddToCart}
                        >
                          افزودن به سبد خرید
                        </button>
                      </div>
                    </div>
                  </div>
                  <div style={{ paddingRight: "4px", margin: "16px 4px 14px 0px" }}>گارانتی ۱۸ ماهه</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}