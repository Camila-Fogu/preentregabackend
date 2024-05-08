import fs from "fs";
import { v4 as uuidv4 } from "uuid";

export default class CartsManager {
  constructor(path) {
    this.path = path;
  }

  async getCarts() {
    try {
      if (fs.existsSync(this.path)) {
        const carts = await fs.promises.readFile(this.path, "utf8");
        return JSON.parse(carts);
      } else return [];
    } catch (err) {
      console.log(err);
    }
  }

  async addCart() {
    try {
      const carts = await this.getCarts();
      const newCart = {
        id: uuidv4(),
        products: [],
      };
      carts.push(newCart);
      await fs.promises.writeFile(this.path, JSON.stringify(carts));
      return newCart;
    } catch (err) {
      console.log(err);
    }
  }
}
