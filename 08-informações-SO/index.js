const os = require('node:os')

console.clear()
console.log(`Informações do dispositivo:\n`)

const plataforma = os.platform()
console.log(`Plataforma: ${plataforma}`)

const arquitetura = os.arch()
console.log(`Arquitetura: ${arquitetura}`)

const nucleos = os.cpus()
console.log(`Quantidade de núcleos: ${nucleos.length}`)

const memoria = os.totalmem()
console.log(`Total de memória: ${(memoria / 1024**3).toFixed(2)}GB`)

const processadores = os.cpus()
console.log(`Informações da CPU: \n`, processadores[0])
