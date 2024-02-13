import { Router } from "express";
import UserController from "./controllers/users/userController";
import AuthController from "./controllers/users/authController";
import IsAuthenticated from "./middlewares/IsAuthenticated";
import DetailsUserController from "./controllers/users/detailsUserController";
import AddCategorysController from "./controllers/categorys/addCategoryController";
import ListCategoryController from "./controllers/categorys/listCategoryController";
import AddProductController from "./controllers/products/addProductsController";
import { UploadFile } from "./config/multer";

const router = Router();

//#region Rotas de Usuarios
// Realiza o cadastro de usuarios
router.post("/users", new UserController().handle);

// Realiza o login com email/password
router.post("/session", new AuthController().handle);

// Obtem os dados do usuario autenticado
router.get("/me", IsAuthenticated, new DetailsUserController().handle);
//#endregion

//#region Rotas de Categorias
// Adiciona uma nova categoria
router.post("/category", IsAuthenticated, new AddCategorysController().handle);

// Lista todos as categorias
router.get("/category", IsAuthenticated, new ListCategoryController().handle);
//#endregion

//#region Rotas de Produtos
// Adiciona novos produtos
router.post("/product", IsAuthenticated, UploadFile.single("file"), new AddProductController().handle);
//#endregion
export default router;