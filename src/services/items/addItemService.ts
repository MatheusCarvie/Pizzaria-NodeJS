import { prismaClient } from "../../prisma";

type addItemType = {
    amount: number,
    orderId: string,
    productId: string
}

class AddItemService {
    async execute({ amount, orderId, productId }: addItemType) {
        if (!amount) throw new Error("Quantidade invalida");
        if (!orderId) throw new Error("Pedido invalido");
        if (!productId) throw new Error("Produto invalido");

        const item = await prismaClient.item.create({
            data: {
                amount: amount,
                orderId: orderId,
                productId: productId
            }
        });

        return item;
    }
}

export default AddItemService;