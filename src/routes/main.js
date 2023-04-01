import { Router } from 'express'
import productRouter from './products/router.js'
import cartRouter from './carts/router.js'
import orderRouter from './orders/router.js'
import { redirIfLogged } from './middlewares.js'
import { jwtMiddleware } from '../lib/jwt.js'
import { notLoggedInCtrl, loginFailedCtrl, loginCtrl, registerCtrl, logoutCtrl, registerFailedCtrl } from '../controllers/misc/misc.ctrl.js'

const mainRouter = new Router()

mainRouter.use('/products', productRouter)
mainRouter.use('/carts', cartRouter)
mainRouter.use('/orders', orderRouter)

mainRouter.get('/', jwtMiddleware, redirIfLogged, notLoggedInCtrl)
mainRouter.post('/login', loginCtrl)
mainRouter.post('/login-failed', loginFailedCtrl)
mainRouter.post('/register', registerCtrl)
mainRouter.post('/register-failed', registerFailedCtrl)
mainRouter.post('/logout', logoutCtrl)


export default mainRouter