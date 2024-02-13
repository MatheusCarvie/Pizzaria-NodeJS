import { addCategorysControllerTypes } from "../../controllers/categorys/addCategoryController";
import { prismaClient } from "../../prisma";

class AddCategorysService {
    async execute({ name }: addCategorysControllerTypes) {
        if (!name) throw new Error("Nome invalido");

        const categoryExist = await prismaClient.category.findFirst({
            where: {
                name: name
            }
        })

        if (categoryExist) throw new Error("Categoria já existe");

        const category = await prismaClient.category.create({
            data: {
                name: name
            },
            select: {
                id: true,
                name: true
            }
        })

        return category;
    }
}

export default AddCategorysService;