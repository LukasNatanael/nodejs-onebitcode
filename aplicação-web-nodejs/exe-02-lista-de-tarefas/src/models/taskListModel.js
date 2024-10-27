class TaskList {
    constructor( listname ) {
        this._name = listname
        this._tasks = []
    }

    get tasks() {
        return this._tasks
    }

    getTaskByID(id) {
        return this._tasks.filter( item => item.id === id )[0]
    }
    
    getTaskByName(name) {
        return this._tasks.filter( item => item.name === name )[0]
    }

    #generateID() {
        const id = Math.random().toString(8).slice(2, 6)
        return id
    }

    newTask(task) {
        // const id = this.#generateID()

        // this._tasks.push({ id: id, name: task, complete: false })
        // this._tasks.push({ name: task, complete: false })

        this._tasks.push({ 
            id: task.id,
            name: task.name,
            complete: task.complete === true ? true: true || task.complete === undefined ? false : true || task.complete === false ? false : true
        })

        console.log(`[ ${this._name} ] "${task.name}" foi adicionado a lista \n`)
    }

    deleteTask(task) {
        this._tasks = this._tasks.filter( item => item.name != task )

        console.log(`[ ${this._name} ] "${task}" foi removido da lista \n`)

    }

    completTask(task) {
        this._tasks.find( item => {
            if (item.name === task) {
                item.complete = true
            }
        })

        console.log(`[ ${this._name} ] "${task}" foi marcada como finalizada \n`)

    }
}

console.clear()
const toDo = new TaskList('Tarefas de casa')

// toDo.newTask('Varrear a casa')
// toDo.newTask('Dobrar roupas')

// toDo.deleteTask('Varrear a casa')
// toDo.completTask('Dobrar roupas')

// console.log( toDo.tasks )

// console.log( toDo.getTaskByName('Lavar banheiro') )

const banheiro = { 
    id: '0109',
    name: 'Lavar banheiro',
}

toDo.newTask(banheiro)

console.log( toDo.getTaskByName('Lavar banheiro') )

