import express from 'express'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import mainRouter from './routes/main.js'
import { PORT } from './config/config.js'

// init app
export const app = express()

app.use(compression()) // compress all responses
app.use(express.json()) // allow JSON handling as objects
app.use(cookieParser()) // allow cookie handling
app.use(express.urlencoded({extended: true})) // allow URL handling as objects
app.use(express.static('./public')) // serve static files
app.use('/', mainRouter) // configure routes

app.listen(PORT, () => console.log('Server listening on port ' + PORT)) // start server
