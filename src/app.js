import express from "express";
import productsRouter from "./routes/productsRouter.js";
import cartsRouter from "./routes/cartsRouter.js";

//Levantar servidor
const app = express();
const port = 8080;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

app.listen(port, () => console.log("Listening on port " + port));
