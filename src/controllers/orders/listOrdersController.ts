import { Request, Response } from "express";
import ListOrdersService from "../../services/orders/listOrdersService";

class ListOrdersController {
    async handle(req: Request, res: Response) {
        const orders = await new ListOrdersService().execute();

        return res.json(orders);
    }
}

export default ListOrdersController;