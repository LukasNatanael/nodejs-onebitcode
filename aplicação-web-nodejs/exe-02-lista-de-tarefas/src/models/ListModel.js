const { TaskList } = require('../models/TaskModel')

class ToDoList {
    constructor() {
        // this._lists = {}
        this._lists = []
    }

    get #generateID() {
        const id = Math.random().toString(8).slice(2, 6)
        return id
    }

    getAllLists() {
        return this._lists
    }

    newList( list, id=this.#generateID ) {
        this._lists.push( { id: id, name: list._name, tasks: list, complete: false } )
        
    }

    getListByID(id) {
        
        return this.getAllLists().filter( element => element.id === id )[0]
    }

    completeList(id) {
        const listToComplete = this.getListByID(id)
        listToComplete['complete'] = true

        console.log(`[ LISTA ] "${listToComplete._name}" foi marcada como finalizada \n`)
    }
    
    deleteList(id) {
        const taskToDelete = this.getListByID(id)
        console.log(`[ LISTA ] "${ taskToDelete.name }" foi deletada \n`)
        this._lists = this._lists.filter( list => list.id != id )
        
    }

    checkCompleteList(id) {
        const currentList = this.getListByID(id)
        const tasks = currentList.tasks
        currentList.complete = tasks.checkCompleteAllTasks() === true ? true: false
        
        if (currentList.complete) {
            console.log(`[ LISTA ] "${currentList.name}" foi marcada como finalizada \n`)
        }

    }
    
}

const toDo = new ToDoList()
const tarefas_de_casa = new TaskList('Tarefas de casa')
tarefas_de_casa.newTask('Varrer o chão')
tarefas_de_casa.newTask('Dobrar roupas')

const tarefas_do_trabalho = new TaskList('Tarefas do trabalho')
tarefas_do_trabalho.newTask('Verificar grafana')
tarefas_do_trabalho.newTask('Verificar atendimentos')

toDo.newList(tarefas_de_casa)
toDo.newList(tarefas_do_trabalho)

// console.log( toDo.getAllLists() )
// console.log( toDo.getListByID() )


module.exports = { ToDoList }