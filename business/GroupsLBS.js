const GroupsDAO = require('../data/GroupsDAO')

exports.findGroups = async function() {
    return await GroupsDAO.findGroups()
}

exports.getGroup = async function(groupId) {
    return await GroupsDAO.getGroup(groupId)
}

exports.createGroup = async function(group) {
    return await GroupsDAO.createGroup(group)
}