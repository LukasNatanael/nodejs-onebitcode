import fs from 'node:fs'

export function createFile(text) {
  fs.writeFileSync('myfile.txt', text)
}

export function updateFile(text) {
  fs.writeFileSync('myfile.txt', text)
}

export function showFile() {
  try {
    const content = fs.readFileSync('myfile.txt', 'utf-8')
    console.log(content)
  } catch (error) {
    console.error('Error at read file: ', error.message)
  }
}

export function deleteFile() {
  try {
    fs.unlinkSync('myfile.txt')
    console.log('Deleted file with successful!')
  } catch (error) {
    console.error('Error at delete file: ', error.message)
  }
}