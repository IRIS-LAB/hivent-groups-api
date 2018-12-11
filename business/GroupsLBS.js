import * as groupsDAO from '../data/GroupsDAO'

export const findGroups = async () => {
  return await groupsDAO.findGroups()
}

export const getGroup = async groupId => {
  return await groupsDAO.getGroup(groupId)
}

export const createGroup = async group => {
  if (!group.isValid) {
    throw new Error("Valeur obligatoire non renseigné")
  }
  return await groupsDAO.createGroup(group)
}
