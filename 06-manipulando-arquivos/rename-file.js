const fs = require('node:fs')

const renameFile = (newName) => {
    fs.rename('./file.txt', newName, (error) => {
            if (error) {
                console.log(`Erro ao renomear o arquivo: ${error}`)
                return
            }
            
            console.log('Arquivo renomeado com sucesso')
    })
}

module.exports = renameFile