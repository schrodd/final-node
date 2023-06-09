import { jwtLogin, jwtRegister } from "../../lib/jwt.js"

export function notLoggedInCtrl(req, res) {
  res.status(401).json({error: `You're not logged in. Send 'username' and 'password' in the body of a POST to /login.`})
}

export function loginFailedCtrl(req, res) {
  res.status(404).json({error: `Login failed.`, message: req.session.messages.at(-1)})
}

export function registerFailedCtrl(req, res) {
  res.status(404).json({error: `Register failed.`, message: req.session.messages.at(-1)})
}

export async function loginCtrl(req, res) {
  const result = await jwtLogin(req.body)
  res.status(200).json(result)
}

export async function registerCtrl(req, res) {
  const result = await jwtRegister(req.body)
  res.status(200).json(result)
}

export function logoutCtrl(req, res) {
  if (req.user != undefined) {
    req.session.destroy(e => e && console.log(e))
    res.status(200).json({success: `Logged out successfully.`})
  } else {
    res.status(200).json({success: `You were not logged in...`})
  }
}