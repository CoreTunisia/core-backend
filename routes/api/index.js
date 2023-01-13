const express = require('express')
const router = express.Router()

const users = require('./users')
const exercises = require('./exercises')
const exerciseDetails = require('./exerciseDetails')
const workoutSession = require('./workoutSession')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const muscle = require('../../models/Muscle')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

router.use('/users', users)
router.use('/exercises', exercises)
router.use('/exerciseDetails', exerciseDetails)
router.use('/workoutSession', workoutSession)
router.get('/muscles', (req, res) => {
  muscle
    .find()
    .then(muscle => res.json(muscle))
    .catch(err => res.status(400).json('Error: ' + err))
})
module.exports = router
