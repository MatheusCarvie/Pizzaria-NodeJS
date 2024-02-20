import { Request, Response } from "express";
import FinishOrderService from "../../services/orders/finishOrderService";

class FinishOrderController {
    async handle(req: Request, res: Response) {
        const orderId = req.query.orderId as string;

        const order = await new FinishOrderService().execute({ orderId: orderId });

        return res.json(order);
    }
}

export default FinishOrderController;