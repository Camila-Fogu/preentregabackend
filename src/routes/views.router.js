import { Router } from "express";
const router = Router();

import * as controllers from "../controllers/product.controllers.js";

import { productValidator } from "../middlewares/productValidator.js";

router.get("/", controllers.getAllProducts);

router.get("/:pid", controllers.getProductById);

router.post("/", productValidator, controllers.createProduct);

router.put("/:pid", controllers.updateProduct);

router.delete("/:pid", controllers.deleteProduct);

export default router;
