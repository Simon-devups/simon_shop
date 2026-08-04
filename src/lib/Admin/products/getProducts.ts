import { prisma } from "@/constants/prisma";


export async function getProductsForAdmin(page:number){
    const products = await prisma.product.findMany({
        select:{
            id:true,
            name:true,
            category:{select:{name:true}},
            brand:{select:{name:true}},
            variants:{select:{price:true,stock:true,sku:true,id:true}},
            isPublished:true,
            images:{
                where:{isPrimary:true},
                select:{url:true}
            }
        },
        skip:(page-1)*10,
        take:10
    });

    return products.flatMap((product) =>
        product.variants.map((variant) => ({
            id: variant.id,
            name: product.name,
            category: product.category.name,
            brand: product.brand.name,
            price: variant.price.toNumber(),
            stock: variant.stock,
            status: product.isPublished,
            imageUrl: product.images[0]?.url ?? "",
            sku:variant.sku
    }))
);
}

export async function getPagesCount() {
    return (await prisma.product.findMany()).length

    
}