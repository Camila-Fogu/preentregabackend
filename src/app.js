import express from "express";
import productsRouter from "./routes/productsRouter.js";
import { __dirname } from "./utils.js";
import { initMongoDB } from "./daos/mongodb/connection.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import "dotenv/config";

//Server HTTP
const app = express();
const port = 8080;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.use("/api/products", productsRouter);

app.use(errorHandler);

initMongoDB();

//Levantar server HTTP
const httpServer = app.listen(port, () =>
  console.log("Listening on port " + port)
);
