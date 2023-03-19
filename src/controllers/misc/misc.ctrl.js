export function notLoggedInCtrl(req, res) {
  res.status(401).json({error: `You're not logged in. Send 'username' and 'password' in the body of a POST to /login.`})
}

export function loginFailedCtrl(req, res) {
  res.status(404).json({error: `Login failed. Check login data`})
}

export function loginSuccessCtrl(req, res) {
  res.status(200).json({success: `Logged in successfully. /products and other routes available now.`})
}