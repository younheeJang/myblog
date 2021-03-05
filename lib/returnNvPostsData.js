import fs from 'fs'
import path from 'path'

const nvPostsDirectory = path.join(process.cwd(), 'resources')

export function returnNvPostsData() {

    const fileName = fs.readdirSync(nvPostsDirectory)
    console.log(fileName)

    const fullPath = path.join(nvPostsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    console.log(fileContents)
    
}