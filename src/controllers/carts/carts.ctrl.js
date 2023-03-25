import { createCartSvc, getCartListSvc, getCartSvc, updateCartSvc, deleteCartSvc } from '../../service/carts/carts.svc.js'

export async function createCartCtrl(req, res) {
  const userId = req.user._id.toString()
  const data = await createCartSvc({userId, ...req.body})
  if (data) {
    res.status(200).json({status: "Cart created successfully", data})
  } else {
    res.status(400).json({error: 'Bad request'})
  }
}

export async function getCartListCtrl(req, res) {
  const data = await getCartListSvc()
  if (data) {
    res.status(200).json(data)
  } else {
    res.status(400).json({error: 'Bad request'})
  }
}

export async function getCartCtrl(req, res) {
  const data = await getCartSvc(req.params.id)
  if (data) {
    res.status(200).json(data)
  } else {
    res.status(400).json({error: 'Bad request'})
  }
}

export async function updateCartCtrl(req, res) {
  const data = await updateCartSvc(req.params.id, req.body)
  if (data) {
    res.status(200).json({status: "Cart edited successfully", data})
  } else {
    res.status(400).json({error: 'Bad request'})
  }
}

export async function deleteCartCtrl(req, res) {
  const data = await deleteCartSvc(req.params.id)
  if (data == 1) {
    res.status(200).json({status: "Cart deleted successfully"})
  } else {
    res.status(400).json({error: 'ID doesnt match any product'})
  }
}