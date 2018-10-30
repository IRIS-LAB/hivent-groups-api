const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId
const url = 'mongodb://localhost:27018/'

connect = async () => {
  let connection = await MongoClient.connect(
    url,
    { useNewUrlParser: true }
  )
  let db = connection.db('Groups')
  return { connection, db }
}

exports.findGroups = async () => {
  let groupsDB = await connect()
  let groups = await groupsDB.db
    .collection('Groups')
    .find()
    .toArray()
  groupsDB.connection.close()
  return groups
}

exports.getGroup = async groupId => {
  let groupsDB = await connect()
  let oid = new ObjectId(groupId)
  let group = await groupsDB.db.collection('Groups').findOne({ _id: oid })
  groupsDB.connection.close()
  return group
}

exports.createGroup = async group => {
  let groupsDB = await connect()
  let newGroup = await groupsDB.db.collection('Groups').insertOne(group)
  groupsDB.connection.close()
  return newGroup.ops[0]
}
