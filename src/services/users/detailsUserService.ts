import { prismaClient } from "../../prisma";

class DetailsUserService {
    async execute({ userID }: { userID: string }) {
        // Obtem os dados do usuario logado
        const userDetails = await prismaClient.user.findFirst({
            where: {
                id: userID
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        });

        return userDetails;
    }
}

export default DetailsUserService;