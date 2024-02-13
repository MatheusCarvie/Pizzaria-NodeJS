import { Response, Request } from "express";
import ListCategoryService from "../../services/categorys/listCategoryService";

class ListCategoryController {
    async handle(req: Request, res: Response) {
        const listCategoryService = await new ListCategoryService().execute();

        return res.json(listCategoryService);
    }
}

export default ListCategoryController;