import { Request, Response } from "express";
import UpdateOrderService from "../../services/orders/updateOrderService";

class UpdateOrderController {
    async handle(req: Request, res: Response) {
        const id = req.query.id as string;

        const order = await new UpdateOrderService().execute({ id: id });

        return res.json(order);
    }
}

export default UpdateOrderController;