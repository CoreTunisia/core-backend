const mongoose = require('mongoose')

const WorkoutSession = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  assignedDay: {
    required: false,
    type: String,
  },
  goal: {
    required: false,
    type: String,
  },
})

module.exports = mongoose.model('WorkoutSession', WorkoutSession)
