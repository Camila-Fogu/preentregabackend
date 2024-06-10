import express from "express";
/*import productsRouter from "./routes/productsRouter.js";
import cartsRouter from "./routes/cartsRouter.js";*/
import handlebars from "express-handlebars";
import { __dirname } from "./utils.js";
import viewsRouter from "./routes/views.router.js";
//import inicio base en mongo atlas
import { initMongoDB } from "./db/databases.js";
//errorHandler
import { errorHandler } from "./middlewares/errorHandler.js";

//Server HTTP
const app = express();
const port = 8080;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
/*app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);*/

//handlebars
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.use("/", viewsRouter);

app.use(errorHandler);

initMongoDB();

//Levantar server HTTP
const httpServer = app.listen(port, () =>
  console.log("Listening on port " + port)
);
