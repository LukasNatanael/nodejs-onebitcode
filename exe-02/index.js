const { File } = require('./File.js')
const { getSystemInformation } = require('./systemInfo.js')

const filename = 'system.log'

async function start(filename) {

    const systemInfo = getSystemInformation()

    const informations = `Detalhes do sistema: \n\n`.toUpperCase() +
        `Sistema Operacional: ${systemInfo.platform} \n` +
        `Arquitetura: ${systemInfo.arch} \n` +
        `Quantidade de núcleos: ${systemInfo.cores} \n` +
        `Uso de Memória RAM: ${systemInfo.ramUsage.toFixed(2)} GB | ${systemInfo.ramTotal.toFixed(1)} GB (${systemInfo.ramUsagePercent} %)\n` +
        `Informações da CPU: \n` +
        `   - Modelo: ${systemInfo.cpus[0].model} \n` +
        `   - Velocidade: ${systemInfo.cpus[0].speed} \n` +
        `Tempo de uso: ${systemInfo.inWork}\n`


    const file = new File(filename)

    await file.create('...')
    await file.update(informations)

    console.clear()
    await file.show()
}

setInterval( () => {
    start(filename)
    },1000 * 1
)