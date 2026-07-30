import { prisma } from "@/constants/prisma";
import { Role } from "@prisma/client";
import { revalidatePath } from "next/cache";


export async function getAdmins() {
    const Admins = await prisma.user.findMany({
        where:{
            role:Role.ADMIN,
        },
        select:{
            id:true,
            name:true,
            email:true,
            role:true,
            isActive:true,
            activeTimes:{
                select:{activeTime:true},
                orderBy:{activeTime:"desc"},
                take:1
            }
        }
    })

    return Admins.map((admin)=>{
        const {activeTimes,...fetchAdmin} = admin;
        const fAdmin = {...fetchAdmin,activeTime : activeTimes[0]?.activeTime ?? 1}
        return fAdmin
    })
}

export async function createAdmin() {
    
}


