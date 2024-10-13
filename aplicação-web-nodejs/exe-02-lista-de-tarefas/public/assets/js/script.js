const tasks = document.querySelectorAll('.tasks')

const newList = document.querySelector('#newlist')

tasks.forEach( item => {
    item.addEventListener('click', () => {
        item.classList.toggle('check')
    })
} )

function getRandomNumber() {
    return `${new Date().getMilliseconds() * Math.floor(Math.random(91231) * 1231)}`
}

newList.addEventListener('click', () => {
    const id = getRandomNumber()

    const listContainer = document.createElement('section')
    listContainer.setAttribute('id', `list-${id}`)
    listContainer.setAttribute('class', `listContainer`)

    const labelTitle = document.createElement('label')
    labelTitle.setAttribute('for', `title-${id}`)
    labelTitle.innerText = 'Titulo: '
    
    const listTitle = document.createElement('input')
    listTitle.setAttribute('id', `title-${id}`)
    listTitle.setAttribute('type', 'text')
    
    const taskListBtn = document.createElement('ul')
    taskListBtn.setAttribute('class', `tasklist`)
    taskListBtn.setAttribute('id', `task-${id}`)
    
    const newTaskBtn = document.createElement('button')
    newTaskBtn.setAttribute('class', `newtask`)
    newTaskBtn.innerText = 'Nova tarefa'

    const div = document.createElement('div')
    div.append(  listTitle, newTaskBtn )

    // listContainer.append( newTaskBtn, labelTitle, listTitle )
    listContainer.append( div )

    const main = document.querySelector('main')
    main.append(listContainer)

    document.body.append(main)
    
    const newTask = document.querySelectorAll('.newtask')
    
    newTask.forEach( item => {
        item.addEventListener('click', () => {
            let tasklist = item.parentElement.parentElement
            tasklist.append( createtask() )
        })
    } )
})


function createtask() {
    // está criando UL diversas vezes
    const id = getRandomNumber()

    const ul = document.createElement('ul')
    ul.setAttribute('class', 'taskList')

    const li = document.createElement('li')
    li.setAttribute('id', `task-${id}`)

    const input = document.createElement('input')
    li.append(input)

    ul.append(li)

    return ul
}
