import { Router } from 'express'
import passport from 'passport'
import productRouter from './products/router.js'
import cartRouter from './carts/router.js'
import orderRouter from './orders/router.js'
import { redirIfLogged } from './middlewares.js'
import { notLoggedInCtrl, loginFailedCtrl, loginSuccessCtrl, logoutCtrl, registerFailedCtrl } from '../controllers/misc/misc.ctrl.js'

const mainRouter = new Router()
const ppLoginFailedOptions = { failureRedirect: '/login-failed', failureMessage: true }
const ppRegisterFailedOptions = { failureRedirect: '/register-failed', failureMessage: true }

mainRouter.use('/products', productRouter)
mainRouter.use('/carts', cartRouter)
mainRouter.use('/orders', orderRouter)

mainRouter.get('/', redirIfLogged, notLoggedInCtrl)
mainRouter.post('/login', passport.authenticate('login', ppLoginFailedOptions), loginSuccessCtrl)
mainRouter.post('/login-failed', loginFailedCtrl)
mainRouter.post('/register', passport.authenticate('signup', ppRegisterFailedOptions), loginSuccessCtrl)
mainRouter.post('/register-failed', registerFailedCtrl)
mainRouter.post('/logout', logoutCtrl)


export default mainRouter