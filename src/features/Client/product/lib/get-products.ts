import { prisma } from "@/constants/prisma"
import { ProductCardType } from "../types";


export async function getProducts():Promise<ProductCardType[]> {
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

export async function getProductBySlug(slug:string) {
  return prisma.product.findUnique({
    where :{slug},
    include:{
      brand:true,
      category:{select:{name:true}},
      images:true,
      variants:true
    }
  })
}

// export async function createProduct() {
//   const brandId = await prisma.brand.findUnique({where:{slug:brandSlug}})
//   const product = await prisma.product.create({
//     data:{
//       name,
//       brandId,
      
//     }
//   })
// }