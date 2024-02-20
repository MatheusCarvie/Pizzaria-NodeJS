import { Router } from "express";
import UserController from "./controllers/users/userController";
import AuthController from "./controllers/users/authController";
import IsAuthenticated from "./middlewares/IsAuthenticated";
import DetailsUserController from "./controllers/users/detailsUserController";
import AddCategorysController from "./controllers/categorys/addCategoryController";
import ListCategoryController from "./controllers/categorys/listCategoryController";
import AddProductController from "./controllers/products/addProductsController";
import { UploadFile } from "./config/multer";
import ListProductsController from "./controllers/products/listProductsController";
import AddOrdersController from "./controllers/orders/addOrdersController";
import RemoveOrderController from "./controllers/orders/removeOrderController";
import AddItemController from "./controllers/items/addItemController";
import RemoveItemController from "./controllers/items/removeItemController";
import UpdateOrderController from "./controllers/orders/updateOrderController";
import ListOrdersController from "./controllers/orders/listOrdersController";
import DetailsOrderController from "./controllers/orders/detailsOrderController";
import FinishOrderController from "./controllers/orders/finishOrderController";

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

// Lista todos os produtos
router.get("/product", IsAuthenticated, new ListProductsController().handle);
//#endregion

//#region Rotas dos Pedidos
// Adiciona um novo pedido
router.post("/orders", IsAuthenticated, new AddOrdersController().handle);

// Remove um pedido
router.delete("/orders", IsAuthenticated, new RemoveOrderController().handle);

// Editar um pedido
router.put("/orders", IsAuthenticated, new UpdateOrderController().handle);

// Lista todos os pedidos
router.get("/orders", IsAuthenticated, new ListOrdersController().handle);

// Da detalhes sobre um pedido
router.get("/orders/details", IsAuthenticated, new DetailsOrderController().handle);

// Finaliza um pedido
router.put("/orders/finish", IsAuthenticated, new FinishOrderController().handle);
//#endregion

//#region Rotas dos Itens
// Adiciona um novo item
router.post("/items", IsAuthenticated, new AddItemController().handle);

// Remove um item
router.delete("/items", IsAuthenticated, new RemoveItemController().handle);
//#endregion
export default router;