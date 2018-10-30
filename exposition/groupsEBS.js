const express = require('express')
const GroupsLBS = require('../business/GroupsLBS')
const groupsRouter = express.Router()

groupsRouter.get('/', async (req,res) => {
    res.json(await GroupsLBS.findGroups())
})

groupsRouter.get('/:groupId', async (req,res) => {
    res.json(await GroupsLBS.getGroup(req.params.groupId))
})

groupsRouter.post('/', async (req,res) => {
    await GroupsLBS.createGroup(req.body)
    res.json()
})

module.exports = groupsRouter