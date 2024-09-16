const fs   = require('node:fs')

console.clear()
class File {

    constructor(filename) {
        this.filename = filename
    }

    create(content) {

        return new Promise(resolve => {
            fs.writeFile( this.filename, content, 'utf-8', (error) => {
                if (error) {
                        console.log(`Error at create ${this.filename}: ${error}`)
                        resolve()
                    }
                    console.log(`${this.filename} was created with successful!`)
                    resolve()
            })
        })

    }

    update(content) {
        return new Promise(resolve => {
            fs.writeFile( this.filename, content, 'utf-8', (error) => {
                if (error) {
                    console.log(`Error at update ${this.filename}: ${error}`)
                    resolve()
                }
                console.log(`${this.filename} was updated with successful!`)
                resolve()
            })
        })
    }

    delete() {
        return new Promise(resolve => {

            fs.unlink( this.filename, (error) => {
                if (error) {
                    console.log(`Error at delete ${this.filename}: ${error}`)
                    resolve()
                }
                console.log(`${this.filename} was deleted with successful!`)
                resolve()
            })
        })
    }

    show() {
        return new Promise(resolve => {
            fs.readFile( this.filename, 'utf-8', (error, content) => {
                if (error) {
                    console.log(`Error at read ${this.filename}: ${error}`)
                    resolve()
                }
                console.log(`\n${content}\n`)
                resolve()
            })
        })
    }
}

module.exports = { File }