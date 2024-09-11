import { error } from 'node:console'
import fs from 'node:fs'
import { resolve } from 'node:path'

export function createFile(text) {
  return new Promise( resolve => {
    fs.writeFile('myfile.txt', text, (error) => {
      if (error) {
        console.log(`Error at create file: ${error}`)
        resolve()
      }
      resolve()
    })

  } )
}

export function updateFile(text) {
  return new Promise( resolve => {
    fs.writeFile('myfile.txt', text, (error) => {
      if(error) {
        console.log(`Error at update file: ${error}`)
        resolve()
      }
      resolve()
    })
  } )
}

export function showFile() {
  return new Promise( resolve => {
      fs.readFile('myfile.txt', 'utf-8', (error, content) => {
        if (error) {
          console.error('Error at read file: ', error.message)
          resolve()
        }
        console.log(content)
        resolve()
      })
  })
}

export function deleteFile() {
  return new Promise( resolve => {
    fs.unlink('myfile.txt', (error) => {
      if (error) {
        console.error('Error at delete file: ', error.message)
        resolve()
      }
      console.log('Deleted file with successful!')
      resolve()
    })
  })
}