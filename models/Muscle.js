const mongoose = require('mongoose')

const Muscle = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  image: {
    required: true,
    type: String,
  },
})

module.exports = mongoose.model('ExerciseCategories', Muscle)
