const mongoose = require('mongoose')

const ExerciseDetails = new mongoose.Schema({
  exercise: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exercise',
  },
  workoutPlan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'WorkoutPlan',
  },
  videoLink: {
    required: true,
    type: String,
  },
  reps: {
    required: true,
    type: Number,
  },
  sets: {
    required: true,
    type: Number,
  },
  rest: {
    required: true,
    type: Number, // in seconds
  },
  coachNotes: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('ExerciseDetails', ExerciseDetails)
