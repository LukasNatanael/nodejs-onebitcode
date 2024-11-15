const { toDo } = require('../controllers/ListController')

class TaskController {
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

    taskComplete(req, res) {
        const { listID, taskID } = req.params
        
        const currentList = toDo.getListByID( listID )
        const tasks = currentList.tasks
        const taskToComplete = tasks.getTaskByID(taskID)

        taskToComplete.complete = taskToComplete.complete === true ? false: true

        toDo.checkCompleteList(listID)

        res.redirect(`/app/list-${listID}`)
    }
}

module.exports = TaskController