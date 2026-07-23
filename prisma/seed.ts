import "dotenv/config";
import { PrismaClient } from "@prisma/client"; // مسیر خروجی generate خودتون
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });


async function main() {
    await prisma.variantValue.deleteMany();

    await prisma.productVariant.deleteMany();

    await prisma.productImage.deleteMany();

    await prisma.attributeValue.deleteMany();

    await prisma.attribute.deleteMany();

    await prisma.product.deleteMany();

    await prisma.category.deleteMany();

    await prisma.brand.deleteMany();

    const apple = await prisma.brand.create({
        data: {
            name: "Apple",
            slug: "apple",
        },
    });

    const samsung = await prisma.brand.create({
        data: {
            name: "Samsung",
            slug: "samsung",
        },
    });

    const mobile = await prisma.category.create({
        data: {
            name: "Mobile",
            slug: "mobile",
        },
    });

    const color = await prisma.attribute.create({
        data: {
            name: "Color",
            slug: "color",
        },
    });

    const storage = await prisma.attribute.create({
        data: {
            name: "Storage",
            slug: "storage",
        },
    });

    const black = await prisma.attributeValue.create({
        data: {
            value: "Black",
            attributeId: color.id,
        },
    });

    const white = await prisma.attributeValue.create({
        data: {
            value: "White",
            attributeId: color.id,
        },
    });

    const s128 = await prisma.attributeValue.create({
        data: {
            value: "128GB",
            attributeId: storage.id,
        },
    });

    const s256 = await prisma.attributeValue.create({
        data: {
            value: "256GB",
            attributeId: storage.id,
        },
    });

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
            {
                productId: iphone.id,
                url: "/images/iphone-1.jpg",
                order: 1,
                isPrimary: true,
            },
            {
                productId: iphone.id,
                url: "/images/iphone-2.jpg",
                order: 2,
            },
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

    await prisma.variantValue.createMany({
        data: [
            {
                variantId: variant128.id,
                attributeValueId: black.id,
            },
            {
                variantId: variant128.id,
                attributeValueId: s128.id,
            },
        ],
    });

}

main()
    .catch(console.error)
    .finally(async () => {
        await prisma.$disconnect();
    });