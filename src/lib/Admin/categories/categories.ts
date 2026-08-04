import { prisma } from "@/constants/prisma";


export async function getCategories() {
    const categories = await prisma.category.findMany({
        select:{
            id:true,
            name:true,
            parent:{select:{
                id:true,
                name:true,
                slug:true
            }},
            products:true,
            slug:true
        }
    })
    
    return categories.map((category) => {
        const {products, ...categoryW} = category
        return {
            ...categoryW,
            products : products.length 
        }
    })
    // return categories
}