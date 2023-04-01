import jwt from 'jsonwebtoken'
import UserModel from '../db/models/users.js'
import bcrypt from "bcrypt"
import sendMail from './nodemailer/nodemailer.js'
import { userFormatterJwt } from '../controllers/formatters.js'
import { SESSION_DURATION } from '../config/config.js'

const PRIVATE_KEY = 'llaveprivada' // JWT Private key
const saltRounds = 10; // Bcrypt rounds

console.log(`Session timeout set to ${Number(SESSION_DURATION)/1000} seconds (timer restarts with each request)`)

export function generateToken(user){
  return jwt.sign({data: user}, PRIVATE_KEY, {expiresIn: Number(SESSION_DURATION)/1000})
}

// Registro
// 1. Se verifica si existe o no el usuario
// 2. Se genera un token que llama a la funcion generateToken y le pasa el usuario como parametro (registro+login)
export async function jwtRegister(reqBody){ // Receives full user data
  try {
    const user = await UserModel.findOne({username: reqBody.username})
    if (user){
      return {error: 'Username already exists, pick another'}
    }
    else {
      let newUser, jwtToken
      bcrypt.hash(reqBody.password, saltRounds, async function (err, hash) {
        err && console.log(err)
        try {
          newUser = await UserModel.create(userFormatterJwt(reqBody, hash))
          jwtToken = generateToken(newUser)
          await sendMail.userCreated(newUser) // send notification to user via email
        } catch (error) {
          console.log(error)
        }
      })
      return {success: 'User has been created', newUser, jwtToken}
    }
  } catch (error) {
    console.log(error)
    return {error: 'Error creating user'}
  }
}

// Login
// 1. Busca el usuario en la BDD, si lo encuentra, verifica la contraseña
// 2. Si coinciden las contraseñas se genera y envia el token
export async function jwtLogin(reqBody){ // Receives username and password only
  try {
    const user = await UserModel.findOne({username: reqBody.username})
    if (user){
      let jwtToken = generateToken(user)
      if (await bcrypt.compare(reqBody.password, user.password)){
        return {success: 'Login successful', jwtToken}
      } else {
        return {error: 'Password incorrect. Try again'}
      }
    } else {
      return {error: 'User does not exist. Try again or register'}
    }
  } catch (error) {
    console.log(error)
    return {error: 'Error logging in'}
  }
}

// Middleware
// 1. Se verifica la existencia de un token en el encabezado de la peticion
// 2. Se usa jwt.verify para obtener los datos del usuario
// 3. Se guardan en req.user
export async function jwtMiddleware(req, res, next){
  const authHeader = req.headers.authorization
  if (!authHeader) return res.status(401).json({error: 'Not authenticated. Please login or register'})
  const token = authHeader.split(' ')[1]
  jwt.verify(token, PRIVATE_KEY, (err, decoded) => {
    if (err) return res.status(403).json({error: 'Not authorized'})
    req.user = decoded.data
    next()
  })
}