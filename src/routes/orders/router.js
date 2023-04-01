import { Router } from 'express'
import { createOrderCtrl, getOrderListCtrl, getOrderCtrl, updateOrderCtrl, deleteOrderCtrl } from '../../controllers/orders/orders.ctrl.js'
import { jwtMiddleware } from '../../lib/jwt.js'

const orderRouter = new Router()
orderRouter.use(jwtMiddleware)

///// C R E A T E /////
orderRouter.post('/:id', createOrderCtrl)
///// R E A D /////
orderRouter.get('/', getOrderListCtrl)
orderRouter.get('/:id', getOrderCtrl)
///// U P D A T E /////
orderRouter.put('/:id', updateOrderCtrl)
///// D E L E T E /////
orderRouter.delete('/:id', deleteOrderCtrl)

export default orderRouter