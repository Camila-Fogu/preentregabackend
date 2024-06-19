import * as service from "../services/product.services.js";

export const getAll = async (req, res, next) => {
  try {
    const products = await service.getAll();
    res.json(products);
  } catch (err) {
    next(err);
  }
};

export const getById = async (req, res, next) => {
  try {
    const id = req.params.pid;
    const product = await service.getById(id);
    if (!product) {
      res.status(404).json({ msg: "Producto no encontrado" });
    } else res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

export const create = async (req, res, next) => {
  try {
    const product = req.body;
    const newProduct = await service.create(product);

    if (!newProduct) {
      res.status(404).json({ msg: "Error al crear el producto" });
    } else res.status(200).json(newProduct);
  } catch (err) {
    next(err);
  }
};

export const update = async (req, res, next) => {
  try {
    const id = req.params.pid;
    const change = req.body;
    const product = await service.update(id, change);
    if (!product) {
      res.status(404).json({ msg: "Error al actualizar el producto" });
    } else res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

export const remove = async (req, res, next) => {
  try {
    const id = req.params.pid;
    const product = await service.remove(id);
    if (!product) {
      res.status(404).json({ msg: "Error al eliminar el producto" });
    } else res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};
