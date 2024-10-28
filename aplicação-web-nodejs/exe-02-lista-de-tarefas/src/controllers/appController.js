const { ToDoList } = require('../models/ToDoListModel')

const list = new ToDoList()
list.newList('Tarefas de casa')
list.newList('Tarefas do trabalho')
class AppController {
    index(req, res) {
        const allLists = list.getAllLists()
        res.render('index', { list: allLists })
    }
}

module.exports = AppController