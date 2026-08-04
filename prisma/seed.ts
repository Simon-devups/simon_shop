import "dotenv/config";
import { PrismaClient, Role, OrderStatus, PaymentStatus, DiscountType } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import * as bcrypt from "bcryptjs";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const password = "12345678";
const saltRound = 10;

async function main() {
  // ترتیب حذف: از مدل‌های وابسته (child) به مدل‌های پایه (parent)
  await prisma.payment.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.coupon.deleteMany();
  await prisma.cartItem.deleteMany();
  await prisma.cart.deleteMany();
  await prisma.wishlistItem.deleteMany();
  await prisma.review.deleteMany();
  await prisma.address.deleteMany();

  await prisma.variantValue.deleteMany();
  await prisma.productVariant.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.attributeValue.deleteMany();
  await prisma.attribute.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.brand.deleteMany();
  await prisma.userActiveTime.deleteMany();

  await prisma.user.deleteMany();

  // ==========================================
  // Users (Admins & Normal Users)
  // ==========================================
  const admin1 = await prisma.user.create({
    data: {
      name: "fariar",
      email: "fariar.ansari@gmail.com",
      password: await bcrypt.hash(password, saltRound),
      role: Role.ADMIN,
    },
  });

  const admin2 = await prisma.user.create({
    data: {
      name: "aryan",
      email: "aryan.rad@gmail.com",
      password: await bcrypt.hash(password, saltRound),
      role: Role.ADMIN,
    },
  });

  const user1 = await prisma.user.create({
    data: {
      name: "nima",
      email: "nima.shamshiri@gmail.com",
      password: await bcrypt.hash(password, saltRound),
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "sajjad",
      email: "sjpd@gmail.com",
      password: await bcrypt.hash(password, saltRound),
    },
  });

  // ==========================================
  // Brands & Category
  // ==========================================
  const apple = await prisma.brand.create({
    data: { name: "Apple", slug: "apple" },
  });

  const samsung = await prisma.brand.create({
    data: { name: "Samsung", slug: "samsung" },
  });

  const mobile = await prisma.category.create({
    data: { name: "Mobile", slug: "mobile" },
  });

  // ==========================================
  // Attributes
  // ==========================================
  const color = await prisma.attribute.create({
    data: { name: "Color", slug: "color" },
  });

  const storage = await prisma.attribute.create({
    data: { name: "Storage", slug: "storage" },
  });

  const black = await prisma.attributeValue.create({
    data: { value: "Black", attributeId: color.id },
  });

  const white = await prisma.attributeValue.create({
    data: { value: "White", attributeId: color.id },
  });

  const s128 = await prisma.attributeValue.create({
    data: { value: "128GB", attributeId: storage.id },
  });

  const s256 = await prisma.attributeValue.create({
    data: { value: "256GB", attributeId: storage.id },
  });

  // ==========================================
  // Products
  // ==========================================
  const iphone = await prisma.product.create({
    data: {
      name: "iPhone 16 Pro",
      slug: "iphone-16-pro",
      description: "Apple flagship phone",
      categoryId: mobile.id,
      brandId: apple.id,
    },
  });

  await prisma.productImage.createMany({
    data: [
      { productId: iphone.id, url: "/images/iphone-1.jpg", order: 1, isPrimary: true },
      { productId: iphone.id, url: "/images/iphone-2.jpg", order: 2 },
    ],
  });

  const variant128 = await prisma.productVariant.create({
    data: {
      sku: "APL-IP16-128-BLK",
      price: 1200,
      stock: 15,
      productId: iphone.id,
    },
  });

  const variant256 = await prisma.productVariant.create({
    data: {
      sku: "APL-IP16-256-WHT",
      price: 1400,
      stock: 8,
      productId: iphone.id,
    },
  });

  await prisma.variantValue.createMany({
    data: [
      { variantId: variant128.id, attributeValueId: black.id },
      { variantId: variant128.id, attributeValueId: s128.id },
      { variantId: variant256.id, attributeValueId: white.id },
      { variantId: variant256.id, attributeValueId: s256.id },
    ],
  });

  const galaxy = await prisma.product.create({
    data: {
      name: "Samsung Galaxy S25",
      slug: "samsung-galaxy-s25",
      description: "Samsung flagship phone",
      categoryId: mobile.id,
      brandId: samsung.id,
    },
  });

  const galaxyVariant = await prisma.productVariant.create({
    data: {
      sku: "SMSG-S25-256-BLK",
      price: 1100,
      stock: 20,
      productId: galaxy.id,
    },
  });

  await prisma.variantValue.createMany({
    data: [
      { variantId: galaxyVariant.id, attributeValueId: black.id },
      { variantId: galaxyVariant.id, attributeValueId: s256.id },
    ],
  });

  // ==========================================
  // Address
  // ==========================================
  const address1 = await prisma.address.create({
    data: {
      userId: user1.id,
      fullName: "نیما شمشیری",
      phone: "09121234567",
      province: "تهران",
      city: "تهران",
      postalCode: "1234567890",
      addressLine: "خیابان ولیعصر، کوچه ۱۲",
      isDefault: true,
    },
  });

  // ==========================================
  // Cart & CartItem
  // ==========================================
  const cart1 = await prisma.cart.create({
    data: {
      userId: user1.id,
      items: {
        create: [
          { variantId: variant128.id, quantity: 1 },
          { variantId: galaxyVariant.id, quantity: 2 },
        ],
      },
    },
  });

  // ==========================================
  // Coupon
  // ==========================================
  const coupon1 = await prisma.coupon.create({
    data: {
      code: "WELCOME10",
      type: DiscountType.PERCENT,
      value: 10,
      maxUsage: 100,
      isActive: true,
    },
  });

  // ==========================================
  // Order & OrderItem & Payment
  // ==========================================
  const order1 = await prisma.order.create({
    data: {
      userId: user1.id,
      addressId: address1.id,
      couponId: coupon1.id,
      status: OrderStatus.PROCESSING,
      subtotal: 1200,
      discount: 120,
      shippingCost: 20,
      total: 1100,
      items: {
        create: [{ variantId: variant128.id, quantity: 1, price: 1200 }],
      },
      payment: {
        create: {
          amount: 1100,
          status: PaymentStatus.SUCCESS,
          method: "zarinpal",
          refId: "REF-123456",
          paidAt: new Date(),
        },
      },
    },
  });

  // ==========================================
  // Review
  // ==========================================
  await prisma.review.create({
    data: {
      userId: user1.id,
      productId: iphone.id,
      rating: 5,
      comment: "کیفیت عالی، پیشنهاد می‌کنم",
      isApproved: true,
    },
  });

  // ==========================================
  // Wishlist
  // ==========================================
  await prisma.wishlistItem.create({
    data: {
      userId: user2.id,
      productId: galaxy.id,
    },
  });

  console.log("Seed completed successfully ✅");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });