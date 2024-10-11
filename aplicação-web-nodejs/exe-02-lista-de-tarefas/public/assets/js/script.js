const toDo = document.querySelectorAll('.to-do')
const tasks = document.querySelectorAll('.tasks')

// toDo.forEach( item => {
//     item.addEventListener('click', () => {
//         item.classList.toggle('check')
//     })
// } )

tasks.forEach( item => {
    item.addEventListener('click', () => {
        item.classList.toggle('check')
    })
} )