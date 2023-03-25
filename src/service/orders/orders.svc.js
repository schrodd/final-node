import { cartDaoContainer, orderDaoContainer, productDaoContainer } from '../service.js'
import sendMail from '../../lib/nodemailer/nodemailer.js'

export async function createOrderSvc(user, cartId) {
  try {
    const cart = await cartDaoContainer.findById(cartId)
    if (!cart) return {error: `cart ID ${cartId} doesnt exist`}
    const products = await productDaoContainer.find({_id: cart.products.map(e => e.prodId)})
    const order = {
      userId: user._id.toString(), 
      userEmail: user.email, 
      products
    }
    const data = await orderDaoContainer.create(order)
    sendMail.orderPlaced(user)
    await cartDaoContainer.delete(cart._id.toString())
    return data
  } catch (error) {
    console.log(error)
    return error
  }
}

export async function getOrderListSvc() {
  let data
  try {
    data = await orderDaoContainer.find()
    return data
  } catch (error) {
    console.log(error)
    return error
  }
}

export async function getOrderSvc(id) {
  let data
  try {
    data = await orderDaoContainer.findById(id)
    return data
  } catch (error) {
    console.log(error)
    return error
  }
}

export async function updateOrderSvc(id, order) {
  let data
  try {
    data = await orderDaoContainer.update(id, order)
    return data
  } catch (error) {
    console.log(error)
    return error
  }
}

export async function deleteOrderSvc(id) {
  let data
  try {
    data = await orderDaoContainer.delete(id)
    return data.deletedCount
  } catch (error) {
    console.log(error)
    return error
  }
}