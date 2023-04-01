import mongoose from "mongoose";

const cartCollection = "carts";
const productSchema = new mongoose.Schema({
  prodId: {
    type: String,
    required: true
  },
  qty: {
    type: Number,
    required: true
  }
});
const cartSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  products: [{ type: productSchema }],
});

const CartModel = mongoose.model(cartCollection, cartSchema);

export default CartModel;
