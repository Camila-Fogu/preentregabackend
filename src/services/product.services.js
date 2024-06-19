import ProductDaoMongoDB from "../daos/mongodb/product.dao.js";
const productDao = new ProductDaoMongoDB();
/*
import { __dirname } from "../utils.js";
import ProductDaoFS from "../daos/filesystem/product.dao.js";
const productDao = new ProductDaoFS(
  `${__dirname}/daos/filesystem/products.json`
);
*/
export const getAll = async () => {
  try {
    return await productDao.getAll();
  } catch (err) {
    throw new Error(err);
  }
};

export const getById = async (id) => {
  try {
    return await productDao.getById(id);
  } catch (err) {
    throw new Error(err);
  }
};

export const create = async (obj) => {
  try {
    return await productDao.create(obj);
  } catch (err) {
    throw new Error(err);
  }
};

export const update = async (id, obj) => {
  try {
    return await productDao.update(id, obj);
  } catch (err) {
    throw new Error(err);
  }
};

export const remove = async (id) => {
  try {
    return await productDao.delete(id);
  } catch (err) {
    throw new Error(err);
  }
};
