// Replaced with JWT Middleware
/* export function passIfLogged(req, res, next) {
  if (req.user) {
    next()
  } else {
    res.json({error: `You need to be logged to execute this request. Please login using /login`})
  }
} */

export function redirIfLogged(req, res, next) {
  if (req.user){
    res.redirect('/products')
  } else {
    next()
  }
}