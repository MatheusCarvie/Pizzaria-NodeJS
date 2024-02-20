import { prismaClient } from "../../prisma";

type updateOrderType = {
    id: string
}

class UpdateOrderService {
    async execute({ id }: updateOrderType) {
        if (!id) throw new Error("Id invalido");

        const existOrder = await prismaClient.order.findFirst({
            where: {
                id: id
            }
        });

        if (!existOrder) throw new Error("Id invalido");

        const order = await prismaClient.order.update({
            where: {
                id: id
            },
            data: {
                draf: false
            }
        });

        return order;
    }
}

export default UpdateOrderService;