const { createConnection} = require('mysql2')
require('dotenv').config()

const connection = createConnection({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    password: process.env.PGPASSWORD,
    database: process.env.PGDB
})

module.exports = connection