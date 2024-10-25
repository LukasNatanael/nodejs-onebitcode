const TasksModel = require("./taskModel")

class TaskListsModel {
    constructor( ) {
        this._lists = [{ id: '6316', listname: 'Tarefas de casa', tasks: new TasksModel()}]
    }

    #generateID() {
        const id = Math.random().toString(8).slice(2, 6)
        return id
    }

    get lists() {
        console.log(this._lists)
    }

    newList(listname) {
        const id = this.#generateID()
        this._lists.push({ id:id, listname, tasks: new TasksModel() })
        console.log(`"${listname}" foi adicionada a lista de tarefas com sucesso!`)

    }

    getListByID(id) {
        return this._lists.filter( list => list.id === id )
    }

    getListByName(listname) {
        return this._lists.filter( list => list.listname === listname )
    }

    deleteList(id) {
        this._lists.filter( list => {
            if (list.id === id) {
                console.log(`"${list.listname}" foi removido da lista de tarefas com sucesso!`)
            }
        } )
        
        this._lists = this._lists.filter( list => list.id !== id )

    }

    completeList(id) {
        this._lists.filter( list => {
            if (list.id === id) {
                list.complete = true
                console.log(`"${list.listname}" está com todas as tarefas concluidas!`)
            }
        } )

    }
}

const list = new TaskListsModel()

list.newList('Tarefas do trabalho')

list.lists
list.completeList('6316')
list.lists

list.deleteList('6316')
list.lists
