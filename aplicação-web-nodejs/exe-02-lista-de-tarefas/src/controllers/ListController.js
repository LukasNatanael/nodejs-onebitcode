const { ToDoList } = require('../models/ListModel')
const { TaskList } = require('../models/TaskModel')

const toDo = new ToDoList()
class ListController {
    index(req, res) {
        res.render('index')
    }

    allLists(req, res) {
        const allLists = toDo.getAllLists()
        res.render('allLists', { list: allLists, tasks: toDo })
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

        res.redirect('/app')
    }

    deleteList(req, res) {
        const { listID } = req.params
        toDo.deleteList(listID)

        res.redirect('/app')
    }
}

module.exports = { ListController, toDo}