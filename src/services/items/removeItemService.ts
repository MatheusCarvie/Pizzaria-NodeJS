import { prismaClient } from "../../prisma";

type removeItemTypes = {
    id: string
}

class RemoveItemService {
    async execute({ id }: removeItemTypes) {
        if (!id) throw new Error("Id Invalido");

        const existItem = await prismaClient.item.findFirst({
            where: {
                id: id
            }
        });

        if (!existItem) throw new Error("Id invalido");

        await prismaClient.item.delete({
            where: {
                id: id
            }
        });

        return;
    }
}

export default RemoveItemService;