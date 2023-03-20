import { getProductListSvc, getProductByIdSvc, createProductSvc } from '../../service/products/products.svc.js'

export async function getProductListCtrl(req, res){
  // res.status(200).json(await getProductListSvc())
  const data = await getProductListSvc()
  if (data.length > 0) {
    res.status(200).json(data)
  } else {
    res.status(404).json({error: 'No products'})
  }
}

export async function getProductByIdCtrl(req, res) {
  // res.status(200).json(await getProductByIdSvc(req.params.id))
  const data = await getProductByIdSvc(req.params.id)
  if (data) {
    res.status(200).json(data)
  } else {
    res.status(404).json({error: 'Not found'})
  }
}

export async function getProductByCatCtrl(req, res) {
  //res.status(200).json(await getProductListSvc({category: req.params.cat}))
  const data = await getProductListSvc({category: req.params.cat})
  if (data.length > 0) {
    res.status(200).json(data)
  } else {
    res.status(404).json({error: 'No products'})
  }
}

export async function createProductCtrl(req, res) {
  //res.status(200).json({status: "Product created successfully", newProduct: await createProductSvc(req.body)})
  const data = await createProductSvc(req.body)
  if (data) {
    res.status(200).json({status: "Product created successfully", data})
  } else {
    res.status(400).json({error: 'Bad request', requiredProps: ['name', 'price', 'category']})
  }
}

export async function updateProductCtrl(req, res) {
  return null
}

export async function deleteProductCtrl(req, res) {
  return null
}