const express = require('express')
const router = express.Router()
const controller = require('../../../controllers/exercises.controller')

// get all exercises
router.get('/', controller.getExercises)
// get all exercises
router.post('/', controller.addExercise)
// get all exercise categories
router.get('/categories', controller.getAllExerciseCategories)

module.exports = router
