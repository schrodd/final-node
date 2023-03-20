import { getProductListSvc, getProductByIdSvc, createProductSvc } from '../../service/products/products.svc.js'

export async function getProductListCtrl(req, res){
  res.status(200).json(await getProductListSvc())
}

export async function getProductByIdCtrl(req, res) {
  res.status(200).json(await getProductByIdSvc(req.params.id))
}

export async function getProductByCatCtrl(req, res) {
  res.status(200).json(await getProductListSvc({category: req.params.cat}))
}

export async function createProductCtrl(req, res) {
  res.status(200).json({status: "Product created successfully", newProduct: await createProductSvc(req.body)})
}

export async function updateProductCtrl(req, res) {
  return null
}

export async function deleteProductCtrl(req, res) {
  return null
}