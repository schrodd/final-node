import { Router } from 'express'
import passport from 'passport'
import productRouter from './products/router.js'
import { redirIfLogged, passIfLogged } from './middlewares.js'
import { notLoggedInCtrl, loginFailedCtrl, loginSuccessCtrl, logoutCtrl, registerFailedCtrl } from '../controllers/misc/misc.ctrl.js'
// import userRouter from './users/router.js'

const mainRouter = new Router()
const ppLoginFailedOptions = { failureRedirect: '/login-failed', failureMessage: true }
const ppRegisterFailedOptions = { failureRedirect: '/register-failed', failureMessage: true }

mainRouter.use('/products', productRouter)
// mainRouter.use('/users', userRouter)
// mainRouter.use('/orders', orderRouter)
// mainRouter.use('/carts', cartRouter)

mainRouter.get('/', redirIfLogged, notLoggedInCtrl)
mainRouter.post('/login', passport.authenticate('login', ppLoginFailedOptions), loginSuccessCtrl)
mainRouter.post('/login-failed', loginFailedCtrl)
mainRouter.post('/register', passport.authenticate('signup', ppRegisterFailedOptions), loginSuccessCtrl)
mainRouter.post('/register-failed', registerFailedCtrl)
mainRouter.post('/logout', logoutCtrl)


export default mainRouter