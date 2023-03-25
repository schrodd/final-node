import { Router } from 'express'
import controllers from '../../controllers/index.js'

const userRouter = new Router()

// check callbacks !!!!!
// check admin status !!!!!

///// R E A D /////
userRouter.get('/', controllers.getcartListApiCtrl)
userRouter.get('/:id', controllers.getcartListApiCtrl)
///// U P D A T E /////
userRouter.put('/:id', controllers.getcartListApiCtrl)
///// D E L E T E /////
userRouter.delete('/:id', controllers.getcartListApiCtrl)

export default cartRouter