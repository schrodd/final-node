import dotenv from 'dotenv'
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'

const args = yargs(hideBin(process.argv)).argv
dotenv.config()

export const { 
  NODEMAILER_EMAIL, 
  NODEMAILER_PASSWORD,
  DATABASE,
  MONGODB_URL,
  PORT,
  SESSION_DURATION
} = process.env