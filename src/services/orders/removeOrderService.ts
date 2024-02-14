import { prismaClient } from "../../prisma";

type removeOrderType = {
    id: string
}

class RemoveOrderService {
    async execute({ id }: removeOrderType) {
        if (!id) throw new Error("ID invalido");

        const existOrder = await prismaClient.order.findFirst({
            where: {
                id: id
            }
        });

        if (!existOrder) throw new Error("ID invalido");

        await prismaClient.order.delete({
            where: {
                id: id
            }
        });

        return;
    }
}

export default RemoveOrderService;