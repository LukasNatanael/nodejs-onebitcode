const os   = require('node:os')

const systemPlatformMap = {
    "win32": "Windows",
    "linux": "Linux",
    "darwin": "MacOS",
    "freebsd": "FreeBSD"
  }

function getSystemInformation() {
    
    const uptimeDays = Math.floor(os.uptime() / 60 / 60 / 24)
    const uptimeDaysInSeconds = uptimeDays * 24 * 60 * 60
  
    const uptimeHours = Math.floor((os.uptime() - uptimeDaysInSeconds) / 60 / 60)
    const uptimeHoursInSeconds = uptimeHours * 60 * 60
  
    const uptimeMins = Math.floor((os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds) / 60)
    const uptimeMinsInSeconds = uptimeMins * 60
  
    const uptimeSecs = Math.floor(os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds - uptimeMinsInSeconds)
    const ramTotal = os.totalmem() / 1024 / 1024 / 1024

    const ramUsage = (os.totalmem() - os.freemem()) / 1024 ** 3
    const ramUsagePercent = Math.round((ramUsage / ramTotal) * 100)
    
    const arch = os.arch()
    const platform = systemPlatformMap[os.platform()]
    const cores = os.cpus().length
    const cpus = os.cpus()
    const inWork = `${uptimeDays}:${uptimeHours}:${uptimeMins}:${uptimeSecs}`

    

    return { arch, platform, cores, cpus, inWork, ramUsage, ramTotal, ramUsagePercent }
}

module.exports = { getSystemInformation }