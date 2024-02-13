import multer from "multer";

function Upload() {
    const folderPath: string = "tmp";
    return multer.diskStorage({
        destination: ((req, file, callback) => {
            return callback(null, `${__dirname}/../${folderPath}`);
        }),
        filename: ((req, file, callback) => {
            return callback(null, `${Date.now()}-${file.originalname}`);
        })
    })
}

export const UploadFile = multer({ storage: Upload() });