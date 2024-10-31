const express = require('express') 
const AppController = require('./controllers/appController')
const routes  = express.Router()

const appController = new AppController()

routes.get('/', appController.index)
routes.get('/app/list-:id', appController.showList)
routes.post('/app/list-:listID/task-:taskID-complete', appController.taskComplete)
routes.post('/app/list-delete/:id', appController.deleteList)

module.exports = routes