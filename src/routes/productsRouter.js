import { Router } from "express";
const router = Router();

import * as controllers from "../controllers/product.controllers.js";

import { productValidator } from "../middlewares/productValidator.js";

router.get("/", controllers.getAll);

router.get("/:pid", controllers.getById);

router.post("/", productValidator, controllers.create);

router.put("/:pid", controllers.update);

router.delete("/:pid", controllers.remove);

export default router;
