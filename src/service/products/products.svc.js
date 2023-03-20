import { productDaoContainer } from '../service.js'

export async function getProductListSvc(filters){
  let data
  try {
    data = await productDaoContainer.find(filters)
  } catch (error) {
    console.log(error)
  }
  return data
}

export async function getProductByIdSvc(id){
  let data
  try {
    data = await productDaoContainer.findById(id)
  } catch (error) {
    console.log(error)
  }
  return data
}

export async function createProductSvc(prod){
  let data
  try {
    data = await productDaoContainer.create(prod)
  } catch (error) {
    console.log(error)
  }
  return data
}