import MongoManager from '../managers/mongodb.js'

export class OrderDao extends MongoManager {
  constructor(model){
    super(model)
  }
  // specific methods for order management
}