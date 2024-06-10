import ProductManager from "../manager/ProductManager.js";
const productManager = new ProductManager();

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await productManager.getAll();
    res.json(products);
  } catch (err) {
    next(err);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const id = req.params.pid;
    const product = await productManager.getById(id);
    if (!product) {
      res.status(404).json({ msg: "Producto no encontrado" });
    } else res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const product = req.body;
    const newProduct = await productManager.create(product);

    if (!newProduct) {
      res.status(404).json({ msg: "Error al crear el producto" });
    } else res.status(200).json(newProduct);
  } catch (err) {
    next(err);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const id = req.params.pid;
    const change = req.body;
    const product = await productManager.update(id, change);
    if (!product) {
      res.status(404).json({ msg: "Error al actualizar el producto" });
    } else res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.pid;
    const product = await productManager.delete(id);
    if (!product) {
      res.status(404).json({ msg: "Error al eliminar el producto" });
    } else res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};
