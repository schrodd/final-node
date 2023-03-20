import mongoose from "mongoose";

const productCollection = "products";
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    isRequired: true,
  },
  price: {
    type: Number,
    isRequired: true,
  },
  category: {
    type: String,
    isRequired: true,
  },
});

const ProductModel = mongoose.model(productCollection, productSchema);

export default ProductModel;
