const toDo = document.querySelectorAll('.to-do')

toDo.forEach( item => {
    item.addEventListener('click', () => {
        item.classList.toggle('check')
    })
} )