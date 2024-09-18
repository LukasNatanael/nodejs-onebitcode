// utilizando process: stdin e stdout
// process.stdout.write('Informe seu nome: \n')

// process.stdin.on('data', (data) => {
//     process.stdout.write(`Olá ${data}`)
// })


const readline = require('node:readline')

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

// rl.on('line', (data) => {
//     process.stdout.write(`Você digitou: ${data}\n`)
    
// })


// rl.question('Informe o seu nome: ', (answer) => {
//     rl.write(`Hello ${answer}!\n`)
//     rl.close()
// })

// rl.on('close', () => {
//     rl.write('saindo...')
//     process.exit(0)
// })

rl.on('SIGINT', () => {
    rl.question('Are you sure [s|n]: ', (answer) => {
        // .trim() -> remove espaços vazios da string 
        if (answer.trim().toLowerCase() === 's') {
            process.exit(0)
        }
        console.clear()
    })
})