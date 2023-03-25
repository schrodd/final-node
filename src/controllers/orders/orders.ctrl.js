import { createOrderSvc, getOrderListSvc, getOrderSvc, updateOrderSvc, deleteOrderSvc } from '../../service/orders/orders.svc.js'

export async function createOrderCtrl(req, res) {
  const data = await createOrderSvc(req.user, req.params.id)
  if (!data.error) {
    res.status(200).json({status: "Order created successfully", data})
  } else {
    res.status(400).json(data)
  }
}

export async function getOrderListCtrl(req, res) {
  const data = await getOrderListSvc()
  if (data) {
    res.status(200).json(data)
  } else {
    res.status(400).json({error: 'Bad request'})
  }
}

export async function getOrderCtrl(req, res) {
  const data = await getOrderSvc(req.params.id)
  if (data) {
    res.status(200).json(data)
  } else {
    res.status(400).json({error: 'Bad request'})
  }
}

export async function updateOrderCtrl(req, res) {
  const data = await updateOrderSvc(req.params.id, req.body)
  if (data) {
    res.status(200).json({status: "Order edited successfully", data})
  } else {
    res.status(400).json({error: 'Bad request'})
  }
}

export async function deleteOrderCtrl(req, res) {
  const data = await deleteOrderSvc(req.params.id)
  if (data == 1) {
    res.status(200).json({status: "Order deleted successfully"})
  } else {
    res.status(400).json({error: 'ID doesnt match any product'})
  }
}