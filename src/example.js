const soften = require('./index')
const fs = require('fs')
const path = require('path')

soften({ filePath: path.join(__dirname, 'person.jpg') })
  .then(data => fs.writeFileSync(path.join(__dirname, 'out_person.json'), JSON.stringify(data, null, 2)))
  .catch(e => console.error(e))