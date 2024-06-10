import { ProductModel } from "../models/product.model.js";

export default class ProductManager {
  async getAll() {
    try {
      return await ProductModel.find({});
    } catch (err) {
      throw new Error(err);
    }
  }

  async create(product) {
    try {
      return await ProductModel.create(product);
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(id, newValue) {
    try {
      return await ProductModel.findByIdAndUpdate(id, newValue, { new: true });
    } catch (err) {
      throw new Error(err);
    }
  }

  async delete(id) {
    try {
      return await ProductModel.findByIdAndDelete(id);
    } catch (err) {
      throw new Error(err);
    }
  }

  async getById(id) {
    try {
      return await ProductModel.findById(id);
    } catch (err) {
      throw new Error(err);
    }
  }
}
