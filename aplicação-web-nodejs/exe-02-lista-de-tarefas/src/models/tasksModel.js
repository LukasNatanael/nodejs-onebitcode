const listsModel = require("./listsModel")

let tasks = listsModel.getAll()

const tasksModel = {
    getAll(id) { return tasks[id-1].tasks }
}

module.exports = tasksModel