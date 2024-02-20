import { prismaClient } from "../../prisma";

type finishOrderTypes = {
    orderId: string
}

class FinishOrderService {
    async execute({ orderId }: finishOrderTypes) {
        if (!orderId) throw new Error("ID da Order invalido");

        const existOrder = await prismaClient.order.findFirst({
            where: {
                id: orderId
            }
        });

        if (!existOrder) throw new Error("ID da Order invalido");

        const order = await prismaClient.order.update({
            where: {
                id: orderId
            },
            data: {
                status: true
            }
        });

        return order;
    }
}

export default FinishOrderService;