import { createTransport } from 'nodemailer'
import { userCreatedTemplate, orderPlacedTemplate } from './templates.js'
import { NODEMAILER_EMAIL, NODEMAILER_PASSWORD } from '../../config/config.js'

const emailTransporter = createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
      user: NODEMAILER_EMAIL,
      pass: NODEMAILER_PASSWORD
  }
})

const sendMail = {
  async userCreated(user){
    try {
      await emailTransporter.sendMail(userCreatedTemplate(user))
    } catch (error) {
      console.log(error)
    }
  },
  async orderPlaced(user){
    try {
      await emailTransporter.sendMail(orderPlacedTemplate(user))
    } catch (error) {
      console.log(error)
    }
  }
}

export default sendMail