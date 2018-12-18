import express from 'express'
import * as groupsLBS from '../business/GroupsLBS'
import * as mappers from './mappers/Mappers'

import * as winston from '../config/winston' 
import { debug } from 'util'

const logger = winston.setLogger()

export const  getRouter = () => {
  let groupsRouter = express.Router()

  groupsRouter.get('/', async (req, res) => {
    try {
      res.send(await groupsLBS.findGroups(req.query.name, req.query.status, req.query.type))
    } catch (error) {
      console.log('An error occured', error)
      res.status(500).send('An error occured')
    }
  })
 
  groupsRouter.get('/:groupId', async (req, res) => {
    try {
      res.send(await groupsLBS.getGroup(req.params.groupId))
    } catch (error) {
      console.log('An error occured', error)
      res.status(500).send('An error occured')
    }
  })

  groupsRouter.post('/', async (req, res) => {
    try {
      //res.send(await groupsLBS.createGroup(req.body))
      let groupBE = mappers.jsonToGroupBE(req.body)
       logger.debug(groupBE)
			logger.info('POST Request received over /: ' + JSON.stringify(req.body))
      res.send(await groupsLBS.createGroup(groupBE))   
    } catch (error) {
      console.log('An error occured', error)
      res.status(500).send('An error occured')
    }
  })
  groupsRouter.put('/', async (req, res) => {
    try {
      //res.send(await groupsLBS.createGroup(req.body))
      let groupBE = mappers.jsonToGroupBE(req.body)
       logger.debug(groupBE)
			logger.info('POST Request received over /: ' + JSON.stringify(req.body))
      res.send(await groupsLBS.updateGroup(groupBE))   
    } catch (error) {
      console.log('An error occured', error)
      res.status(500).send('An error occured')
    }
  })
  return groupsRouter
}

