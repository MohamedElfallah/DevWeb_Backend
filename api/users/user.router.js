const express = require('express')
const { CreateUser,LoginUser } = require('./user.controller')

const router = express.Router()

router.post("/create", CreateUser)
router.post("/login", LoginUser)

module.exports = router