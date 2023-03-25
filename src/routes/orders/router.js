import { Router } from 'express'
import { passIfLogged } from '../middlewares.js'
import { createOrderCtrl, getOrderListCtrl, getOrderCtrl, updateOrderCtrl, deleteOrderCtrl } from '../../controllers/orders/orders.ctrl.js'

const orderRouter = new Router()

// check callbacks !!!!!
// check admin status !!!!!

///// C R E A T E /////
orderRouter.post('/:id', passIfLogged, createOrderCtrl)
///// R E A D /////
orderRouter.get('/', passIfLogged, getOrderListCtrl)
orderRouter.get('/:id', passIfLogged, getOrderCtrl)
///// U P D A T E /////
orderRouter.put('/:id', passIfLogged, updateOrderCtrl)
///// D E L E T E /////
orderRouter.delete('/:id', passIfLogged, deleteOrderCtrl)

export default orderRouter