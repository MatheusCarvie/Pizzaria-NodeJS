import { Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";

type payLoadTypes = {
    sub: string
}

function IsAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization;
    if (!authToken) return res.status(401).end();

    const [, token] = authToken.split(" ");

    try {
        // Verifica se o Token é valido para processeguir
        const { sub } = verify(token, process.env.JWT_HASH!) as payLoadTypes;

        // Adiciona uma nova variavel userID ao req
        req.userID = sub;

        return next();

    } catch (error) {
        return res.status(401).end();
    }
}

export default IsAuthenticated;