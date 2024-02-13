import { Response, Request } from "express";
import UserService from "../../services/users/userService";

class UserController {
    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body;

        const userService = new UserService();

        const user = await userService.execute({
            name: name,
            email: email,
            password: password
        });

        return res.json(user);
    }
}

export default UserController;