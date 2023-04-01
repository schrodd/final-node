export function notLoggedInCtrl(req, res) {
  res.status(401).json({error: `You're not logged in. Send 'username' and 'password' in the body of a POST to /login.`})
}

export function loginFailedCtrl(req, res) {
  res.status(404).json({error: `Login failed.`, message: req.session.messages.at(-1)})
}

export function registerFailedCtrl(req, res) {
  res.status(404).json({error: `Register failed.`, message: req.session.messages.at(-1)})
}

export function loginSuccessCtrl(req, res) {
  res.status(200).json({success: `Logged in successfully. /products and other routes available now.`})
}

export function logoutCtrl(req, res) {
  if (req.user != undefined) {
    req.session.destroy(e => e && console.log(e))
    res.status(200).json({success: `Logged out successfully.`})
  } else {
    res.status(200).json({success: `You were not logged in...`})
  }
}