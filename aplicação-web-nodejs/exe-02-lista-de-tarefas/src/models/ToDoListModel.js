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

        this._lists.push( { id: id, listname: list, complete: false } )
        
    }

    getListByID(id) {
        return this._lists[id]
    }

    completeList(id) {
        const listToComplete = this.getListByID(id)
        listToComplete['complete'] = true

        console.log(`[ LISTA ] "${listToComplete._name}" foi marcada como finalizada \n`)


    }
}



module.exports = { ToDoList }