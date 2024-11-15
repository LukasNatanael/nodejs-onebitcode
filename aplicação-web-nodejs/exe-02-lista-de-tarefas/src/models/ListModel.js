class ToDoList {
    constructor() {
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
        
        console.log(`[ LISTA ] "${list._name}" foi criada com sucesso! \n`)
    }

    getListByID(id) {
        const list = this._lists.filter( item => item.id === id )[0]
        
        return list === undefined ? `[ Lista não encontrada ] A lista solicitada não foi localizada.` : list
    }
    
    deleteList(id) {
        const taskToDelete = this.getListByID(id)
        this._lists = this._lists.filter( list => list.id != id )

        console.log(`[ LISTA ] "${ taskToDelete.name }" foi deletada! \n`)
    }

    checkCompleteList(id) {
        const currentList = this.getListByID(id)
        const tasks = currentList.tasks
        currentList.complete = tasks.checkCompleteAllTasks() === true ? true: false
        
        if (currentList.complete) {
            console.log(`[ LISTA ] "${currentList.name}" foi marcada como finalizada! \n`)
        }
    }
}

module.exports = { ToDoList }