const express = require('express')
const router = express.Router()
const users = require('./users')
const exercises = require('./exercises')

router.use('/users', users)
router.use('/exercises', exercises)

module.exports = router
