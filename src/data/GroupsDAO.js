import {db} from "./db"

export const findGroups = async (name, status, type) => {
 let groupsRef = db.collection("groups")
 groupsRef = !name ? groupsRef : groupsRef.where("name","==",name)
 groupsRef = !status ? groupsRef : groupsRef.where("status","==",status)
 groupsRef = !type ? groupsRef : groupsRef.where("type","==",type)
 
 let groups = await groupsRef.get()
 let result = new Array()
 groups.forEach(doc => {
   result.push(doc.data())
  })
  return result
};

export const getGroup = async groupId => {
  let doc = db.collection("groups").doc(groupId)
  let res = await doc.get()
  // Return data
  return res.data()
};

export const createGroup = async group => {
  let doc = db.collection("groups").doc()
  let groupToCreate = JSON.parse(JSON.stringify(group))
  groupToCreate.id = doc.id
  let res = await doc.set(groupToCreate)
  return doc.id
};

export const updateGroup = async group => {
  let doc = db.collection("groups").doc(group.id)
  let groupToUpdate = JSON.parse(JSON.stringify(group))
  await doc.set(groupToUpdate)
};
