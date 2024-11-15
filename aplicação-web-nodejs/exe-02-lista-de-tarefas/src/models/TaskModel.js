class TaskList {
    constructor( listname ) {
        this._name = listname
        this._tasks = []
    }

    getAllTasks() {
        return this._tasks
    }

    getTaskByID(id) {
        return this._tasks.filter( item => item.id === id )[0]
    }
    
    getTaskByName(name) {
        const task = this._tasks.filter( item => item.name === name )[0]
        return task === undefined ? `[ Tarefa não encontrada ] "${name}" não foi localizada na lista de tarefas.` : task
    }

    #generateID() {
        const id = Math.random().toString(8).slice(2, 6)
        return id
    }

    newTask(task, id=this.#generateID()) {
        this._tasks.push({ 
            id: id,
            name: task,
            complete: task.complete === true ? true: true || task.complete === undefined ? false : true || task.complete === false ? false : true
        })

        console.log(`[ ${this._name} ] "${task}" foi adicionado a lista \n`)
    }

    deleteTask(taskID) {
        const taskToDelete = this.getAllTasks().find( item => item.id === taskID )
        this._tasks = this._tasks.filter( item => item.id != taskID )

        console.log(`[ ${this._name} ] "${taskToDelete.name}" foi removido da lista \n`)

    }

    completeTask(task) {
        this._tasks.find( item => {
            if (item.name === task) {
                item.complete = true
            }
        })

        console.log(`[ TAREFA ] "${task}" foi marcada como finalizada \n`)

    }

    checkCompleteAllTasks() {
        const completeTasks = this.getAllTasks().filter( task => task.complete === true ).length
        const allTasks = this.getAllTasks().length

        return completeTasks === allTasks ? true: false
    }
}

module.exports = { TaskList }