const writeFile  = require('./write-file.js')
const readFile   = require('./read-file.js')
const renameFile = require('./rename-file.js')
const deleteFile = require('./delete-file.js')

console.clear()
content = 'entrada1, entrada2, entrada3'

writeFile(content)
readFile()
renameFile('file.csv')
deleteFile('file.csv')