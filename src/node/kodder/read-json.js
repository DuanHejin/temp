const fs = require('fs/promises');
const path = require('path');

const readAllJson = async () => {
    const dir = path.resolve(__dirname, './output')
    const fileNames = await fs.readdir(dir)
    const jsonNames = fileNames.filter(fileName => fileName.endsWith('.json'))
    jsonNames.forEach(async (jsonName) => {
        const jsonPath = path.resolve(dir, jsonName)
        const jsonStr = await fs.readFile(jsonPath, 'utf8')
        const jsonObj = JSON.parse(jsonStr)

        let tplStr = ''
        let line = ''
        Object.keys(jsonObj).forEach((key) => {
            const values = jsonObj[key]
            values.forEach((value) => {
                const { q, repoUrl, location, matchedList } = value
                matchedList.forEach((matched) => {
                    line += `${key}\t${q}\t${repoUrl}\t${location}\t${matched}\n`
                })
            })
        })
        tplStr += line



        // console.log(`|----    jsonObj`, Object.keys(jsonObj))
        const formatOutputDir = path.resolve(__dirname, './format-output', `${jsonName}.txt`)
        await fs.writeFile(formatOutputDir, tplStr)
    })

}

readAllJson()
