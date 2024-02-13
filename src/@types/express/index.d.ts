declare namespace Express {
    export interface Request {
        userID: string,
        file: Express.Multer.File
    }
}