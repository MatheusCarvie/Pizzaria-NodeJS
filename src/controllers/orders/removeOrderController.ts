import { Request, Response } from "express";
import RemoveOrderService from "../../services/orders/removeOrderService";

class RemoveOrderController {
    async handle(req: Request, res: Response) {
        const id = req.query.id as string;

        await new RemoveOrderService().execute({
            id: id
        });

        return res.json({ removed: true });
    }
}

export default RemoveOrderController;