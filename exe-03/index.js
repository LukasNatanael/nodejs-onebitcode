const { Notes, validateAnswer } = require('./Notes.js')

async function backToMenu() {
    await validateAnswer('\nDeseja voltar ao menu [s|n]: ', 'Por favor, informe uma opção!').then( answer => {
        if (answer == 's') {
            mainMenu()
        }
        else {
            process.exit(0)
        }
    } )

}

async function mainMenu() {
    const menu = 
    '=-=-=-=-=-=- Menu principal -=-=-=-=-=-=\n\n'+
    '         [ 1 ] Criar anotação\n' +
    '         [ 2 ] Atualizar anotação\n' +
    '         [ 3 ] Deletar anotação\n' +
    '         [ 4 ] Visualizar anotação\n' +
    '         [ 5 ] Listar notas\n' +
    '         [ 6 ] Sair do menu\n' +
    '\n=-=-=-=-=-=-=-=-=-=- =-=-=-=-=-=-=-=-=-=\n'

    console.clear()
    console.log( menu )

    const notes = new Notes()

    let option = await validateAnswer('Escolha uma das opções acima: ', 'Opção inválida! Por favor informe uma das opções disponíveis.', menu)

    switch (option) {
        case '1':
            await notes.newNote()
            backToMenu()
            break
        case '2':
            await notes.updateNote()
            backToMenu()
            break
        case '3':
            await notes.deleteNote()
            backToMenu()
            break
        case '4':
            await notes.showNote()
            backToMenu()
            break
        case '5':
            const notesList = notes.listNotes()
            console.log(notesList)
            backToMenu()
            break
        case '6':
            process.exit(0)
        default:
            mainMenu()
    }
}




mainMenu()

// continueAction()

