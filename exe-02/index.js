const path = require('node:path')
const fs = require('node:fs')

const { File } = require('./File.js')
const { getSystemInformation } = require('./systemInfo.js')

const filename = 'system.log'
const dir = path.resolve('./exe-02', filename)
const file = new File(dir)

async function start() {

    const systemInfo = getSystemInformation()

    const informations = `-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n\n| Sistema Operacional: ${systemInfo.platform} \n| Arquitetura: ${systemInfo.arch} \n| Quantidade de núcleos: ${systemInfo.cores} \n| Uso de Memória RAM: ${systemInfo.ramUsage.toFixed(2)} GB \n| ${systemInfo.ramTotal.toFixed(1)} GB (${systemInfo.ramUsagePercent} %) \n| CPU : ${systemInfo.cpus[0].model} \n| Tempo de uso: ${systemInfo.inWork}\n\n`

    console.clear()
    console.log(`Detalhes do sistema: \n`.toUpperCase())
    console.log(`Sistema Operacional: ${systemInfo.platform} `)
    console.log(`Arquitetura: ${systemInfo.arch} ` )
    console.log(`Quantidade de núcleos: ${systemInfo.cores} `)
    console.log(`Uso de Memória RAM: ${systemInfo.ramUsage.toFixed(2)} GB | ${systemInfo.ramTotal.toFixed(1)} GB (${systemInfo.ramUsagePercent} %)`)
    console.log(`Informações da CPU: `)
    console.log(`   - Modelo: ${systemInfo.cpus[0].model} `)
    console.log(`   - Velocidade: ${systemInfo.cpus[0].speed} `)
    console.log(`Tempo de uso: ${systemInfo.inWork}`)

    if (!fs.existsSync(dir)) {
        await file.create(informations)
    }
    
    await file.update(informations)

}

setInterval( () => {
    start(filename)
    },1000 * 1
)