const http = require('node:http')

// criando meu servidor
const server = http.createServer((request, response) => {
    const path = request.url

    switch(path) {
        case '/':
            response.writeHead(200)
            response.write('Bem-vindo a página inicial!')
            break
        case '/artigos':
            response.writeHead(200)
            response.write('Bem-vindo a página de artigos!')
            break
        default:
            response.writeHead(404)
            response.write('Página não encontrada!')
            break

    }

    response.end()
})

const PORT = 3000 // verificar portas disponíveis para evitar conflitos com outros serviços

server.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}/`)
})