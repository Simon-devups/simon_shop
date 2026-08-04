import { prisma } from "@/constants/prisma";


export async function getBrands() {
    const brands = await prisma.brand.findMany({
        select:{
            name:true,
            logo:true,
            slug:true,
            products:true
        }
    })

    return brands.map((brand)=>{
        const {products,...brandW} = brand;
        return {
            ...brandW,
            products:products.length
        }
    })
}