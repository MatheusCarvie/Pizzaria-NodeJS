import { Request, Response } from "express";
import ListProductsService from "../../services/products/listProductsService";

class ListProductsController {
    async handle(req: Request, res: Response) {
        const products = await new ListProductsService().execute();

        return res.json(products);
    }
}

export default ListProductsController;