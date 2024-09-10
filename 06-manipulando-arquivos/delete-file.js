const fs = require('node:fs')

const deleteFile = (file) => {
    fs.unlink(file, (error) => {
        if (error) {
            console.log(`Erro ao deletar arquivo: ${error}`)
            return
        }

        console.log('Arquivo deletado com sucesso!')
    })
}

module.exports = deleteFile