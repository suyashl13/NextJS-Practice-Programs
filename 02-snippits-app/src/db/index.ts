import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

db.snippit.create({
    data:{
        title: 'Title',
        code: 'const a = "suyash";'
    }
});