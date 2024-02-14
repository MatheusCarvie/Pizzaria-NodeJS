import { Request, Response } from "express";
import RemoveItemService from "../../services/items/removeItemService";

class RemoveItemController {
    async handle(req: Request, res: Response) {
        const id = req.query.id as string;

        await new RemoveItemService().execute({ id: id });

        return res.json({ removed: true });
    }
}

export default RemoveItemController;