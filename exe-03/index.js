const { Notes, validateAnswer } = require('./Notes.js')

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

    console.log( menu )

    const notes = new Notes()

    let option = await validateAnswer('Escolha uma das opções acima: ', 'Por favor, informe uma opção!', menu)

    switch (option) {
        case '1':
            notes.newNote()
            break
        case '2':
            console.log()
            break
        case '3':
            notes.deleteNote()
            break
        case '4':
            console.log()
            break
        case '5':
            notes.listNotes()
            break
        case '6':
            console.log()
            break
        // default:
        //     option = validateAnswer('Escolha uma das opções acima: ', menu, 'Por favor, informe uma opção!')
    }
}




mainMenu()
