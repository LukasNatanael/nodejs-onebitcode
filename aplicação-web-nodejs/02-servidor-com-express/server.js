const express = require('express')

const server = express()

server.get('/', (request, response) => {
    response.send('Servidor Express funcionando! Você está na página inicial.')
})

server.get('/artigos', (request, response) => {
    response.send('Bem-vindo! Essa é a página de artigos.')
})

const PORT = 3000

server.listen(PORT, () => console.log(`Servidor Express rodando em: http://localhost:${PORT}`))