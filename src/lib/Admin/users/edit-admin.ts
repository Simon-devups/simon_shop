"use server"

import { prisma } from "@/constants/prisma"
import type {UpdateAdminType} from "@/constants/types"

export async function UpdateAdmin({id,email,isActive,name,role}:UpdateAdminType) {
    await prisma.user.update({
        where:{id},
        data:{
            email,isActive,name,role
        }
    })
}