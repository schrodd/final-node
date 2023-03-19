import { Router } from 'express'
import controllers from '../../controllers/index.js'

const cartRouter = new Router()

// check callbacks !!!!!
// check admin status !!!!!

///// C R E A T E /////
cartRouter.post('/', controllers.getcartListApiCtrl)
///// R E A D /////
cartRouter.get('/', controllers.getcartListApiCtrl)
cartRouter.get('/:id', controllers.getcartListApiCtrl)
///// U P D A T E /////
cartRouter.put('/:id', controllers.getcartListApiCtrl)
///// D E L E T E /////
cartRouter.delete('/:id', controllers.getcartListApiCtrl)

export default cartRouter