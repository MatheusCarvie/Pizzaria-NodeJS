import { Request, Response } from "express";
import DetailsOrderService from "../../services/orders/detailsOrderService";

class DetailsOrderController {
    async handle(req: Request, res: Response) {
        const orderId = req.query.orderId as string;

        const order = await new DetailsOrderService().execute({ orderId: orderId });

        return res.json(order);
    }
}

export default DetailsOrderController;