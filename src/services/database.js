const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const lodashId = require('lodash-id')

const adapter = new FileSync('db.json')
const db = low(adapter)
db._.mixin(lodashId)

// Set some defaults (required if your JSON file is empty)
db.defaults({ widgets: [], settings: {} })
    .write()

export default db;