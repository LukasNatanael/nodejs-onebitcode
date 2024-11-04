const newToDoList = document.querySelector('#newToDoList')

function generateID() {
    const id = Math.random().toString(8).slice(2, 6)
    return id
}

function newList() {
    const listname = prompt('Informe o nome da lista: ')

    if (listname === '') { return alert('Por favor, informe um nome para a lista!') }

    const id = generateID()
    const ul    = document.querySelector('ul')
    const li    = document.createElement('li')
    li.setAttribute('id', `item-${id}`)

    const buttonsDiv = document.createElement('div')
    buttonsDiv.classList.add('buttons-div')
    
    const listItem = document.createElement('form')
    listItem.setAttribute('action', `app/list-${id}`)
    listItem.setAttribute('method', 'get')
    listItem.classList.add('listItem')
    
    const listItemSendButton = document.createElement('button')
    listItemSendButton.setAttribute('type', 'submit')
    listItemSendButton.classList.add('listname')
    listItemSendButton.innerText = listname

    listItem.append(listItemSendButton)

    const listItemDelete = document.createElement('form')
    listItemDelete.setAttribute('action', `app/list-delete/${id}`)
    listItemDelete.setAttribute('method', 'post')
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


newToDoList.addEventListener( 'click', newList )

