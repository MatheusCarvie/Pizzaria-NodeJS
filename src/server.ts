import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import router from "./route";
import path from "path"
import { filePath } from "./config/multer";

const app = express();

app.use(express.json());

app.use(cors());

app.use(router);

app.use("/file", express.static(path.resolve(__dirname, "../", filePath)));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err as Error) return res.status(400).json({ error: err.message });

    return res.status(500).json({ status: "error", message: "Internal server error" });
});

app.listen(3001, () => console.log("Servidor iniciado"));