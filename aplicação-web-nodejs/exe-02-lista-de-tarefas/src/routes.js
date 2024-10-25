const express = require('express') 
const AppController = require('./controllers/appController')
const routes  = express.Router()

const appController = new AppController()

routes.get('/', appController.index)

module.exports = routes