import * as groupsDAO from '../data/GroupsDAO'

export const findGroups = async () => {
  return await groupsDAO.findGroups()
}

export const getGroup = async groupId => {
  return await groupsDAO.getGroup(groupId)
}

export const createGroup = async group => {
  return await groupsDAO.createGroup(group)
}
