import mongoose from "mongoose";
import { MONGODB_URL } from '../../config/config.js'

export default class ClientMongo {
  constructor() {
    this.client = mongoose;
  }
  async connect() {
    try {
      this.client.set("strictQuery", true);
      await this.client.connect(
        MONGODB_URL,
        { useNewUrlParser: true, useUnifiedTopology: true }
      )
    } catch (error) {
      console.log(error)
    }
  }
}
