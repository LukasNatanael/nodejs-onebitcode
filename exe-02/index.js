const { File } = require('./File.js')
const os   = require('node:os')


const filename = 'system.log'

async function start(filename) {

    const arquitetura = os.arch()
    const plataforma = os.platform()
    const nucleos = os.cpus()
    const memoria = os.totalmem()
    const processadores = os.cpus()
    const emUso = os.uptime()

    const informations = `Informações do sistema: \n\n` +
        `Plataforma: ${plataforma} \n` +
        `Arquitetura: ${arquitetura} \n` +
        `Quantidade de núcleos: ${nucleos.length} \n` +
        `Total de memória: ${(memoria / 1024**3).toFixed(2)}GB\n` +
        `Informações da CPU: \n` +
        `   - Modelo: ${processadores[0].model} \n` +
        `   - Velocidade: ${processadores[0].speed} \n` +
        `Tempo de uso: ${emUso}`


    const file = new File(filename)

    await file.create('...')
    await file.update(informations)

    console.clear()
    await file.show()
}

setInterval( () => {
    start(filename)
    },1000 *2
)