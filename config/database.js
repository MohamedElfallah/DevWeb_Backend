const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    password: process.env.PGPASSWORD,
    db: process.env.PGDB
})

module.exports = pool