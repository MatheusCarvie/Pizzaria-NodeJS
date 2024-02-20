import { prismaClient } from "../../prisma";

type detailsOrder = {
    orderId: string
}

class DetailsOrderService {
    async execute({ orderId }: detailsOrder) {
        if (!orderId) throw new Error("ID da order invalido");

        const order = await prismaClient.item.findMany({
            where: {
                orderId: orderId
            },
            include: {
                Product: true,
                Order: true
            }
        });

        return order;
    }
}

export default DetailsOrderService;