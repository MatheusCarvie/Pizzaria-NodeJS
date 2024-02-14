import { Request, Response } from "express";
import AddItemService from "../../services/items/addItemService";

class AddItemController {
    async handle(req: Request, res: Response) {
        const { amount, orderId, productId } = req.body;

        const item = await new AddItemService().execute({
            amount: amount,
            orderId: orderId,
            productId: productId
        });

        return res.json(item);
    }
}

export default AddItemController;