import { prisma } from "@/constants/prisma"
import { ProductWithRelations } from "../types";


export async function getProducts():Promise<ProductWithRelations[]> {
  return prisma.product.findMany({
    where: {
      isPublished: true,
    },

    include: {
      brand: true,
      category: true,

      images: {
        where: {
          isPrimary: true,
        },
      },

      variants: true,
    },

    orderBy: {
      createdAt: "desc",
    },
  });
}