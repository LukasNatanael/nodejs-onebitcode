const { ToDoList } = require('../models/ListModel')
const { TaskList } = require('../models/TaskModel')

const toDo = new ToDoList()
const tarefas_de_casa = new TaskList('Tarefas de casa')
tarefas_de_casa.newTask('Varrer o chão')
tarefas_de_casa.newTask('Dobrar roupas')

const tarefas_do_trabalho = new TaskList('Tarefas do trabalho')
tarefas_do_trabalho.newTask('Verificar grafana')
tarefas_do_trabalho.newTask('Verificar atendimentos')
tarefas_do_trabalho.newTask('Verificar OS')

toDo.newList(tarefas_de_casa)
toDo.newList(tarefas_do_trabalho)

class AppController {
    index(req, res) {
        const allLists = toDo.getAllLists()
        res.render('index', { list: allLists })
    }

    list(req, res) {
        const id = req.params.id
        const currentList = toDo.getListByID(id)
        
        res.render('list', { name: currentList.name, tasks: currentList.tasks._tasks })

        // console.log( currentList.tasks._tasks )
        
    }
}

module.exports = AppController