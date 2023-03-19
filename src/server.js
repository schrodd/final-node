import express from 'express'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import MongoStore from 'connect-mongo'
import session from 'express-session'
import mainRouter from './routes/main.js'
import { PORT, MONGODB_URL } from './config/config.js'
import passport from 'passport'
import { loginStrat, signupStrat } from './lib/passport.js'
import UserModel from './db/models/users.js'

// init app
export const app = express()

app.listen(PORT, () => console.log('Server listening on port ' + PORT)) // start server

app.use(compression()) // compress all responses
app.use(express.json()) // allow JSON handling as objects
app.use(cookieParser()) // allow cookie handling
app.use(express.urlencoded({extended: true})) // allow URL handling as objects
app.use(express.static('./public')) // serve static files

// configure session (keep this order, first config session then init passport)
app.use(session({
    store: MongoStore.create({
        mongoUrl: MONGODB_URL,
        mongoOptions: {useNewUrlParser: true, useUnifiedTopology: true}
    }),
    secret: 'clavesecreta',
    resave: false,
    saveUninitialized: false,
    rolling: true, // allows restarting maxAge with each request
    cookie: { maxAge: 600000 } // 10 min
}))
app.use(passport.initialize()) // passport - express
app.use(passport.session()) // passport - session

// create req.user (serialization)
passport.serializeUser((user, done) => done(null, user._id))
passport.deserializeUser(async (id, done) => {
  const user = await UserModel.findById(id)
  done(null, user)
})

passport.use('login', loginStrat)
passport.use('signup', signupStrat)

// configure routes
app.use('/', mainRouter)
