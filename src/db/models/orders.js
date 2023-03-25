import mongoose from "mongoose";
import { productSchema } from "./products.js";

const orderCollection = "orders";

const orderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  products: [{ type: productSchema }],
  status: {
    type: String,
    default: 'generated'
  }
}, {timestamps: true});

const OrderModel = mongoose.model(orderCollection, orderSchema);

export default OrderModel;
