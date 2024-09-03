const fs = require('node:fs')
console.log('Start')

fs.readFile('./file.txt', 'utf-8', (error, data) => {
    if (error) throw error
    console.log(data)
})

console.log('Finish')