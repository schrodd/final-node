import { cartDaoContainer } from '../service.js'

export async function createCartSvc(cart) {
  let data
  try {
    data = await cartDaoContainer.create(cart)
    return data
  } catch (error) {
    console.log(error)
    return error
  }
}

export async function getCartListSvc() {
  let data
  try {
    data = await cartDaoContainer.find()
    return data
  } catch (error) {
    console.log(error)
    return error
  }
}

export async function getCartSvc(id) {
  let data
  try {
    data = await cartDaoContainer.findById(id)
    return data
  } catch (error) {
    console.log(error)
    return error
  }
}

export async function updateCartSvc(id, cart) {
  let data
  try {
    data = await cartDaoContainer.update(id, cart)
    return data
  } catch (error) {
    console.log(error)
    return error
  }
}

export async function deleteCartSvc(id) {
  let data
  try {
    data = await cartDaoContainer.delete(id)
    return data.deletedCount
  } catch (error) {
    console.log(error)
    return error
  }
}