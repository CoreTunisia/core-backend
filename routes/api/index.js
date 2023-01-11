const express = require('express')
const router = express.Router()
const users = require('./users')
process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'

router.use('/users', users)

module.exports = router
