import { prismaClient } from "../../prisma"

type productsType = {
    name: string,
    price: string,
    description: string,
    banner: string,
    category_id: string
}

class AddProductService {
    async execute({ name, price, description, banner, category_id }: productsType) {
        if (!name) throw new Error("Nome invalido");
        if (!price) throw new Error("Preço invalido");

        const existCategory = await prismaClient.category.findFirst(({
            where: {
                id: category_id
            }
        }));

        if (!existCategory) throw new Error("Categoria invalida")

        const product = await prismaClient.product.create({
            data: {
                name: name,
                price: price,
                description: description ?? "S/D",
                banner: banner,
                category_id: category_id
            }
        });

        return product;
    }
}

export default AddProductService;