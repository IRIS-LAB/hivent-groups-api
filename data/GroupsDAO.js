const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId
const url = "mongodb://localhost:27018/"

exports.findGroups = async function() {
    let db = await MongoClient.connect(url)
    let dbo = db.db("Groups")
    let items = await dbo.collection('Groups').find().toArray()
    db.close()
    return items
}

exports.getGroup = async function(groupId) {
    let db = await MongoClient.connect(url)
    let dbo = db.db("Groups")
    let o_id = new ObjectId(groupId)
    let result = await dbo.collection('Groups').findOne({"_id" : o_id})
    db.close()
    return result
}

exports.createGroup = async function(group) {
    let db = await MongoClient.connect(url)
    let dbo = db.db("Groups")
    await dbo.collection('Groups').insertOne(group)
    db.close()
}