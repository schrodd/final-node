import { productDaoContainer } from '../service.js'

export async function getProductListSvc(req){
  let data
  try {
    data = req.params.id ? await productDaoContainer.find({_id: req.params.id}) : await productDaoContainer.find()
  } catch (error) {
    console.log(error)
  }
  return data
}