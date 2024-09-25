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

    constructor() {
        this.notesPath     = path.resolve(__dirname, 'notes')
        this.notes         = fs.readdirSync(this.notesPath)
        this.quantityNotes = this.notes.length
    }

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

        let quantityNotes
        
        quantityNotes = this.quantityNotes < 2 ? `0${this.quantityNotes}` : this.quantityNotes
        
        if (!fs.existsSync(this.notesPath)) {
            fs.mkdirSync(this.notesPath)
        }

        filename == '' ? filename = `note_${quantityNotes}` : filename

        new File(
            path.join(this.notesPath, `${filename}.txt`)
        ).write( content )
    }

    async deleteNote() {
        console.clear()
        
        const notesList = this.listNotes()

        console.log(notesList)
        const filename = await validateAnswer('Informe o nome do arquivo que deseja deletar: ', 'Por favor, informe o nome do arquivo que deseja deletar!', notesList)

        new File(
            path.join(this.notesPath, `${filename}.txt`)
        ).delete()
    }


    listNotes() {
        console.clear()

        if (!fs.existsSync(this.notesPath)) {
            console.log('A pasta notes ainda não foi criada')
        }

        const notes = fs.readdirSync(this.notesPath)
        let notesList = '=-=-=-=-=-=- Lista de notas -=-=-=-=-=-=\n'
        notes.forEach( (note, id) => notesList += `\n[ ${id+1} ] ${note.replace('.txt', '')}\n` )
        notesList += '\n=-=-=-=-=-=-=-=-=-=- =-=-=-=-=-=-=-=-=-=\n'

        return notesList
    }

    async showNote() {
        console.clear()
        const notesList = this.listNotes()

        console.log(notesList)
        let note = await validateAnswer('Escolha uma das notas acima para visualizar: ', 'Por favor, informe uma opção!', notesList)

        
        if ( parseInt(note) ) {
            note = this.notes[ parseInt(note) - 1 ].replace('.txt', '')
        }
        
        console.clear()
        new File(
            path.join(this.notesPath, note + '.txt')
        ).show()


    }
}

module.exports = { Notes, askToUser, validateAnswer }