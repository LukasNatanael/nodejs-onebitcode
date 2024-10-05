// importando módulos necessários
const express = require('express')
const path    = require('node:path')
const router  = require('./routes')


// criando servidor
const app = express()

// definindo porta, irá utilizar da váriavel de ambiente caso possua senão, irá utilziar a porta 3000 como padrão
const PORT = process.env.PORT || 3000

// configurando EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// configuração de arquivos estáticos
app.use( express.static('public') )

// configuração para ler dados das requisições
app.use( express.urlencoded({ extended: true }) )

// rotas da aplicação
app.use(router)


// rotas para POSTS

console.clear()
app.listen(PORT, console.log(`Servidor rodando em http://localhost:${PORT}`))