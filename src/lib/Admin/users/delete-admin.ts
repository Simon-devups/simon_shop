"use server"

import { prisma } from "@/constants/prisma";
import { revalidatePath } from "next/cache";


export async function deleteAdmin(adminId : string) {
    await prisma.userActiveTime.deleteMany({
        where:{userId:adminId}
    });
    await prisma.user.delete({
        where:{id:adminId}
    });
    revalidatePath("/admin/admins")
}