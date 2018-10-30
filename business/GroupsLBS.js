const groupsDAO = require('../data/GroupsDAO')

exports.findGroups = async () => {
  return await groupsDAO.findGroups()
}

exports.getGroup = async groupId => {
  return await groupsDAO.getGroup(groupId)
}

exports.createGroup = async group => {
  return await groupsDAO.createGroup(group)
}
