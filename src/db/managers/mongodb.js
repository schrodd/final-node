function processMongoQuery(response) {
  const resUnparsed = JSON.stringify(response)
  return JSON.parse(resUnparsed)
}

class MongoManager {
  constructor (model) {
    this.model = model
  }
  find = async (filters) => {
    return processMongoQuery(await this.model.find(filters))
  }
  findOne = async (filters) => {
    return this.model.findOne(filters)
  }
  create = async (element) => {
    const doc = new this.model(element)
    return await doc.save()
  }
  update = async (id, element) => {
    return await this.model.updateOne({_id: id}, element)
  }
  delete = async (id) => {
    return await this.model.deleteOne({_id: id})
  }
}

export default MongoManager