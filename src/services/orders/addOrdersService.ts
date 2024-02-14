import { prismaClient } from "../../prisma";

type addOrderTypes = {
    table: number,
    name: string
}

class AddOrdersService {
    async execute({ table, name }: addOrderTypes) {
        if (!table) throw new Error("Numero da mesa invalido");

        const existOrder = await prismaClient.order.findFirst({
            where: {
                table: table
            }
        });

        if (existOrder) throw new Error("Mesa já esta em uso");

        const order = await prismaClient.order.create({
            data: {
                table: table,
                name: name,
            }
        });

        return order;
    }
}

export default AddOrdersService;