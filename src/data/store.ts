export const formatPrice = (n: number) => n.toLocaleString("fa-IR");

export const categories = [
  { id: "phones", name: "گوشی موبایل", icon: "📱", count: 1240 },
  { id: "laptops", name: "لپ‌تاپ و تبلت", icon: "💻", count: 680 },
  { id: "audio", name: "هدفون و اسپیکر", icon: "🎧", count: 920 },
  { id: "wearables", name: "ساعت هوشمند", icon: "⌚", count: 410 },
  { id: "accessories", name: "لوازم جانبی", icon: "🔌", count: 2100 },
  { id: "cameras", name: "دوربین", icon: "📷", count: 280 },
  { id: "gaming", name: "گیمینگ", icon: "🎮", count: 540 },
  { id: "home", name: "خانه هوشمند", icon: "🏠", count: 360 },
];

export const heroSlides = [
  {
    id: 1,
    title: "نسل جدید تجربه صوتی",
    subtitle: "هدفون بی‌سیم با حذف نویز پیشرفته",
    cta: "مشاهده محصول",
    badge: "جدید",
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    bg: "linear-gradient(135deg, #E8EDF2 0%, #d4dde8 50%, #c8d5e2 100%)",
  },
  {
    id: 2,
    title: "قدرت در دستان شما",
    subtitle: "گوشی‌های پرچمدار با بهترین قیمت بازار",
    cta: "خرید گوشی",
    badge: "پرفروش",
    image: "https://images.pexels.com/photos/11216318/pexels-photo-11216318.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    bg: "linear-gradient(135deg, #2C3947 0%, #3a4d5f 60%, #547A95 100%)",
    dark: true,
  },
  {
    id: 3,
    title: "فضای کاری مینیمال",
    subtitle: "لپ‌تاپ و تبلت‌های حرفه‌ای برای کار و خلاقیت",
    cta: "کاوش مجموعه",
    badge: "ویژه",
    image: "https://images.pexels.com/photos/5082979/pexels-photo-5082979.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    bg: "linear-gradient(135deg, #f5f0e6 0%, #E8EDF2 50%, #dce4ec 100%)",
  },
];

export const adBanners = [
  {
    id: 1,
    title: "تا ۴۰٪ تخفیف لوازم صوتی",
    desc: "فقط تا پایان هفته",
    image: "https://images.pexels.com/photos/3394653/pexels-photo-3394653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    color: "#547A95",
  },
  {
    id: 2,
    title: "مجموعه گجت‌های هوشمند",
    desc: "ارسال رایگان بالای ۲ میلیون",
    image: "https://images.pexels.com/photos/4377619/pexels-photo-4377619.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    color: "#2C3947",
  },
  {
    id: 3,
    title: "ساعت و ایرپاد لوکس",
    desc: "طراحی مینیمال، کیفیت برتر",
    image: "https://images.pexels.com/photos/9528216/pexels-photo-9528216.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    color: "#C2A56D",
  },
  {
    id: 4,
    title: "لپ‌تاپ‌های حرفه‌ای",
    desc: "اقساط بدون بهره",
    image: "https://images.pexels.com/photos/8534389/pexels-photo-8534389.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    color: "#547A95",
  },
  {
    id: 5,
    title: "تبلت‌های سبک و قدرتمند",
    desc: "ویژه دانشجویان و طراحان",
    image: "https://images.pexels.com/photos/8534239/pexels-photo-8534239.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    color: "#2C3947",
  },
];

export const phoneAds = [
  {
    id: 1,
    title: "آیفون ۱۵ پرو مکس",
    desc: "تیتانیوم. قدرتمند. بی‌رقیب.",
    price: 72500000,
    image: "https://images.pexels.com/photos/13570143/pexels-photo-13570143.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    id: 2,
    title: "سری گلکسی S24",
    desc: "هوش مصنوعی در جیب شما",
    price: 54800000,
    image: "https://images.pexels.com/photos/11216259/pexels-photo-11216259.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    id: 3,
    title: "پرچمداران ۲۰۲۴",
    desc: "بهترین‌ها را یکجا ببینید",
    price: 32000000,
    image: "https://images.pexels.com/photos/30353222/pexels-photo-30353222.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    id: 4,
    title: "گوشی‌های میان‌رده برتر",
    desc: "کیفیت بالا، قیمت منطقی",
    price: 18500000,
    image: "https://images.pexels.com/photos/28919440/pexels-photo-28919440.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    id: 5,
    title: "پک ویژه موبایل + هندزفری",
    desc: "صرفه‌جویی تا ۲ میلیون تومان",
    price: 24900000,
    image: "https://images.pexels.com/photos/3945679/pexels-photo-3945679.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
];

export type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  badge?: string;
  amazing?: boolean;
};

export const popularProducts: Product[] = [
  {
    id: 1,
    name: "هدفون بی‌سیم سونی WH-1000XM5",
    brand: "سونی",
    price: 16900000,
    oldPrice: 18500000,
    discount: 9,
    rating: 4.9,
    reviews: 1240,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "audio",
    badge: "پرفروش",
  },
  {
    id: 2,
    name: "لپ‌تاپ مک‌بوک پرو ۱۴ اینچ M3",
    brand: "اپل",
    price: 89500000,
    rating: 4.8,
    reviews: 486,
    image: "https://images.pexels.com/photos/5082979/pexels-photo-5082979.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    category: "laptops",
    badge: "جدید",
  },
  {
    id: 3,
    name: "اسپیکر بنگ اند اولافسن Beosound",
    brand: "B&O",
    price: 42800000,
    oldPrice: 48500000,
    discount: 12,
    rating: 4.7,
    reviews: 218,
    image: "https://images.pexels.com/photos/29581125/pexels-photo-29581125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "audio",
  },
  {
    id: 4,
    name: "تبلت آیپد پرو ۱۲.۹ اینچ",
    brand: "اپل",
    price: 54200000,
    rating: 4.9,
    reviews: 892,
    image: "https://images.pexels.com/photos/8534239/pexels-photo-8534239.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    category: "laptops",
    badge: "ویژه",
  },
  {
    id: 5,
    name: "هدفون سفید پریمیوم Studio",
    brand: "سونی",
    price: 9800000,
    oldPrice: 12500000,
    discount: 22,
    rating: 4.6,
    reviews: 654,
    image: "https://images.pexels.com/photos/3394653/pexels-photo-3394653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "audio",
  },
  {
    id: 6,
    name: "ست گجت رومیزی حرفه‌ای",
    brand: "نوا",
    price: 15600000,
    rating: 4.5,
    reviews: 312,
    image: "https://images.pexels.com/photos/4377619/pexels-photo-4377619.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    category: "accessories",
  },
  {
    id: 7,
    name: "لپ‌تاپ اولترابوک مینیمال",
    brand: "دل",
    price: 38400000,
    oldPrice: 42000000,
    discount: 9,
    rating: 4.4,
    reviews: 198,
    image: "https://images.pexels.com/photos/8534389/pexels-photo-8534389.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    category: "laptops",
  },
  {
    id: 8,
    name: "ساعت هوشمند لوکس چرمی",
    brand: "رولکس استایل",
    price: 12400000,
    rating: 4.7,
    reviews: 445,
    image: "https://images.pexels.com/photos/13273982/pexels-photo-13273982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "wearables",
    badge: "لوکس",
  },
];

export const amazingProducts: Product[] = [
  {
    id: 101,
    name: "آیفون ۱۵ پرو ۲۵۶ گیگ",
    brand: "اپل",
    price: 68900000,
    oldPrice: 78500000,
    discount: 12,
    rating: 4.9,
    reviews: 2340,
    image: "https://images.pexels.com/photos/13570143/pexels-photo-13570143.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    category: "phones",
    amazing: true,
    badge: "شگفت‌انگیز",
  },
  {
    id: 102,
    name: "هدفون سونی WH-1000XM5 مشکی",
    brand: "سونی",
    price: 14900000,
    oldPrice: 19800000,
    discount: 25,
    rating: 4.9,
    reviews: 1890,
    image: "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "audio",
    amazing: true,
    badge: "شگفت‌انگیز",
  },
  {
    id: 103,
    name: "گلکسی S24 اولترا ۵۱۲ گیگ",
    brand: "سامسونگ",
    price: 52400000,
    oldPrice: 64500000,
    discount: 19,
    rating: 4.8,
    reviews: 1560,
    image: "https://images.pexels.com/photos/11216318/pexels-photo-11216318.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    category: "phones",
    amazing: true,
    badge: "شگفت‌انگیز",
  },
  {
    id: 104,
    name: "مک‌بوک ایر M2 ۱۳ اینچ",
    brand: "اپل",
    price: 48500000,
    oldPrice: 56000000,
    discount: 13,
    rating: 4.8,
    reviews: 980,
    image: "https://images.pexels.com/photos/8532776/pexels-photo-8532776.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    category: "laptops",
    amazing: true,
    badge: "شگفت‌انگیز",
  },
  {
    id: 105,
    name: "ایرپاد پرو نسل دوم",
    brand: "اپل",
    price: 8900000,
    oldPrice: 12500000,
    discount: 29,
    rating: 4.7,
    reviews: 3210,
    image: "https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "audio",
    amazing: true,
    badge: "شگفت‌انگیز",
  },
  {
    id: 106,
    name: "گوشی پرچمدار تیتانیومی",
    brand: "اپل",
    price: 71200000,
    oldPrice: 82000000,
    discount: 13,
    rating: 4.9,
    reviews: 1120,
    image: "https://images.pexels.com/photos/11216259/pexels-photo-11216259.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    category: "phones",
    amazing: true,
    badge: "شگفت‌انگیز",
  },
];

export const phoneProducts: Product[] = [
  {
    id: 201,
    name: "آیفون ۱۵ پرو مکس تیتانیوم طبیعی",
    brand: "اپل",
    price: 72500000,
    oldPrice: 78000000,
    discount: 7,
    rating: 4.9,
    reviews: 2840,
    image: "https://images.pexels.com/photos/13570143/pexels-photo-13570143.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    category: "phones",
    badge: "پرفروش",
  },
  {
    id: 202,
    name: "آیفون ۱۴ پرو مشکی فضایی",
    brand: "اپل",
    price: 54800000,
    rating: 4.8,
    reviews: 4120,
    image: "https://images.pexels.com/photos/11216259/pexels-photo-11216259.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    category: "phones",
  },
  {
    id: 203,
    name: "گلکسی S24 اولترا تیتانیوم خاکستری",
    brand: "سامسونگ",
    price: 58900000,
    oldPrice: 64500000,
    discount: 9,
    rating: 4.8,
    reviews: 1960,
    image: "https://images.pexels.com/photos/30353222/pexels-photo-30353222.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    category: "phones",
    badge: "جدید",
  },
  {
    id: 204,
    name: "گوشی پرچمدار مشکی مات",
    brand: "شیائومی",
    price: 28400000,
    oldPrice: 32000000,
    discount: 11,
    rating: 4.6,
    reviews: 870,
    image: "https://images.pexels.com/photos/11216318/pexels-photo-11216318.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    category: "phones",
  },
  {
    id: 205,
    name: "اسمارت‌فون مینیمال سفید",
    brand: "گوگل",
    price: 35600000,
    rating: 4.7,
    reviews: 640,
    image: "https://images.pexels.com/photos/28919440/pexels-photo-28919440.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    category: "phones",
  },
  {
    id: 206,
    name: "آیفون ۱۳ مینی ۱۲۸ گیگ",
    brand: "اپل",
    price: 32800000,
    oldPrice: 38500000,
    discount: 15,
    rating: 4.7,
    reviews: 2340,
    image: "https://images.pexels.com/photos/13570155/pexels-photo-13570155.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    category: "phones",
    badge: "پیشنهاد",
  },
  {
    id: 207,
    name: "پک موبایل و تبلت حرفه‌ای",
    brand: "اپل",
    price: 94500000,
    rating: 4.9,
    reviews: 420,
    image: "https://images.pexels.com/photos/3945679/pexels-photo-3945679.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    category: "phones",
  },
  {
    id: 208,
    name: "گوشی پرچمدار بنفش متالیک",
    brand: "سامسونگ",
    price: 41200000,
    oldPrice: 46800000,
    discount: 12,
    rating: 4.5,
    reviews: 780,
    image: "https://images.pexels.com/photos/26761342/pexels-photo-26761342.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    category: "phones",
  },
];

export const brands = [
  { name: "Apple", fa: "اپل", logo: "🍎" },
  { name: "Samsung", fa: "سامسونگ", logo: "✦" },
  { name: "Sony", fa: "سونی", logo: "◈" },
  { name: "Xiaomi", fa: "شیائومی", logo: "◉" },
  { name: "Asus", fa: "ایسوس", logo: "△" },
  { name: "Dell", fa: "دل", logo: "◇" },
  { name: "Huawei", fa: "هوآوی", logo: "❀" },
  { name: "LG", fa: "ال‌جی", logo: "◎" },
  { name: "Lenovo", fa: "لنوو", logo: "▣" },
  { name: "Microsoft", fa: "مایکروسافت", logo: "⊞" },
];

export const navCategories = [
  "گوشی موبایل",
  "لپ‌تاپ",
  "هدفون",
  "ساعت هوشمند",
  "تبلت",
  "لوازم جانبی",
  "گیمینگ",
  "خانه هوشمند",
];

export const catNameToId: Record<string, string> = {
  "گوشی موبایل": "phones",
  "لپ‌تاپ": "laptops",
  "هدفون": "audio",
  "ساعت هوشمند": "wearables",
  "تبلت": "laptops",
  "لوازم جانبی": "accessories",
  "گیمینگ": "gaming",
  "خانه هوشمند": "home",
  "phones": "phones",
  "laptops": "laptops",
  "audio": "audio",
  "wearables": "wearables",
  "accessories": "accessories",
  "cameras": "cameras",
  "gaming": "gaming",
  "home": "home",
};

export const extraProducts: Product[] = [
  {
    id: 301,
    name: "ساعت هوشمند اپل واچ اولترا ۲ تیتانیوم",
    brand: "اپل",
    price: 44500000,
    oldPrice: 48000000,
    discount: 7,
    rating: 4.9,
    reviews: 780,
    image: "https://images.pexels.com/photos/13273982/pexels-photo-13273982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "wearables",
    badge: "پرفروش",
  },
  {
    id: 302,
    name: "لپ‌تاپ ایسوس زن‌بوک اولترا اسلیم Oled",
    brand: "ایسوس",
    price: 64000000,
    rating: 4.8,
    reviews: 310,
    image: "https://images.pexels.com/photos/5082979/pexels-photo-5082979.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    category: "laptops",
    badge: "جدید",
  },
  {
    id: 303,
    name: "ایرپاد مکس اپل با درگاه USB-C",
    brand: "اپل",
    price: 29500000,
    oldPrice: 33000000,
    discount: 10,
    rating: 4.9,
    reviews: 1420,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "audio",
  },
  {
    id: 304,
    name: "کنسول پلی‌استیشن ۵ اسلیم دیجیتال",
    brand: "سونی",
    price: 28900000,
    oldPrice: 31500000,
    discount: 8,
    rating: 4.9,
    reviews: 2150,
    image: "https://images.pexels.com/photos/4377619/pexels-photo-4377619.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    category: "gaming",
    badge: "ویژه",
  },
  {
    id: 305,
    name: "دوربین میرورلس سونی آلفا A7 IV",
    brand: "سونی",
    price: 118000000,
    rating: 4.9,
    reviews: 190,
    image: "https://images.pexels.com/photos/821653/pexels-photo-821653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "cameras",
    badge: "حرفه‌ای",
  },
  {
    id: 306,
    name: "اسپیکر هوشمند اپل هوم‌پاد مینی",
    brand: "اپل",
    price: 8900000,
    rating: 4.7,
    reviews: 440,
    image: "https://images.pexels.com/photos/29581125/pexels-photo-29581125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "home",
  },
];

export const allProducts: Product[] = [
  ...popularProducts,
  ...amazingProducts,
  ...phoneProducts,
  ...extraProducts,
];

export type OrderItem = {
  name: string;
  qty: number;
  price: number;
  image: string;
};

export type Order = {
  id: string;
  date: string;
  status: "current" | "delivered" | "cancelled";
  statusLabel: string;
  trackingCode: string;
  amount: number;
  paymentMethod: string;
  address: string;
  items: OrderItem[];
};

export const userOrders: Order[] = [
  {
    id: "NV-84291",
    date: "۱۴۰۳/۰۹/۱۷ - ۱۴:۳۰",
    status: "current",
    statusLabel: "در حال پردازش و ارسال",
    trackingCode: "۴۹۲۸۱-۹۲۸۳-۱۰۹۲",
    amount: 72500000,
    paymentMethod: "پرداخت اینترنتی (درگاه زرین‌پال)",
    address: "تهران، شهرک غرب، خیابان ولیعصر، کوچه صدف، پلاک ۱۸، واحد ۴",
    items: [
      {
        name: "آیفون ۱۵ پرو مکس تیتانیوم طبیعی",
        qty: 1,
        price: 72500000,
        image: "https://images.pexels.com/photos/13570143/pexels-photo-13570143.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      },
    ],
  },
  {
    id: "NV-81204",
    date: "۱۴۰۳/۰۸/۲۴ - ۱۸:۱۰",
    status: "delivered",
    statusLabel: "تحویل داده شده",
    trackingCode: "۷۸۲۳۴-۱۲۹۰-۸۸۴۲",
    amount: 16900000,
    paymentMethod: "پرداخت اینترنتی (درگاه ملت)",
    address: "تهران، شهرک غرب، خیابان ولیعصر، کوچه صدف، پلاک ۱۸، واحد ۴",
    items: [
      {
        name: "هدفون بی‌سیم سونی WH-1000XM5",
        qty: 1,
        price: 16900000,
        image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
    ],
  },
  {
    id: "NV-79402",
    date: "۱۴۰۳/۰۷/۱۰ - ۱۱:۴۵",
    status: "delivered",
    statusLabel: "تحویل داده شده",
    trackingCode: "۵۶۱۲۳-۹۹۲۱-۴۴۲۳",
    amount: 89500000,
    paymentMethod: "پرداخت اینترنتی (درگاه ملت)",
    address: "تهران، شهرک غرب، خیابان ولیعصر، کوچه صدف، پلاک ۱۸، واحد ۴",
    items: [
      {
        name: "لپ‌تاپ مک‌بوک پرو ۱۴ اینچ M3",
        qty: 1,
        price: 89500000,
        image: "https://images.pexels.com/photos/5082979/pexels-photo-5082979.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      },
    ],
  },
  {
    id: "NV-74210",
    date: "۱۴۰۳/۰۶/۰۵ - ۰۹:۱۵",
    status: "cancelled",
    statusLabel: "لغو شده توسط کاربر",
    trackingCode: "—",
    amount: 12400000,
    paymentMethod: "پرداخت در محل",
    address: "تهران، شهرک غرب، خیابان ولیعصر، کوچه صدف، پلاک ۱۸، واحد ۴",
    items: [
      {
        name: "ساعت هوشمند لوکس چرمی",
        qty: 1,
        price: 12400000,
        image: "https://images.pexels.com/photos/13273982/pexels-photo-13273982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
    ],
  },
];

export const userProfile = {
  name: "امیرحسین رضایی",
  phone: "۰۹۱۲۳۴۵۶۷۸۹",
  email: "amir.rezaei@email.com",
  nationalCode: "۰۰۷۸۹۲۳۴۱۲",
  walletBalance: 4500000,
  giftCardBalance: 1200000,
  addresses: [
    {
      id: 1,
      title: "منزل (آدرس اصلی)",
      address: "تهران، شهرک غرب، خیابان ولیعصر، کوچه صدف، پلاک ۱۸، واحد ۴",
      receiver: "امیرحسین رضایی",
      phone: "۰۹۱۲۳۴۵۶۷۸۹",
      default: true,
    },
    {
      id: 2,
      title: "محل کار",
      address: "تهران، جردن، بلوار آرش غربی، پلاک ۲۴، برج نوآوران، طبقه ۸",
      receiver: "امیرحسین رضایی",
      phone: "۰۲۱-۸۸۹۹۲۲۳۳",
      default: false,
    },
  ],
};
