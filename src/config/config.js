import dotenv from 'dotenv'
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'

const {dev} = yargs(hideBin(process.argv)).argv
dotenv.config()

export let { 
  NODEMAILER_EMAIL, 
  NODEMAILER_PASSWORD,
  DATABASE,
  MONGODB_URL,
  PORT,
  SESSION_DURATION
} = process.env

if (dev) {
  PORT = process.env.PORT_TEST
  MONGODB_URL = process.env.MONGODB_URL_TEST
}