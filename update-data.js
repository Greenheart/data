const fs = require('fs')

const data = JSON.parse(fs.readFileSync('./data/version.json'))
const version = Number.isInteger(data.version) ? data.version : 0

const updated = {
    version: version + 1,
    timestamp: Date.now()
}

fs.writeFileSync('./data/version.json', JSON.stringify(updated))
