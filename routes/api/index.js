const express = require('express')
const router = express.Router()
const muscle = require('../../models/Muscle')
const users = require('./users')
const exercises = require('./exercises')

router.use('/users', users)
router.use('/exercises', exercises)
router.get('/muscles', (req, res) => {
  muscle
    .find()
    .then(muscle => res.json(muscle))
    .catch(err => res.status(400).json('Error: ' + err))
})
module.exports = router
