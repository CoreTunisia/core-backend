const Exercise = require('../models/Exercise') // Load the Exercise model
const muscle = require('../models/Muscle')
// GET 
exports.getAll = (req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err))
}
// GET by id
exports.getByMuscle = (req, res) => {
  Exercise.find({ muscles: req.params.muscle })
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err))
}

exports.searchByName = (req, res) => {
  const name = req.params.name
  Exercise.find({ name: { $regex: name, $options: 'i' } })
    .then(result => res.json(result))
    .catch(err => res.status(400).json('Error: ' + err))
}

// POST
exports.addNew = (req, res) => {
  const name = req.body.name
  const type = req.body.type
  const muscles = req.body.muscles
  const level = Number(req.body.level)
  const instructions = req.body.instructions
  const tips = req.body.tips

  const newExercise = new Exercise({
    name,
    type,
    muscles,
    level,
    instructions,
    tips,
  })

  newExercise
    .save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err))
}

// DELETE
exports.deleteById = (req, res) => {
  Exercise.deleteOne({ id: req.params.id })
    .then(() => res.json('Exercise deleted!'))
    .catch(err => res.status(400).json('Error: ' + err))
}