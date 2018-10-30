const express = require('express')
const bodyParser = require('body-parser')
const groupsEBS = require('./exposition/GroupsEBS')

const app = express()
const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

// Pour récupérer body des requêtes
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/groups', groupsEBS.getRouter())
