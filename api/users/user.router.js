const express = require('express')
const { CreateUser } = require('./user.controller')

const router = express.Router()

router.post("/create", CreateUser)

module.exports = router