let lists = [
    { id: '1', title: 'Tarefas de casa',     tasks: [ 'Arrumar cama', 'Varrer o quarto' ], createdAt: '09/10/2024 - 20:11', complete: false },
    { id: '2', title: 'Tarefas do trabalho', tasks: [ 'Verificar atendimentos', 'Verificar novas mensagens' ], createdAt: '09/10/2024 - 20:28', complete: false },
]

const listsModel = {
    getAll() { return lists },
    getById(id) { return lists.find( item => item.id === id ) },
    delete(id) { lists = lists.filter( item => item.id !== id ) },
    new(list) { lists.unshift(list) }

}

module.exports = listsModel