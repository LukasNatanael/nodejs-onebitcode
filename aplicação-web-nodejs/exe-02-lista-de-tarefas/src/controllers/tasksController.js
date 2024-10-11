const listsModel = require("../models/listsModel")
const tasksModel = require("../models/tasksModel")

const tasksController = {

    index: (req, res) => {
        const id = req.params.id
        const listName = listsModel.getById(id).title
        const tasks = tasksModel.getAll(id)

        res.render('tasks', { listName, tasks })
    },

    delete: (req, res) => {
        const taskId = req.params.id[0]
        const listName = `${req.params.id}`.match(/([A-Za-z])+/g).join().replaceAll(',', ' ')
        tasksModel.delete(listName, taskId)

        res.redirect(`/app/tasks/${parseInt(taskId) + 1}`)
    },
    newList: (req, res) => {
        res.send('Hello')
    }
    
}

module.exports = tasksController