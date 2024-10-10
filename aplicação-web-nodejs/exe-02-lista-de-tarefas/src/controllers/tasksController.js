const listsModel = require("../models/listsModel")
const tasksModel = require("../models/tasksModel")

const tasksController = {

    index: (req, res) => {
        const id = req.params.id
        const listName = listsModel.getById(id).title
        const tasks = tasksModel.getAll(id)

        res.render('tasks', { listName, tasks })
    }
}

module.exports = tasksController