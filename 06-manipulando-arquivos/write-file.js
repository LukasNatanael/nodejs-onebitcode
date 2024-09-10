const fs = require('node:fs')

const writeFile = (content = `Hello world, I'm a file!`) => {
    fs.writeFile('./file.txt', content, 'utf-8', (error) => {
        if (error) {
            console.log(`Erro ao escrever o arquivo: ${error}`)
            return
        }
        
        console.log('Arquivo criado com sucesso de forma assíncrona!')

    })

    // try {
    //     fs.writeFileSync('./file.txt',`${text}`, 'utf-8')
    //     console.log('Arquivo criado com sucesso!')
    // }
    // catch (error) {
    //     console.log(`Erro ao escrever o arquivo: ${error}`)
    // }
}

module.exports = writeFile