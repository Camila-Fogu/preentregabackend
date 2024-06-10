import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  code: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  category: { type: String, required: true },
  status: { type: String, default: true },
});

export const ProductModel = model("products", ProductSchema);
