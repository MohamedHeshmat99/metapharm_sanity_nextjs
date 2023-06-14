import { model, Schema, models } from "mongoose";

const ProductsSchema = new Schema({
  name: String,
  price: {
    type: Number,
    min: 0,
  },
  category: String,
  picture: String,
});

const Product = models?.Product || model("Product", ProductsSchema);

export default Product;