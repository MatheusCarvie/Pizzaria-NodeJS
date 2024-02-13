import multer from "multer";
import { randomBytes } from "crypto";

export const filePath: string = "tmp";

function Upload() {
    return multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, `${__dirname}/../../${filePath}`);
        },
        filename: (req, file, callback) => {
            const randomString = randomBytes(16).toString('hex');
            const uniqueFileName = `${Date.now()}-${randomString}-${file.originalname}`;
            callback(null, uniqueFileName);
        }
    });
}

export const UploadFile = multer({ storage: Upload() });
