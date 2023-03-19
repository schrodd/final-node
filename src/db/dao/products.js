import MongoManager from '../managers/mongodb.js'

export class ProductDao extends MongoManager {
  constructor(model){
    super(model)
  }
  // specific methods for product management
}