import * as groupsDAO from '../data/GroupsDAO'

import { checkGroupBE } from './ValidatorLBS'
import { GROUP_FORMAT_DATE } from '../objects/business/be/GroupBE'
import moment from 'moment'
import { EntityNotFoundBusinessException, ErrorDO } from '@ugieiris/iris-common'

export const findGroups = async (name, status, type) => {
  return await groupsDAO.findGroups(name, status, type)
}

export const getGroup = async groupId => {
  let group = await groupsDAO.getGroup(groupId)
  if (!group) {
    throw new EntityNotFoundBusinessException(
      new ErrorDO('id', 'group.id.notFound', `Group (id: ${groupId}) not found`)
    )
  }
  return group
}

export const createGroup = async group => {
  if (group.proposedDate == null) {
    group.proposedDate = moment().format(GROUP_FORMAT_DATE)
  }

  checkGroupBE(group)

  let id = await groupsDAO.createGroup(group)
  return await getGroup(id)
}

export const updateGroup = async (id, group) => {
  group.id = id
  checkGroupBE(group)
  await groupsDAO.updateGroup(group)
}
