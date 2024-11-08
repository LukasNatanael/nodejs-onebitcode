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
        
        // res.render('list', { id: currentList.id, name: currentList.name, tasks: currentList.tasks._tasks })

        res.render('list', { list: currentList })

        // console.log( currentList )
        // console.log( currentList.tasks.checkCompleteAllTasks() )
        
    }

    createList(req, res) {
        const { listID, listname} = req.params
        console.log(listID, listname)

        toDo.newList( new TaskList(listname), listID )
        console.log(toDo.getListByID(listID))

        res.redirect(`/app/list-${listID}`)
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

        // verificando se todas as tarefas da lista atual foram concluidas para concluir a lista
        taskToComplete.complete = taskToComplete.complete === true ? false: true
        currentList.complete = tasks.checkCompleteAllTasks() === true ? true: false
     
        res.redirect(`/app/list-${listID}`)
    }

    
}

module.exports = AppController