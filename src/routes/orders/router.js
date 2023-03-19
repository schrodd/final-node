import { Router } from 'express'
import controllers from '../../controllers/index.js'

const orderRouter = new Router()

// check callbacks !!!!!
// check admin status !!!!!

///// C R E A T E /////
orderRouter.post('/', controllers.getorderListApiCtrl)
///// R E A D /////
orderRouter.get('/', controllers.getorderListApiCtrl)
orderRouter.get('/:id', controllers.getorderListApiCtrl)
///// U P D A T E /////
orderRouter.put('/:id', controllers.getorderListApiCtrl)
///// D E L E T E /////
orderRouter.delete('/:id', controllers.getorderListApiCtrl)

export default orderRouter