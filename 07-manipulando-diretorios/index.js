const path = require('node:path')

console.clear()
const dir = 'src'
const file = 'app.js'

const fullPath = path.join(dir, file )
console.log(fullPath)

const relativePath = '../arquivos/relatorio.pdf'
console.log(relativePath)

const absolutePath = path.resolve(relativePath)
console.log(absolutePath)

const fileName = path.basename(relativePath)
console.log(fileName)

const fileExtension = path.extname(absolutePath)
console.log(fileExtension)