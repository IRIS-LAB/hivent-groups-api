import express from 'express'
import * as groupsLBS from '../business/GroupsLBS'
import * as mappers from './mappers/Mappers'

import * as winston from '../../config/winston'
import { debug } from 'util'
import {
  TechnicalException,
  BusinessException,
  EntityNotFoundBusinessException,
  ErrorDO
} from '@ugieiris/iris-common'

const logger = winston.setLogger()

const handleException = (error, res) => {
  console.log(error)
  if (error instanceof EntityNotFoundBusinessException) {
    res.status(404).send(error)
  } else if (error instanceof BusinessException) {
    res.status(400).send(error)
  } else if (error instanceof TechnicalException) {
    res.status(500).send(error)
  } else {
    res.status(500).send(new ErrorDO('', '500', 'A technical error occured'))
  }
}

export const getRouter = () => {
  let groupsRouter = express.Router()

  groupsRouter.get('/', async (req, res) => {
    try {
      res.send(
        await groupsLBS.findGroups(
          req.query.name,
          req.query.status,
          req.query.type
        )
      )
    } catch (error) {
      handleException(error, res)
    }
  })

  groupsRouter.get('/:groupId', async (req, res) => {
    try {
      res.send(await groupsLBS.getGroup(req.params.groupId))
    } catch (error) {
      handleException(error, res)
    }
  })

  groupsRouter.post('/', async (req, res) => {
    try {
      let groupBE = mappers.jsonToGroupBE(req.body)
      logger.debug(groupBE)
      logger.info('POST Request received over /: ' + JSON.stringify(req.body))
      res.send(await groupsLBS.createGroup(groupBE))
    } catch (error) {
      handleException(error, res)
    }
  })
  groupsRouter.put('/:groupId', async (req, res) => {
    try {
      let groupBE = mappers.jsonToGroupBE(req.body)
      logger.debug(groupBE)
      logger.info('POST Request received over /: ' + JSON.stringify(req.body))
      res.send(await groupsLBS.updateGroup(req.params.groupId, groupBE))
    } catch (error) {
      handleException(error, res)
    }
  })
  return groupsRouter
}
