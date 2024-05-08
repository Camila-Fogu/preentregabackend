import { Router } from "express";
const router = Router();
import CartsManager from "../manager/CartsManager.js";
const cartsManager = new CartsManager("../src/db/carts.json");

//Endpoints
router.get("/", async (req, res) => {
  try {
    const carts = await cartsManager.getCarts();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newCart = await cartsManager.addCart();
    res.status(200).json(newCart);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

export default router;
