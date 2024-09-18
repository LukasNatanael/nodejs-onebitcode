const args = process.argv.slice(2)

const namedArguments = {}

console.log(process.argv)

args.forEach((arg, index, array) => {
    if (arg.startsWith('--')) {
        const argName  = arg.slice(2)
        const argValue = array[index + 1]
        namedArguments[argName] = argValue
    }
})

console.log('Argumentos informados: ')
console.log(namedArguments)