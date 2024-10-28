const newToDoList = document.querySelector('#newToDoList')

function generateID() {
    const id = Math.random().toString(8).slice(2, 6)
    return id
}

function newList() {
    const sectionList = document.querySelector('ul')
    const ul    = document.querySelector('ul')
    const li    = document.createElement('li')
    li.id = 'list-' + generateID()
    
    const input = document.createElement('input')
    input.placeholder = 'Informe o nome da lista...'

    li.append( input )
    ul.append( li )

    const main = document.querySelector('main')

    main.append( ul )
    // sectionList.append( ul )
}

function newTask() {
    const buttons = document.querySelectorAll('.newTask')


}

newToDoList.addEventListener( 'click', newList )

