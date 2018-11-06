import express from 'express'
import * as groupsLBS from '../business/GroupsLBS'

export const  getRouter = () => {
  let groupsRouter = express.Router()

  groupsRouter.get('/', async (req, res) => {
    try {
      res.send(await groupsLBS.findGroups())
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
      res.send(await groupsLBS.createGroup(req.body))
    } catch (error) {
      console.log('An error occured', error)
      res.status(500).send('An error occured')
    }
  })

  return groupsRouter
}

