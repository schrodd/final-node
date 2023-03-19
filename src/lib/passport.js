import { Strategy as LocalStrategy } from "passport-local"
import bcrypt from "bcrypt"
import sendMail from "../lib/nodemailer/nodemailer.js"
import { userFormatter } from "../controllers/formatters.js"
import UserModel from "../db/models/users.js"

const saltRounds = 10 // bcrypt rounds

export const signupStrat = new LocalStrategy(
  { passReqToCallback: true }, // allows access to request from callback
  (req, username, password, done) => {
    const user = UserModel.findOne({ username })
    if (err) return done(err)
    if (user) return done(null, false)
    if (!user) {
      // if it doesnt exist, creates it
      bcrypt.hash(password, saltRounds, async function (err, hash) {
        err && console.log(err)
        try {
          const newUser = UserModel.create(userFormatter(username, hash, req.body))
          await sendMail.userCreated(newUser) // send notification to user via email
          return done(null, newUser) // returns new user
        } catch (error) {
          console.log(error)
        }
      })
    }
  }
)

export const loginStrat = new LocalStrategy(
  async (username, password, done) => {
    const user = await UserModel.findOne({ username })
    console.log(user)
    if (!user) {
      console.log("User not found with username " + username)
      return done(null, false, { message: "No se ha encontrado el usuario" })
    } else if (password != user.password) {
      //} else if (!bcrypt.compare(password, user.password)) {
      console.log("Invalid Password")
      return done(null, false, { message: "Contraseña incorrecta" })
    } else return done(null, user)
  }
)
