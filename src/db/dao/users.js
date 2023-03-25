import MongoManager from '../managers/mongodb.js'

export class UserDao extends MongoManager {
  constructor(model){
    super(model)
    this.key = 'clavesecreta'
  }
  // specific methods for user management
}