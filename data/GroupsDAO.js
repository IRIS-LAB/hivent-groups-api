import {MongoClient, ObjectId} from 'mongodb'

const url = 'mongodb://localhost:27018/'

const connect = async () => {
  let connection = await MongoClient.connect(
    url,
    { useNewUrlParser: true }
  )
  let db = connection.db('Groups')
  return db 
}

export const findGroups = async () => {
  let groupsDB = await connect()
  let groups = await groupsDB.collection('Groups').find().toArray()
  // groupsDB.connection.close()
  return groups
}

export const getGroup = async groupId => {
  let groupsDB = await connect()
  let oid = new ObjectId(groupId)
  let group = await groupsDB.collection('Groups').findOne({ _id: oid })
  //groupsDB.connection.close()
  return group
}

export const createGroup = async group => {
  let groupsDB = await connect()
  let newGroup = await groupsDB.collection('Groups').insertOne(group)
  //groupsDB.connection.close()
  return newGroup.ops[0]
}
