const express = require('express')
const router = express.Router()
const controller = require('../../../controllers/exercises.controller')

// get all exercises
router.get('/', controller.getAll)
// get all exercises
router.post('/', controller.addNew)
// get all muscles
router.get('/muscle/:muscle', controller.getByMuscle)
// search by name
router.get('/name/:name', controller.searchByName)
// delete exercise by ID
router.delete('/:id', controller.deleteById)

module.exports = router
