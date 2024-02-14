import { Request, Response } from "express";
import AddOrdersService from "../../services/orders/addOrdersService";

class AddOrdersController {
    async handle(req: Request, res: Response) {
        const { table, name } = req.body;

        const order = await new AddOrdersService().execute({
            table: table,
            name: name
        });

        return res.json(order);
    }
}

export default AddOrdersController;