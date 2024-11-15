const li = document.querySelectorAll('li')
const trashIcons = document.querySelectorAll('.delete')

li.forEach( item => {
    item.addEventListener('mouseenter', (event) => {
        const trashIcon = event.currentTarget.querySelector('.delete')
        trashIcon.classList.toggle('hover')

        const listname = event.currentTarget.querySelector('.listname')
        listname.classList.toggle('hover')
    })
    item.addEventListener('mouseleave', (event) => {
        const trashIcon = event.currentTarget.querySelector('.delete')
        trashIcon.classList.toggle('hover')

        const listname = event.currentTarget.querySelector('.listname')
        listname.classList.toggle('hover')
    })

} )

trashIcons.forEach( item => {
    item.addEventListener('click', (event) => {
        const confirmDelete = confirm('Tem certeza que deseja excluir ?')
        if (!confirmDelete) {
            event.preventDefault()
        }
    })
} )