const { Pool } = require('pg')
require('dotenv').config()

const connection = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    password: process.env.PGPASSWORD,
    database: process.env.PGDB
})

module.exports = connection