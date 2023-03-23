import { getProductListSvc, getProductByIdSvc, createProductSvc, updateProductSvc, deleteProductSvc } from '../../service/products/products.svc.js'

export async function getProductListCtrl(req, res){
  const data = await getProductListSvc()
  if (data.length > 0) {
    res.status(200).json(data)
  } else {
    res.status(404).json({error: 'No products'})
  }
}

export async function getProductByIdCtrl(req, res) {
  if (req.params.id.length != 24) {
    res.status(404).json({error: 'Not a valid ID number'})
  } else {
    const data = await getProductByIdSvc(req.params.id)
    if (data) {
      res.status(200).json(data)
    } else {
      res.status(404).json({error: `Product with ID ${req.params.id} was not found.`})
    }
  }
}

export async function getProductByCatCtrl(req, res) {
  const data = await getProductListSvc({category: req.params.cat})
  if (data.length > 0) {
    res.status(200).json(data)
  } else {
    res.status(404).json({error: 'No products'})
  }
}

export async function createProductCtrl(req, res) {
  const data = await createProductSvc(req.body)
  if (data) {
    res.status(200).json({status: "Product created successfully", data})
  } else {
    res.status(400).json({error: 'Bad request', requiredProps: ['name', 'price', 'category']})
  }
}

export async function updateProductCtrl(req, res) {
  const data = await updateProductSvc(req.params.id, req.body)
  if (data) {
    res.status(200).json({status: "Product edited successfully", data})
  } else {
    res.status(400).json({error: 'Bad request', requiredProps: ['name', 'price', 'category']})
  }
}

export async function deleteProductCtrl(req, res) {
  const data = await deleteProductSvc(req.params.id)
  if (data == 1) {
    res.status(200).json({status: "Product deleted successfully"})
  } else {
    res.status(400).json({error: 'ID doesnt match any product'})
  }
}