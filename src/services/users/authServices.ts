import { prismaClient } from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

export type authServicesTypes = {
    email: string,
    password: string
}

class AuthServices {
    async execute({ email, password }: authServicesTypes) {
        if (!email) throw new Error("Nome invalido");
        if (!password) throw new Error("Senha invalida");

        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });

        if (!user) throw new Error("Email/Senha invalidos");

        // Compara a senha Criptografada do banco de dados com a senha inseria pelo usuario
        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) throw new Error("Email/Senha invalidos");

        // Criando um Token
        const token = sign({
            name: user.name,
            email: user.email,
        },
            process.env.JWT_HASH!,
            {
                subject: user.id,
                expiresIn: "30d"
            }
        );

        return ({
            status: "Authenticated",
            name: user.name,
            email: user.email,
            token: token
        });
    }
}

export default AuthServices;