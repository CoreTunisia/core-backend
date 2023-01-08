const express = require('express')
const router = express.Router()
const controller = require('../../../controllers/exercises.controller')

// get all exercises
router.get('/', controller.getExercises)
// get all exercises
router.post('/', controller.addExercise)
// get all muscles
router.get('/muscle/:muscle', controller.getExercisesByMuscle)

module.exports = router
