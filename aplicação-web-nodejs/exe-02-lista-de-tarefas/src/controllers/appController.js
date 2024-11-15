const { ToDoList } = require('../models/ListModel')
const { TaskList } = require('../models/TaskModel')

const toDo = new ToDoList()
class AppController {
    index(req, res) {
        const allLists = toDo.getAllLists()
        res.render('index', { list: allLists, tasks: toDo })
    }

    showList(req, res) {
        const id = req.params.id
        const currentList = toDo.getListByID(id)

        res.render('list', { list: currentList })
    }

    createList(req, res) {
        const { listname } = req.body
        if (listname) {
            toDo.newList( new TaskList(listname))
        }

        res.redirect('/')
    }

    deleteList(req, res) {
        const { listID } = req.params
        toDo.deleteList(listID)

        res.redirect('/')
    }

    taskComplete(req, res) {
        const { listID, taskID } = req.params
        
        const currentList = toDo.getListByID( listID )
        const tasks = currentList.tasks
        const taskToComplete = tasks.getTaskByID(taskID)

        taskToComplete.complete = taskToComplete.complete === true ? false: true

        toDo.checkCompleteList(listID)

        res.redirect(`/app/list-${listID}`)
    }

    createTask(req, res) {
        const { taskname } = req.body
        const { listID } = req.params

        const currentList = toDo.getListByID( listID )
        const tasks = currentList.tasks

        if (taskname) {
            tasks.newTask(taskname)
        }

        res.redirect(`/app/list-${listID}`)

    }

    deleteTask(req, res) {
        const { listID, taskID } = req.params
        
        const currentList = toDo.getListByID( listID )
        const tasks = currentList.tasks

        tasks.deleteTask(taskID)

        res.redirect(`/app/list-${listID}`)
    }
}

module.exports = AppController