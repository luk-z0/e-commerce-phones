import { PrismaClient } from "@prisma/client";
import { Phone } from "../types/phone";
const prisma = new PrismaClient();

export const findAll = async (): Promise<Phone[]> => {
    return await prisma.phone.findMany();
}

export const findById = async (id: number): Promise<Phone | null> => {
    return await prisma.phone.findFirst({
        where: { id: id }
    });
}

export const create = async (phone: Phone): Promise<Phone | undefined> => {
    const createdPhone = prisma.phone.create({
        data: phone
    });
    if (createdPhone) {
        return createdPhone;
    }
    return undefined;
}

export const update = async (phone: Phone): Promise<Phone | undefined> => {
    const updatedPhone = prisma.phone.update({
        where: { id: phone.id },
        data: phone
    });
    if (updatedPhone) {
        return updatedPhone;
    }
    return undefined;
}

export const remove = async (id: number): Promise<Phone | undefined> => {
    const deletedPhone = prisma.phone.delete({
        where: { id: id }
    });
    if (deletedPhone) {
        return deletedPhone;
    }
    return undefined;
}