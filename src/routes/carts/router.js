import { Router } from 'express'
import { passIfLogged } from '../middlewares.js'
import { createCartCtrl, getCartListCtrl, getCartCtrl, updateCartCtrl, deleteCartCtrl } from '../../controllers/carts/carts.ctrl.js'

const cartRouter = new Router()

// check callbacks !!!!!
// check admin status !!!!!

///// C R E A T E /////
cartRouter.post('/', passIfLogged, createCartCtrl)
///// R E A D /////
cartRouter.get('/', passIfLogged, getCartListCtrl)
cartRouter.get('/:id', passIfLogged, getCartCtrl)
///// U P D A T E /////
cartRouter.put('/:id', passIfLogged, updateCartCtrl)
///// D E L E T E /////
cartRouter.delete('/:id', passIfLogged, deleteCartCtrl)

export default cartRouter