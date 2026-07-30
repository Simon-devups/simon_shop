import Link from "next/link";

export function Header() {
    return (
        <div className="nav-inner">
            <a className="logo" href="#">
                <span className="logo-mark"></span> اوربیت
            </a>
            <nav className="nav-links">
                <a href="#categories">دسته‌بندی‌ها
                    <svg className="caret" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" /></svg>
                </a>
                <a href="#phones">گوشی موبایل</a>
                <a href="#popular">فروشگاه</a>
                <a href="#offers">تخفیف‌ها</a>
                <a href="#brands">برندها</a>
            </nav>
            <div className="nav-search">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" /><path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg>
                {/* <input type="text" placeholder="جستجوی گوشی، لپ‌تاپ، هدفون…"> */}
            </div>
            <div className="nav-actions">
                <button className="icon-btn" aria-label="علاقه‌مندی‌ها">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 20.5s-7.5-4.6-9.8-9.1C.7 8 2 4.5 5.4 3.7c2-.5 3.9.3 5 2 .3.4.8 1 1.6 1.9.8-.9 1.3-1.5 1.6-1.9 1.1-1.7 3-2.5 5-2 3.4.8 4.7 4.3 3.2 7.7-2.3 4.5-9.8 9.1-9.8 9.1Z" stroke="currentColor" stroke-width="1.6" /></svg>
                </button>
                <button className="icon-btn" aria-label="سبد خرید">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 8h12l-1.2 11.2a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6 8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" /><path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" stroke-width="1.6" /></svg>
                    <span className="badge-count">۳</span>
                </button>
                <div className="profile-chip">
                    <div className="avatar">س.ر</div>
                    <svg className="caret" width="9" height="9" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" /></svg>
                </div>
            </div>
        </div>
    )
}
