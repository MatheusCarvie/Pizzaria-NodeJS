import { Request, Response } from "express";
import AuthServices, { authServicesTypes } from "../../services/users/authServices";

class AuthController {
    async handle(req: Request, res: Response) {
        const { email, password }: authServicesTypes = req.body;

        const authServices = new AuthServices();

        const user = await authServices.execute({
            email: email,
            password: password
        });

        res.json(user);
    }
}

export default AuthController;