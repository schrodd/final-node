// Factory
import ProductModel from "./models/products.js"
import CartModel from "./models/carts.js"
import OrderModel from "./models/orders.js"
import ClientMongo from "./clients/mongodb.js"

export async function createFactory(DB) {
  let productDaoContainer
  let cartDaoContainer
  let orderDaoContainer
  switch (DB) {
    case "MONGODB":
      const { ProductDao } = await import("./dao/products.js")
      const { CartDao } = await import("./dao/carts.js")
      const { OrderDao } = await import("./dao/orders.js")
      const client = new ClientMongo();
      await client.connect();
      productDaoContainer = new ProductDao(ProductModel)
      cartDaoContainer = new CartDao(CartModel)
      orderDaoContainer = new OrderDao(OrderModel)
      break;
    default: break;
  }
  return { productDaoContainer, cartDaoContainer, orderDaoContainer }
}
