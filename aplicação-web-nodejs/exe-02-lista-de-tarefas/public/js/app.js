const li = document.querySelectorAll('li')

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
