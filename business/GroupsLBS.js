import * as groupsDAO from '../data/GroupsDAO'

export const findGroups = async (name, status, type) => {
  return await groupsDAO.findGroups(name, status, type)
}

export const getGroup = async groupId => {
  return await groupsDAO.getGroup(groupId)
}

export const createGroup = async group => {
  if (!group.isValid) {
    throw new Error("Valeur obligatoire non renseigné" + group.name + " " + group.description + " " + group.status + " " + group.selectionmode + " " + group.type + " " + group.proposedDate )
  }
  return await groupsDAO.createGroup(group)
}

export const updateGroup = async group => {
  if (!group.isValid) {
    throw new Error("Valeur obligatoire non renseigné" + group.name + " " + group.description + " " + group.status + " " + group.selectionmode + " " + group.type + " " + group.proposedDate )
  }
  return await groupsDAO.updateGroup(group)
}
