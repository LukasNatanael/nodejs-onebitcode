const express = require('express') 
const { ListController } = require('./controllers/ListController')
const TaskController = require('./controllers/TaskController')
const routes  = express.Router()

const listController = new ListController()
const taskController = new TaskController()

routes.get('/', listController.index)
routes.get('/app', listController.allLists)
routes.get('/app/list-:id', listController.showList)
routes.post('/app/new-list', listController.createList)
routes.post('/app/list-delete/:listID', listController.deleteList)

routes.post('/app/list-:listID/task-:taskID-complete', taskController.taskComplete)
routes.post('/app/list-:listID/new-task', taskController.createTask)
routes.post('/app/list-:listID/task-:taskID/delete', taskController.deleteTask)

module.exports = routes