import MongoManager from '../managers/mongodb.js'

export class MessageDao extends MongoManager {
  constructor(model){
    super(model)
  }
  // specific methods for msg management
}