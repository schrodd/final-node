import { productDaoContainer } from '../service.js'

export async function getProductListSvc(filters){
  let data
  try {
    data = await productDaoContainer.find(filters)
    return data
  } catch (error) {
    console.log(error)
    return error
  }
}

export async function getProductByIdSvc(id){
  let data
  try {
    data = await productDaoContainer.findById(id)
    return data
  } catch (error) {
    console.log(error)
    return error
  }
}

export async function createProductSvc(prod){
  let data
  try {
    data = await productDaoContainer.create(prod)
    return data
  } catch (error) {
    console.log(error)
    return error
  }
}

export async function updateProductSvc(id, prod){
  let data
  try {
    data = await productDaoContainer.update(id, prod)
    return data
  } catch (error) {
    console.log(error)
    return error
  }
}

export async function deleteProductSvc(id){
  let data
  try {
    data = await productDaoContainer.delete(id)
    return data.deletedCount
  } catch (error) {
    console.log(error)
    return error
  }
}