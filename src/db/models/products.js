import mongoose from "mongoose";

const productCollection = "products";
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const ProductModel = mongoose.model(productCollection, productSchema);

export default ProductModel;
