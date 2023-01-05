const Exercise = require('../models/exercise') // Load the Exercise model
const exerciseCategory = require('../models/exerciseCategory')

exports.getExercises = (req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err))
}

exports.getAllExerciseCategories = (req, res) => {
  exerciseCategory
    .find()
    .then(exerciseCategories => res.json(exerciseCategories))
    .catch(err => res.status(400).json('Error: ' + err))
}

exports.addExercise = (req, res) => {
  const name = req.body.name
  const coach = req.body.coach
  const sets = Number(req.body.sets)
  const reps = Number(req.body.reps)
  const rest = Number(req.body.rest)
  const videoLink = req.body.videoLink
  const image = req.body.image
  const level = Number(req.body.level)
  const muscles = req.body.muscles
  const instructions = req.body.instructions
  const tips = req.body.tips

  const newExercise = new Exercise({
    name,
    coach,
    sets,
    reps,
    rest,
    videoLink,
    image,
    level,
    muscles,
    instructions,
    tips,
  })

  newExercise
    .save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err))
}