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

        // this._lists[id] = { list }
        // this._lists[id]['complete'] = false

        this._lists.push( { id: id, name: list._name, tasks: list, complete: false } )

        
        // this._lists.push( { id: id, data: {listname: list} } )
        
    }

    getListByID(id) {
        
        // return this._lists.filter( element => element.id === id )[0]
        return this.getAllLists().filter( element => element.id === id )[0]
    }

    completeList(id) {
        const listToComplete = this.getListByID(id)
        listToComplete['complete'] = true

        console.log(`[ LISTA ] "${listToComplete._name}" foi marcada como finalizada \n`)


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