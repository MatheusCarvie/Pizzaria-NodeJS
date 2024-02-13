import { prismaClient } from "../../prisma";
import { hash } from "bcryptjs";

type UsersTypes = {
    name: string,
    email: string,
    password: string
}

class UserService {
    async execute({ name, email, password }: UsersTypes) {
        // Verifica se não contem alguma senha
        if (!password) throw new Error("Senha invalida");

        // Realiza a criptografia da senha
        const passwordHash = await hash(password, 8);

        if (!email) throw new Error("Email invalido");

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });

        if (userAlreadyExists) throw new Error("Usuario já existe");

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        });

        return user;
    }
}

export default UserService;