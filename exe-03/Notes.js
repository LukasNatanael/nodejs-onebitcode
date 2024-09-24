const { File } = require('./File.js')
const path      = require('node:path')
const readline  = require('node:readline')
const fs   = require('node:fs')

function askToUser(question) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close()
            resolve(answer)
        })
    })
}


async function validateAnswer(question, error, screenMessage='') {
    let answer = await askToUser(question)
    
    while(answer === '') {
        console.clear()
        console.log(screenMessage)
        console.log(error)
        answer = await askToUser(question)
    }

    return answer
}

class Notes {

    contentNote() {
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

        console.clear()
        return new Promise((resolve) => {
            rl.question('Informe abaixo o que deseja anotar: \n', (answer) => {
                rl.on('line', (data) => {
                    answer += `\n${data}`
                })

                rl.on('SIGINT', () => {
                    rl.close()
                    resolve(answer)
                }) 

            })
        })
    }

    async newNote() {
        console.clear()
        // const filename = await validateAnswer('Informe o nome do arquivo: ', 'Por favor, informe o nome do arquivo!')
        let filename = await askToUser('Informe o nome do arquivo: ')
        const content  = await this.contentNote()

        const filePath = path.resolve(__dirname, 'notes')
        let quantityNotes = fs.readdirSync(filePath).length
        
        quantityNotes = quantityNotes < 2 ? `0${quantityNotes}` : quantityNotes
        
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath)
        }

        filename == '' ? filename = `note_${quantityNotes}` : filename

        new File(
            path.join(filePath, `${filename}.txt`)
        ).write( content )
    }

    async deleteNote() {
        console.clear()
        
        this.listNotes()

        const filename = await validateAnswer('Informe o nome do arquivo que deseja deletar: ', 'Por favor, informe o nome do arquivo que deseja deletar!')

        const filePath = path.resolve(__dirname, 'notes')
        new File(
            path.join(filePath, `${filename}.txt`)
        ).delete()
    }


    listNotes() {
        console.clear()
        const notesPath = path.resolve(__dirname, 'notes')

        if (!fs.existsSync(notesPath)) {
            console.log('A pasta notes ainda não foi criada')
        }

        const notes = fs.readdirSync(notesPath)
        console.log('=-=-=-=-=-=- Lista de notas -=-=-=-=-=-=\n')
        notes.forEach( (note, id) => console.log(`[ ${id+1} ] ${note.replace('.txt', '')}`) )
        console.log('\n=-=-=-=-=-=-=-=-=-=- =-=-=-=-=-=-=-=-=-=\n')

    }
}

module.exports = { Notes, askToUser, validateAnswer }