import { Router } from 'express'
import { createCartCtrl, getCartListCtrl, getCartCtrl, updateCartCtrl, deleteCartCtrl } from '../../controllers/carts/carts.ctrl.js'
import { jwtMiddleware } from '../../lib/jwt.js'

const cartRouter = new Router()
cartRouter.use(jwtMiddleware)

///// C R E A T E /////
cartRouter.post('/', createCartCtrl)
///// R E A D /////
cartRouter.get('/', getCartListCtrl)
cartRouter.get('/:id', getCartCtrl)
///// U P D A T E /////
cartRouter.put('/:id', updateCartCtrl)
///// D E L E T E /////
cartRouter.delete('/:id', deleteCartCtrl)

export default cartRouter