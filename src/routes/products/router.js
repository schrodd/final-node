import { Router } from 'express'
import { getProductListCtrl, getProductByIdCtrl, createProductCtrl, getProductByCatCtrl, updateProductCtrl, deleteProductCtrl } from '../../controllers/products/products.ctrl.js'
import { passIfLogged } from '../middlewares.js'

const productRouter = new Router()
productRouter.use(passIfLogged)

// check callbacks !!!!!
// check admin status !!!!!

///// C R E A T E /////
productRouter.post('/', createProductCtrl)
///// R E A D /////
productRouter.get('/', getProductListCtrl)
productRouter.get('/:id', getProductByIdCtrl)
productRouter.get('/category/:category', getProductByCatCtrl)
///// U P D A T E /////
productRouter.put('/:id', updateProductCtrl)
///// D E L E T E /////
productRouter.delete('/:id', deleteProductCtrl)

export default productRouter