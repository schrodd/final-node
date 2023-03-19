import MongoManager from '../managers/mongodb.js'

export class CartDao extends MongoManager {
  constructor(model){
    super(model)
  }
  // specific methods for cart management
}