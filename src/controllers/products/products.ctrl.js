import { getProductListSvc } from '../../service/products/products.svc.js'

export async function getProductListCtrl(req, res){
  res.status(200).json(await getProductListSvc(req))
}

export function getProductByIdCtrl(req, res) {
  return null
}

export function getProductByCatCtrl(req, res) {
  return null
}

export function createProductCtrl(req, res) {
  return null
}

export function updateProductCtrl(req, res) {
  return null
}

export function deleteProductCtrl(req, res) {
  return null
}