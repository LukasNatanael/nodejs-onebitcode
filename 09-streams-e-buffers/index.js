const fs = require('node:fs')

const streamLeitura = fs.createReadStream('file.txt')
// const streamLeitura = fs.createReadStream('wallpaper.jpg')
const buffer = []

streamLeitura.on('data', (chunk) => {
    buffer.push(chunk)
    console.log('Um chunk foi processado!')
})

streamLeitura.on('end', () => {
    console.log(`Buffer: \n${buffer}\n`)
    const fullData = Buffer.concat(buffer).toString()
    console.log(`Dados lidos: \n${fullData}`)
})