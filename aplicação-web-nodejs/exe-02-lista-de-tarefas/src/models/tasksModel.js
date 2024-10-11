const listsModel = require("./listsModel")

let tasks = listsModel.getAll()

const tasksModel = {
    getAll(id) { return tasks[id-1].tasks },
    delete(listName, taskId) {
        tasks.forEach( item => {
            if ( item.tasks != '') {
                if (item.title === listName) {
                    let taskToDelete = item.tasks[taskId]
                    
                    console.log( item.tasks )
                    
                    item.tasks = item.tasks.filter( task => task != taskToDelete )
                    
                    console.log( item.tasks )
                }
            }
        } )
        
        tasks = listsModel.getAll()
    }
}

module.exports = tasksModel