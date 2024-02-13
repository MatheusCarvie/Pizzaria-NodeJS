import { Request, Response } from "express";
import DetailsUserService from "../../services/users/detailsUserService";

class DetailsUserController {
    async handle(req: Request, res: Response) {
        const { userID } = req;

        const userDetails = await new DetailsUserService().execute({ userID });

        res.json(userDetails);
    }
}

export default DetailsUserController;