const newTaskItem = document.querySelector('#newTask')

function generateID() {
    const id = Math.random().toString(8).slice(2, 6)
    return id
}

function newTask() {
    const taskname = prompt('Informe o nome da tarefa: ')
    if (!taskname) { return alert('Por favor, informe um nome para a tarefa!') }

    const id = generateID()
    const ul    = document.querySelector('ul')

    console.log(ul)

    const li    = document.createElement('li')
    li.setAttribute('id', `task-${id}`)

    const buttonsDiv = document.createElement('div')
    buttonsDiv.classList.add('buttons-div')
    
    const listItem = document.createElement('form')
    listItem.setAttribute('action', `app/task-${id}/new-task-${taskname}`)
    
    // listItem.setAttribute('method', 'get')
    listItem.setAttribute('method', 'post')
    
    listItem.classList.add('listItem')
    
    const listItemSendButton = document.createElement('button')
    listItemSendButton.setAttribute('type', 'submit')
    listItemSendButton.classList.add('listname')
    listItemSendButton.innerText = taskname

    listItem.append(listItemSendButton)

    const listItemDelete = document.createElement('form')
    listItemDelete.setAttribute('action', `app/list-delete/${id}`)
    // alterar METHOD para GET assim que o item for clicado
    // listItemDelete.setAttribute('method', 'post')
    listItemDelete.classList.add('listItemDelete')

    const listItemDeleteButton =document.createElement('button')
    listItemDeleteButton.setAttribute('type', 'submit')
    listItemDeleteButton.classList.add('delete')

    const trashIcon = document.createElement('i')
    trashIcon.classList.add('fa-solid')
    trashIcon.classList.add('fa-trash-can')
    
    listItemDeleteButton.append(trashIcon)
    listItemDelete.append( listItemDeleteButton )

    buttonsDiv.append(listItem, listItemDelete)

    li.appendChild(buttonsDiv)

    ul.append( li )
}

newTaskItem.addEventListener( 'click', newTask )
