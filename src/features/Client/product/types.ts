import { Prisma } from "@prisma/client";


export type ProductCardType = Prisma.ProductGetPayload<{
    include:{
      brand:true;
      category:true;

      images:{
        where:{
          isPrimary:true;
        }
      };

      variants:true;
    }
  }>;

export type CreateProductType = Prisma.ProductGetPayload<{}>