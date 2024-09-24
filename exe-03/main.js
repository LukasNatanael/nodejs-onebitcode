const fs       = require('node:fs')
const path     = require('node:path')
const readline = require('node:readline')
const { File } = require('./File.js')

function askToUser(question) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close()
            resolve(answer)
        })
    })
}

async function validateAnswer(question, screenMessage='', error='Por favor, informe algo!') {
    let answer = await askToUser(question)
    
    while(answer === '') {
        console.clear()
        console.log(screenMessage)
        console.log(error)
        answer = await askToUser(question)
    }

    return answer
}

async function mainMenu() {
    const menu = 
    '=-=-=-=-=-=- Menu principal -=-=-=-=-=-=\n\n'+
    '         [ 1 ] Criar anotação\n' +
    '         [ 3 ] Atualizar anotação\n' +
    '         [ 2 ] Remover anotação\n' +
    '         [ 4 ] Visualizar anotação\n' +
    '         [ 5 ] Sair do menu\n' +
    '\n=-=-=-=-=-=-=-=-=-=- =-=-=-=-=-=-=-=-=-=\n'

    console.log( menu )

    let option = await validateAnswer('Escolha uma das opções acima: ', menu, 'Por favor, informe uma opção!')

    new Promise(resolve => {
        switch (option) {
            case '1':
                resolve()
            case '2':
                resolve()
            case '3':
                resolve()
            case '4':
                resolve()
            case '5':
                resolve()
            default:
                option = validateAnswer('Escolha uma das opções acima: ', menu, 'Por favor, informe uma opção!')
        }
    })
}

async function start() {
    console.clear()
    const filename = await validateAnswer('Informe o nome do arquivo: ', 'Por favor, informe o nome do arquivo!')
    const filePath = path.resolve('./notes')

    if (!fs.existsSync('./notes')) {
        fs.mkdirSync(filePath)
    }

    new File(
        path.join(filePath, `${filename}.txt`)
    ).create('...')
}

// start()

mainMenu()