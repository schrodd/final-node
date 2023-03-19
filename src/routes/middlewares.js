export function passIfLogged(req, res, next) {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.json({error: `You need to be logged to execute this request. Please login using /login`})
  }
}

export function redirIfLogged(req, res, next) {
  if (req.isAuthenticated()){
    res.redirect('/products')
  } else {
    next()
  }
}