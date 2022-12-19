const express = require('express')
const router = express.Router()
const userModel = require('../../../models/user')

router.get('/', (req, res) => {
  res.send('Get All API')
})

router.post('/', async (req, res) => {
  const data = new userModel({
    name: req.body.name,
    age: req.body.age,
  })

  try {
    const dataToSave = await data.save()
    res.status(200).json(dataToSave)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

module.exports = router
