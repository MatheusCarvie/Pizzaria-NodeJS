import { Request, Response } from "express";
import AddCategorysService from "../../services/categorys/addCategoryService";

export type addCategorysControllerTypes = {
    name: string
}

class AddCategorysController {
    async handle(req: Request, res: Response) {
        const { name }: addCategorysControllerTypes = req.body;

        const category = await new AddCategorysService().execute({ name });

        return res.json(category);
    }
}

export default AddCategorysController;