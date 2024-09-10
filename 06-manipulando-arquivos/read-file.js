const fs = require('node:fs')

const filename = 'file.txt'

const exists = fs.existsSync(filename)

if (exists) {
    const readFile = () => {
        fs.readFile(filename, 'utf-8', (error, data) => {
            if (error) {
                console.log(`Erro ao ler o arquivo: ${error}`)
                return
            }
            
            const entries = data.split(', ')
            entries.forEach( (entry) => {
                console.log(entry)
            })
        })
        
        // try {
            //     const data = fs.readFileSync('./file.txt', 'utf-8')
            //     console.log(data)
            // }
            // catch (error) {
                //     console.log(`Erro ao ler o arquivo: ${error}`)
                // }
            }
            
    module.exports = readFile
}
else {
    console.log('O arquivo para leitura não foi encontrado!')
}

