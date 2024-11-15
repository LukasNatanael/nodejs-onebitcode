const express = require('express') 
const AppController = require('./controllers/appController')
const routes  = express.Router()

const appController = new AppController()

routes.get('/', appController.index)
routes.get('/app', appController.allLists)
routes.get('/app/list-:id', appController.showList)
routes.post('/app/new-list', appController.createList)
routes.post('/app/list-:listID/task-:taskID-complete', appController.taskComplete)
routes.post('/app/list-delete/:listID', appController.deleteList)

routes.post('/app/list-:listID/new-task', appController.createTask)
routes.post('/app/list-:listID/task-:taskID/delete', appController.deleteTask)

module.exports = routes