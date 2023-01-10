const ExerciseDetails = require('../models/ExerciseDetails') // Load the ExerciseDetails model
const muscle = require('../models/Muscle')
// GET
exports.getAll = (req, res) => {
  ExerciseDetails.find()
    .then(ExerciseDetails => res.json(ExerciseDetails))
    .catch(err => res.status(400).json('Error: ' + err))
}
// GET by id
exports.getByWorkoutPlan = (req, res) => {
  ExerciseDetails.find({ workoutPlan: req.params.workoutPlan })
    .then(ExerciseDetails => res.json(ExerciseDetails))
    .catch(err => res.status(400).json('Error: ' + err))
}

// POST
exports.addNew = (req, res) => {
  const exercise = req.body.exercise
  const workoutPlan = req.body.workoutPlan
  const videoLink = req.body.videoLink
  const reps = Number(req.body.reps)
  const sets = Number(req.body.sets)
  const rest = Number(req.body.rest)
  const coachNotes = req.body.coachNotes

  const newExerciseDetails = new ExerciseDetails({
    exercise,
    workoutPlan,
    videoLink,
    reps,
    sets,
    rest,
    coachNotes,
  })

  newExerciseDetails
    .save()
    .then(() => res.json('ExerciseDetails added!'))
    .catch(err => res.status(400).json('Error: ' + err))
}

// DELETE
exports.deleteById = (req, res) => {
  ExerciseDetails.deleteOne({ id: req.params.id })
    .then(() => res.json('ExerciseDetails deleted!'))
    .catch(err => res.status(400).json('Error: ' + err))
}
