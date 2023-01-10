const express = require('express')
const router = express.Router()

const users = require('./users')
const exercises = require('./exercises')
const exerciseDetails = require('./exerciseDetails')

const muscle = require('../../models/Muscle')

router.use('/users', users)
router.use('/exercises', exercises)
router.use('/exerciseDetails', exerciseDetails)
router.get('/muscles', (req, res) => {
  muscle
    .find()
    .then(muscle => res.json(muscle))
    .catch(err => res.status(400).json('Error: ' + err))
})
module.exports = router
