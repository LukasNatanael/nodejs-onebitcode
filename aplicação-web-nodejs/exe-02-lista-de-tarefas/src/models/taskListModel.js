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
        const task = this._tasks.filter( item => item.name === name )[0]
        return task === undefined ? `[ Tarefa não encontrada ] "${name}" não foi localizada na lista de tarefas.` : task
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

    completeTask(task) {
        this._tasks.find( item => {
            if (item.name === task) {
                item.complete = true
            }
        })

        console.log(`[ TAREFA ] "${task}" foi marcada como finalizada \n`)

    }
}

// console.clear()

// const tarefas_de_casa = new TaskList('Tarefas de casa')

// const banheiro = { 
//     id: '0109',
//     name: 'Lavar banheiro',
// }

// const quarto = { 
//     id: '9121',
//     name: 'limpar o quarto',
// }

// tarefas_de_casa.newTask(banheiro)
// tarefas_de_casa.newTask(quarto)

// console.log( tarefas_de_casa.getTaskByName('Lavar banheiro') )

// tarefas_de_casa.completeTask(banheiro.name)

// console.log( tarefas_de_casa.getTaskByName('Lavar banheiro') )

// const tarefas_do_trabalho = new TaskList('Tarefas do trabalho')

// const grafana = {
//     id: '9812',
//     name: 'Ver grafana'
// }

// const atendimentos = {
//     id: '3412',
//     name: 'Verificar atendimentos'
// }

// tarefas_do_trabalho.newTask( grafana )
// tarefas_do_trabalho.newTask( atendimentos )

// const toDoList = new ToDoList()

// toDoList.newList( tarefas_de_casa, '0109' )
// toDoList.newList( tarefas_do_trabalho, '9912' )

// console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-')
// console.log(toDoList.getListByID('0109'))

// // console.log(toDoList.lists)

// toDoList.completeList('0109')

module.exports = { TaskList }