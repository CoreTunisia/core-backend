const express = require('express')
const router = express.Router()
const controller = require('../../../controllers/workoutSession.controller')

// add new workout plan with exercise details
router.post('/', controller.addNew)

module.exports = router
