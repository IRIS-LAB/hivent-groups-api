import * as groupsDAO from '../data/GroupsDAO';

import {checkGroupBE} from './ValidatorLBS'
import {GROUP_FORMAT_DATE} from '../objects/business/be/GroupBE'
import moment   from 'moment'

export const findGroups = async (name, status, type) => {
  return await groupsDAO.findGroups(name, status, type)
}

export const getGroup = async groupId => {
  return await groupsDAO.getGroup(groupId)
}

export const createGroup = async group => {
  console.log('GroupsLBS : ' + group )

  if (group.proposedDate == null) {
        group.proposedDate = moment().format(GROUP_FORMAT_DATE)
  }  

  checkGroupBE(group);

  return await groupsDAO.createGroup(group)
}

export const updateGroup = async group => {
  if (!group.isValid) {
    throw new Error("Valeur obligatoire non renseigné" + group.name + " " + group.description + " " + group.status + " " + group.selectionmode + " " + group.type + " " + group.proposedDate )
  }
  return await groupsDAO.updateGroup(group)
}
