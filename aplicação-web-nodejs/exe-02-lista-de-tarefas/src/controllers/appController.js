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

console.clear()
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