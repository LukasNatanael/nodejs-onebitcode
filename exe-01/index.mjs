import { createFile, showFile, updateFile, deleteFile } from './functions.mjs'

console.clear()
createFile('Initial file content. \nCreated with fs module of Node JS\n')
showFile()
console.log("----------------------")
updateFile("Modified content...")
showFile()
console.log("----------------------\n")
deleteFile()