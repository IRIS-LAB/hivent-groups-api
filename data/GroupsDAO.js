import { MongoClient, ObjectId } from "mongodb";

const url = "mongodb://localhost:27018/";

const connect = async () => {
  let connection = await MongoClient.connect(
    url,
    { useNewUrlParser: true }
  );
  let db = connection.db("Groups");
  return db;
};

export const findGroups = async (name, status, type) => {
  let groupsDB = await connect();

  let findRequest = {};
  if (name !== undefined) {
    findRequest.name = { $regex: new RegExp(".*" + name + ".*", "i") };
  }
  if (status !== undefined) {
    findRequest.status = status;
  }
  if (type !== undefined) {
    findRequest.type = type;
  }
  /* if (userId !== undefined) {
    findRequest.name = name
  } */

  let groups = await groupsDB
    .collection("Groups")
    .find(findRequest)
    .toArray();
  // groupsDB.connection.close()
  return groups;
};

export const getGroup = async groupId => {
  let groupsDB = await connect();
  let oid = new ObjectId(groupId);
  let group = await groupsDB.collection("Groups").findOne({ _id: oid });
  return group;
};

export const createGroup = async group => {
  let groupsDB = await connect();
  let newGroup = await groupsDB.collection("Groups").insertOne(group);
  //groupsDB.connection.close()
  return newGroup.ops[0];
};

export const updateGroup = async group => {
  let groupsDB = await connect();
  console.log(group)
  let newGroup = await groupsDB.collection("Groups").updateOne(group);
  //groupsDB.connection.close()
  return newGroup.ops[0];
};
