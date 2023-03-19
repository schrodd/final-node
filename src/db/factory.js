// Factory
import ProductModel from "./models/products.js"
// import UserModel from './models/userModel.js'
// import OrderModel from './models/orderModel.js'
import ClientMongo from "./clients/mongodb.js"

export async function createFactory(DB) {
  let productDaoContainer
  // let userDaoContainer
  // let orderDaoContainer
  switch (DB) {
    case "MONGODB":
      const { ProductDao } = await import("./dao/products.js")
      // const { UserDao } = await import("./dao/userDao.js")
      // const { OrderDao } = await import("./dao/orderDao.js")
      const client = new ClientMongo();
      await client.connect();
      productDaoContainer = new ProductDao(ProductModel)
      // userDaoContainer = new UserDao(UserModel)
      // orderDaoContainer = new OrderDao(OrderModel)
      break;
    default: break;
  }
  // return { userDaoContainer, productDaoContainer, orderDaoContainer }
  return { productDaoContainer }
}
