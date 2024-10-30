const express = require('express') 
const AppController = require('./controllers/appController')
const routes  = express.Router()

const appController = new AppController()

routes.get('/', appController.index)
routes.get('/app/list-:id', appController.list)
routes.post('/app/list-:listID/task-:taskID-complete', appController.taskComplete)

module.exports = routes