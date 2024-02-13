import { Request, Response } from "express";
import AddProductService from "../../services/products/addProductsService";

class AddProductController {
    async handle(req: Request, res: Response) {
        const { name, price, description, category_id } = req.body;

        if (!req.file) throw new Error("Imagem invalida");

        const { filename } = req.file;

        const product = await new AddProductService().execute({
            name: name,
            price: price,
            description: description,
            banner: filename,
            category_id: category_id
        });

        return res.json(product);
    }
}

export default AddProductController;