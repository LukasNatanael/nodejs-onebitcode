const fs   = require('node:fs')
const path = require('node:path')

console.clear()
class Database {

    constructor(PORT) {
        this.PORT = PORT
    }

    // pegando informações do database
    async showTasksList() {
        const data = await fetch(`http://localhost:${this.PORT}/taskLists`).then( data => data.json() )

        // response.forEach( (item) => console.log(item) )

        return data
    }

    // função para pesquisar no database
    async findById(id) {
        const response = await fetch(`http://localhost:${this.PORT}/taskLists/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        // const foundArticle = await response.json()
        const foundArticle = await response.json()
        return foundArticle
    }


    // função para salvar no database
    async post(articleData) {
        const response = await fetch(`http://localhost:${this.PORT}/taskLists`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( articleData )
        })

        const savedList = await response.json()

        return savedList
    }

    // função para deletar do database e da página
    async dataDelete(id) {
        const response = await fetch(`http://localhost:${this.PORT}/taskLists/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const deletedArticle = await response.json()

        return deletedArticle
    }

    async save(id, { listname, tasks, completed}) {
        const taskListData = {
            listname,
            tasks,
            completed
        }

        const response = await fetch(`http://localhost:${this.PORT}/taskLists/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( taskListData )
        })

        const savedList = await response.json()
        
        console.log(savedList)
    }
        
}

const db = new Database(8000)

const taskList =         {
    // id: 6316,
    listname: "Tarefas de casa",
    tasks: [
        {id: 9293, task: "Lavar louça"},
        {id: 6990, task: "Limpar o chão"},
        {id: 3022, task: "Estender as roupas"}
    ],
    completed: false        
}

db.save( 9192, taskList )

db.showTasksList().then( response => console.log(response) )

db.save('6316', taskList)

// db.insert(
//     { id: '1239', listname: 'Tarefas do trabalho'}
// )

// db.delete()

// module.exports = { Database }


