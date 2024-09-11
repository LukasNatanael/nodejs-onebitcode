import { createFile, showFile, updateFile, deleteFile } from './functions.mjs'

async function start() {
    
    console.clear()
    await createFile('Initial file content. \nCreated with fs module of Node JS\n')
    await showFile()
    console.log("----------------------")
    await updateFile("Modified content...")
    await showFile()
    console.log("----------------------\n")
    await deleteFile()
}

start()